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
    }
];

// PRODUCTOS
const getProductsAll = (req:Request, res:Response) => {
    res.json(productos);
}

const getProductsId = (req:Request, res:Response) => {
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