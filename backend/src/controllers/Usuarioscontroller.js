import { pool } from '../database/conexion.js'

export const registrar = async (req,res)=>{
    try {
        const {nombre,apellido, correo} = req.body;

        const [result] = await pool.query("INSERT INTO personas (nombre,apellido, correo) VALUES (?,?, ?)",[nombre,apellido, correo]);

        if (result.affectedRows > 0) {
            res.status(200).json({
                status:200,
                message: 'Se registro con exito',
                result:result
            });
        }else{
            res.status(403).json({
                status:500,
                message:error.message || 'Error en el sistema'
            })
        }
    } catch (error) {
        
    }
}