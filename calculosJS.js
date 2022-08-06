/* Calculos según NATO AASTP

weight = form.weight.value;
range  = form.range.value;

explosiveDetails = getExplosiveDetails(); // Contrastar lista desplegable con Array de Objetos


/* Importing the JSON file and then converting it to a string. */
import explosiveData from './explosivedata.json'assert {type: "json"};
var b = JSON.parse(JSON.stringify(explosiveData));
console.log(b);




/*

t = Math.log(getScaledDistance()) / Math.log(10);

function getScaledDistance(){
    var cubeRootOfChargeWeight = Math.pow(getChargeWeight(),0.3333333);
    return form.range.value / cubeRootOfChargeWeight;
}

function getChargeWeight(equivType){
    if(typeof(equivType)==='undefined'){
        equivType = "pressure";
    }
    var weight = form.weight.value;
    var tntEquiv = getExplosiveDetails().peakPressureTNTEquiv;
    if (equivType === "impulse"){
        tntEquiv = getExplosiveDetails().impulseTNTEquiv;
    }
    return weight * tntEquiv;
}

function getExplosiveDetails(){
    var option = form.explosiveType.options[form.explosiveType.selectedIndex].value;
    return explosiveTable[option];
}

// SELECTOR DE tipo de explosivo (lista desplegable)

var explosiveTable = getExplosiveTable();
                        for (explosive in explosiveTable) {
                            selected = (explosive == "tnt") ? "selected" : "";
                            name = explosiveTable[explosive].name;
                            document.write('<option value="' + explosive + '" ' + selected + ' >' + name + '</option>');
                        }


// Presión Máxima 
function calculateIncidentPressure(t){ //NATO AASTP version
    U = -0.214362789151 + 1.35034249993 * t;
    ip = 2.78076916577 - 1.6958988741 * U -
        0.154159376846 * Math.pow(U,2) +
        0.514060730593 * Math.pow(U,3) +
        0.0988534365274 * Math.pow(U,4) -
        0.293912623038 * Math.pow(U,5) -
        0.0268112345019 * Math.pow(U,6) +
        0.109097496421 * Math.pow(U,7) +
        0.00162846756311 * Math.pow(U,8) -
        0.0214631030242 * Math.pow(U,9) +
        0.0001456723382 * Math.pow(U,10) +
        0.00167847752266 * Math.pow(U,11);
    ip = Math.pow(10,ip);
    return ip;
}

// Tiempo para llegada Onda de choque
function calculateTimeOfArrival(t) {
    cubeRootOfChargeWeight = Math.pow(getChargeWeight("impulse"),0.3333333);
    U = -0.202425716178 + 1.37784223635 * t;
    toa = -0.0591634288046 + 1.35706496258 * U +
        0.052492798645 * Math.pow(U,2) -
        0.196563954086 * Math.pow(U,3) -
        0.0601770052288 * Math.pow(U,4) +
        0.0696360270891 * Math.pow(U,5) +
        0.0215297490092 * Math.pow(U,6) -
        0.0161658930785 * Math.pow(U,7) -
        0.00232531970294 * Math.pow(U,8) +
        0.00147752067524 * Math.pow(U,9);
    toa = Math.pow(10,toa);
    toa = toa * cubeRootOfChargeWeight;
    return toa;
}

//Velocidad de la Onda expansiva

function calculateShockFrontVelocity(t) {
    U = -0.202425716178 + 1.37784223635 * t;
    sv = -0.06621072854 - 0.698029762594 * U +
        0.158916781906 * Math.pow(U,2) +
        0.443812098136 * Math.pow(U,3) -
        0.113402023921 * Math.pow(U,4) -
        0.369887075049 * Math.pow(U,5) +
        0.129230567449 * Math.pow(U,6) +
        0.19857981197 * Math.pow(U,7) -
        0.0867636217397 * Math.pow(U,8) -
        0.0620391900135 * Math.pow(U,9) +
        0.0307482926566 * Math.pow(U,10) +
        0.0102657234407 * Math.pow(U,11) -
        0.00546533250772 * Math.pow(U,12) -
        0.000693180974 * Math.pow(U,13) +
        0.0003847494916 * Math.pow(U,14);
    sv = Math.pow(10,sv) * 1000;
    return sv;
}

*/
