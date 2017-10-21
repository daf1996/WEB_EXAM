import React from 'react';
import {  NavLink } from 'react-router-dom';
class Input extends React.Component {
	  constructor() {
    super();
    this.state = { b: "" };

  }

    setvalue(e){
    var a = e.target.value;
    this.setState({b:a});
    }
  
    render(){
        return (
            <div>
        <h1>57022084 นายสิทธิพร  คำพึ่ง</h1>
      
            </div>
        );
    }
}

export default Input;