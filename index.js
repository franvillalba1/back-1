import express from 'express';

const PORT = 8080;
const app = express();
app.use(express.json());

const server = app.listen(PORT, () => {
    console.log(`servidor corriendo en el puerto ${PORT}`)
});

server.on("request", () => {
    console.log("solicitud recibida");
});

const products = [];

app.get("/", (req, res) => {
    console.log("ruta get");
    res.json(products);
})

let idActual = 1
function crearProduct (title, description, code, price, status, stock, category) {
    const product = {
        id: idActual,
        title,
        description,
        code,
        price,
        status,
        stock,
        category,
    };
    idActual++;
    products.push(product);
}

app.post("/", (req, res) => {
    console.log("ruta post ");
    console.log(req.body);
    crearProduct(req.body.title, req.body.description, req.body.code, req.body.price, req.body.status, req.body.stock, req.body.category)
    res.end("ruta post")
})