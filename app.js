const express = require('express'); // importação
const app = express(); // instanciando 

app.use(express.json()); //configura para usar json

const port = 3100; //porta que da acesso aos arquivos que vai subir o servidor




const jogos = [
    'cobrinha',
    'fifa',
    'narutoStorm'
];

app.get('/',(req,res) => {
    res.send(`<h1>Escreva /jogos na url para motrar todos os jogos </h1> `)
})








function random(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}



app.get('/jogos/jogoAleatorio', (req, res) => {
    let indice = random(0, jogos.length)
    res.send(jogos[indice])
})



// listar - get 
// criar - post
// update - put
// delete - delete


//get ==listar
app.get('/jogos',(req, res) => {
    res.send(jogos);
});


// criar - post
app.post('/novoJogo', (req, res) => {
    const novoJog = req.body.novoJog;
    const id = jogos.length
    jogos.push(novoJog)
    res.send(`${novoJog} foi adicionado`)
});


// update - put

app.put('/jogos/:id', (req, res) => {

    const id = req.params.id - 1; 
    const jogo = req.body.jogo;
    const jogoAnterior = jogos[id]
    jogos[id] = jogo;
    res.send(`${jogoAnterior} foi atulizado para ${jogo}`);


});

// delete - delete

app.delete('/jogos/:id', (req, res) =>{
    const id = req.params.id - 1;
    res.send(`você deletou ${jogos[id]}`)
    delete jogos[id];

});




// definindo a porta
app.listen(port, () => {
    console.info(`app esta rodando em: http://localhost:${port}/`);
});
