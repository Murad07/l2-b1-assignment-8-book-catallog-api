"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const config_1 = __importDefault(require("../../../config"));
const jwtHelpers_1 = require("../../../helpers/jwtHelpers");
const auth_service_1 = require("./auth.service");
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        // Find the user by email
        const user = yield auth_service_1.AuthService.findByEmail(email);
        if (!user) {
            return res.status(401).json({ message: 'Authentication failed' });
        }
        // Check if the entered password matches the stored hashed password
        const passwordMatch = yield bcrypt_1.default.compare(password, user.password);
        console.log('m: ' + passwordMatch);
        if (!passwordMatch) {
            return res.status(401).json({ message: 'Password Not match' });
        }
        // Generate a JWT token for the authenticated user
        const { id: userId, role } = user;
        const accessToken = jwtHelpers_1.jwtHelpers.createToken({ userId, role }, config_1.default.jwt.secret, config_1.default.jwt.expires_in);
        // const token = jwt.sign({ userId: user.id }, 'your-secret-key', {
        //   expiresIn: '1h',
        // });
        res.status(200).json({
            message: 'Authentication successful',
            accessToken,
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Authentication failed' });
    }
});
exports.AuthController = {
    loginUser,
};
