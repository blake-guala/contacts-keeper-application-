import jwt from 'jsonwebtoken'
import config from 'config'

const middleware = (req, res, next) => {
    const token = req.header('x-auth-token')

    if (!token) {
        return res.status(401).json({ msg: 'authorization failed' })
    }

    const secret = config.get('jwtSecret')

    try {
        const payload = jwt.verify(token, secret)

        req.user = payload.user
        
        //The next is a function that can be called to move the execution past the piece of middleware and into the actual app.get server response.
        next()
    } catch (error) {
        console.error(error.message);
        return res.status(401).json({ msg: 'access denied' })
    }
}

export default middleware


//The next is a function that can be called to move the execution past the piece of middleware and into the actual app.get server response.