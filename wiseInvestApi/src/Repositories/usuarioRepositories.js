const db = require('../db/dbMongo');

const loginRepository = async (user) => {
  const users = await db.Mongoose.model('users', db.UserSchema, 'users');
  try {
    const docs = await users.findOne({
                                    username: user
                                 })
                            .exec();
    return docs;
  } catch (error) {
    return error;
  }
}

const  registerRepository = async (data) => {
  const users = await db.Mongoose.model('users', db.UserSchema, 'users');
  const user = new users(data);
  
  try {
    let newUser = await user.save();
    return newUser._id;
  } catch (error) {
    return error;
  }
}

const updateRepository = async (id, data) => {

  try {
    const users = await db.Mongoose.model('users', db.UserSchema, 'users');
    const user = await users.updateOne({ _id: id }, { $set: data } );
    return user;
  } catch (error) {
    throw error;
  }
}

const VerifyUserRepository = async (id) => {
  const users = await db.Mongoose.model('users', db.UserSchema, 'users');
  try {
    const docs = await users.findOne({ _id: id })
                            .exec();
    return docs;
  } catch (error) {
    return error;
  }
}


const deleteRepository = async (id) => {

  return id;
}

module.exports= {
  loginRepository,
  registerRepository,
  updateRepository,
  VerifyUserRepository,
  deleteRepository
}