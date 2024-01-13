import crypto from 'node:crypto'

const generateSecretKey = () => {
    return crypto.randomBytes(32).toString('hex');
};

export const secretKey = generateSecretKey();