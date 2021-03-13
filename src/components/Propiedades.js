import React from "react"
import PropTypes from "prop-types"
export default function Propiedades(props) {
	return(
		<div>
			<h2>{props.porDefecto}</h2>
			<ul>
				<li>{props.cadena}</li>
				<li>{props.numero}</li>
				<li>{props.boolenado ? "False" : "False"}</li>
				<li>{props.arreglo.join(', ')}</li>
				<li>{"Nombre: " + props.objeto.nombre + " -  Correo: " + props.objeto.correo}</li>
				<li>{props.arreglo.map(props.funcion).join(", ")}</li>
				<li>{props.elementoReact}</li>
				<li>{props.componenteReact}</li>
			</ul>
		</div>
	);
}

Propiedades.defaultProps = {
	porDefecto: "Las Props",
};

Propiedades.protoTypes = {
	numero: PropTypes.number.isRequired
};



