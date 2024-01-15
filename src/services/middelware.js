import jwt from "jsonwebtoken" 
import { secretKey } from "./secretKey.js" 

const authMiddleware = (req, res, next) => {
    const token = req.cookies.token 
    if (token) {
        return next()
    }
    if (!token) {
        if (req.path !== '/login') {
            res.cookie('redirectPath', (req.baseUrl + req.path), { httpOnly: true }) 
        }
        return res.redirect('/login') 
    }
    try {
        const decoded = jwt.verify(token, secretKey) 
        req.user = decoded 
        next() 
    } catch (error) {
        console.error(error) 
        res.redirect('/login') 
    }
} 

export default authMiddleware 