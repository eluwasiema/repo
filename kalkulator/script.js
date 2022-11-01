function onload(){
    
    for(i=0; i < document.getElementsByClassName("button").length; i++){

        let btn = document.getElementsByClassName("button")[i];

        btn.onclick = function(){
            zczytanieid(btn.id)
            przycisniecie(btn.value)
        };

    }
}
var kolejny = '';   // wynik
var index = 0;      // index-1 to 
var id = 0;         // obecne id
let lastid = '';   // poprzednie id
var allid = [];    // wszystkie id w array
function zczytanieid(ids){
    id = ids;
    allid.push(ids);
    lastid = allid[index-1];
    index++
}

function przycisniecie(wartosc){        // wartosc to wcisniety obecnie przycisk
    if(wartosc != "=" && wartosc != "c"){
            var kolejny = document.getElementById("numer").value += wartosc;
		    var poprawa = document.getElementById("numer").value;
            var ostatnieobl = kolejny.length - 2;
		    var krok = poprawa[ostatnieobl];
	    if(lastid == "specjalny" && lastid == id){
            alert("Blad przy wprowadzaniu liczby");
            document.getElementById("numer").value = "";
            allid = [];
            id = 0;
            index = 0;
        }
        if(id == "specjalny" && krok == undefined && wartosc != "-"){
            alert("Blad przy wprowadzaniu liczby");
            document.getElementById("numer").value = "";
            allid = [];
            id = 0;
            index = 0;
        }
    }
    else if(wartosc == "="){            // dziala oprocz nawiasow, nie lapie bledu
        var sum = document.getElementById("numer").value;
        try{
            var evalsum = eval(sum);
            console.log(eval(sum));
            document.getElementById("numer").value = evalsum;
            if(document.getElementById("numer").value == ""){
                allid = [];
                id = 0;
                index = 0;
            }
        } catch (e) {
            if(e instanceof EvalError){
                alert("Blad przy wprowadzaniu liczby");
                document.getElementById("numer").value = "";
            }
        }
    }
    else{                               // dziala
        document.getElementById("numer").value = "";
        allid = [];
        id = 0;
        index = 0;
    }
}