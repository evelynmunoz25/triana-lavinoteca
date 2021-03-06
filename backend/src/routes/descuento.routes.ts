import { Router } from "express";
import { DescuentoController } from "../controllers/descuento.controllers";

let trianaController = new DescuentoController();

const enrutadorTriana = Router();

enrutadorTriana.route('/triana_descuento').get(trianaController.listarTrianaDescuento); //obtener datos y mostrarlo
enrutadorTriana.route('/triana_descuento').post(trianaController.guardarTrianaDescuento); //guardar datos en la base de datos
enrutadorTriana.route('/triana_descuento/:codigo_triana_descuento').delete(trianaController.eliminarTrianaDescuento); //elimina datos de la base de datos
enrutadorTriana.route('/triana_descuento/:codigo_triana_descuento').put(trianaController.actualizarTrianaDescuento); //actualiza datos de la base de datos
enrutadorTriana.route('/triana_descuento/:codigo_triana_descuento').get(trianaController.obtenerUnTrianaDescuento); //obtiene un valor de a bae de atos
export default enrutadorTriana;

