import UserModel from '../models/user.model';


const UserController = {
  userSignup(req, res) {
    if (!req.body.email || !req.body.firstName || !req.body.lastName || !req.body.password) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    const signUpData = UserModel.userSignup(req.body);
    return res.status(201).json({
      status: res.statusCode,
      message: 'Account created successfully',
      signUpData
    });
  },
  userLogin(req, res) {
    if (!req.body.email && !req.body.password) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    const loginData = UserModel.userLogin(req.body);
    return res.status(200).json({
      status: res.statusCode,
      message: 'Login successful',
      loginData
    });
  }
};

export default UserController;
