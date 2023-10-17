let telebeler = {

    telebe1: {
        ad: "Nigar",
        soyad: "Memmedova",
        yas: 18,
        terif: function () {
            alert("Cox calisqan telebedir")
        }
    },
    telebe2: {
        ad: "Medine",
        soyad: "Memiszade",
        yas: 18,
        terif: function () {
            alert("Medinede cox calisqan telebedir")
        }
    },
    telebe3: {
        ad: "Yusif",
        soyad: "Hezretli",
        yas: 18,
        terif: function () {
            alert("Geceden sehere ders edir")
        }
    },
    telebe4: {
        ad: "Vusal",
        soyad: "Quluyev",
        yas: 22,
        terif: function () {
            alert("Ozume terif demeyim duzgun olmaz :)")
        }
    }
}
//console.log(telebeler.telebe2.soyad);
console.log(telebeler.telebe3.terif());