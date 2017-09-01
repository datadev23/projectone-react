import React, { Component } from 'react';
import './Hello.css'


class Hello extends Component {


	render() {

		var targetOfGreeting = "world";


		return(<div>Hello,{targetOfGreeting}!</div>);
	}
}


export default Hello

