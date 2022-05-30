const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const listaPessoas = [
    {id: 1, nome: 'Vytor'},
    {id: 2, nome: 'Leo'}
];
const listaUsuarios = [
    {id: 1, nome: 'Vytor'},
    {id: 2, nome: 'Leo'}
];

app.get('/', (req,res) => {
    res.send('Bem vindo')
});

app.get('/api/pessoas', (req,res) => {
    res.json(listaPessoas)
});

app.post('/api/pessoas', (req,res) => {
    console.log(req.body);
    const pessoa = req.body;
    pessoa.id = listaPessoas.length + 1;
    listaPessoas.push(pessoa);
    res.json(pessoa);
});

app.put('/api/pessoas/:id', (req,res) => {
    const id = req.params.id;
    const pessoa = req.body;
    const index = listaPessoas.findIndex(p => p.id == id);
    listaPessoas[index] = pessoa;
    res.json(pessoa)
});

app.get('/api/pessoas/:id', (req,res) => {
    const id = req.params.id;
    const pessoa = listaPessoas.find(p => p.id == id);
    res.json(pessoa)
});

app.delete('/api/pessoas/:id', (req, res) => {
    const id = req.params.id;
    const index = listaPessoas.findIndex(p => p.id == id);
    listaPessoas.splice(index, 1);
    res.json(listaPessoas);
});

app.get('/api/usuarios', (req, res) => {
    res.json(listaUsuarios);
});

app.get('/api/usuarios/:id', (req,res) => {
    const id = req.params.id;
    const usuario = listaUsuarios.find(p => p.id == id);
    res.json(usuario)
});

app.put('/api/usuarios/:id', (req, res) => {
    console.log(req.body);
    const id = req.params.id;
    const usuario = req.body;
    const index = listaUsuarios.findIndex(p => p.id == id);
    listaUsuarios[index] = usuario;
    res.json(usuario);
});

app.post('/api/usuarios/', (req,res) => {
    console.log(req.body);
    const usuario = req.body;
    usuario.id = listaUsuarios.length + 1;
    listaUsuarios.push(usuario);
    res.json(usuario);
})

app.delete('/api/usuarios/:id', (req, res) => {
    const id = req.params.id;
    const index = listaUsuarios.findIndex(p => p.id == id);
    listaUsuarios.splice(index, 1);
    res.json(listaUsuarios);
});
app.listen(port, () => {console.log(`Porta ${port}`)});
//req = dados da requisição
//GET = buscar dados -> req.query
//POST = Criar informações -> req.body
//PUT = Alternar informações -> req.body
//DELETE = Deletar informações -> req.params
//OPTIONS = Informações que o servidor pode responder