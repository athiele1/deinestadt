/**
main.js

Eine externe und zentrale Javascriptdatei, wo alle anderen Seiten
drauf zugreifen können sobald
"<script src="main.js"></script>" 
im Head hinzugefügt wurde.

**/

var b1S = ["pics/b_initiative.png","pics/b_initiative2.png"];
var b2S = ["pics/b_finder.png","pics/b_finder2.png"];
var b3S = ["pics/b_partner.png","pics/b_partner2.png"];
var b1 = document.createElement("input");
var b2 = document.createElement("input");
var b3 = document.createElement("input");

var buttonText = ["INITIATIVE","SPENDEN-FINDER","PARTNER"];
var buttonLink = ["index.html","finder.html","partner.html"];

//var buttons2 = [];

function addHeadMenu(container) {
	
	
    var header = new Image();
	header.src = "pics/logo_200.png";
	var headerDiv = document.createElement("div");
	headerDiv.id = "div200";
	headerDiv.appendChild(header);
	
	container.appendChild(headerDiv);
	
	
	//var container = document.createElement("div");
	//container.align = "center";
	
	
	var divUpMenu = document.createElement("div");
	//divUpMenu.style.width = "1242px";
	divUpMenu.style.height = "50px";
	divUpMenu.style.borderTop = "1px solid grey";
	divUpMenu.style.borderBottom = "1px solid grey";
	divUpMenu.style.backgroundColor = "white";
	//divUpMenu.style.boxShadow =  "0px 10px 10px grey";
	
	var divHolder = document.createElement("div");
	//divHolder.style.border = "1px solid red";
	
	divHolder.style.width = "500px";
	divHolder.style.margin = "0 auto";
	divHolder.style.marginTop = "4px";
	divHolder.style.display = "block";
	
	for(var i = 0; i < 3; i++){
		
		var btni = document.createElement("input");
		btni.type = "button";
		btni.value = buttonText[i];
		btni.classList.add("topButton");
		btni.id = "" + i;
		
		btni.addEventListener("click", function(){
			window.location = buttonLink[this.id];
		
		});
		
		
		
		
		/*
		var span1 = document.createElement("span");
		span1.style.width = "200px";
		span1.style.height = "20px";
		span1.style.display = "inline-block";
		span1.style.position = "relative";
		span1.style.marginTop = "10px"
		
		var span2 = document.createElement("span");
		span2.style.height = "30px";
		span2.style.display = "table";
		span2.style.margin = "0 auto";
		
		
		span2.innerHTML = buttonText[i];
		
		span2.classList.add("noselect");
		
		
		span2.style.border = "5px solid white";
		//span2.style.background = "white";
		//span2.style.userSelect = "none";
		
		//span2.style.position = "relative";
		
		//var bi = document.createTextNode(buttonText[i]);
		//bi.textAlign = "center";
		
		//span1.style.border = "thick solid #0000FF";
		
		
		
		
		if(i != 2){
			span1.style.borderRight = "1px solid grey";
			
		}		
		
		span2.id = "" + i;
		span2.addEventListener("mouseover", function(){
			alert("§l")
			//this.style.borderBottom = "5px solid red";
			selectButton(this);
		})
		
		span2.addEventListener("mouseleave", function(){
			
			deselectButton(this);
			
		})
		
		
		
		//span2.style.border = "thick solid #FF0000";
		//divi2.style.border = "thick solid #000000";
		
		
		//bi.childNodes[0].style.color = "red";
		//alert(bi.data);
		
		//buttons2.push(bi);
		//span2.appendChild(bi);
		span1.appendChild(span2);
		//divi2.appendChild(bi);
		
		divUpMenu.appendChild(span1);
		*/
		
		divHolder.appendChild(btni);
		
		if(i < 2){
		 var lineI = document.createElement("span");
		 lineI.style.width = "2px";
		 lineI.innerHTML = "&nbsp";
		 lineI.style.background = "grey";
		  divHolder.appendChild(lineI);
		}
		
		
	}
	
	divUpMenu.appendChild(divHolder);
	
	container.append(divUpMenu);
	
	/*container.append(document.createElement("br"));
	
	
	
	var spacer = new Image();
	
	b1.type = "image";
	b2.type = "image";
	b3.type = "image";
	
	resetButtons(); //Setzt das default image

	
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
	
	
	
	container.appendChild(spacer);
	container.appendChild(spacer.cloneNode(true));
	container.appendChild(spacer.cloneNode(true));
	container.appendChild(spacer.cloneNode(true));
	container.appendChild(b1);
	container.appendChild(spacer.cloneNode(true));
	container.appendChild(spacer.cloneNode(true));
	container.appendChild(b2);
	container.appendChild(spacer.cloneNode(true));
	container.appendChild(spacer.cloneNode(true));
	container.appendChild(b3);
	container.appendChild(spacer.cloneNode(true));
	container.appendChild(spacer.cloneNode(true));
	container.appendChild(spacer.cloneNode(true));
	container.appendChild(spacer.cloneNode(true));
	*/
	//document.body.appendChild(container);	
}


function addButtomMenu(container2) {
	
	var horizontalLine = document.createElement("hr");

	container2.appendChild(horizontalLine);
	
	
	var divMenu = document.createElement("div") ;
	divMenu.id = "divBottomMenu";
	
	 
	var h4 = document.createElement("h4");
	
	//var textMenu = document.createTextNode("Impressum");	

	var impressum = document.createElement("p");
	impressum.innerHTML = '<a href="impressum.html" title="Impressum">Impressum</a>';


	divMenu.appendChild(h4);
	h4.appendChild(impressum);
	container2.appendChild(divMenu);
	
	
	
}

function resetButtons(){
	b1.src = b1S[0];
	b2.src = b2S[0];
	b3.src = b3S[0];	
}

function markButton(i){
	resetButtons();
	switch(i){
		case 0: 
			b1.src = b1S[1];
			break;
		case 1: 
			b2.src = b2S[1];
			break;
		case 2:	
			b3.src = b3S[1];
			break;
		default: break;
	}
}

function selectButton(spani){
	spani.style.borderBottom = "5px solid red";
	//alert(buttons2[i].data);
	spani.innerHTML = buttonText[spani.id].fontcolor("red");
	//alert(spani.innerHTML);
	//buttons2[i].innerHTML.style.color = "red";
}

function deselectButton(spani){
	if(spani.id == "none"){
		spani = spani.parentNode;	
	}
	
	spani.style.borderBottom = "0px";
	//alert(buttons2[i].data);
	spani.innerHTML = buttonText[spani.id].fontcolor("black");
	//alert(spani.innerHTML);
	//buttons2[i].innerHTML.style.color = "red";
}



