import React from "react"

export default function Propiedades(props) {
	return(
		<div>
			<h2>{props.porDefecto}</h2>
			<ul>
				<li>{props.cadena}</li>
				<li>{props.numero}</li>
				<li>{props.boolenado ? "False" : "False"}</li>
			</ul>
		</div>
	)
}

Propiedades.defaultProps = {
	porDefecto: "Las Props",
};

