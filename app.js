//  pacotes
const express = require('express')
const handlebars = require('express-handlebars')
const bodyparser = require('body-parser')
const path = require('path')
const user = require('./routes/user')

// configurando os pacotes
const app = express()
app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
app.use('/src', express.static(path.join(__dirname, 'public')))

// rotas
app.get('/', (req, res) => {
    res.render('home')
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.use('/user', user)

// iniciando o servidor
app.listen(3000, () => {
    console.log('servidor ligado!')
})