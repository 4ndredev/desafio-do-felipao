let hero = "Cloud";
let xp = "7.999";
let mensagem = (" O herói " + hero + " chegou ao rank ");

let elementHero = document.getElementById("hero");
let elementRank = document.getElementById("rank");

elementRank.innerHTML = getRank(xp);

function getRank(xp) {
    if (xp <= 1.000) {
        return "Ferro";
    } else if (xp <= 2.000) {
        return "Bronze";
    } else if (xp <= 5.000) {
        return "Prata";
    } else if (xp <= 7.000) {
        return "Ouro";
    } else if (xp <= 8.000) {
        return "Platina";
    } else if (xp <= 9.000) {
        return "Ascendente";
    } else if (xp <= 10.000) {
        return "Imortal";
    } else {
        return "Radiante";
    }
}

console.log(mensagem + elementRank.innerHTML);
