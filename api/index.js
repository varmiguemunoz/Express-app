const express = require ('express');
const path = require('path');
const cors = require ('cors')
const routerApi = require('./routes')
const {logErrors, errorHandler, boomErrorHandler} = require('./middlewares/error.handler')

const app = express();
const port = process.env.PORT;
const url = `http://localhost:${port}`

//middlerwares donde recibimos la informacion de un post en nuestra api
app.use(express.json());
//cors para dar acceso a otras direcciones url
app.use(cors());

//Para dar acceso a sitios especificos
// const whiteList = ['mydomain.com', 'mydonamin2.com']
// const options = {
//   origin: (origin, callback) => {
//     if(whiteList.includes(origin)) {
//       callback(null, true)
//     } else {
//       callback(new Error('no permitido'))
//     }
//   }
// }

// app.use(cors(options));

app.use(express.static(path.join(__dirname, 'public')));

// Ruta de inicio
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

routerApi(app)

//debe ponerse el middlerwares en orden para capturar correctamente los errores
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log(url);
})

