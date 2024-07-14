
let kol = document.getElementById('kol');
let dorost = document.getElementById('dorost');
let ghalat = document.getElementById('ghalat');
let javab = document.getElementById('javab');
let button = document.querySelector('button');

button.addEventListener('click', tabe);

function tabe() {
  let kolValue = parseFloat(kol.value);
  let dorostValue = parseFloat(dorost.value);
  let ghalatValue = parseFloat(ghalat.value);

  if (isNaN(kolValue) || isNaN(dorostValue) || isNaN(ghalatValue) || kolValue === 0 || kolValue < dorostValue+ghalatValue ) {
    javab.innerHTML = "لطفاً مقادیر معتبر وارد کنید.";
    return;
  }

  let numerator = (3 * dorostValue - ghalatValue) * 100;
  let denominator = 3 * kolValue;

  let str = numerator / denominator;
  javab.innerHTML = str.toFixed(2) + "%";
}
