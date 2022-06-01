
let name =[ ["spinatai.jpg", "grietine.jpg","grikiai.jpg","braškės.jpg","aliejus.png"],
            ["pomagurkai.jpg", "isrugos.jpg","lasisa.png","obkriause.jpg","aliejus.png"],
            ["salridi.jpg", "jogurtas.jpg","akose.jpg","riesutai.jpg","aliejus.png"],
            ["morkos.jpg", "makaronai.jpg","menke.jpg","vynuoges.png","aliejus.png"]];
let pav  =[ ["Daržinis špinatas","Grietinė 30%","Virti grikiai","Braškės","Avokado aliejus"],
            ["Pomidorai ir agurkai","Išrūgos","Lašiša","Obuoliai, kriaušės","Alyvuogių aliejus"],
            ["Salotos ir ridikėliai", "Jogurtas","Avižinė košė su Chia","Riešutų mišinys","Ryžių aliejus"],
            ["Morkos su saulėgrąžomis (100/10)", "Makaronai","Menkė","Vynuogės","Linų sėmenų aliejus"]];

var nr;
const tekstas = function(nr){
  var eilute = "";
  for (var i = 0; i <5; i++) {
      eilute += '<div class="responsive"><div class="gallery"><img src=' + name[nr][i];
      eilute += '><div class="desc">' + pav[nr][i] + '</div></div></div>';
          }
  return eilute;
}
function isvesti(nr){
  document.getElementById("demo").innerHTML =tekstas(nr);
}
