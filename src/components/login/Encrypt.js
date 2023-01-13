import CryptoJS from "crypto-js";

const secretKey = "12345678901234567890123456789012";
const iv = "abcdefghijklmnop";

export const encrypt = (text) => {
  const cipher = CryptoJS.AES.encrypt(
    text,
    CryptoJS.enc.Utf8.parse(secretKey),
    {
      iv: CryptoJS.enc.Utf8.parse(iv),
      padding: CryptoJS.pad.Pkcs7,
      mode: CryptoJS.mode.CBC,
    }
  );
  return cipher.toString();
};
