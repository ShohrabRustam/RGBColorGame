//Size of the number of the square 
var NumSquare=6;
//For generating the different Color 
var color=generateRandomColor(NumSquare);
//Select the heading form the html page 
var h1=document.querySelector("h1");
//Select the all square 
var square=document.querySelectorAll(".Square");
//Picked a color from the random gererated color 
var pickedColor=picked_Color();
//To show the rcb color 
var colorDisplay=document.getElementById("colorDisplay");
//To show the the rgb color on the heading 
colorDisplay.textContent=pickedColor;
//To show massege correct or  incorrect 
var messageDisplay=document.getElementById("message");
//Play Again or New Generate color or reset 
var resetButton=document.getElementById("reset");
//select for Easy Mode Button 
var easybtn=document.querySelector(".mode");
//Select for Hard Mode Button 
var hardbtn=document.querySelector(".mode");
//for selecting the class by mode 
var modeButton =document.querySelector(".mode");


function init()
{

}





hardbtn.addEventListener("click",function()
{
	HardButton();
});


easybtn.addEventListener("click",function()
{
	EasyButton();
});



resetButton.addEventListener("click",function()
{
ResetButton();	

});

//Creating Logic for Hard Mode
function HardButton()
{
//size of the color 
	NumSquare=6;
	//remove the class from easy button 
	easybtn.classList.remove("selected");
	//add new class for the hard button 
	hardbtn.classList.add("selected");
	//color for hard 
	color=generateRandomColor(NumSquare);
	//pick any random color from the color 
	pickedColor=picked_Color();
	//To Show the color content  on the heading 
	colorDisplay.textContent=pickedColor; 
	//for the hard mode creating the logic 
	messageDisplay.textContent="";
	for (var i=0;i<square.length;i++)
	{
	
		square[i].style.background=color[i];
	
		square[i].style.display= "block";

	}
}

//Creating Logic for the Easy Mode
function EasyButton()
{

	NumSquare=3;
	//remove class for hard button
	hardbtn.classList.remove("selected");
	//add class for easy button
	easybtn.classList.add("selected");
	//Generate the color for easy mode
	color=generateRandomColor(NumSquare);
	//picked color 
	pickedColor=picked_Color();
	//To Show the color code on heading 
	colorDisplay.textContent=pickedColor; 

	messageDisplay.textContent="";
// Logic for the Easy Mode 

	for (var i=0;i<square.length;i++)

	{

		if (color[i]) 

	{

		square[i].style.background=color[i];

	}

	else

	{

		square[i].style.display= "none";

	}

	}

}



//Logic for the Reset Button 
function ResetButton()
{
	//for generating the new color on click 
	color = generateRandomColor(NumSquare);
	//pick any color random color from the color 
	pickedColor = picked_Color();
	//To show the code of the color on the Heading 
	colorDisplay.textContent=pickedColor;
	//heading background color 
	h1.style.background="steelblue";
	//Update the New color Button 
	this.textContent="New Color";

	messageDisplay.textContent = " ";

	for (var i=0;i<square.length;i++)
	{

		square[i].style.background=color[i];

	}
	//remove the color class 

	hardbtn.classList.remove("selected");
	//remove the button color class 
	easybtn.classList.remove("selected");
	//add color class on reset button 
	resetButton.classList.add("selected");
}
 
//logic for color the square 
for (var i=0;i<square.length;i++)
{
	//color the square 
	square[i].style.background=color[i];

	//on click Effect on color 
	square[i].addEventListener('click',function(){
		//for same color 
		var clickedColor=this.style.background;

		console.log(clickedColor,pickedColor);

		if(clickedColor===pickedColor)
		{

			messageDisplay.textContent="Correct";

			changeColor(clickedColor);

			h1.style.background=clickedColor;
			resetButton.textContent="Play Again ?"
		}
		else{

		this.style.background="Grey";

		messageDisplay.textContent="Try Again"
	} 

	});
}
 
//For Changing the color if matches on click 
function changeColor(color)
{
for (var i=0;i<square.length;i++)
{
	square[i].style.background=color; 
}
}


function picked_Color()
{
	var random = Math.floor(Math.random()*NumSquare);
	return color[random];
}

function generateRandomColor(num)
{
	var array=[];

	for (var i=0;i<num;i++)
	{
		array.push(RandomColor());

	}
	return array;
}

//for generating the Random color 
function RandomColor()
{
	var r=Math.floor(Math.random()*256);

	var g=Math.floor(Math.random()*256);

	var b=Math.floor(Math.random()*256);

	return "rgb(" + r + ", " + g +", " + b +")"
}