// auth.controller.ts

import bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { AuthService } from './auth.service';

const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    // Find the user by email
    const user = await AuthService.findByEmail(email);

    if (!user) {
      return res.status(401).json({ message: 'Authentication failed' });
    }

    // Check if the entered password matches the stored hashed password
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: 'Authentication failed' });
    }

    // Generate a JWT token for the authenticated user
    const token = jwt.sign({ userId: user.id }, 'your-secret-key', {
      expiresIn: '1h',
    });

    res.status(200).json({
      message: 'Authentication successful',
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Authentication failed' });
  }
};

export const AuthController = {
  loginUser,
};
