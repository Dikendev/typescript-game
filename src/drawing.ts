const COORDINATES = {
	x: "x",
	y: "y",
} as const;

export class Painter {
	canvasContext: CanvasRenderingContext2D;

	constructor(canvasElement: HTMLCanvasElement | null) {
		if (!canvasElement) throw new Error("Canvas not found");

		this.showName(canvasElement);

		const context = this.getCanvasContext(canvasElement);

		if (!context) throw new Error("Canvas not found");

		this.canvasContext = context;
	}

	showName(context: HTMLCanvasElement): void {
		console.log(`Painter context name: ${context.id}`);
	}

	getCanvasContext(
		canvasElement: HTMLCanvasElement
	): CanvasRenderingContext2D | undefined {
		const context = canvasElement.getContext("2d");
		if (!context) throw new Error("Canvas not found");
		return context;
	}

	draw_grid(
		canvasContext: CanvasRenderingContext2D,
		minorStep: number = 10,
		majorStep: number = minorStep * 5,
		lineColor: string = "#00FF00",
		fillColor: string = "#009900"
	): void {
		if (!canvasContext) {
			return;
		}

		canvasContext.save();
		canvasContext.strokeStyle = lineColor;
		canvasContext.fillStyle = fillColor;
		canvasContext.lineWidth = 0.25;

		this.drawLines(COORDINATES.x, canvasContext, minorStep, majorStep);
		this.drawLines(COORDINATES.y, canvasContext, minorStep, majorStep);

		canvasContext.stroke();
		canvasContext.restore();
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

	lineAxisWidth(axis: number): number {
		return axis % 50 == 0 ? 0.5 : 0.25;
	}
}
