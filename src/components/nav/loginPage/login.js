import React from "react";
import "./login.css";
import ex from "../../../images/icons8-close-50.png"

const Login = ({submits, name, surname, setA, setB, setbutton}) => {
    const submit = ()=>{
        submits("none")
        name("Luanda")
        surname("Nuredini")
    }
    const close =()=>{
        submits("none")
        setA("block")
        setB("none")
        setbutton("Log In")
    }
  return (
    <div className="formDiv">
      <form
        className="emailform"
      >
        <img src={ex} alt="hello" onClick={close}/>
        <h2>Log In</h2>
        <input
          type="text"
          name="name"
          className="form-control"
          id="name"
          placeholder="  Your Name"
          required
          onInput={event=>{name(event.target.value)}}
        />
        <br />
        <input
          type="text"
          name="name"
          className="form-control"
          id="surname"
          placeholder="  Your Surname"
          required
          onInput={event=>{surname(event.target.value)}}
        />
        <br />
        <input
          type="email"
          className="form-control"
          name="email"
          id="email"
          placeholder="  Your Email"
          required
        />
        
        <div className="text-center">
          <button onClick={submit} >Submit</button>
        </div>
        <div className="signUp">
        <p>Dont have an acount? <span>Sign up</span></p>
      </div>
      </form>
      
    </div>
  )
}

export default Login;
