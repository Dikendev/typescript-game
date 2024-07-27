import { _COLORS } from "./constants/colors.js";
const _MIN_RADIUS = 5;
const _MAX_RADIUS = 50;

export class PacManShapes {
	canvasContext: CanvasRenderingContext2D;

	constructor(canvasContext: CanvasRenderingContext2D) {
		this.canvasContext = canvasContext;
	}

	drawPacMan() {
		const canvasContext = this.canvasContext;
		const minRadius = _MIN_RADIUS;
		const maxRadius = _MAX_RADIUS;
		const colors = _COLORS;

		while (Math.random() < 0.9) {
			const x = canvasContext.canvas.width * Math.random();

			const y = canvasContext.canvas.height * Math.random();

			const radius = minRadius + (maxRadius - minRadius) * Math.random();

			const color = colors[Math.floor(Math.random() * colors.length)];

			this.drawShape(canvasContext, x, y, radius, color);
		}
	}

	private drawShape(
		context: CanvasRenderingContext2D,
		x: number,
		y: number,
		radius: number,
		color: string
	) {
		const randomAMouth = Math.random() * 1;

		const topMouth = randomAMouth < 0.2 ? 0.2 : randomAMouth;

		const randomBMouth = Math.random() * 1 + 1;
		const bottomMouth = randomBMouth < 1.8 ? 1.8 : randomBMouth;

		const startAngle = topMouth * Math.PI;
		const endAngle = bottomMouth * Math.PI;

		context.beginPath();
		context.arc(x, y, radius, startAngle, endAngle);
		context.lineTo(x, y);
		context.fillStyle = color;
		context.fill();
	}
}
