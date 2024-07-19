const llamaNamer = function () {
    const possibleNames = ["Larry", "Leon", "Leona", "Les", "Laura", "Lemony", "Lars", "Lekisha"]
    const randomizer = Math.floor(Math.random() * 7);

    const namer = function () {
        var suffix = " the Llama"
        const name = possibleNames[randomizer]
        return name + suffix;
    }
    return namer
}

nameMaker = llamaNamer()
console.log(nameMaker())


let domTarget = document.querySelector(".name");
domTarget.innerHTML = nameMaker();