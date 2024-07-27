import { Painter } from "./drawing.js";
import { PacManShapes } from "./pacman-shapes.js";
import { Shapes } from "./shapes.js";

const asteroidCanvas = getContextById("asteroids");
const pacManCanvas = getContextById("pac-man");

const asteroidPainter = new Painter(asteroidCanvas);
asteroidPainter.draw_grid(asteroidPainter.canvasContext);

const shapes = new Shapes(asteroidPainter.canvasContext);
shapes.firstShapes();

const pacManPainter = new Painter(pacManCanvas);
pacManPainter.draw_grid(pacManPainter.canvasContext);

const pacManShape = new PacManShapes(pacManPainter.canvasContext);

pacManShape.drawPacMan();

function getContextById(id: string): HTMLCanvasElement {
	return document.getElementById(id) as HTMLCanvasElement;
}
