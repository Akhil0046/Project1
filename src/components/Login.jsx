import axios from "axios";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";


export default class Login extends Component {
    state = {
        email:"",
        pwd:""
    }

    handleChange =(event)=>{
        this.setState({
            [event.target.name ]: event.target.value
        })
    }

    handleSubmit1 =(event)=>{
        event.preventDefault();
        console.log(this.state);

        const url = ""
        const data = {...this.state}
      
        axios.post(url , data ).then((resp)=>{
            console.log(resp);
            if (resp.status === 200) {
                alert("Data Stored Successfully")
                this.setState({
                    email:"",
                    pwd:""
                })

                this.props.history.push("")
            }
        }).catch((err)=>{
            console.log(err);
        })
    }

  render() {
    console.log(this.props);
    return (
      <div className="container  col-md-10" id="maindiv">
        <form className="container card-body" onSubmit={this.handleSubmit1}>

          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              name="pwd"
              value={this.state.pwd}
              onChange={this.handleChange}
            />
          </div>

          <button type="submit" className="btn btn-primary" id="p" >  Submit </button>
        </form>
        <p className="ml-5" id="p">New Here ?<NavLink  to="/register" >
              Signup
            </NavLink> </p>
        
      </div>
    )
  }
}