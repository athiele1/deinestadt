/**
main.js

Eine externe und zentrale Javascriptdatei, wo alle anderen Seiten
drauf zugreifen können sobald
"<script src="main.js"></script>" 
im Head hinzugefügt wurde.

**/



function addHeadMenu(container) {
	
	//<div align="center" id="mitte"></div>
    var header = new Image();
	header.src = "pics/header.png";
	
	//var container = document.createElement("div");
	//container.align = "center";
	
	
	var b1 = new Image();
	var b2 = new Image();
	var b3 = new Image();
	var spacer = new Image();
	
	b1.src = "pics/b_initiative.jpg";
	b2.src = "pics/b_finder.jpg";
	b3.src = "pics/b_partner.jpg";
	spacer.src = "pics/b_spacer.jpg";
	
	
	
	container.appendChild(header);
	
	container.appendChild(spacer);
	container.appendChild(b1);
	container.appendChild(spacer.cloneNode(true));
	container.appendChild(spacer.cloneNode(true));
	container.appendChild(b2);
	container.appendChild(spacer.cloneNode(true));
	container.appendChild(spacer.cloneNode(true));
	container.appendChild(b3);
	container.appendChild(spacer.cloneNode(true));
	
	//document.body.appendChild(container);	
}