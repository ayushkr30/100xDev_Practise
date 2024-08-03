const jwt = require('jsonwebtoken');
const jwtPassword = 'secret';
const zod = require('zod');

const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6);

function signJwt(username, password){
    const usernameResponse = emailSchema.safeParse(username);
    const passwordResponse = passwordSchema.safeParse(password);
    if(!usernameResponse.success || !passwordResponse.success){
        return null;
    }

    const signature = jwt.sign({username}, jwtPassword);

    return signature;
}

const ans = signJwt("dijbvskbvwiqrb", "wjvsvebksbvn")
console.log(ans);

function verifyJwt(token) {
    let ans = true;
    try {
        jwt.verify(token, jwtPassword);
    }
    catch(e){
        ans = fasle;
    }
    return ans;
}

function decodeJwt(token) {
    const decoded = jwr.decode(token);
    if(decoded){
        return true;
    }
    else {
        return false;
    }

}