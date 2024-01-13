import jwt from "jsonwebtoken";
import { secretKey } from "./secretKey.js";

const authMiddleware = (req, res, next) => {
    const token = req.cookies.token;

    if (!token) {
        return res.redirect('/login'); // Si no hay token, redirige a la página de login
    }

    try {
        const decoded = jwt.verify(token, secretKey);
        req.user = decoded;
        next(); // Continúa con la siguiente función en la cadena de middleware
    } catch (error) {
        console.error(error);
        res.redirect('/login'); // Si hay un error al verificar el token, redirige a la página de login
    }
};
export default authMiddleware;