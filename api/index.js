const express = require ('express');
const cors = require ('cors')
const routerApi = require('./routes')
const {logErrors, errorHandler, boomErrorHandler} = require('./middlewares/error.handler')


const app = express();
const port = process.env.PORT || 3000;
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

app.get('/api', (req, res) => {
  res.send('Welcome!')
})

routerApi(app)

//debe ponerse el middlerwares en orden para capturar correctamente los errores
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log(url);
})

