var Klasse = ["-", "Barbar", "Barde", "Druide", "Hexenmeister", "Kleriker", "Kämpfer", "Magier", "Mönch", "Paladin", "Schurke", "Waldläufer", "Zauberer"];
var Volk = ["-", "Drachenblütiger", "Elf", "Gnom", "Halb-Elf", "Halb-Ork", "Halbling", "Mensch", "Tiefling", "Zwerg"];
var Unterart = ["-", "Drow", "Grün", "Hochelf", "Hügelzwerg", "Stämmiger", "Variante", "Waldelf", "Waldgnom"];
var Hintergrund = ["-", "Adliger", "Einsiedler", "Gildenhandwerker", "Krimineller", "Scharlatan", "Soldat", "Sonderling", "Straßenkind", "Tempeldiener", "Unterhaltungskünstler", "Volksheld", "Weiser"];

//Klassen List
//Barbar
var Barbar_Volk = ["-",  "Halb-Ork"];
var Barbar_Unterart = ["-"];
var Barbar_Hintergrund = ["-", "Sonderling"];
//Barde
var Barde_Volk = ["-", "Elf"];
var Barde_Unterart = ["-", "Drow"];
var Barde_Hintergrund = ["-", "Unterhaltungskünstler"];
//Druide
var Druide_Volk = ["-", "Elf"];
var Druide_Unterart = ["-", "Waldelf"];
var Druide_Hintergrund = ["-", "Gildenhandwerker"];
//Hexenmeister
var Hexenmeister_Volk = ["-", "Tiefling"];
var Hexenmeister_Unterart = ["-"];
var Hexenmeister_Hintergrund = ["-", "Scharlatan"];
//Kleriker
var Kleriker_Volk = ["-", "Zwerg"];
var Kleriker_Unterart = ["-", "Hügelzwerg"];
var Kleriker_Hintergrund = ["-", "Templeldiener"];
//Kämpfer
var Kämpfer_Volk = ["-", "Drachenblütiger"];
var Kämpfer_Unterart = ["-", "Grün"];
var Kämpfer_Hintergrund = ["-", "Soldat"];
//Magier
var Magier_Volk = ["-", "Elf"];
var Magier_Unterart = ["-", "Hochelf"];
var Magier_Hintergrund = ["-", "Weiser"];
//Mönch
var Mönch_Volk = ["-", "Halbling"];
var Mönch_Unterart = ["-", "Stämmiger"];
var Mönch_Hintergrund = ["-", "Straßenkind"];
//Paladin
var Paladin_Volk = ["-", "Mensch"];
var Paladin_Unterart = ["-", "Variante"];
var Paladin_Hintergrund = ["-", "Adeliger"];
//Schurke
var Schurke_Volk = ["-", "Gnom"];
var Schurke_Unterart = ["-", "Waldgnom"];
var Schurke_Hintergrund = ["-", "Krimineller"];
//Waldläufer
var Waldläufer_Volk = ["-", "Elf"];
var Waldläufer_Unterart = ["-" ,"Waldelf"];
var Waldläufer_Hintergrund = ["-", "Volksheld"];
//Zauberer
var Zauberer_Volk = ["-", "Halb-Elf"];
var Zauberer_Unterart = ["-"];
var Zauberer_Hintergrund = ["-", "Einsiedler"];

//Volk List
//Drachenblütiger
var Drachenblütiger_Klasse = ["-", "Kämpfer"];
var Drachenblütiger_Unterart = ["-", "Grün"];
var Drachenblütiger_Hintergrund = ["-", "Soldat"];
//Elf
var Elf_Klasse = ["-", "Barde", "Druide", "Magier", "Waldläufer"];
var Elf_Unterart = ["-", "Drow", "Waldelf", "Hochelf"];
var Elf_Hintergrund = ["-", "Unterhaltungskünstler", "Gildenhandwerker", "Weiser", "Volksheld"];
//Gnom
var Gnom_Klasse = ["-", "Schurke"];
var Gnom_Unterart = ["-", "Waldgnom"];
var Gnom_Hintergrund = ["-", "Krimineller"];

// Nothing Selected          

 //Klasse in Html einfügen beim Öffnen der Seite
 var string="";      
	for(i=0;i<Klasse.length;i++)
	{
	string=string+"<option value="+Klasse[i]+">"+Klasse[i]+"</option>";
	}
	document.getElementById("Klasse").innerHTML=string;

 //Volk in Html einfügen beim Öffnen der Seite   
 var string="";        
 	for(i=0;i<Volk.length;i++)
 	{
 	string=string+"<option value="+Volk[i]+">"+Volk[i]+"</option>";
 	}
 	document.getElementById("Volk").innerHTML=string;

 //Unterart in Html einfügen beim Öffnen der Seite   
 var string="";        
 	for(i=0;i<Unterart.length;i++)
 	{
 	string=string+"<option value="+Unterart[i]+">"+Unterart[i]+"</option>";
 	}
 	document.getElementById("Unterart").innerHTML=string;

  //Hintergrund in Html einfügen beim Öffnen der Seite   
  var string="";        
  	for(i=0;i<Hintergrund.length;i++)
  	{
  	string=string+"<option value="+Hintergrund[i]+">"+Hintergrund[i]+"</option>";
  	}
	document.getElementById("Hintergrund").innerHTML=string;
	
