var Klasse = ["-", "Barbar", "Barde", "Druide", "Hexenmeister", "Kleriker", "Kämpfer", "Magier", "Mönch", "Paladin", "Schurke", "Sidekick: Krieger", "Sidekick: Spezalist", "Sidekick: Zauberwirker", "Waldläufer", "Zauberer"];
var Volk = ["-", "Drachenblütiger", "Elf", "Firbolg", "Gnom", "Grottenschrat", "Halb-Elf", "Halb-Ork", "Halbling", "Mensch", "Minitaurus", "Tiefling", "Zwerg"];
var Unterart = ["-", "Devkarin", "Drow", "Gebirgszwerg", "Grün", "Hochelf", "Hügelzwerg", "Leichfuß", "Rot", "Stämmiger", "Variante", "Waldelf", "Waldgnom", "Weiß", "Wilder"];
var Hintergrund = ["-", "Adliger", "Boros Legion", "Einsiedler", "Geplagter", "Gildenhandwerker", "Golgari Swarm", "Krimineller", "Rakdos Cultist", "Scharlatan", "Soldat", "Sonderling", "Spion", "Straßenkind", "Stadtischer Kopfgeldjäger", "Söldnerveteran", "Tempeldiener", "Unterhaltungskünstler", "Volksheld", "Wanderer aus der Ferne", "Weiser"];

//Klassen List
//Barbar
var Barbar_Volk = ["-", "Drachenblütiger", "Halb-Ork"];
var Barbar_Unterart = ["-", "Rot"];
var Barbar_Hintergrund = ["-", "Gildenhandwerker", "Sonderling"];
//Barde
var Barde_Volk = ["-", "Elf", "Zwerg"];
var Barde_Unterart = ["-", "Drow", "Hügelzwerg"];
var Barde_Hintergrund = ["-"];

//Volk List
var Drachenblütiger_Klasse = ["-", "Barbar", "Kleriker", "Kämpfer", "Waldläufer"];
var Drachenblütiger_Unterart = ["-", "Grün", "Rot", "Weiß"];
var Drachenblütiger_Hintergrund = ["-", "Einsiedler", "Gildenhandwerker", "Soldat"];

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
		for(i=0;i<ObjectVar_Volk_Klasse.length;i++){
			if (ObjectVar_Volk_Klasse[i]==ActiveKlasse){
				var string="";
				for(let i=0;i<ObjectVar_Volk_Klasse.length;i++){
					if (ActiveKlasse.match(ObjectVar_Volk_Klasse[i])){
						for(let j=0;j<ObjectVar_Klasse_Hintergrund.length;j++){
							for(let i=0;i<ObjectVar_Volk_Hintergrund.length;i++){
								if (ObjectVar_Klasse_Hintergrund[j].match(ObjectVar_Volk_Hintergrund[i])){
									var res = ObjectVar_Klasse_Hintergrund[j].match(ObjectVar_Volk_Hintergrund[i]);
									string=string+"<option value="+res+">"+res+"</option>";
									document.getElementById("Hintergrund").innerHTML=string;
									alert(res);
								}
							}
						}
					}
				}
			}
		}
	}
}
