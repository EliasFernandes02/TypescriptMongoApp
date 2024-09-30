import { Request, Response } from 'express';
import UserRepository from '../repository/userRepository';

export const createUser = async (req: Request, res: Response): Promise<Response> => {
    try {
        const user = await UserRepository.create(req.body);
        return res.status(201).json(user);
    } catch (error) {
        return res.status(500).json({ message: 'Erro ao criar usuário', error });
    }
};

export const getUsers = async (req: Request, res: Response): Promise<Response> => {
    try {
        const users = await UserRepository.findAll();
        return res.status(200).json(users);
    } catch (error) {
        return res.status(500).json({ message: 'Erro ao listar usuários', error });
    }
};

export const getUserById = async (req: Request, res: Response): Promise<Response> => {
    try {
        const user = await UserRepository.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }
        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json({ message: 'Erro ao buscar usuário', error });
    }
};

export const updateUser = async (req: Request, res: Response): Promise<Response> => {
    try {
        const user = await UserRepository.update(req.params.id, req.body);
        if (!user) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }
        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json({ message: 'Erro ao atualizar usuário', error });
    }
};

export const deleteUser = async (req: Request, res: Response): Promise<Response> => {
    try {
        const user = await UserRepository.delete(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }
        return res.status(200).json({ message: 'Usuário deletado com sucesso' });
    } catch (error) {
        return res.status(500).json({ message: 'Erro ao deletar usuário', error });
    }
};
