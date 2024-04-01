import { producto, pedido, proveedor, factura } from "../models/models";
import express, { Request, Response } from "express";


const app = express();

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

// PRODUCTOS
const getProductsAll = (req:Request, res:Response) => {
    res.json(productos);
}

const getProductId = (req:Request, res:Response) => {
    const id = parseInt(req.body.id);
    const product = productos.find(prod => prod.id === id);
    
    if(!product){
        res.status(404).send("No items found");
    }

    res.json(product);
}

const newProduct = (req:Request, res: Response) => {
    const id = parseInt(req.body.id);
    const product = productos.find(prod => prod.id === id);

    if(!product){
        productos = [...productos, req.body];
    }

    res.status(404).send("There's an item with the same ID");
}

const updateProduct = (req:Request, res:Response) => {
    const id = parseInt(req.body.id);
    const product = productos.find(prod => prod.id === id);

    if(!product) {
        res.status(404).send("No items found");
    }

    const updatedProd = {...product, ...req.body};
    productos = productos.map(prod => prod.id === updatedProd.id ? updatedProd : prod);
    
    res.send("Success");
}

const deleteProduct = (req:Request, res:Response) => {
    const id = parseInt(req.body.id);
    const product = productos.find(prod => prod.id === id);

    if(!product) {
        res.status(404).send("No items found");
    }

    productos = productos.filter(prod => prod.id !== id);
    res.send("Success");
}

// PEDIDOS
const getOrdersAll = (req:Request, res:Response) => {
    res.json(pedidos);
}

const getOrderId = (req:Request, res:Response) => {
    const id = parseInt(req.body.id);
    const order = pedidos.find(ord => ord.id === id);
    
    if(!order){
        res.status(404).send("No items found");
    }

    res.json(order);
}

const newOrder = (req:Request, res: Response) => {
    const id = parseInt(req.body.id);
    const order = pedidos.find(ord => ord.id === id);

    if(!order){
        pedidos = [...pedidos, req.body];
    }

    res.status(404).send("There's an item with the same ID");
}

const updateOrder = (req:Request, res:Response) => {
    const id = parseInt(req.body.id);
    const order = pedidos.find(ord => ord.id === id);

    if(!order) {
        res.status(404).send("No items found");
    }

    const updatedOrd = {...order, ...req.body};
    pedidos = pedidos.map(ord => ord.id === updatedOrd.id ? updatedOrd : ord);
    
    res.send("Success");
}

const deleteOrder = (req:Request, res:Response) => {
    const id = parseInt(req.body.id);
    const order = pedidos.find(prod => prod.id === id);

    if(!order) {
        res.status(404).send("No items found");
    }

    pedidos = pedidos.filter(ord => ord.id !== id);
    res.send("Success");
}

// PROVEEDORES
const getProvidersAll = (req:Request, res:Response) => {
    res.json(proveedores);
}

const getProviderId = (req:Request, res:Response) => {
    const id = parseInt(req.body.id);
    const provider = proveedores.find(prov => prov.id === id);
    
    if(!provider){
        res.status(404).send("No items found");
    }

    res.json(provider);
}

const newProvider = (req:Request, res: Response) => {
    const id = parseInt(req.body.id);
    const provider = proveedores.find(prov => prov.id === id);

    if(!provider){
        proveedores = [...proveedores, req.body];
    }

    res.status(404).send("There's an item with the same ID");
}

const updateProvider = (req:Request, res:Response) => {
    const id = parseInt(req.body.id);
    const provider = proveedores.find(prov => prov.id === id);

    if(!provider) {
        res.status(404).send("No items found");
    }

    const updatedProv = {...provider, ...req.body};
    proveedores = proveedores.map(prov => prov.id === updatedProv.id ? updatedProv : prov);
    
    res.send("Success");
}

const deleteProvider = (req:Request, res:Response) => {
    const id = parseInt(req.body.id);
    const provider = proveedores.find(prov => prov.id === id);

    if(!provider) {
        res.status(404).send("No items found");
    }

    proveedores = proveedores.filter(prov => prov.id !== id);
    res.send("Success");
}

// FACTURAS
const getBillsAll = (req:Request, res:Response) => {
    res.json(facturas);
}

const getBillId = (req:Request, res:Response) => {
    const id = parseInt(req.body.id);
    const bill = facturas.find(bll => bll.id === id);
    
    if(!bill){
        res.status(404).send("No items found");
    }

    res.json(bill);
}

const newBill = (req:Request, res: Response) => {
    const id = parseInt(req.body.id);
    const bill = facturas.find(bll => bll.id === id);

    if(!bill){
        facturas = [...facturas, req.body];
    }

    res.status(404).send("There's an item with the same ID");
}

const updateBill = (req:Request, res:Response) => {
    const id = parseInt(req.body.id);
    const bill = facturas.find(bll => bll.id === id);

    if(!bill) {
        res.status(404).send("No items found");
    }

    const updatedBill = {...bill, ...req.body};
    facturas = facturas.map(bll => bll.id === updatedBill.id ? updatedBill : bll);
    
    res.send("Success");
}

const deleteBill = (req:Request, res:Response) => {
    const id = parseInt(req.body.id);
    const bill = facturas.find(bll => bll.id === id);

    if(!bill) {
        res.status(404).send("No items found");
    }

    facturas = facturas.filter(bll => bll.id !== id);
    res.send("Success");
}