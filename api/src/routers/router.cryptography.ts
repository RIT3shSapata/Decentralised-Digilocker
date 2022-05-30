import { Router } from 'express';
import {
    decryptionTest,
    encryptionTest,
    generateKeyPair,
    generateSignature,
    verifySign,
} from '../controllers/controller.cryptography';

const router = Router();

router.post('/encryptionTest', encryptionTest);
router.post('/decryptionTest', decryptionTest);
router.get('/getKeyPair', generateKeyPair);
router.post('/generateSignature', generateSignature);
router.post('/verifySign', verifySign);

export default router;
