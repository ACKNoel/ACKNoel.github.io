let pays;

let tblPays = [
    "canada",
    "france",
    "russie",
    "asdf",
    "a",
    "hjha",
]

//Source Math.random https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function pigePays() {
    pays = Math.random() * (tblPays.length-1)
    pays = Math.round(pays);
    return pays;
}

console.log(pigePays());
console.log(tblPays[pays]);