var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })

module.exports = (app) => {
    app.get('/', (req, res) => {
        res.sendFile(process.cwd() + '/public/index.html')
    })
    
    app.get('/upload', (req, res) => {
        res.sendFile(process.cwd() + '/public/index.html')
    })
    
    app.post('/upload', upload.single('submission'), (req, res) => {
        if(typeof req.file === 'undefined') {
            res.send({
                "errors": {
                    "message": "No file was uploaded."
                }
            })
        } else {
            res.send({
                name: req.file.originalname,
                size: req.file.size
            })
        }
    })
}