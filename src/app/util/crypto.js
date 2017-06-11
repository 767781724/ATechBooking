// @flow
import { SHA1, SHA256 } from 'crypto-js';

export default class Crypto {
    static cryptoSHA1(value: string): string {
        return SHA1(value)
    }

    static cryptoSHA256(value: string): string {
        return SHA256(value)
    }
}