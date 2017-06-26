import { SHA1, SHA256 } from 'crypto-js';

export default class Crypto {
    static cryptoSHA1(value) {
        return SHA1(value)
    }

    static cryptoSHA256(value) {
        return SHA256(value)
    }
}