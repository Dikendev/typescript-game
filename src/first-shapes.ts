export function firstShapes(canvasContext: CanvasRenderingContext2D) {
	firstDraw(canvasContext);
	shapes(canvasContext);
}

export function firstDraw(context: CanvasRenderingContext2D) {
	context.beginPath();
	setLineStyles(context, "#FFF", "#00FF00", 2);

	context.moveTo(50, 50);
	context.bezierCurveTo(0, 0, 80, 250, 150, 250);
	context.bezierCurveTo(250, 250, 250, 250, 250, 170);
	context.bezierCurveTo(250, 50, 400, 350, 320, 280);
	context.fillText("(50,50)", 30, 45);
	context.fillText("(150,250)", 130, 260);
	context.fillText("(150,250)", 130, 260);
	context.fillText("(250,170)", 255, 175);
	context.fillText("(320,280)", 325, 280);

	context.closePath();
	context.stroke();
}

export function shapes(context: CanvasRenderingContext2D) {
	context.beginPath();
	setLineStyles(context, "#FFFF00", "#000000", 0);

	context.moveTo(50, 250);
	context.quadraticCurveTo(25, 300, 50, 350);
	context.quadraticCurveTo(100, 375, 150, 350);
	context.closePath();

	context.moveTo(230, 360);
	context.quadraticCurveTo(255, 340, 270, 360);
	context.quadraticCurveTo(255, 340, 270, 310);
	context.closePath();

	context.moveTo(250, 50);
	context.quadraticCurveTo(310, 60, 370, 50);
	context.quadraticCurveTo(400, 75, 370, 100);
	context.closePath();

	context.fill();
	context.stroke();
}

export function setLineStyles(
	context: CanvasRenderingContext2D,
	strokeColor: string,
	fillColor: string,
	lineWidth: number
) {
	context.strokeStyle = strokeColor;
	context.fillStyle = fillColor;
	context.lineWidth = lineWidth;
}
