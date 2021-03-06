import React from 'react'
import Componente from './components/Componente'
import Propiedades from './components/Propiedades';
import Estado from './components/Estado';
import RenderizadoCondicional from "./components/RenderizadoCondicional"
import RenderizadoElementos from './components/RenderizadoElementos';
import logo from './logo.svg';
import './App.css';


function App() {
	return (
		<div className="App">
			<header className="App-header">
				<section>
					<img src={logo} className="App-logo" alt="logo" />
					<p>
						Editar <code>src/App.js</code> and save to reload.
        </p>
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						Learn React
        </a>
				</section>
				<section>
					{/* <Componente msg="Hola, Soy un Componenete de Clase desde una props!"></Componente> */}
					{/* <Componente msg="Hola, Soy un Componenete Funcional desde una props!"></Componente> */}
					<Componente
						msg="Hola, Soy un Componenete Funcional Expresada desde una props!"></Componente>				
				<hr/>
				<Propiedades 
				cadena="Esto es una cadena de texto"
				 numero = "55" 
				boolenado={true}
				arreglo={[1,2,3,4,5]}
				objeto={{nombre:'Emilio', correo:'emilio@yahoo.es'}}
				funcion={num => num * num}
				elementoReact={<i>Esto es un elmento Reac</i>}
				componenteReact={<Componente msg="Soy un componenet pasado como un Props."></Componente>}
				/>
				<hr/>
				<Estado></Estado>			
				<hr/>
				<RenderizadoCondicional></RenderizadoCondicional>
				<hr/>
				<RenderizadoElementos></RenderizadoElementos>
				<br/><br/><br/><br/><br/>
				</section>
			</header>
		</div>
	);
}

export default App;
