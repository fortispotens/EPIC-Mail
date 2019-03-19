import UserModel from '../models/user.model';


class UserController {
  static userSignup(req, res) {
    if (!req.body.email || !req.body.firstName || !req.body.lastName || !req.body.password) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    const signUpInfo = UserModel.signup(req.body);
    return res.status(201).json({
      status: res.statusCode,
      message: 'Account created successfully',
      signUpInfo
    });
  }

  static userLogin(req, res) {
    if (!req.body.email || !req.body.password) {
      return res.status(400).json({ message: 'Enter your Email or Password' });
    }
    const loginInfo = UserModel.login(req.body);
    return res.status(200).json({
      status: res.statusCode,
      message: 'Login was successful',
      loginInfo
    });
  }
}

export default UserController;
