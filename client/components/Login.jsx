import React from "react";

class Login extends React.Component {
  constructor(props) {
    super(props);
      console.log("Constructor Props ", props);
    this.state = {
      name: "",
      password: "",
      changeName: props.changeName
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    var name = "Janice";
    this.state.changeName(name);
    this.setState({name:name});
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>press</button>
        <p>{this.state.name}</p>
      </div>
    );
  }
}

export default Login;
