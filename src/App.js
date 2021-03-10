import logo from './logo.svg';
import './App.css';
function App() {
	let nombre = "Emilio Barrera";
	let auth = true;
	let estaiones = ["Primavera"," Verano", "Otoño","Invierno"];
	return (
		<>
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<label htmlFor="nombre">Nombre</label>
					<input type="text" id="nombre" />
					<h1>{nombre}</h1>
					<p>{auth ? "El usuario esta logiado" : "El usuario No esta logeado."}</p>
							<p>{5 + 5 }</p>
							<h2>Estaciones</h2>
							<ul>
								{estaiones.map((e, index) => (<li key={index}>{e}</li>))}
							</ul>
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
			</div>
			<div></div>
		</>
	);
}

export default App;