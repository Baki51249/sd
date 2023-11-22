const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Contato = require("./contato");
const port = 7070;

app.use(express.urlencoded({extended: true}));

app.listen(port, ()=>{
console.log("seridor aberto na porta " + port);
});

app.get("/", ( req, res)=>{
res.sendFile('public/index.html' , { root : __dirname });
})

app.post("/cadastro", (req, res)=>{
const {nome, whatsapp} = req.body;
insertContato(nome, whatsapp);
res.send(`<h1> Obrigado pelo cadastro, ${req.body.nome}!</h1>`)
})

mongoose.connect("mongodb+srv://gabriel:mW2s0BbFlzZAfBcm@cluster0.lnvstco.mongodb.net/?retryWrites=true&w=majority");

function insertContato(nome, whatsapp){
 const dados = new Contato({
       nome: nome,
       whatsapp: whatsapp,
});
 dados.save();
}