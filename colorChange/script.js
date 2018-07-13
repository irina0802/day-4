document.querySelector(".colorChange").addEventListener('click', function (){
	var red = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);
	var color = "rgb("+red+","+green+ ","+blue+")";
	document.querySelector('body').style.background = color;
});

