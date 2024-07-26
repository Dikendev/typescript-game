import { Painter } from "./drawing.js";
import { Shapes } from "./shapes.js";

const asteroidCanvas = getContextById("asteroids");
const pacManCanvas = getContextById("pac-man");

const asteroidPainter = new Painter(asteroidCanvas);
asteroidPainter.draw_grid(asteroidPainter.canvasContext);

const shapes = new Shapes(asteroidPainter.canvasContext);
shapes.firstShapes();

const pacManPainter = new Painter(pacManCanvas);
pacManPainter.draw_grid(pacManPainter.canvasContext);

function getContextById(id: string): HTMLCanvasElement {
	return document.getElementById(id) as HTMLCanvasElement;
}
