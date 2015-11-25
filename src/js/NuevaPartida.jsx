var React = require('react');
var ReactDOM = require('react-dom');

let NuevaPartida = React.createClass({
	resetClick: function(){
		this.props.manejadorResetClick()
	},
	render: function(){
		return (<button bsSize="large" onClick={this.resetClick}>
				Nueva Partida
			</button>
		)
	}
})

module.exports = NuevaPartida;

