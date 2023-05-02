const jwt = require("jsonwebtoken")

const jwtTest = () => {
    try {
        // when a user is logged in, we create a token
            // signing up for app
            // logging into app

        // crate a payload of user data
        const payload = {
            name: 'Weston',
            id: '2rhfbfht55783',
            email: 'w@b.com',
            isAdmin: false,
            // DO NOT PUT THE USER'S PASSWORD
        }
        // we need to have a secret to sign the jwt with
        const secret = "I ate candy for breakfast"
        const token = jwt.sign(payload, secret)

        // signature = hashFunction({ payload info } + secret)
        // when verifying a request, we decode and verify in the same step
        const decode = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiV2VzdG9uIiwiaWQiOiIycmhmYmZodDU1NzgzIiwiZW1haWwiOiJ3QGIuY29tIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTY4MzA1MzAwOX0.uBe20nDt21chSM25VmnbfcFBk8lIGOebiTCd12Ul1us", secret)
        console.log(decode)

        console.log(token)
    } catch(err){
        // a problem with a token will land us down here in the catch 
        console.log(err)
    }
}

jwtTest()