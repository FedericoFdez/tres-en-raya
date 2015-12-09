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
			<Button bsStyle="primary" style={casillaStyle} disabled={this.props.valor==="-" && this.props.partida===0 ?
			false:true} onClick={this.casillaClick}>
			<span className="btn-text">{this.props.valor}</span>
			</Button>
			)
	}
});

module.exports = Casilla;