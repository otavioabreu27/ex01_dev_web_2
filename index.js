const express = require("express")
const bodyparser = require("body-parser")

const app = express();
app.use(bodyparser.urlencoded({extended:true}))
app.set("view engine", "ejs");

// 1. localhost:3000/idade
app.get("/idade", (req, res) => {
    res.render("idade",{faixa_etaria: ""});
})

app.post("/dados_idade", (req, res) => {
    let idade = req.body.idade;

    if (idade >= 0 & idade < 15){
        res.render("idade",{
            faixa_etaria: "Criança"
        });
    } else if (idade >= 15 & idade < 30){
        res.render("idade",{
            faixa_etaria: "Jovem"
        });
    } else if (idade >= 30 & idade < 60){
        res.render("idade",{
            faixa_etaria: "Adulto"
        });
    } else if (idade >= 60){
        res.render("idade",{
            faixa_etaria: "Idoso"
        });
    }
    
});

// 2. localhost:3000/media
app.get("/media", (req, res) => {
    res.render("media.ejs", {hidden: "hidden", 
                            media: "", 
                            classificacao: ""})
});

app.post("/dados_media", (req, res) => {
    const at_pratica = req.body.at_pratica
    const prova = req.body.prova
    const teorico = req.body.teorico

    let media = ((2 * at_pratica) + (5 * prova) + (3 * teorico)) / 10

    if (media >= 9){
        res.render("media.ejs", {hidden: "", 
                            media: media, 
                            classificacao: "A"})
    } else if (media >= 8 & media < 9){
        res.render("media.ejs", {hidden: "", 
                            media: media, 
                            classificacao: "B"})
    } else if (media >= 7 & media < 8){
        res.render("media.ejs", {hidden: "", 
                            media: media, 
                            classificacao: "C"})
    } else if (media >= 6 & media < 7){
        res.render("media.ejs", {hidden: "", 
                            media: media, 
                            classificacao: "D"})
    } else if (media >= 5 & media < 6){
        res.render("media.ejs", {hidden: "", 
                            media: media, 
                            classificacao: "E"})
    } else {
        res.render("media.ejs", {hidden: "", 
                            media: media, 
                            classificacao: "F"})
    }
});


// 3. localhost:3000/usuario
app.get("/usuario", (req, res) => {
    res.render("usuario.ejs", {hidden_cadastro: "hidden",
                               hidden_dados: "",
                               nome: "n/a",
                               sobrenome: "n/a",
                               pais: "n/a",
                               idade: "n/a"})
});

app.post("/usuario", (req, res)=> {
    const nome = req.body.nome;
    const sobrenome = req.body.sobrenome;
    const pais = req.body.pais;
    const idade = req.body.idade;

    res.render("usuario.ejs", {hidden_cadastro: "hidden",
                               hidden_dados: "",
                               nome: nome,
                               sobrenome: sobrenome,
                               pais: pais,
                               idade: idade})
})

app.get("/dados_usuario", (req, res) =>{
    res.render("usuario.ejs", {hidden_cadastro: "",
                               hidden_dados: "hidden",
                               nome: "n/a",
                               sobrenome: "n/a",
                               pais: "n/a",
                               idade: "n/a"})
})


app.listen("3000",()=>console.log("Escutando a porta 3000!"));
