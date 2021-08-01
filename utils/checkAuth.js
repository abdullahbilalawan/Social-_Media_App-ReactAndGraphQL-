const jwt = require('jsonwebtoken');
const AuthenticationError = require('apollo-server');


module.exports = (context) => {
	const authHeader = context.req.headers.authorization;
	if (authHeader) {
		const token = authHeader.split('Bearer ')[1];
		console.log(token);

			try {
				const user = jwt.verify(token,'SEC');
				return user;
			} catch (e) {
                throw Error('Invalid/Expired token')
            }
		
	}
};
