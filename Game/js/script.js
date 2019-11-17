'use strict'

const gameSize = {
	w: 800,
	h: 600
};

canv.width = gameSize.w;
canv.height = gameSize.h;

const ctx = canv.getContext('2d');

const score = {
	firstPlayer: 0,
	secondPlayer: 0,
};

const ball = new Ball(gameSize.w /2, gameSize.h / 2, 10);
const plat = new Platform(gameSize.w / 2 - 50, gameSize.h - 10, 100, 10, 0);
const plat2 = new Platform(gameSize.w / 2 - 50, 0, 100, 10, 1);

const draw = () => {
	ctx.clearRect(0, 0, gameSize.w, gameSize.h);
	ctx.beginPath();
	ctx.moveTo(0, gameSize.h / 2);
	ctx.lineTo(gameSize.w, gameSize.h / 2);
	ctx.closePath();
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(gameSize.w / 2, gameSize.h / gameSize.w);
	ctx.lineTo(gameSize.w / 2, gameSize.h);
	ctx.closePath();
	ctx.stroke();

	ctx.font = '30px Arial';
	ctx.strokeText(`${ score.firstPlayer } : ${ score.secondPlayer }`, 15, 60);

	ball.draw(gameSize);
	plat.draw(gameSize);
	plat2.draw(gameSize);

};

const update = () => {
	ball.update(gameSize);
	plat.update(gameSize);
	plat2.update(gameSize);
};

const keyDownHandler = (e) => {
	console.log(e.keyCode)
	KEYS[e.keyCode] = true;
};

const keyUpHandler = (e) => {
	KEYS[e.keyCode] = false;
};

const loop = () => {
	draw();
	update();

	requestAnimationFrame(loop);
};

loop();

window.addEventListener('keydown', keyDownHandler);
window.addEventListener('keyup', keyUpHandler);