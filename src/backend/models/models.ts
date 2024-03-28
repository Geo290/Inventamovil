export type producto = {
    id: number,
    id_prov: number,
    nombre: string,
    stock: number,
    precio: number
}

export type pedido = {
    id: number,
    id_prod: number,
    id_fact: number,
    costo: number,
    cant_prod: number,
    entrega: string,
    status: string
}

export type proveedor = {
    id: number,
    nombre: string,
    no_tel: number,
    email: string
}

export type factura = {
    id: number,
    id_ped: number,
    no_cliente: number,
    dir_empresa: string,
    tel_empresa: number,
    mail_empresa: string,
    descripcion: string,
    sub_total: number,
    iva: number,
    total: number
}