import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Read from './Read';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      age: '',
      users: []
    }
  }

  componentDidMount() {
    this.getUsers();
  }

  getUsers = () => {
    axios.get('http://localhost:3000/users').then(res => this.setState({users: res.data}));
  }

  handleChange = (name) => event => {
    this.setState({ [name]: event.target.value });
  }
  
  handleRemove = (id) => {
    axios.delete(`http://localhost:3000/users/${id}`).then(() => this.getUsers());
  }

  handleSubmit = () => {
    axios.post('http://localhost:3000/users', {name: this.state.name, age: this.state.age})
      .then(this.setState({name: '', age: ''}))
      .then(() => this.getUsers());
  }

  handleEdit = (value) => {
    axios.put(`http://localhost:3000/users/${value.id}`, {name: value.name, age: value.age})
      .then(() => this.getUsers())
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <div className="title">add user</div>
          <input placeholder="name" type="text" value={this.state.name} onChange={this.handleChange('name')}/>
          <input placeholder="age" type="text" value={this.state.age} onChange={this.handleChange('age')}/>
          <div className="btn"  onClick={this.handleSubmit}>send</div>
          <div className="btn" onClick={Read.getUsers}>read</div>
          <div className="btn" onClick={Read}>update</div>
        </form>
      </div>
    );
  }
}


class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: true,
      name: this.props.user.name,
      age: this.props.user.age,
      id: this.props.user.id
    }
  }

  handleEdit = () => {
    this.setState({
      disabled: false
    }) 
  }

  handleChange = (name) => event => {
    this.setState({ [name]: event.target.value });
  }

  handleSubmit = () => {
    this.setState({
      disabled: true
    }) 
    return {id: this.props.user.id, name: this.state.name, age: this.state.age};
  }

  render(){
    const {disabled, name, age} = this.state;
    return (
      <li className="item">
        <input value={name} disabled={disabled}  onChange={this.handleChange('name')}/>
        <input value={age} disabled={disabled}  onChange={this.handleChange('age')}/>
        {disabled ? 
          <div className="btn-edit" onClick={this.handleEdit}>edit</div> 
          : <div className="btn-save" onClick={() => this.props.edit(this.handleSubmit())}>save</div>}
        <div className="btn-remove" onClick={this.props.remove}>remove</div>
      </li>
    )
  }
}


export default App;
