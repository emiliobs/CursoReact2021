import React, { Component } from "react";

function EstadoAHIjo(props) {
	return (
		<div>
			<h5>Del Componente Padre "Estado" a el Componente "Hijo" EstadoAHijo</h5>
			<h3>{props.contadorHijo}</h3>
		</div>
	);
}

export default class Estado extends Component {
	constructor(props) {
		super(props);
		this.state = {
			contador: 0,
		};

		setInterval(() => {
			this.setState({
				contador: this.state.contador + 1,
			});
		}, 1000);

	 }

	render() {
		return (
			<div>
				<h2>The State</h2>
				<p>{this.state.contador}</p>
				<hr />
				<EstadoAHIjo contadorHijo={this.state.contador}></EstadoAHIjo>
			</div>
		);
	}
}