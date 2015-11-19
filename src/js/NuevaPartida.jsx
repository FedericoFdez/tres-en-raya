let NuevaPartida = React.createClass({
	resetClick: function(){
		this.props.manejadorResetClick()
	},
	render: function(){
		return (<button  onClick={this.resetClick}>
				Nueva Partida
			</button>
		)
	}
})

module.exports = NuevaPartida;