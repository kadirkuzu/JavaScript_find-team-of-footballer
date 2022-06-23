let fs = require("fs")
fs.writeFile("fenerbahce.txt", "", function (hata) { if (hata) throw hata; console.log("fenerbahceliler eklendi"); })
fs.writeFile("galatasaray.txt", "", function (hata) { if (hata) throw hata; console.log("galatasaraylilar eklendi"); })
fs.writeFile("besiktas.txt", "", function (hata) { if (hata) throw hata; console.log("besiktaslilar eklendi"); })

var fenerbahceList = []
var galatasarayList = []
var besiktasList = []
fs.readFile("futbolcular.txt", "utf-8", function (hata, data) {
    if (hata) throw hata
    let futbolcuList = data.split("\n")
    futbolcuList.forEach(function (futbolcu) {
        if (futbolcu.split(",")[1] == "Fenerbahçe" || futbolcu.split(",")[1] == "Fenerbahçe\r") { fenerbahceList.push(futbolcu.split(",")[0] + "\n") }
        if (futbolcu.split(",")[1] == "Galatasaray" || futbolcu.split(",")[1] == "Galatasaray\r") galatasarayList.push(futbolcu.split(",")[0] + "\n")
        if (futbolcu.split(",")[1] == "Beşiktaş" || futbolcu.split(",")[1] == "Beşiktaş\r") besiktasList.push(futbolcu.split(",")[0] + "\n")
    })
    fenerbahceList.forEach(function (futbolcu) {
        fs.appendFile("fenerbahce.txt", futbolcu, function (hata) { if (hata) throw hata; console.log("fenerbahceli futbolcu eklendi"); })
    })
    galatasarayList.forEach(function (futbolcu) {
        fs.appendFile("galatasaray.txt", futbolcu, function (hata) { if (hata) throw hata; console.log("galatasarayli futbolcu eklendi"); })
    })
    besiktasList.forEach(function (futbolcu) {
        fs.appendFile("besiktas.txt", futbolcu, function (hata) { if (hata) throw hata; console.log("besiktasli futbolcu eklendi"); })
    })

})


