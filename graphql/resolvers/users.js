const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const SECRET_KEY = require('../../config');
const { UserInputError } = require('apollo-server');
const {
	validateRegisterInput,
	validateLoginInput,
} = require('../../utils/validator');

function generateToken(user) {
    return jwt.sign(
        {
            id: user.id,
            email: user.email,
            username: user.username,
        },
        'SEC',
        { expiresIn: '1h' }
    );
}




module.exports = {
	Mutation: {
		async login(_, { username, password }, context, info) {
			const { valid, errors } = validateLoginInput(
				username,
				password
			);

			if(!valid) {
				throw new UserInputError('Not valid');

			}
			const user = await User.findOne({ username });
			if (!user) {
				errors.general = 'User not found';
				throw new UserInputError('users not found');
			}
            const match = await bcrypt.compare(password, user.password);
            if(!match) {
                errors.general = 'Wrong credentials';
				throw new UserInputError('credentials not found');
            }
            const token = generateToken(user);

            return {
				...user._doc,
				id: user._id,
				token,
			};


		},
		async register(
			_,
			{
				registerInput: {
					username,
					email,
					password,
					confirmPassword,
				},
			},
			context,
			info
		) {
			// TODO: validate user data
			const { valid, errors } = validateRegisterInput(
				username,
				email,
				password,
				confirmPassword
			);
			if (!valid) {
				throw new UserInputError('Errors', { errors });
			}
			// const user = user.findOne({username})
			// if(user){
			//         throw new UserInputError('this username is taken',{
			//             errors: {
			//                 username: 'this username is taken'
			//             }
			//         })
			// }
			password = await bcrypt.hash(password, 12);
			const newUser = new User({
				email,
				username,
				password,
				createdAt: new Date().toISOString(),
			});
			const res = await newUser.save();
			console.log(res.id);
			const token = jwt.sign(
				{
					id: res.id,
					email: res.email,
					username: res.username,
				},
				'SECRET',
				{ expiresIn: '1h' }
			);
			return {
				...res._doc,
				id: res._id,
				token,
			};
		},
	},
};
