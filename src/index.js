/**
 * @file index.js
 *
 * Index module to easily import the primary components of AES-128
 * decryption. Like this:
 *
 * ```js
 * import {Decrypter, decrypt, AsyncStream} from 'aes-decrypter';
 * ```
 */
import {decrypt, Decrypter} from './decrypter';

export default {
  decrypt,
  Decrypter,
};
