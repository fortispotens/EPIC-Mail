import UserModel from '../models/user.model';

const UserController = {
  userSignup(req, res) {
    if (!req.body.email && !req.body.firstName && !req.body.lastName && !req.body.password) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    const signUp = MessageModel.userSignup(req.body);
    return res.status(201).json({
      status: statusCode,
      message: 'Account created successfully',
      data: { signUp }
    });
  },
  userLogin(req, res) {
    if (!req.body.email && !req.body.password) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    const login = UserModel.userLogin(req.body);
    return res.status(200).json({
      status: statusCode,
      message: 'Login successful',
      data: { login }
    });
  }
};

export default UserController;
