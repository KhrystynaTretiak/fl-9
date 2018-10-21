module.exports.deleteAuth = (req, res, next) => {
    if (req.method === 'DELETE') {
        const auth = req.headers['authorization'];
        if (auth === 'X-Password qwerty') {
            next();
        } else {
            res.status(401);
            res.json({
                status: 401,
                message: 'Unauthorized'
            });
        }
        
    } else  {
        next();
    }
}

