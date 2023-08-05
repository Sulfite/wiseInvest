const { isNullOrEmpty, hash } = require("../Ultils/Ultils");
const jwt = require("jsonwebtoken");
const authenticationRepository = require("../Repositories/authenticationRepositories");

const authenticationService = async (user, password) => {
	let passwordCrip = hash(password);
	const db = await authenticationRepository.authenticationRepository(user);

	if (isNullOrEmpty(db))
		throw '9000.Usuario ou senha Inválidos';

	if (db.password === passwordCrip) {
		let id = db._id;
		const token = jwt.sign({ id }, process.env.SECRET_TOKEN_AUTENTICACAO, {
			// expiresIn: 300 // expires in 5min
			expiresIn: 150
		});

		return { auth: true, token: token };
	}
	else {
		throw '9000.Usuario ou senha Inválidos.';
	} 
}

module.exports = {
	authenticationService
}