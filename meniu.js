/* data from four harmonised halls -------------- */
var text = '{"pavadinimai":[' +
'{"Name":"Špinatai","gr":150,"ang":6.3,"blt":5,"rbl":0.48},' +
'{"Name":"Grietinė 30%","gr":20,"ang":0.62,"blt":0.82,"rbl":6},' +
'{"Name":"Virti grikiai","gr":170,"ang":35.5,"blt":5.8,"rbl":1},' +
'{"Name":"Braškės","gr":70,"ang":6.5,"blt":0.84,"rbl":0.3},' +
'{"Name":"Avokado aliejus","gr":4,"ang":0,"blt":0,"rbl":4 },' +
'{"Name":"Pomidorai agurkai","gr":150,"ang":8.8,"blt":1.5,"rbl":0.1},' +
'{"Name":"Išrūgos","gr":160,"ang":11.5,"blt":1.5,"rbl":0},' +
'{"Name":"Lašiša","gr":70,"ang":0,"blt":8.63,"rbl":8},' +
'{"Name":"Obuoliai, kriaušės","gr":100,"ang":19.8,"blt":0.35,"rbl":0.1},' +
'{"Name":"Alyvuogių aliejus","gr":2,"ang":0,"blt":0,"rbl":2 },' +
'{"Name":"Salotos, ridikėliai","gr":200,"ang":5.8,"blt":2.2,"rbl":0},' +
'{"Name":"Jogurtas","gr":50,"ang":6.8,"blt":1.45,"rbl":0.4},' +
'{"Name":"Avižinė košė su Chia","gr":80,"ang":46.8,"blt":11.2,"rbl":6.5},' +
'{"Name":"Riešutų mišinys","gr":15,"ang":3,"blt":3,"rbl":6.5},' +
'{"Name":"Ryžių aliejus","gr":5,"ang":0,"blt":0,"rbl":2},' +
'{"Name":"Morkos, saulėgrąžos (100/10)","gr":110,"ang":12.6,"blt":3,"rbl":6.2},' +
'{"Name":"Makaronai","gr":50,"ang":37,"blt":6,"rbl":1},' +
'{"Name":"Menkų filė","gr":50,"ang":0,"blt":6.55,"rbl":0.7},' +
'{"Name":"Vynuogės","gr":50,"ang":9,"blt":0.35,"rbl":0.1},' +
'{"Name":"Linų sėmenų aliejus","gr":5,"ang":0,"blt":0,"rbl":5}]}';

/* calculates the percentage -------------------- */
function dalis (kalorijos, procentai)
{
  var d = kalorijos*procentai/100;
  return d;
}

/* data becomes a JavaScript object ------------- */
const obj = JSON.parse(text);
let ilgis = obj.pavadinimai.length;

/* changing the weights of balanced arts -------- */
const rasti= function(kalorijos)
{
/* forming html code string --------------------- */
  var maistas = "";
  if (kalorijos < 1000) maistas += "Per mažas kcal skaičius parai." + "<br>";
  else if (kalorijos > 6000) maistas += "Per didelis kcal skaičius parai." + "<br>";
  else {
    var bdalis = dalis(kalorijos, 15);
    var rdalis = dalis(kalorijos, 30);
    var adalis = dalis(kalorijos, 55);
    var meniu = 0;
    maistas += "Jums reikia: iš baltymų " + bdalis + "kcal, iš riebalų " + rdalis + "kcal, iš angliavandenių " + adalis +"kcal. <br><br>";

    for (let i = 0; i <ilgis; i=i+5) {
      meniu += 1;
      var viso = 0;
      var aviso = 0;
      var bviso = 0;
      var rviso = 0;
      maistas +="<div class='responsive'><div class='gallery'>";
      maistas +="<div class='desc'>" + meniu + "-as meniu dienai: " + "</div>";
      for (let j = i; j < i+5; j++) {
        viso += obj.pavadinimai[j].blt*4 + obj.pavadinimai[j].rbl*9 + obj.pavadinimai[j].ang*4;
        }
/* ratio of required and menu-based kilocalories  */
      var santykis = kalorijos/viso;

      if (santykis === 0) santykis=1;
      for (let j = i; j < i+5; j++) {
        aviso += obj.pavadinimai[j].ang*santykis;
        bviso += obj.pavadinimai[j].blt*santykis;
        rviso += obj.pavadinimai[j].rbl*santykis;
        let gramai = obj.pavadinimai[j].gr*santykis;
        maistas +="- " + obj.pavadinimai[j].Name + " " + parseInt(gramai) + "g<br>";
      }
    maistas += "<br>" + meniu + "-ame meniu yra: iš baltymų " + parseInt(bviso*4) + "kcal, iš riebalų " + parseInt(rviso*9) + "kcal, iš angliavandenių " + parseInt(aviso*4) +"kcal.<br></div></div>";
  }
}
  return maistas;
}

/* sends code to html --------------------------- */
var a;
document.getElementById('button').onclick= function() {
  a = document.getElementById('input').value;
  document.getElementById("demo").innerHTML =rasti(Number(a));
}
