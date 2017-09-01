import React, { Component } from 'react';

class Name extends Component {


	render() {
        
        var names = ["Jake","Jon", "Thruster"];

       return (
       	   
           <ul>
           
           {names.map(function(name, index){
                    return <li key={ index }>{name}</li>;
                  })}

           </ul>


			);
	}
}


export default Name