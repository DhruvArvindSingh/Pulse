import { createHash } from 'crypto';

function hash(string) {
    return createHash('sha256').update(string).digest('hex');
}

export default function hash_pass(req, res, next) {
    console.log("hash_pass called");
    console.log("req.body =", req.body);
    req.body.password = hash(req.body.password);
    next();
}