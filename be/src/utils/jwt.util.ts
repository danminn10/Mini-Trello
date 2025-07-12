import jwt from 'jsonwebtoken';

export const generateJWT = (payload: object) => {
    return jwt.sign(payload, process.env.JWT_SECRET!, {
        expiresIn: '7d',
    })
}
export const verifyJWT = (token: string) => {
    return jwt.verify(token, process.env.JWT_SECRET as string);
}