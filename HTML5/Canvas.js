
/*
// create simple canvas

var myCanvas = document.getElementById("canvas"),
    
    myContext = myCanvas.getContext("2d");
    
myContext.fillStyle = "#080";

myContext.fillRect(10, 10, 100, 50);


myContext.fillStyle = "#F00";

myContext.fillRect(20, 20, 100, 50);


myContext.strokeStyle = "#FF0";

myContext.lineWidth = 5;

myContext.strokeRect(100, 100, 100, 50);

*/

/*
var myCanvas = document.getElementById("canvas"),
    
    myContext = myCanvas.getContext("2d");

myContext.fillStyle = "#080";

myContext.fillRect(0, 0, 800, 400);

myContext.clearRect(100, 100, 100, 100);   // امسح جزء من الكانفز

*/


///////////////////////////////////////////////////////
// create simple line


var myCanvas = document.getElementById("canvas"),
    
    myContext = myCanvas.getContext("2d"),
    
    myWidth = myCanvas.width,
    
    myHeigth = myCanvas.height;
    
    
myContext.fillStyle = "#00F"; // لون الكانفز


myContext.fillRect(0, 0, myWidth, myHeigth); // لرسم مستطيل يملا المساحه كلها

myContext.strokeStyle = "#080";

myContext.lineWidth = 6;

// top left line
myContext.moveTo(10, 10);

myContext.lineTo(130, 130);

// top rigth line

myContext.moveTo(290, 10);

myContext.lineTo(170, 130);

// bottom left line

myContext.moveTo(10, 290);

myContext.lineTo(130, 170);


// bottom rigth line

myContext.moveTo(290, 290);

myContext.lineTo(170, 170);

myContext.stroke();














