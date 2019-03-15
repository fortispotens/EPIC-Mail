import UserModel from '../models/user.model';


const UserController = {
  userSignup(req, res) {
    if (!req.body.email || !req.body.firstname || !req.body.lastname || !req.body.password) {
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
    if (!req.body.email || !req.body.password) {
      return res.status(400).json({ message: 'Enter your Email or Password' });
    }
    const loginData = UserModel.userSignup(req.body);
    return res.status(201).json({
      status: res.statusCode,
      message: 'Login was successful',
      loginData
    });
  }
};

export default UserController;
