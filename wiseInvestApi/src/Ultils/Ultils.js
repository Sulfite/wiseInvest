const crypto = require("crypto");
const jwt = require("jsonwebtoken");

const hash = (password) => {
	password = password.split("").reverse().join();
	password = crypto.createHash(process.env.ALGORITHM).update(password).digest('hex');

	let salt = password.substring(password.length-10,password.length);
	password = crypto.createHash(process.env.ALGORITHM).update(salt + password).digest('hex');
	return password;
};

const isNullOrEmpty = (value) => {
	if (value === null || value === "")
        return true
	else
        return false
};

const isValidJson = (json) => {
    try {
        JSON.parse(json);
        return true;
    } catch (error) {
        return false
    }
};

const isValidToken = (req, res, next) => {
	const token = req.headers['x-access-token'];

	if(!token) return res.status(401).json({ auth: false, message: 'No token provided.' });

	jwt.verify(token, process.env.SECRET_TOKEN_AUTENTICACAO, function(err, decoded) {
		if(err) return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });

		req.userID = decoded.id;
		next();
	});
}

module.exports = {
	hash,
	isNullOrEmpty,
    isValidJson,
	isValidToken
}