import { Request, Response } from 'express';
import {
    encrypt,
    generateKeys,
    decrypt,
    createSignature,
    verifySignature,
} from '../utils/cryptography';

const encryptionTest = async (req: Request, res: Response) => {
    const { plainText, publicKey } = req.body;
    const cipherText = encrypt(JSON.stringify(plainText), publicKey);
    res.send(cipherText);
};

const decryptionTest = async (req: Request, res: Response) => {
    const { cipherText, privateKey } = req.body;
    const plainText = decrypt(cipherText, privateKey);
    res.send(plainText);
};

const generateKeyPair = async (req: Request, res: Response) => {
    res.send(generateKeys());
};

const generateSignature = async (req: Request, res: Response) => {
    const { plainText, privateKey } = req.body;
    const signature = createSignature(JSON.stringify(plainText), privateKey);
    res.send(signature);
};

const verifySign = async (req: Request, res: Response) => {
    const { plainText, signature, publicKey } = req.body;
    const verified = verifySignature(
        JSON.stringify(plainText),
        signature,
        publicKey
    );
    res.send(verified);
};
export {
    encryptionTest,
    generateKeyPair,
    decryptionTest,
    generateSignature,
    verifySign,
};
