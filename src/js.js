const canvas = document.getElementById("asteroids");
const context = canvas.getContext("2d")
const x = 'x'
const y = 'y'
context.strokeStyle = '#00FF00';
context.lineWidth = 0.25

const coordinates = {
  x: 'x',
  y: 'y'
}

drawLines(coordinates.x)
drawLines(coordinates.y)

context.stroke()


function drawLines(param) {
  switch (param) {
    case 'x': {
      for (let x = 0; x < canvas.width; x += 10) {
        context.moveTo(x, 0);
        context.lineTo(x, canvas.height);
      }
      break
    }
    case 'y': {
      for (let y = 0; y < canvas.height; y += 10) {
        context.moveTo(0, y);
        context.lineTo(canvas.width, y);
      }
      break
    }
  }
}