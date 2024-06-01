import { Router } from "express";
import { registrar } from "../controllers/Usuarioscontroller.js";


const Rutausuarios = Router();

Rutausuarios.post("/registrar", registrar);


export default Rutausuarios;