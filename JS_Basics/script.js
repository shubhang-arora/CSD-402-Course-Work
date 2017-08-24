
function displayCircle() {
    document.getElementById("demo").innerHTML = Date();
    var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");
	ctx.beginPath();
	ctx.arc(100, 75, 50, 0, 2 * Math.PI);
	ctx.stroke();


	var radius = prompt("Please radius", "2");
    if (radius != null) {
    	circum = 2*3.14*radius;
    	area = 3.14*radius*radius;
        document.getElementById("demo").innerHTML =
        "Area is " + area + "Perimeter is " + circum;
    }

}


function displayTriangle() {
	var c = document.getElementById("myCanvas");
	var context = c.getContext("2d");
	context.beginPath();
	context.moveTo(50, 50);
	context.lineTo(50, 150);
	context.lineTo(150, 150);
	context.closePath();
 
// the outline
	context.lineWidth = 3;
	context.strokeStyle = '#666666';
	context.stroke();
 
// the fill color
	context.fillStyle = "#FFCC00";
	context.fill();

	var base = prompt("Please enter base", "2");
	var height = prompt("Please enter height", "2");
	var side1 = prompt("Please enter side1", "2");
	var side2 = prompt("Please enter side2", "2");
    
    circum = side1+side2+base;
    area = 0.5* base* height;
    document.getElementById("demo").innerHTML =
    "Area is " + area + "Perimeter is " + circum;
    }

}

function displayRectangle() {

	var c=document.getElementById("myCanvas");
	var ctx=c.getContext("2d");
	ctx.rect(20,20,150,100);
	ctx.stroke();

	var length = prompt("Please enter length", "3");
	var height = prompt("Please enter height", "2");
	
    
    circum = (length+height)*2;
    area =  base* height;
    document.getElementById("demo").innerHTML =
    "Area is " + area + "Perimeter is " + circum;
	

}

function displaySquare() {

	var c=document.getElementById("myCanvas");
	var ctx=c.getContext("2d");
	ctx.rect(20,20,100,100);
	ctx.stroke();

	
	var height = prompt("Please enter height", "2");
	
    
    circum = (height)*4;
    area =  height* height;
    document.getElementById("demo").innerHTML =
    "Area is " + area + "Perimeter is " + circum;

}