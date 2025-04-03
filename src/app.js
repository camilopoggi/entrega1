const express = require('express');
const app = express();
app.use(express.json());
const productsRouter = require('./routes/products');
const cartsRouter = require('./routes/carts');
const PORT = 8080;

app.use('/api/products', productsRouter);
app.use('/api/carts', cartsRouter);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

// carts.json y products.json ya existen debido a que se crearon al testear el proyecto con Postman