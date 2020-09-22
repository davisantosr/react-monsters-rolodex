import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

/* 1 */
class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };  
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters: users}))
  }

  handleChange = e => {
    this.setState({searchField: e.target.value})
  }

  


  render(){

    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
      return (
/* 2 */
        <div className="App">
          <h1> Monster Roledex </h1>
          <SearchBox
            placeholder='search monsters'
            handleChange={this.handleChange}
          />
          <CardList monsters={filteredMonsters}/>
           
        </div>
      );
  }
}

export default App;



/* 
NUMBER 1 -- The App was setted to a class for uses the methods inheritance from Component as the 
lifecycle methods componentDidMount() and state

NUMBER 2 -- The component CardList get the 'this.state.monster' as props to send to the component
to use map to iterate and set the element <h1> as an appropriate name for each element from the state's
array of objects camed from API 
  
*/
