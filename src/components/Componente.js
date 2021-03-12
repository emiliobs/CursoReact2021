import React, { Component } from 'react'
  import "./Componente.css"

const Componente = props => <h2 className="comColor">{ props.msg }</h2>;

// function Componente(props) {
// 	return <h2 className="comColor">{ props.msg }</h2>
// }

// 	class  Componente extends Component{
// 	render(){
// 		return <h2 className="comColor">{ this.props.msg }</h2>
// 	}
// }

export default Componente;