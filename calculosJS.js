

/* Importing the JSON file and then converting it to a string. 
import explosiveData from './explosivedata.json'assert {type: "json"};
var b = JSON.parse(JSON.stringify(explosiveData));
console.log(b);

*/

var ejecutar = document.getElementById("ejecutar");

 //Los mismos datos del archivo JSON
const explosivedata =[{
    "nombre": "TNT",
    "densidad" : "1.2", 
    "equivalentesTNT": "1"
  },
  {
    "nombre": "RDX",
    "densidad" : "1.4", 
    "equivalentesTNT": "1.3"
  },
  {
      "nombre": "Amonal",
      "densidad" : "1.1", 
      "equivalentesTNT": "0.9"
  }
];

var densidadf = 0;
var equivTNTf = 0;

    ejecutar.addEventListener("click", () => {
    
      var tipoexp = document.getElementById('exsel').options[document.getElementById('exsel').selectedIndex].text;
      var weight = document.getElementById('cantidad').value/1000;
      var range = document.getElementById ('myRange').value;

       if (weight <= 0){
        alert("La cantidad debe de ser positiva y mayor a 0");
        return false
       };  

       for (let i=0; i <= explosivedata.length; i++){

         if (explosivedata[i].nombre == tipoexp) {
          densidadf = Number(explosivedata[i].densidad);
         equivTNTf = Number(explosivedata[i].equivalentesTNT);
       
        break
      
        } /*else{
        alert ("Datos no encontrados, elija un explosivo")
        break
        }*/

        };
    
      console.log( "Explosivo seleccionado : " + tipoexp);
      console.log( "Datos explosivo seleccionado: densidad" + densidadf +" equivalentes TNT: "+ equivTNTf);
      console.log( "Distancia :  " + range);
      console.log( "Peso : " + weight );
     
      var t = Math.pow((equivTNTf*range)/weight,0.3333333) ;
      var t2 = Math.log(t)/Math.log(10);

      calculateIncidentPressure(t2);
      calculateTimeOfArrival(t2);
      calculateShockFrontVelocity (t2);
      console.log (t, t2);

            // Ejecución de la funcion de calculo
      calculos();

           /*
           var escribir =document.getElementById("datos1");
           escribir.innerHTML = "Presión máxima kPa : " + ip + " kPa";

            var escribir2= document.getElementById("datos2");
            escribir2.innerHTML = "Tiempo de llegada de la onda de choque (ms) " + toa + " ms";

            var escribir3= document.getElementById("datos3");
            escribir3.innerHTML = "Velocidad de la onda de choque (m/s) " + sv + " m/s";

            */

            
       var cambiodist = document.querySelector("#myRange");

       cambiodist.addEventListener("change", () => {
       calculos ();
       } );

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
    ip = ip.toFixed(3);
    return ip;
        };


        // Tiempo para llegada Onda de choque
        function calculateTimeOfArrival(t) {
    cubeRootOfChargeWeight = Math.pow((equivTNTf*range)/weight,0.3333333);
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
    toa = toa.toFixed(3);
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
    sv = sv.toFixed(3);
    return sv;
        }

        function calculos(){

      nuevorango = document.getElementById("myRange").value;
      var t = Math.pow((equivTNTf*nuevorango)/weight,0.3333333) ;
      var t2 = Math.log(t)/Math.log(10);

      calculateIncidentPressure(t2);
      calculateTimeOfArrival(t2);
      calculateShockFrontVelocity (t2);
      console.log (t, t2);

      var escribir =document.getElementById("datos1");
      escribir.innerHTML = "Presión máxima kPa : <b>" + ip + " kPa </b>";

      var escribir2= document.getElementById("datos2");
      escribir2.innerHTML = "Tiempo de llegada de la onda de choque (ms): <b>" + toa + " ms </b>";

      var escribir3= document.getElementById("datos3");
      escribir3.innerHTML = "Velocidad de la onda de choque (m/s): <b>" + sv + " m/s </b>";

      var escribir4= document.getElementById("datos4");
      escribir4.innerHTML = "Mueve el valor del Rango de Distancia para ver nuevos resultados !";

      let div = document.createElement('div');
       div.id = 'content';
       div.className = 'container';
       div.innerHTML = '<br><br><br><div class="mx-auto" style="width: 200px;"><button id="ejgrafico" type="submit" class="btn btn-primary" align-item="center">Ver Grafico P(t) a la distancia seleccionada</button></div><div class="container" id="gcanvas"></div>';
       document.getElementById("datos4").appendChild(div);
      

      var grafico = document.getElementById("ejgrafico");

       grafico.addEventListener("click", () => {
       
      let divcanv = document.createElement('div');
       divcanv.id = 'content';
       divcanv.className = 'container';
       divcanv.innerHTML = '<br><br><br><canvas id="myCanvas" width="650" height="250" style="border:1px solid #000000;"></canvas>';
       document.getElementById("gcanvas").appendChild(divcanv);

       graficocanvas();

       });

      

        };

/*
let div = document.createElement('div');
div.id = 'content';
div.className = 'container';
div.innerHTML = '<br><p>CreateElement example</p>';
document.getElementById("answers").appendChild(div);


*/


//función API Canvas


function graficocanvas(){
console.log("funciona canvas");

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
/*
ctx.moveTo(100, 0);
ctx.lineTo(100, 100);
ctx.stroke();
*/

var interval = 0.01;

for (x = 0; x < 640; x = x + interval) {
    var y= x*0.2;
    var x1 = x + interval;
    var y1 = y + interval*0.2;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x1, y1);
    ctx.stroke();
    ctx.closePath();

}




};
      
    });
    