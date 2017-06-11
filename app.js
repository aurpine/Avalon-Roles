'use strict';

const CHARACTER_MERLIN = 0;
const CHARACTER_PERCIVAL = 1;
const CHARACTER_LOYAL_SERVANT = 2;
const CHARACTER_MODRED = 3;
const CHARACTER_ASSASSIN = 4;
const CHARACTER_MORGANA = 5;
const CHARACTER_OBERON = 6;
const CHARACTER_EVIL_SERVANT = 7;

const NAMES = ["Merlin", "Percival", "Loyal Servant", "Modred", "Assassin", "Morgana", "Oberon", "Evil Servant"];

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

	this.addCharacterDialog = document.getElementById('add-character-dialog');
	this.closeAddCharacterDialog = document.getElementById('cancel-add-character-dialog');
	this.confirmAddCharacterDialog = document.getElementById('confirm-add-character-dialog');

	if(!this.addCharacterDialog)
		dialogPolyfill.registerDialog(this.addCharacterDialog);

	this.addCharacterButton.addEventListener('click', function() {
		this.addCharacterDialog.showModal();
	}.bind(this));

	this.closeAddCharacterDialog.addEventListener('click', function() {
		this.addCharacterDialog.close();
	}.bind(this));

	if(!this.addPlayerDialog)
		dialogPolyfill.registerDialog(this.addPlayerDialog);

	this.addPlayerButton.addEventListener('click', function() {
		this.addPlayerDialog.showModal();
	}.bind(this));
	this.closeAddPlayerDialog.addEventListener('click', function() {
		this.addPlayerDialog.close();
	}.bind(this));
	this.confirmAddPlayerDialog.addEventListener('click', this.addPlayer.bind(this));

	this.startGameButton.addEventListener('click', this.startGame.bind(this));
	this.endGameButton.addEventListener('click', this.endGame.bind(this));

	this.players = [];
}

RoleAssigner.prototype.addPlayer = function() {
	this.addPlayerDialog.close();
	if(this.playerName.value.length == 0) return;
	this.players.push(this.playerName.value);
	$(this.playersList).append("<li class=\"mdl-list__item-primary-content\"><i class=\"fa fa-user\"></i> " + this.playerName.value + "</li>");
	this.playerName.value = "";
	$("#num-players").text(this.players.length);
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