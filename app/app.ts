import { ctx, canvas } from './canvas';
import { makeButton } from './controls';




let clearScreenButton = makeButton('Clear Screen');
clearScreenButton.addEventListener(
  'click',
  function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
)

import './Settings';
import './line'


