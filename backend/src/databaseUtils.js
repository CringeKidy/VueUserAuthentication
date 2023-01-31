const UserSchema = require('./mongoSchemas/UserSchema')
const bcrypt = require('bcrypt');


async function userRegister(username, password) {

    const docs = await UserSchema.find({ username: username });

    if (docs.length) {
        return 201
    }

    bcrypt.genSalt(10, (err, salt) => {
        if (err) {
            console.log(err);
            return 404;
        }

        bcrypt.hash(password, salt, async (err, hash) => {
            var Userdata = new UserSchema({
                username,
                password: hash
            });

            await Userdata.save()
        })
    })


    return 200;
}

async function userLogin(username, password) {
    const docs = await UserSchema.find({ username: username });

    if (!docs.length) {
        return 404;
    }

    bcrypt.compare(password, docs[0].password).then((result) => {
        return 404;
    })

    return 200;
}

module.exports = {
    userRegister,
    userLogin
}