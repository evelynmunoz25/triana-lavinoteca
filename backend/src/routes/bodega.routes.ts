import { Router } from "express";
import { BodegaController } from "../controllers/bodega.controllers";

let trianaController = new BodegaController();

const enrutadorTriana = Router();

enrutadorTriana.route('/triana_bodega').get(trianaController.listarTrianaBodega); //obtener datos y mostrarlo
enrutadorTriana.route('/triana_bodega').post(trianaController.guardarTrianaBodega); //guardar datos en la base de datos
enrutadorTriana.route('/triana_bodega/:codigo_triana_bodega').delete(trianaController.eliminarTrianaBodega); //elimina datos de la base de datos
enrutadorTriana.route('/triana_bodega/:codigo_triana_bodega').put(trianaController.actualizarTrianaBodega); //actualiza datos de la base de datos
enrutadorTriana.route('/triana_bodega/:codigo_triana_bodega').get(trianaController.obtenerUnTrianaBodega); //obtiene un valor de a bae de atos
export default enrutadorTriana;

