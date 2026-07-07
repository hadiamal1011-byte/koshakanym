const message = `
Спасибо тебе за всё.

Я очень ценю каждый момент, который мы прожили вместе.
Спасибо за твою доброту, поддержку, улыбку и тепло.

Если между нами были ошибки —
я хочу, чтобы мы смогли спокойно поговорить.

Мне важно лишь одно —
чтобы ты улыбалась.

❤️
`;

let i = 0;

function openLetter() {
    document.getElementById("screen1").classList.add("hidden");
    document.getElementById("screen2").classList.remove("hidden");
    typeText();
}

function typeText() {
    if (i < message.length) {
        document.getElementById("text").innerHTML += message.charAt(i);
        i++;
        setTimeout(typeText, 40);
    } else {
        document.getElementById("nextBtn").style.display = "block";
    }
}

function showEnvelope() {
    document.getElementById("screen2").classList.add("hidden");
    document.getElementById("screen3").classList.remove("hidden");
}