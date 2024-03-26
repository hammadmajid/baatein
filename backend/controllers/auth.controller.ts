import { Request, Response } from 'express';

export const login = (_req: Request, res: Response) => {
    res.send('Logged in');
}

export const register = (_req: Request, res: Response) => {
    res.send('Registered');
}

export const logout = (_req: Request, res: Response) => {
    res.send('Logged out');
}