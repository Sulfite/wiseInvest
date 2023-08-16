// const db = require("../db/dbMongo");

const authenticationRepository = async (user) => {

	// const users = await db.Mongoose.model('users', db.UserSchema, 'users');
	// try {
	//   const docs = await users.findOne({
	// 								  username: user
	// 							   })
	// 						  .exec();
	//   return docs;
	// } catch (error) {
	//   return error;
	// }
}

module.exports = {
	authenticationRepository
}