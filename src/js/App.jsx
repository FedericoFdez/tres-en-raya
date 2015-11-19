const Tablero = require('./Tablero.jsx');
const Cabecera = require('./Cabecera.jsx');
const NuevaPartida = require('./NuevaPartida.jsx')

const JUGADORX = "jugador 1 - las X";
const JUGADOR0 = "jugador 2 - los O";

const JUGANDO  = 0;
const GANANX   = 1;
const GANAN0   = 2;
const EMPATE   = 3;

var App = React.createClass({
	getInitialState: function(){
		return {
			turno: JUGADORX,
			valores: [
				['-', '-', '-'],
				['-', '-', '-'],
				['-', '-', '-']
			],
			partida: JUGANDO
		};
	},
	appClick: function(numeroFila, numeroColumna){
		let valores = this.state.valores;
		let nuevoValor = this.state.turno === JUGADORX ? 'X':'O';
		valores[numeroFila][numeroColumna] = nuevoValor;
		this.setState({
			valores: this.state.valores,
			partida: this.comprobarVictoria(this.state.valores, this.state.turno),
			turno: this.state.turno === JUGADORX ? JUGADOR0:JUGADORX,
		});
	},
	resetClick: function(){
		this.setState({
			turno: JUGADORX,
			valores: [
				['-', '-', '-'],
				['-', '-', '-'],
				['-', '-', '-']
			],
			partida: JUGANDO
		})
	},
	comprobarVictoria: function(valores, turno){
		for (var i=0; i<valores.length; i++){	
			if ((valores[i][0]!=='-' && valores[i][0]===valores[i][1] && valores[i][1]===valores[i][2]) || //Horizontales
			    (valores[0][i]!=='-' && valores[0][i]===valores[1][i] && valores[1][i]===valores[2][i])) { //Verticales
				setTimeout(function(){alert("GANA el "+turno)},100)
				return valores[i][0]==='0' ? GANAN0 : GANANX;
			}
		}
		if ((valores[0][0]!=='-' && valores[0][0]===valores[1][1] && valores[1][1]===valores[2][2]) || //Diagonal 1
			(valores[0][2]!=='-' && valores[0][2]===valores[1][1] && valores[1][1]===valores[2][0])) { //Diagonal 2
			setTimeout(function(){alert("GANA el "+turno)},100)
			return valores[1][1]==='0' ? GANAN0 : GANANX;
		}
		for (var i=0; i<valores.length; i++){
			for (var j=0; j<valores.length; j++){
				if (valores[i][j]==='-'){
					return JUGANDO;
				}
			}
		}
		setTimeout(function(){alert("EMPATE")},100)
		return EMPATE;
	},
	render: function(){
		var texto;
		texto = "Turno del " + this.state.turno;
		return (
			<div>
				<Cabecera texto={texto}/>
				<NuevaPartida manejadorResetClick={this.resetClick}/>
				<Tablero valores={this.state.valores} manejadorTableroClick={this.appClick} partida={this.state.partida}/>
			</div>
		)
	}
});

module.exports = App;