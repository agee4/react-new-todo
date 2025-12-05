import React from 'react';
import axios from 'axios';
import './PersonList.css';
 
export default class PersonList extends React.Component {
  state = {
    persons: []
  }
 
  componentDidMount() {
    axios.get(`https://a240oa1749.execute-api.us-west-2.amazonaws.com/prod/get-todo`)
      .then(res => {
        const persons = res.data.body;
        this.setState({ persons });
      })
  }
 
  render() {
    return (
      <div className="person-list-container">
        <h1 className="title">Person List</h1>
        <ul className="person-list">
          {
            this.state.persons.map(person => (
              <li key={person.id} className="person-item">
                {person.id} - {person.name}
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}
