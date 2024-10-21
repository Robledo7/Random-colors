document.getElementById("color").addEventListener("click", changeBackground);

function changeBackground() {
    const symbols = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
    let color = "#";
    // Math.floor(Math.random() * (max - min +1)) + min; max=15, min=0
    for (let i = 0; i < 6; i++) {
        color = color + symbols[Math.floor(Math.random() * 16)];
    }
    // acá ya tengo el hexa en la variable color
    document.body.style.backgroundColor = color;
    document.querySelector("span").innerHTML=color
}

