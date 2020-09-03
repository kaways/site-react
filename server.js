const express = require('express')
const next = require('next')
const multer  = require('multer')
const convert = require('xml-js')
const nodemailer = require('nodemailer')
const hbs = require('nodemailer-express-handlebars')
const ses = require('nodemailer-ses-transport')

const dev = process.env.NODE_ENV !== 'production'
const app = next({dev})
const handle = app.getRequestHandler()
const upload = multer()

let port= parseInt(process.env.PORT, 10) || 3000

if (dev) { port = parseInt(process.env.PORT, 10) || 5001 }


var mailer = nodemailer.createTransport(ses({
    accessKeyId: "AKIAIG2EOCAFJZ2GL3CQ",
    secretAccessKey: "BE40RbI7jqP7xbJT8pF8jWLqe8vK/+/vqY0yIaj+RuE",
    serviceUrl: "email-smtp.us-east-1.amazonaws.com"
}))

app.prepare().then(() => {
    const server = express()
    const axios = require('axios')

    server.set('strict routing', false);
    server.use('/static', express.static(__dirname + '/static', { maxAge : 60*60*24*30 })); //30 days
    server.use('/_next/static', express.static(__dirname + '/_next/static', { maxAge : 60*60*24*30 })); //30 days


    // ----------------------------------------------------------------
    // Form Routes
    // ----------------------------------------------------------------

    server.post('/criatrial', upload.none(), function (req, res) {
        if (!req.body) return res.sendStatus(400)
        let data = {
            'TipoCadastro' : 'Prospecto',
            senha_usuario: req.body.senha_usuario,
            email_empresa: req.body.email_empresa,
            responsavel_empresa: req.body.responsavel_empresa,
            razao_empresa: req.body.razao_empresa,
            fone_empresa: req.body.fone_empresa,
            login_usuario: req.body.login_usuario,
            social: req.body.social,
            origem: req.body.origem,
            origem_caminho: req.body.origem_caminho,
            id_parceiro: req.body.id_parceiro,
            id_contabilidade: req.body.id_contabilidade,
            cupom_empresa: req.body.cupom_empresa,
        }
        
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
            
        axios.post("https://app.vhsys.com.br/Communication/Cadastro/index.php", data, config)
        .then((result) => {
            let options = {compact: true, ignoreComment: true, spaces: 4};
            let response = convert.xml2json(result.data, options);
            res.send(response)
        })
    })

    server.post('/meligue', upload.none(), function (req, res) {
        if (!req.body) return res.sendStatus(400)

        let callUrl = "http://200.187.179.82:81/ncall/servicos/click2call.php?magic=1333&origem=71000&numero="+req.body.fone_usuario+"&nome=meligue-"+req.body.nome_usuario;

        axios.get(callUrl)
        .then((result) => {
            res.send(result.data)
        })
    })

    // ----------------------------------------------------------------
    // Prices Routes
    // ----------------------------------------------------------------

    server.post('/getplanos', function (req, res) {

        let callUrl = "https://api.vhsys.com/v2/planos";

        axios.get(callUrl)
        .then((result) => {
            res.send(result.data)
        })
    })

    server.post('/getmei', function (req, res) {

        let callUrl = "https://api.vhsys.com/v2/planos-mei";
        
        axios.get(callUrl)
        .then((result) => {
            res.send(result.data)
        })
    })

    // ----------------------------------------------------------------
    // Email Routes
    // ----------------------------------------------------------------

    server.post('/querocertificado', upload.none(), function (req, res) {
        if (!req.body) return res.sendStatus(400)
        
        mailer.use('compile', hbs({
            viewPath: './pages/emails/certifDigiGrat/',
            extName: '.hbs'
        }))

        mailer.sendMail({
            from: 'noreply@vhsys.com',
            to: req.body.email,
            subject: 'Solicitação de contato - Pág. Certificado Digital Gratuito',
            template: 'cliente',
            context: {
                nome: req.body.nome,
                fone: req.body.fone
            }
        },function (err, response) {
            if(err) {
                res.send(err)
            } else {
                res.send(response)
            }
        })


    })

    // ----------------------------------------------------------------
    // Base Routing
    // ----------------------------------------------------------------

    server.get('*', (req, res) => {
        return handle(req, res)
    })

    server.listen(port, err => {
        if (err) throw err
        console.log(`> Ready on http://localhost:${port}`)
    })
})