import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class Read extends Component {
  
  componentDidMount() {
    this.getUsers();
  }

  getUsers = () => {
    axios.get('http://localhost:3001/users').then(res => this.setState({users: res.data}));
  }

  handleChange = (name) => event => {
    this.setState({ [name]: event.target.value });
  }
  
  handleRemove = (id) => {
    axios.delete(`http://localhost:3001/users/${id}`).then(() => this.getUsers());
  }

  handleSubmit = () => {
    axios.post('http://localhost:3001/users', {name: this.state.name, age: this.state.age})
      .then(this.setState({name: '', age: ''}))
      .then(() => this.getUsers());
  }

  handleEdit = (value) => {
    axios.put(`http://localhost:3001/users/${value.id}`, {name: value.name, age: value.age})
      .then(() => this.getUsers())
  }

  render() {
    return (
      <div className="App">
        <div className="title">all users</div>
        <ul className="list">
          {this.state.users.length > 0 ? this.state.users.map((x, i) => 
            <User key={i} user={x} remove={() => this.handleRemove(x.id)} edit={this.handleEdit}/>
            // <li className="item" key={i}>
            //   <input value={x.name} disabled/>
            //   <input value={x.age} disabled/>
            //   <div className="btn-edit" onClick={this.handleEdit}>edit</div>
            //   <div className="btn-remove" onClick={() => this.handleRemove(x.id)}>remove</div>
            // </li>
          ) : <div>add some users</div>}          
        </ul>
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
export default Read;