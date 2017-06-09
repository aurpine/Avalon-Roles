'use strict';

const CHARACTER_MERLIN = 0;
const CHARACTER_PERCIVAL = 1;
const CHARACTER_LOYAL_SERVANT = 2;
const CHARACTER_MODRED = 3;
const CHARACTER_ASSASSIN = 4;
const CHARACTER_MORGANA = 5;
const CHARACTER_OBERON = 6;
const CHARACTER_EVIL_SERVANT = 7;

var players = [];

function isGood(character) {
	if(character < 3) return false;
	return true;
}

function RoleAssigner() {
	this.addPlayerButton = document.getElementById('add-player');
	this.addCharacterButton = document.getElementById('add-character');
	this.startGameButton = document.getElementById('start-game');
	this.endGameButton = document.getElementById('end-game');
	this.addPlayerDialog = document.getElementById('add-player-dialog');
	this.closeAddPlayerDialog = document.getElementById('cancel-add-player-dialog');
	this.confirmAddPlayerDialog = document.getElementById('confirm-add-player-dialog');
	this.playerName = document.getElementById('player-name');
	this.playersList = document.getElementById('players-list');



	if(!this.addPlayerDialog)
		dialogPolyfill.registerDialog(this.addPlayerDialog);

	this.addPlayerButton.addEventListener('click', function() {
		this.addPlayerDialog.showModal();
	}.bind(this));
	this.closeAddPlayerDialog.addEventListener('click', function() {
		this.addPlayerDialog.close();
	}.bind(this));
	this.confirmAddPlayerDialog.addEventListener('click', this.addPlayer.bind(this));



	this.addCharacterButton.addEventListener('click', this.addCharacter.bind(this));
	this.startGameButton.addEventListener('click', this.startGame.bind(this));
	this.endGameButton.addEventListener('click', this.endGame.bind(this));
}

RoleAssigner.prototype.addPlayer = function() {
	this.addPlayerDialog.close();
	players.push(this.playerName.value);
	$("#players-list").append("<li class=\"mdl-list__item-primary-content\"><i class=\"fa fa-user\"></i> " + this.playerName.value + "</li>");
	this.playerName.value = "";
};

RoleAssigner.prototype.addCharacter = function() {

};

RoleAssigner.prototype.startGame = function() {

};

RoleAssigner.prototype.endGame = function() {

};







window.onload = function() {
	window.roleAssigner = new RoleAssigner();
};