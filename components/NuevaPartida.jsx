import { Button } from 'react-bootstrap';

var React = require('react');
var ReactDOM = require('react-dom');

var TresEnRayaActions = require('../actions/TresEnRayaActions.js');

let NuevaPartida = React.createClass({
	resetClick: function(){
		TresEnRayaActions.reiniciarPartida()
	},
	render: function(){
		return (<Button bsSize="large" onClick={this.resetClick}>
				Nueva Partida
			</Button>
		)
	}
})

module.exports = NuevaPartida;

