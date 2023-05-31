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
      <form className="emailform">
        <div className="logi">
        <img src={ex} alt="hello" onClick={close}/>
        <h2>Log In</h2>
        <input
          type="email"
          className="form-control"
          name="email"
          id="email"
          placeholder="  Your Email"
          required
        />
        <br/>
        <input
          type="password"
          className="form-control"
          name="password"
          id="password"
          placeholder="  Password"
          required
        />
        
        <div className="text-center">
          <button onClick={submit} >Log In</button>
        </div>
        <div className="signUp">
        <p>Dont have an acount? <span>Sign up</span></p>
        </div>
        </div>


      <div className="sn">
      <h2>Sign Up</h2>

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
        <br/>
        <input
          type="password"
          className="form-control"
          name="password"
          id="password"
          placeholder="  Password"
          required
        />
        <br/>
        <input
          type="phonenumber"
          className="form-control"
          name="phonenumber"
          id="phonenumber"
          placeholder="  Your Phone Number"
          required
        />
        <br/>
        <input
          type="address"
          className="form-control"
          name="address"
          id="address"
          placeholder="  Your Address"
          required
        />

          <div className="text-center">
            <button onClick={submit} >Sign Up</button>
          </div>

      </div>
      </form>
      
    </div>
  )
}

export default Login;
