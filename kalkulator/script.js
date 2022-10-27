function onload(){
    
    for(i=0; i < document.getElementsByClassName("button").length; i++){

        let btn = document.getElementsByClassName("button")[i];

        btn.onclick = function(){
            zczytanieid(btn.id)
            przycisniecie(btn.value)
        };

    }
}
var kolejny = '';
var index = 0;
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
        var aktualna = wartosc;
        console.log(aktualna);
        var kolejny = document.getElementById("numer").value += wartosc;
		var poprawa = document.getElementById("numer").value;
        var ostatnieobl = kolejny.length - 2;
		var krok = poprawa[ostatnieobl];
		console.log(krok);
        console.log(kolejny);
        console.log(allid);
        console.log(lastid);
        console.log(id);
	if(lastid == "specjalny" && lastid == id){
        alert("Blad przy wprowadzaniu liczby");
        document.getElementById("numer").value = "";
        allid = [];
        id = 0;
    }
    if(id == "specjalny" && krok == undefined && wartosc != "-"){
        alert("Blad przy wprowadzaniu liczby");
        document.getElementById("numer").value = "";
        allid = [];
        id = 0;
    }
    }
    else if(wartosc == "="){            // dziala
        var sum = document.getElementById("numer").value;
        try{
            console.log(eval(sum));
        } catch (e) {
            if(e instanceof SyntaxError){
                alert("Blad przy wprowadzaniu liczby");
                document.getElementById("numer").value = "";
            }
            else{
                document.getElementById("numer").value = eval(sum);
                allid = [];
                id = 0;
            }
        }
    }
    else{                               // dziala
        document.getElementById("numer").value = "";
        allid = [];
        id = 0;
    }
}