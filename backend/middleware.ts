import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const auth = (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.header("auth-token");

        if (!token) {
            throw new Error("Authentication failed. Token not provided.");
        }

        const data = jwt.verify(token, process.env.JWT_SECRET_KEY!);

        next();
    } catch (error) {
        res.status(401).send({ error: "Authentication failed. Invalid token." });
    }
}

export default auth;
