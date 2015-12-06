import { Button } from 'react-bootstrap';

var TresEnRayaActions = require('../actions/TresEnRayaActions.js');
var React = require('react');

const casillaStyle = {
	height: '100px',
	width: '100px'
};

let Casilla = React.createClass({
	casillaClick: function(){
		if(this.props.valor==="-" && this.props.partida===0){
			TresEnRayaActions.jugarPosicion(this.props.indiceFila, this.props.indiceColumna);
		}
	},
	render: function(){
		return (
			<Button bsStyle="primary" style={casillaStyle} className={this.props.valor==="-" ?
			"clickable":"no_clickable"} onClick={this.casillaClick}>
			<span className="btn-text">{this.props.valor}</span>
			</Button>
			)
	}
});

module.exports = Casilla;