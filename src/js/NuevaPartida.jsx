import { Button } from 'react-bootstrap';

var React = require('react');
var ReactDOM = require('react-dom');

let NuevaPartida = React.createClass({
	resetClick: function(){
		this.props.manejadorResetClick()
	},
	render: function(){
		return (<Button bsSize="large" onClick={this.resetClick}>
				Nueva Partida
			</Button>
		)
	}
})

module.exports = NuevaPartida;

