function onload(){
    
    for(i=0; i < document.getElementsByClassName("button").length; i++){

        let btn = document.getElementsByClassName("button")[i];
        
        btn.onclick = function(){
            przycisniecie(btn.value)
        };

    }
}

function przycisniecie(wartosc){    // wartosc to wcisniety obecnie przycisk
    if(wartosc != "=" && wartosc != "c"){
        var aktualna = wartosc;
        console.log(aktualna);
        var kolejny = document.getElementById("numer").value += wartosc;
		var poprawa = document.getElementById("numer").value;
        console.log(kolejny);
		var ostatnieobl = kolejny.length - 2;
		var krok = poprawa[ostatnieobl];
		console.log(krok);
		if(isNaN(krok) && isNaN(wartosc)){
            document.getElementById("numer").value = "";
            alert("Blad przy wprowadzaniu znakow");
        }
        
        /* if(krok == "(" && wartosc == ")"){
			document.getElementById("numer").value = "";
		}
		else if(isNaN(krok) && isNaN(wartosc) && krok !="(" && wartosc !=")"){
			 document.getElementById("numer").value = "";
        }*/
		
    }
    else if(wartosc == "="){            // dziala
        var sum = document.getElementById("numer").value;
        console.log(eval(sum));
        document.getElementById("numer").value = eval(sum);
    }
    else{                               // dziala
        document.getElementById("numer").value = "";
    }
}