const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        message: 'API Lab 3 Full Stack',
        status: 'running',
        version: '1.0.0'
    });
});

app.get('/health', (req, res) => {
    res.json({
        status: 'healthy',
        timestamp: new Date().toISOString()
    });
});

app.get('/api/products', (req, res) => {
    res.json([
        { id: 1, name: 'Produit A', prix: 100 },
        { id: 2, name: 'Produit B', prix: 200 },
        { id: 3, name: 'Produit C', prix: 300 }
    ]);
});

app.listen(port, () => {
    console.log('API Lab 3 demarree sur le port ' + port);
});
