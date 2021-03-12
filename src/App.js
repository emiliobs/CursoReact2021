import React from 'react'
import Componente from './components/Componente'
import logo from './logo.svg';
import './App.css';


function App() {
	return (
		<div className="App">
			<header className="App-header">			
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
			</header>
			<section>
			{/* <Componente msg="Hola, Soy un Componenete de Clase desde una props!"></Componente> */}
			{/* <Componente msg="Hola, Soy un Componenete Funcional desde una props!"></Componente> */}
					<Componente msg="Hola, Soy un Componenete Funcional Expresada desde una props!"></Componente>
				<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
				</section>
		</div>
	);
}

export default App;
