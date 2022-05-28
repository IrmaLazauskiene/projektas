
var text = '{"pavadinimai":[' +
'{"Name":"Špinatai","gr":160,"ang":5.6,"blt":4.48,"rbl":0.48},' +
'{"Name":"Grietinė 30%","gr":20,"ang":0.62,"blt":0.38,"rbl":6},' +
'{"Name":"Virti grikiai","gr":160,"ang":31.84,"blt":5.28,"rbl":0.98},' +
'{"Name":"Braškės","gr":60,"ang":5.82,"blt":0.54,"rbl":0.24},' +
'{"Name":"Avokado aliejus","gr":15,"ang":0,"blt":0,"rbl":15 },' +
'{"Name":"Pomidorai agurkai","gr":300,"ang":11.7,"blt":3,"rbl":0.6},' +
'{"Name":"Išrūgos","gr":150,"ang":7.5,"blt":1.5,"rbl":0},' +
'{"Name":"Lašiša","gr":70,"ang":0,"blt":9.03,"rbl":9.52},' +
'{"Name":"Obuoliai kriaušės","gr":200,"ang":25,"blt":0.7,"rbl":0.4},' +
'{"Name":"Alyvuogių aliejus","gr":10,"ang":0,"blt":0,"rbl":10 },' +
'{"Name":"Salotos ridikėliai","gr":200,"ang":5.1,"blt":2.2,"rbl":0},' +
'{"Name":"Jogurtas","gr":50,"ang":6.2,"blt":1.45,"rbl":0.4},' +
'{"Name":"Avižinė košė su Chia","gr":80,"ang":44.8,"blt":11.2,"rbl":7.6},' +
'{"Name":"Riešutų mišinys","gr":30,"ang":5.4,"blt":6,"rbl":17.1},' +
'{"Name":"Ryžių aliejus","gr":30,"ang":0,"blt":0,"rbl":6},' +
'{"Name":"Morkos saulėgrąžos","gr":110,"ang":12.6,"blt":3.3,"rbl":5.9},' +
'{"Name":"Makaronai","gr":50,"ang":37,"blt":6,"rbl":1},' +
'{"Name":"Menkų filė","gr":50,"ang":0,"blt":7.55,"rbl":0.4},' +
'{"Name":"Vynuogės","gr":50,"ang":9,"blt":0.35,"rbl":0.1},' +
'{"Name":"Linų sėmenų aliejus","gr":25,"ang":0,"blt":0,"rbl":25}]}';

function dalis (kalorijos, procentai)
{
  var d = kalorijos*procentai/100;
  return d;
}

const obj = JSON.parse(text);
let ilgis = obj.pavadinimai.length;


const rasti= function(kalorijos)
{
  var maistas = "";
  if (kalorijos < 1000) maistas += "Per mažas kcal skaičius parai." + "<br>";
  else if (kalorijos > 6000) maistas += "Per didelis kcal skaičius parai." + "<br>";
  else {
    var bdalis = dalis(kalorijos, 15);
    var rdalis = dalis(kalorijos, 30);
    var adalis = dalis(kalorijos, 55);
    var meniu = 0;
    maistas += "Jums reikia: baltymų " + bdalis + "g, riebalų " + rdalis + "g, angliavandenių " + adalis +"g. <br><br>";

    for (let i = 0; i <ilgis; i=i+5) {
      meniu += 1;
      var viso = 0;
      var aviso = 0;
      var bviso = 0;
      var rviso = 0;
      maistas += meniu + "-as meniu dienai: " + "<br>";
      for (let j = i; j < i+5; j++) {
        viso += obj.pavadinimai[j].blt*4 + obj.pavadinimai[j].rbl*9 + obj.pavadinimai[j].ang*4;
        }
      var santykis = kalorijos/viso;
      if (santykis === 0) santykis=1;
      for (let j = i; j < i+5; j++) {
        aviso += obj.pavadinimai[j].ang*santykis;
        bviso += obj.pavadinimai[j].blt*santykis;
        rviso += obj.pavadinimai[j].rbl*santykis;
        let gramai = obj.pavadinimai[j].gr*santykis;
        maistas +="- " + obj.pavadinimai[j].Name + " " + parseInt(gramai) + "g<br>";
      }
    maistas += meniu + "-ame meniu yra: baltymų " + parseInt(bviso*4) + "g, riebalų " + parseInt(rviso*9) + "g, angliavandenių " + parseInt(aviso*4) +"g.<br><br>";
  }
}
  return maistas;
}

var a;
document.getElementById('button').onclick= function() {
  a = document.getElementById('input').value;
  document.getElementById("demo").innerHTML =rasti(Number(a));
}
