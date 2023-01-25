const UserSchema = require('./mongoSchemas/UserSchema')

async function userRegister(username, password) {
    var Userdata = new UserSchema({
        username,
        password
    });


    await Userdata.save()
}

async function userLogin(username, Password) {

    console.log(username)

    if (await UserSchema.exists({ username })) {

        const pwd = UserSchema.match({ username: username }).schema.password

        console.log(pwd)

        return 200;
    }

    if (await UserSchema.exists({ username }) === null) {
        return 404;
    }
}

module.exports = {
    userRegister,
    userLogin
}