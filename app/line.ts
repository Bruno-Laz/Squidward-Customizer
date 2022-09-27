//draw lines
function drawOnDrag(event: MouseEvent) {
  //draw lines on mouse click
  if (event.buttons) {
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
  } else {
    //stops drawing connect lines on each click
    ctx.beginPath()
  }
}

let drawingLines = false;
let drawLineButton = makeButton('Draw Lines');
drawLineButton.addEventListener(
  "click",
  function() {
    if (!drawingLines) {
      ctx.beginPath();
      canvas.addEventListener('mousemove', drawOnDrag);
      drawingLines = true;
      drawLineButton.textContent = 'Stop drawing';
    } else {
      drawingLines = false;
      canvas.removeEventListener('mousemove', drawOnDrag);
      drawLineButton.textContent = 'Draw Lines';

    }
  }
)

import { ctx, canvas } from './canvas';
import { makeButton } from './controls';