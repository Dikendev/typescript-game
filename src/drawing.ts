const COORDINATES = {
	x: "x",
	y: "y",
} as const;

class Painter {
	canvas: HTMLCanvasElement;

	constructor() {
		console.log("Painter class initialized");
		this.canvas = document.getElementById("asteroids") as HTMLCanvasElement;
	}

	getContext() {
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
		context: any,
		minorStep: number = 10,
		majorStep: number = minorStep * 5,
		lineColor: string = "#00FF00",
		fillColor: string = "#009900"
	) {
		context.save();
		context.strokeStyle = lineColor;
		context.fillStyle = fillColor;
		context.lineWidth = 0.25;

		this.drawLines(COORDINATES.x, context, minorStep, majorStep);
		this.drawLines(COORDINATES.y, context, minorStep, majorStep);

		context.stroke();
	}

	lineAxisWidth(axis: number) {
		return axis % 50 == 0 ? 0.5 : 0.25;
	}

	drawLines(
		coordinates: string,
		context: CanvasRenderingContext2D,
		minorStep: number,
		major: number
	) {
		console.log("Drawing lines");
		console.log("context", typeof context);
		console.log("context", context);

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
						context.fillText(x, x, 10);
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
						context.fillText(y, 0, y + 10);
					}

					context.stroke();
				}
				break;
			}
		}
	}
}

const painter = new Painter();
painter.draw_grid(painter.getContext());
