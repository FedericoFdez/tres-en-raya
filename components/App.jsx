var React = require('react');

const Tablero = require('./Tablero.jsx');
const Cabecera = require('./Cabecera.jsx');
const NuevaPartida = require('./NuevaPartida.jsx')
var TresEnRayaStore = require('../stores/TresEnRayaStore.js');

function getAppStateFromStore() {
	return {
		turno: TresEnRayaStore.getTurno(),
		valores: TresEnRayaStore.getValores(),
		partida: TresEnRayaStore.getPartida()
	};
}

var App = React.createClass({
	getInitialState: function(){
		return getAppStateFromStore();
	},
	componentDidMount() {
		TresEnRayaStore.addChangeListener(this._onChange);
	},
	componentWillUnmount() {
		TresEnRayaStore.removeChangeListener(this._onChange);
	},
	_onChange: function() {
		this.setState(getAppStateFromStore());
	},
	render: function(){
		var texto = "Turno del " + this.state.turno;
		return (
			<div>
			<Cabecera texto={texto} />
			<Tablero valores={this.state.valores} partida={this.state.partida} />
			<NuevaPartida />
			</div>
			)
	}
});

module.exports = App;