//Select Klasse
function Selected(a){
	if (a == "Klasse"){
		var SelectedObject=document.getElementById("Klasse").value;
		ActiveKlasse = SelectedObject;
		//Nichts
		if (SelectedObject === "-"){
			//Bearbeitet Volk nach Auswahl
			var string="";
			for(i=0;i<Volk.length;i++){
				string=string+"<option value="+Volk[i]+">"+Volk[i]+"</option>";
				document.getElementById("Volk").innerHTML=string;
				
			}
			//Bearbeitet Unterart nach Auswahl
			var string="";
			for(i=0;i<Unterart.length;i++){
				string=string+"<option value="+Unterart[i]+">"+Unterart[i]+"</option>";
				document.getElementById("Unterart").innerHTML=string;
			}
			//Bearbeitet Hintergrund nach Auswahl
			var string="";
			for(i=0;i<Hintergrund.length;i++){
				string=string+"<option value="+Hintergrund[i]+">"+Hintergrund[i]+"</option>";
				document.getElementById("Hintergrund").innerHTML=string;
				
			}
		}
		else{
			SelectedObject = document.getElementById(a).value;
			//Barbar
			if (SelectedObject == "Barbar"){
				ObjectVar_Klasse_Volk = Barbar_Volk;
				ObjectVar_Klasse_Unterart = Barbar_Unterart;
				ObjectVar_Klasse_Hintergrund = Barbar_Hintergrund;
			}
			//Barde
			else if (SelectedObject == "Barde"){
				ObjectVar_Klasse_Volk = Barde_Volk;
				ObjectVar_Klasse_Unterart = Barde_Unterart;
				ObjectVar_Klasse_Hintergrund = Barde_Hintergrund;
			}
			//Druide
			else if (SelectedObject == "Druide"){
				ObjectVar_Klasse_Volk = Druide_Volk;
				ObjectVar_Klasse_Unterart = Druide_Unterart;
				ObjectVar_Klasse_Hintergrund = Druide_Hintergrund;
			}
			//Hexenmeister
			else if (SelectedObject == "Hexenmeister"){
				ObjectVar_Klasse_Volk = Hexenmeister_Volk;
				ObjectVar_Klasse_Unterart = Hexenmeister_Unterart;
				ObjectVar_Klasse_Hintergrund = Hexenmeister_Hintergrund;
			}
			//Kleriker
			else if (SelectedObject == "Kleriker"){
				ObjectVar_Klasse_Volk = Kleriker_Volk;
				ObjectVar_Klasse_Unterart = Kleriker_Unterart;
				ObjectVar_Klasse_Hintergrund = Kleriker_Hintergrund;
			}
			//Magier
			else if (SelectedObject == "Magier"){
				ObjectVar_Klasse_Volk = Magier_Volk;
				ObjectVar_Klasse_Unterart = Magier_Unterart;
				ObjectVar_Klasse_Hintergrund = Magier_Hintergrund;
			}
			//Kämpfer
			else if (SelectedObject == "Kämpfer"){
				ObjectVar_Klasse_Volk = Kämpfer_Volk;
				ObjectVar_Klasse_Unterart = Kämpfer_Unterart;
				ObjectVar_Klasse_Hintergrund = Kämpfer_Hintergrund;
			}
			//Mönch
			else if (SelectedObject == "Mönch"){
				ObjectVar_Klasse_Volk = Mönch_Volk;
				ObjectVar_Klasse_Unterart = Mönch_Unterart;
				ObjectVar_Klasse_Hintergrund = Mönch_Hintergrund;
			}
			//Paladin
			else if (SelectedObject == "Paladin"){
				ObjectVar_Klasse_Volk = Paladin_Volk;
				ObjectVar_Klasse_Unterart = Paladin_Unterart;
				ObjectVar_Klasse_Hintergrund = Paladin_Hintergrund;
			}
			//Schurke
			else if (SelectedObject == "Schurke"){
				ObjectVar_Klasse_Volk = Schurke_Volk;
				ObjectVar_Klasse_Unterart = Schurke_Unterart;
				ObjectVar_Klasse_Hintergrund = Schurke_Hintergrund;
			}
			//Waldläufer
			else if (SelectedObject == "Waldläufer"){
				ObjectVar_Klasse_Volk = Waldläufer_Volk;
				ObjectVar_Klasse_Unterart = Waldläufer_Unterart;
				ObjectVar_Klasse_Hintergrund = Waldläufer_Hintergrund;
			}
			//Zauberer
			else if (SelectedObject == "Zauberer"){
				ObjectVar_Klasse_Volk = Zauberer_Volk;
				ObjectVar_Klasse_Unterart = Zauberer_Unterart;
				ObjectVar_Klasse_Hintergrund = Zauberer_Hintergrund;
			}

			//Bearbeitet Volk nach Auswahl
			var string="";
			for(i=0;i<ObjectVar_Klasse_Volk.length;i++){
					string=string+"<option value="+ObjectVar_Klasse_Volk[i]+">"+ObjectVar_Klasse_Volk[i]+"</option>";
					document.getElementById("Volk").innerHTML=string;
			}
			//Bearbeitet Unterart nach Auswahl
			var string="";
			for(i=0;i<ObjectVar_Klasse_Unterart.length;i++){
					string=string+"<option value="+ObjectVar_Klasse_Unterart[i]+">"+ObjectVar_Klasse_Unterart[i]+"</option>";
					document.getElementById("Unterart").innerHTML=string;
			}
			//Bearbeitet Hintergrund nach Auswahl
			var string="";
			for(i=0;i<ObjectVar_Klasse_Hintergrund.length;i++){
					string=string+"<option value="+ObjectVar_Klasse_Hintergrund[i]+">"+ObjectVar_Klasse_Hintergrund[i]+"</option>";
					document.getElementById("Hintergrund").innerHTML=string;
			}
		}
	}
	else if(a == "Volk"){
		var SelectedObject=document.getElementById("Volk").value;
		ActiveVolk = SelectedObject;
		//Drachenblütiger
		if (SelectedObject == "Drachenblütiger"){
			ObjectVar_Volk_Klasse = Drachenblütiger_Klasse;
			ObjectVar_Volk_Unterart = Drachenblütiger_Unterart;
			ObjectVar_Volk_Hintergrund = Drachenblütiger_Hintergrund;
		}
		//Elf
		else if (SelectedObject == "Elf"){
			ObjectVar_Volk_Klasse = Elf_Klasse;
			ObjectVar_Volk_Unterart = Elf_Unterart;
			ObjectVar_Volk_Hintergrund = Elf_Hintergrund;
		}
		//Gnom
		else if (SelectedObject == "Gnom"){
			ObjectVar_Volk_Klasse = Gnom_Klasse;
			ObjectVar_Volk_Unterart = Gnom_Unterart;
			ObjectVar_Volk_Hintergrund = Gnom_Hintergrund;
		}
		//Überprüfet die Auswahl bei Klasse
		for(i=0;i<ObjectVar_Volk_Klasse.length;i++){
			if (ObjectVar_Volk_Klasse[i]==ActiveKlasse){
				//Hintergrund
				//Guckt sich beide Listen an (Was steht bei Hintergrund zu Auswahl)
				for(let j=0;j<ObjectVar_Klasse_Hintergrund.length;j++){
					for(let i=0;i<ObjectVar_Volk_Hintergrund.length;i++){
						//Vergleicht beide Listen und übernimmt nur das was in beiden vorkommt
						if (ObjectVar_Klasse_Hintergrund[j].match(ObjectVar_Volk_Hintergrund[i])){
							//Fügt die übernommenden Listenelement in die Html zur Auswahl ein
							var res_Hin = ObjectVar_Klasse_Hintergrund[j].match(ObjectVar_Volk_Hintergrund[i]);
							string=string+"<option value="+res_Hin+">"+res_Hin+"</option>";
							document.getElementById("Hintergrund").innerHTML=string;
							alert("Ähnlichkeiten in Hintergrund: "+res_Hin);
						}
					}
				}
				//Unterart
				//Guckt sich beide Listen an (Was steht bei Unterart zu Auswahl)
				for(let j=0;j<ObjectVar_Klasse_Unterart.length;j++){
					for(let i=0;i<ObjectVar_Volk_Unterart.length;i++){
						//Vergleicht beide Listen und übernimmt nur das was in beiden vorkommt
						if (ObjectVar_Klasse_Unterart[j].match(ObjectVar_Volk_Unterart[i])){
							//Fügt die übernommenden Listenelement in die Html zur Auswahl ein
							var res_Unt = ObjectVar_Klasse_Unterart[j].match(ObjectVar_Volk_Unterart[i]);
							string=string+"<option value="+res_Unt+">"+res_Unt+"</option>";
							document.getElementById("Unterart").innerHTML=string;
							alert("Ähnlichkeiten in Unterart: "+res_Unt);
						}
					}
				}
			}
			else {
				alert("Hilfe!");
			}
		}
	}
}
