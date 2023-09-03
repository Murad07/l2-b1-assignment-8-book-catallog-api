import bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import { Secret } from 'jsonwebtoken';
import config from '../../../config';
import { jwtHelpers } from '../../../helpers/jwtHelpers';
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
    console.log('m: ' + passwordMatch);
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Password Not match' });
    }

    // Generate a JWT token for the authenticated user
    const { id: userId, role } = user;
    const accessToken = jwtHelpers.createToken(
      { userId, role },
      config.jwt.secret as Secret,
      config.jwt.expires_in as string
    );

    // const token = jwt.sign({ userId: user.id }, 'your-secret-key', {
    //   expiresIn: '1h',
    // });

    res.status(200).json({
      message: 'Authentication successful',
      accessToken,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Authentication failed' });
  }
};

export const AuthController = {
  loginUser,
};
