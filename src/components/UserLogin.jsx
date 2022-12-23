import React, { Component } from "react";

class UserLogin extends Component {
  errorPass = (e) => {
    console.log("Ən azı 8 simvol");
  };
  errorEmail = (e) => {
    console.log("Yalnız .ru domenlərinə icazə verilir.");
  };
  btnClick = (e) => {
    if (document.querySelector(".pass").value.length < 8) {
      console.log("Ən azı 8 simvol");
    }
    let strArr = document.querySelector(".email").value.split(".");
    if (strArr[0].includes("@") && !strArr[1].includes("ru")) {
      console.log("Yalnız .ru domenlərinə icazə verilir.");
    }
  };
  render() {
    return (
      <div className="container">
        <form className="login">
          <label>
            Email:
            <input className="email" type="email" onFocus={this.errorEmail} />
          </label>
          <label>
            Password:
            <input className="pass" type="password" onFocus={this.errorPass} />
          </label>
          <button className="btn" type="button" onClick={this.btnClick}>
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default UserLogin;
