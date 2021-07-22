import axios from "axios";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import './register.css'

export default class Register extends Component {
    state = {
        user:"",
        email:"",
        pwd:""
    }

    handleChange =(event)=>{
        this.setState({
            [event.target.name ]: event.target.value
        })
    }

    handleSubmit =(event)=>{
        event.preventDefault();
        console.log(this.state);

        const url = ""
        const data = {...this.state}
      
        axios.post(url , data ).then((resp)=>{
            console.log(resp);
            if (resp.status === 200) {
                alert("Data Stored Successfully")
                this.setState({
                    user:"",
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
        <form className="container card-body" onSubmit={this.handleSubmit}>
        <div className="form-group ">
            <label htmlFor="user">FullName</label>
            <input
              type="text"
              className="form-control"
              id="user"
              aria-describedby="emailHelp"
              name="user"
              value={this.state.user}
              onChange={this.handleChange}
            />
          </div>

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
            <label htmlFor="exampleInputPassword1">New Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              name="pwd"
              value={this.state.pwd}
              onChange={this.handleChange}
            />
          </div>

          <button type="submit" className="btn btn-primary" id="p"
        //   onClick={()=>{
        //       history.push("/accounts") 
        //   }}
        >  Submit
          </button>
        </form>
        <p className="ml-5" id="p">Already a User ?<NavLink  to="/login" >
              Login
            </NavLink> </p>
      </div>
    )
  }
}