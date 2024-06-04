const COORDINATES = {
	x: "x",
	y: "y",
} as const;

class Painter {
	canvas: HTMLCanvasElement;

	constructor() {
		console.log("Painter class initialized 1111111");
		this.canvas = document.getElementById("asteroids") as HTMLCanvasElement;
	}

	getContext(): CanvasRenderingContext2D | undefined {
		if (!this.canvas) {
			return;
		}

		const context = this.canvas.getContext("2d");

		if (!context) {
			return;
		}

		return context;
	}

	draw_grid(
		minorStep: number = 10,
		majorStep: number = minorStep * 5,
		lineColor: string = "#00FF00",
		fillColor: string = "#009900"
	): void {
		const context = this.getContext();

		if (!context) {
			return;
		}

		context.save();
		context.strokeStyle = lineColor;
		context.fillStyle = fillColor;
		context.lineWidth = 0.25;

		this.drawLines(COORDINATES.x, context, minorStep, majorStep);
		this.drawLines(COORDINATES.y, context, minorStep, majorStep);

		context.stroke();
		context.restore();

		this.firstDraw(context);
		this.shapes(context);
	}

	firstDraw(context: CanvasRenderingContext2D) {
		context.beginPath();
		context.strokeStyle = "#FFF";
		context.fillStyle = "#00FF00";
		context.lineWidth = 2;
		context.moveTo(50, 50);
		context.lineTo(150, 250);
		context.lineTo(250, 170);
		context.lineTo(320, 280);

		context.fillText("(50,50)", 30, 45);
		context.fillText("(150,250)", 130, 260);
		context.fillText("(150,250)", 130, 260);
		context.fillText("(250,170)", 255, 175);
		context.fillText("(320,280)", 325, 280);

		context.closePath();
		context.stroke();
	}

	shapes(context: CanvasRenderingContext2D) {
		context.beginPath();
		context.strokeStyle = "#FFFF00";
		context.fillStyle = "#000000";

		context.moveTo(50, 250);
		context.lineTo(50, 350);
		context.lineTo(150, 350);
		context.closePath();

		context.moveTo(230, 360);
		context.lineTo(270, 360);
		context.lineTo(270, 310);
		context.closePath();

		context.moveTo(250, 50);
		context.lineTo(370, 50);
		context.lineTo(370, 100);
		context.closePath();

		context.fill();
		context.stroke();
	}

	lineAxisWidth(axis: number): number {
		return axis % 50 == 0 ? 0.5 : 0.25;
	}

	drawLines(
		coordinates: string,
		context: CanvasRenderingContext2D,
		minorStep: number,
		major: number
	): void {
		const width = context.canvas.width;
		const height = context.canvas.height;

		switch (coordinates) {
			case COORDINATES.x: {
				for (let x = 0; x < width; x += minorStep) {
					context.beginPath();
					context.moveTo(x, 0);
					context.lineTo(x, height);
					context.lineWidth = this.lineAxisWidth(x);
					context.fillStyle = "#009900";

					if (x % major == 0) {
						const text = x.toString();
						context.fillText(text, x, 10);
					}
					context.stroke();
				}
				break;
			}
			case COORDINATES.y: {
				for (let y = 0; y < height; y += minorStep) {
					context.beginPath();
					context.moveTo(0, y);
					context.lineTo(width, y);
					context.lineWidth = this.lineAxisWidth(y);
					context.fillStyle = "#009900";

					if (y % major == 0) {
						const text = y.toString();
						context.fillText(text, 0, y + 10);
					}
					context.stroke();
				}
				break;
			}
		}
	}
}

const painter = new Painter();
painter.draw_grid();
