

	

function myTriangle(){
	var base = prompt("Enter Base of triangle", "2");
	var height = prompt("Enter Height of triangle", "3");
	var side = prompt("Enter  side1 of triangle", "5");
	var side = prompt("Enter  side2 of triangle", "2");
	document.getElementById("area").innerHTML = "Area : "+  0.5*base*height;
	document.getElementById("per").innerHTML = "permimeter : "+  height+base+side;

	var c = document.getElementById('myCanvas');

	if (c.getContext) {
	    var ctx= c.getContext('2d');
	    ctx.clearRect(0, 0, c.width, c.height);
	    ctx.beginPath();
	    ctx.moveTo(135, 100);
	    ctx.lineTo(200, 135);
	    ctx.lineTo(200, 55);
	    ctx.fillStyle = "white";
	    ctx.fill();
  }          

}

function myCircle(){


	var radius = prompt("Enter radius of circle", "3");
	document.getElementById("area").innerHTML = "Area : "+ 3.14*radius*radius;
	document.getElementById("per").innerHTML = "permimeter : "+  (3.14*2*radius);

	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");
	ctx.clearRect(0, 0, c.width, c.height);
	ctx.beginPath();
	ctx.arc(100, 75, 50, 0, 2 * Math.PI);
	ctx.stroke();
	ctx.fillStyle = "white";
	ctx.fill();




}

function myRectangle(){
	var height = prompt("Enter Height of reactangle", "3");
	var width = prompt("Enter Breath of reactangle", "5");

	document.getElementById("area").innerHTML = "Area is: "+  height*width;
	document.getElementById("per").innerHTML = "permimeter is: "+ (2*height+2*width);
	
	var c=document.getElementById("myCanvas");
	var ctx=c.getContext("2d");
	ctx.clearRect(0, 0, 300, 150);
	ctx.rect(20,20,150,100);
	ctx.stroke();
	ctx.fillStyle = "white";
	ctx.fill();
	
}
function mySquare(){
	var side = prompt("Enter Side of Square", "3");
	document.getElementById("area").innerHTML = "Area is  "+side*side;
	document.getElementById("per").innerHTML = "Permimeter is  "+ 4*side;


	var c=document.getElementById("myCanvas");
	var ctx=c.getContext("2d");

	ctx.clearRect(0, 0, c.width, c.height);
	ctx.rect(20,20,100,100);
	ctx.stroke();
	ctx.fillStyle = "white";
	ctx.fill();
	
}

function myHex(){
	var canvas = document.getElementById('hexagon');
	var ctx = canvas.getContext('2d');
	ctx.clearRect(0, 0, c.width, c.height);
	    // Create a shape, of some sort
	    ctx.beginPath();
	    ctx.moveTo(99, 0);
	    ctx.lineTo(99, 0);
	    ctx.lineTo(198, 50);
	    ctx.lineTo(198, 148);
	    ctx.lineTo(99, 198);
	    ctx.lineTo(99, 198);
	    ctx.lineTo(1, 148);
	    ctx.lineTo(1,50);
	    ctx.closePath();
	   
	    ctx.fillStyle = "white";
		ctx.fill();
	    	    
		
}