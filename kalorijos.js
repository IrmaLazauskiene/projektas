function store(){ //stores items in the localStorage
    let lyt = document.getElementById('lytis').value;
    var amzius = document.getElementById('age').value;
    var svr = document.getElementById('svoris').value;
    var ugs = document.getElementById('ugis').value;
    let budas = document.getElementById('active').value;

    const zmogus = {
        lyt: lyt,
        amzius: amzius,
        svr: svr,
        ugs: ugs,
        budas: budas,
    }
    window.localStorage.setItem("duom",JSON.stringify(zmogus));
    //converting object to string
}

function skaiciuoti(){
  var text = localStorage.getItem('duom');
  obj = JSON.parse(text);
  var ckal = 0;
  if (obj.lyt === 'V'){
    ckal = 66 + 13.7*obj.svr + 5*obj.ugs - 6.8*obj.amzius;
  }
  if (obj.lyt === 'M'){
    ckal = 650 + 9.6*obj.svr + 1.8*obj.ugs - 4.7*obj.amzius;
  }
  if (obj.budas === 'A') ckal*=1.7;
  if (obj.budas === 'V') ckal*=1.4;
  return ckal;
}

window.onload =function(){ //ensures the page is loaded before functions are executed.
    document.getElementById("zmgForm").onsubmit = store;

}

document.getElementById("button").onclick= function() {
  var a = skaiciuoti();
  document.getElementById("demo").innerHTML = "Jums reikia suvalgyti " + parseInt(a) + " kcal per dieną.";
  localStorage.clear();
}
