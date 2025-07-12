import { Request, Response, NextFunction } from 'express';
import { verifyJWT } from '@utils/jwt.util'

const jwtMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'No token provided' });
    }
    const token = authHeader.split(' ')[1];
    try {
        const decode = verifyJWT(token);
        req.user = decode as any;
        next();
    } catch (error) {
        return res.status(403).json({ message: 'Expired token' });
    }
}
export default jwtMiddleware;