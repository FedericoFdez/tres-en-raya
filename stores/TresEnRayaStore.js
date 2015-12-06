const EventEmitter = require('events').EventEmitter;

var TresEnRayaDispatcher = require('../dispatchers/TresEnRayaDispatcher.js');
var Constants = require('../constants/TresEnRayaConstants.js');
var turno = Constants.JUGADORX;
var valoresTablero = [['-', '-', '-'], ['-', '-', '-'], ['-', '-', '-']];
var partida = Constants.JUGANDO;

var TresEnRayaStore = Object.assign({}, EventEmitter.prototype, {
	getTurno: function () {
		return turno;
	},
	getValores: function () {
		return valoresTablero;
	},
	getPartida: function() {
		return partida;
	},
	comprobarVictoria: function(valores, turno){
		for (var i=0; i<valores.length; i++){	
			if ((valores[i][0]!=='-' && valores[i][0]===valores[i][1] && valores[i][1]===valores[i][2]) || //Horizontales
			    (valores[0][i]!=='-' && valores[0][i]===valores[1][i] && valores[1][i]===valores[2][i])) { //Verticales
				setTimeout(function(){alert("GANA el "+turno)},100)
				return valores[i][0]==='0' ? Constants.GANAN0 : Constants.GANANX;
			}
		}
		if ((valores[0][0]!=='-' && valores[0][0]===valores[1][1] && valores[1][1]===valores[2][2]) || //Diagonal 1
			(valores[0][2]!=='-' && valores[0][2]===valores[1][1] && valores[1][1]===valores[2][0])) { //Diagonal 2
			setTimeout(function(){alert("GANA el "+turno)},100)
			return valores[1][1]==='0' ? Constants.GANAN0 : Constants.GANANX;
		}
		for (var i=0; i<valores.length; i++){
			for (var j=0; j<valores.length; j++){
				if (valores[i][j]==='-'){
					return Constants.JUGANDO;
				}
			}
		}
		setTimeout(function(){alert("EMPATE")},100)
		return Constants.EMPATE;
	},
	addChangeListener(callback) {
		this.on(Constants.CHANGE_EVENT, callback);
	},
	removeChangeListener(callback) {
		this.removeListener(Constants.CHANGE_EVENT, callback);
	},
	emitChange() {
		this.emit(Constants.CHANGE_EVENT);
	}
});

TresEnRayaDispatcher.register(function (payload) {
	switch (payload.type) {
		case Constants.ActionTypes.JUGAR_POSICION:
		let nuevoValor = turno === Constants.JUGADORX ? 'X' : '0';
		valoresTablero[payload.x][payload.y] = nuevoValor;
		partida = TresEnRayaStore.comprobarVictoria(valoresTablero, turno);
		turno = turno === Constants.JUGADORX ? Constants.JUGADOR0 : Constants.JUGADORX;
		TresEnRayaStore.emitChange();
		break;

		case Constants.ActionTypes.REINICIAR_PARTIDA:
		partida = Constants.JUGANDO
		valoresTablero = [['-', '-', '-'], ['-', '-', '-'], ['-', '-', '-']];
		turno = Constants.JUGADORX
		TresEnRayaStore.emitChange();
	}
});

module.exports = TresEnRayaStore;