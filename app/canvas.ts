let app : HTMLDivElement = document.querySelector('#app');
export let canvas = document.createElement('canvas');
export let ctx = canvas.getContext('2d');
export let width = 1000;
export let height = 1000;
canvas.width = width;
canvas.height = height;
app.style.width = `${width}px`;
app.style.height = `${height}px`;
canvas.style.width = `${width}px`;
canvas.style.height = `${height}px`;



canvas.style.backgroundImage = "url('https://m.media-amazon.com/images/I/51fyG9o+1lL._AC_SL1000_.jpg')"


app.appendChild(canvas);
