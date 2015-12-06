import { Button } from 'react-bootstrap';

var React = require('react');
var ReactDOM = require('react-dom');

const casillaStyle = {
	height: '100px',
	width: '100px'
};

let Casilla = React.createClass({
	casillaClick: function(){
		if(this.props.partida===0 && this.props.valor==="-"){
			this.props.manejadorCasillaClick(this.props.indiceFila, this.props.indiceColumna);
		}
	},
	esClickable: function(){
		if (this.props.partida!==0 || this.props.valor!=="-"){
			return "no_clickable"
		}
		return "clickable"
	},
	render: function(){
		return (
			<Button bsStyle="primary" style={casillaStyle} className={this.esClickable()} onClick={this.casillaClick}>
				{this.props.valor}
			</Button>
			)
	}
});

module.exports = Casilla;