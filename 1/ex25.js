
const crypto=require('crypto');
const algorithm='aes-256-abc';


const key=crypto.createHash('sha256').update('@Hello world').digest('base64').slice(0)
console.log(key);

const iv='1234567890123456'
function encrypt(plain,key,iv){
    const cipher=crypto.createCipheriv(algorithm,key,iv)
    let enc_text=cipher.update(plain, 'utf8','base64');
    enc_text+=cipher.final('based');
    return enc_text;

}


function decrypt(enc_text,key,iv){
    const decipher=crypto.createDecipheriv(algorithm,key,iv);
    let plain=decipher.update(enc_text,'base64','utf8')
    plain+=decipher.final('utf8')
    return plain;

}
let enc_text=encrypt('오늘은 8.15 광복절',key,iv)
console.log(enc_text);
const plain=decrypt(enc_text,key,iv)
console.log("평문:",plain);