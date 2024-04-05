import { Server } from 'azle';
import express, { Request } from 'express';
import { proveedor, producto, pedido, factura } from './models/models';

let productos: producto[] = [
    {
        id: 1,
        id_prov: 1,
        nombre: '',
        stock: 10,
        precio: 10
    },
];

let pedidos: pedido[] = [
    {
        id: 1,
        id_prod: 1,
        id_fact: 1,
        costo: 100,
        cant_prod: 10,
        entrega: '01-04-2024',
        status: 'En transito'
    },
];

let proveedores: proveedor[] = [
    {
        id: 1,
        nombre: 'Granjas el Vacón',
        no_tel: 4561990330,
        email: 'granjasvacon@gmail.com'
    },
];

let facturas: factura[] = [
    {
        id: 1,
        id_ped: 1,
        no_cliente: 1,
        dir_empresa: 'Av. Universidad #120, Col. San Cayetano',
        tel_empresa: 4492036754,
        mail_empresa: 'inventamovil@gmail.com',
        descripcion: 'Diez litros de leshe',
        sub_total: 100,
        iva: 15,
        total: 115
    },
];


export default Server(() => {
    const app = express();

    app.use(express.json());

    //PRODUCTOS
    app.get('/productos', (req, res) => {
        res.json(productos);
    })

    app.get('/productos/:id', (req, res) => {
        const id = parseInt(req.params.id);
        const product = productos.find(prod => prod.id === id);

        if (!product) {
            res.status(404).send("No items found");
        }

        res.json(product);
    })

    app.post('/productos', (req, res) => {
        const id = parseInt(req.body.id);
        const product = productos.find(prod => prod.id === id);

        if (!product) {
            productos = [...productos, req.body];
            res.send("Ok")
        }

        res.status(404).send("There's an item with the same ID");
    })

    app.put('/productos/:id', (req, res) => {
        const id = parseInt(req.params.id);
        const product = productos.find(prod => prod.id === id);

        if (!product) {
            res.status(404).send("No items found");
        }

        const updatedProd = { ...product, ...req.body };
        productos = productos.map(prod => prod.id === updatedProd.id ? updatedProd : prod);

        res.send("Success");
    })

    app.delete('/productos/:id', (req, res) => {
        const id = parseInt(req.params.id);
        const product = productos.find(prod => prod.id === id);
    
        if(!product) {
            res.status(404).send("No items found");
        }
    
        productos = productos.filter(prod => prod.id !== id);
        res.send("Success");
    })

    //PEDIDOS
    app.get('/pedidos', (req, res) => {
        res.json(pedidos);
    })

    app.get('/pedidos/:id', (req, res) => {
        const id = parseInt(req.params.id);
        const order = pedidos.find(ord => ord.id === id);
        
        if(!order){
            res.status(404).send("No items found");
        }
    
        res.json(order);
    })


    app.post('/pedidos', (req, res) => {
        const id = parseInt(req.body.id);
        const order = pedidos.find(ord => ord.id === id);
    
        if(!order){
            pedidos = [...pedidos, req.body];
        }
    
        res.status(404).send("There's an item with the same ID");
    })

    app.put('/pedidos/:id', (req, res) => {
        const id = parseInt(req.params.id);
        const order = pedidos.find(ord => ord.id === id);
    
        if(!order) {
            res.status(404).send("No items found");
        }
    
        const updatedOrd = {...order, ...req.body};
        pedidos = pedidos.map(ord => ord.id === updatedOrd.id ? updatedOrd : ord);
        
        res.send("Success");
    })

    app.delete('/pedidos/:id', (req, res) => {
        const id = parseInt(req.params.id);
        const order = pedidos.find(prod => prod.id === id);
    
        if(!order) {
            res.status(404).send("No items found");
        }
    
        pedidos = pedidos.filter(ord => ord.id !== id);
        res.send("Success");
    })

    //PROVEDORES
    app.get('/proveedores', (req, res) => {
        res.json(proveedores);
    });

    app.get('/proveedores/:id',(req, res) => {
        const id = parseInt(req.params.id);
        const provider = proveedores.find(prov => prov.id === id);
        
        if(!provider){
            res.status(404).send("No items found");
        }
    
        res.json(provider);
    });

    
    app.post('/proveedores', (req, res) => {
        const id = parseInt(req.body.id);
        const provider = proveedores.find(prov => prov.id === id);
    
        if(!provider){
            proveedores = [...proveedores, req.body];
        }
    
        res.status(404).send("There's an item with the same ID");
    });

    app.put('/proveedores/:id', (req, res) => {
        const id = parseInt(req.params.id);
        const provider = proveedores.find(prov => prov.id === id);
    
        if(!provider) {
            res.status(404).send("No items found");
        }
    
        const updatedProv = {...provider, ...req.body};
        proveedores = proveedores.map(prov => prov.id === updatedProv.id ? updatedProv : prov);
        
        res.send("Success");
    });


     app.delete('/proveedores/:id', (req, res) => {
        const id = parseInt(req.params.id);
        const provider = proveedores.find(prov => prov.id === id);
    
        if(!provider) {
            res.status(404).send("No items found");
        }
        proveedores = proveedores.filter(prov => prov.id !== id);
        res.send("Success");
    });

    //FACTURAS
    app.get('/facturas', (req, res) => {
        res.json(facturas);
    });

    app.get('/facturas/:id',(req, res) => {
        const id = parseInt(req.params.id);
        const bill = facturas.find(bll => bll.id === id);
        
        if(!bill){
            res.status(404).send("No items found");
        }
    
        res.json(bill);
    });

    app.post('/facturas', (req, res) => {
        const id = parseInt(req.body.id);
        const bill = facturas.find(bll => bll.id === id);
    
        if(!bill){
            facturas = [...facturas, req.body];
        }
    
        res.status(404).send("There's an item with the same ID");
    });

    app.put('/facturas/:id', (req, res) => {
        const id = parseInt(req.params.id);
        const bill = facturas.find(bll => bll.id === id);
    
        if(!bill) {
            res.status(404).send("No items found");
        }
    
        const updatedBill = {...bill, ...req.body};
        facturas = facturas.map(bll => bll.id === updatedBill.id ? updatedBill : bll);
        
        res.send("Success");
    });


    app.delete('/facturas/:id',  (req, res) => {
        const id = parseInt(req.params.id);
        const bill = facturas.find(bll => bll.id === id);
    
        if(!bill) {
            res.status(404).send("No items found");
        }
    
        facturas = facturas.filter(bll => bll.id !== id);
        res.send("Success");
    });


    app.use(express.static('/dist'));

    return app.listen();
});
