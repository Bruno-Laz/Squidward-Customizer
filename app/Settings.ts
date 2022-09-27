
import {ctx} from './canvas'
import {controlBox, makeButton} from './controls'


import {makeLabeledInput,makeInput} from './controls';

let colorInput = makeInput('color');
colorInput.addEventListener(
  'change',
  function () { 
    ctx.strokeStyle = colorInput.value;
  } 

  
); 

let sizeInput = makeLabeledInput('Size:','range');
sizeInput.setAttribute('max','100');
sizeInput.setAttribute('min','1');
sizeInput.addEventListener(
  'change',
  function () {
    ctx.lineWidth = sizeInput.valueAsNumber;
  }
)