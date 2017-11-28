/**
main.js

Eine externe und zentrale Javascriptdatei, wo alle anderen Seiten
drauf zugreifen können sobald
"<script src="main.js"></script>" 
im Head hinzugefügt wurde.

**/



function addHeadMenu(container) {
	
	
    var header = new Image();
	header.src = "pics/header.png";
	
	//var container = document.createElement("div");
	//container.align = "center";
	
	
	var b1 = document.createElement("input");
	var b2 = document.createElement("input");
	var b3 = document.createElement("input");
	var spacer = new Image();
	
	b1.type = "image";
	b2.type = "image";
	b3.type = "image";
	
	b1.src = "pics/b_initiative.jpg"
	b2.src = "pics/b_finder.jpg"
	b3.src = "pics/b_partner.jpg"
	
	spacer.src = "pics/b_spacer.jpg";
	
	
	//Macht die "Buttons" anklickbar
	
	b1.addEventListener("click", function(){
		window.location="index.html";
		
	});
	
	b2.addEventListener("click", function(){
		window.location="finder.html";
		
	});
	
	b3.addEventListener("click", function(){
		window.location="partner.html";
		
	});
	
	
	
	
	//Fügt die Elemente in der richtigen Reihenfolge mit "Spacern" dazwischen ein.
	
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


function addButtomMenu(container2) {
	
	var horizontalLine = document.createElement("hr");

	container2.appendChild(horizontalLine);
	
	
	var divMenu = document.createElement("div") ;
	divMenu.id = "divBottomMenu";
	
	 
	var h4 = document.createElement("h4")   
	var textMenu = document.createTextNode("Impressum \xa0\xa0\xa0\xa0 Kontakt \xa0\xa0\xa0\xa0 Weiteres");
	
	divMenu.appendChild(h4);
	h4.appendChild(textMenu);
	container2.appendChild(divMenu);
	
	
	
}