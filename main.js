/**
main.js

Eine externe und zentrale Javascriptdatei, wo alle anderen Seiten
drauf zugreifen können sobald
"<script src="main.js"></script>" 
im Head hinzugefügt wurde.

**/



function addHeadMenu() {
	
	//<div align="center" id="mitte"></div>
    var header = new Image();
	var container = document.createElement("div");
	//container.align = "center";
	
	
	header.src = "pics/header.png";
	
	container.appendChild(header);
	document.body.appendChild(container);
	
}