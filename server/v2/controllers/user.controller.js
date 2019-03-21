import dotenv from 'dotenv';
import connectDB from '../../connectDB';
import UserModel from '../models/user.model';


class UserController {
  static userSignup(req, res) {
    // if (!req.body.email || !req.body.firstame || !req.body.lastame || !req.body.password) {
    //   return res.status(400).json({ message: 'All fields are required' });
    // }
    const {
      email,
      firstname,
      lastname,
      password
    } = req.body;

    const query = `INSERT INTO users (email, firstname, lastname, password)
                    VALUES('${email}','${firstname}','${lastname}','${password}') returning * `;
    return connectDB.query(query)
      .then((result) => {
        if (result.rowCount >= 1) {
          return res.status(200).send({ status: 200, message: 'User Account created successfully', userData: result.rows[0] });
        }

        return res.status(500).send({ staus: 500, message: 'The user could not be saved' });
      })
      .catch((error) => {
        if (error.detail === `Key (email)=(${email}) already exists.`) {
          return res.status(400).send({ status: 'error', message: 'Account already exist' });
        }
        return res.status(500).send({ status: 500, message: 'Error creating account' });
      });
  }

  static userLogin(req, res) {
    if (!req.body.email || !req.body.password) {
      return res.status(400).json({ message: 'Enter your Email or Password' });
    }
    const loginInfo = UserModel.login(req.body);
    return res.status(201).json({
      status: res.statusCode,
      message: 'Login was successful',
      loginInfo
    });
  }
}

export default UserController;
