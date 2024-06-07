import { Painter } from "./drawing";
import { firstShapes } from "./first-shapes";

const asteroidCanvas = document.getElementById(
	"asteroids"
) as HTMLCanvasElement;

const pacManCanvas = document.getElementById("pac-man") as HTMLCanvasElement;

const painter = new Painter(asteroidCanvas);
painter.draw_grid(painter.canvasContext);
firstShapes(painter.canvasContext);

const pacManPainter = new Painter(pacManCanvas);
pacManPainter.draw_grid(pacManPainter.canvasContext);
