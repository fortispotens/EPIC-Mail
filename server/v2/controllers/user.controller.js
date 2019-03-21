import dotenv from 'dotenv';
import connectDB from '../../connectDB';
import UserModel from '../models/user.model';


class UserController {
  static userSignup(req, res) {
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
          return res.status(200).send({ status: 200, message: 'User Account created successfully', data: result.rows[0] });
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
    const {
      email,
      password
    } = req.body;

    const query = `SELECT * FROM users WHERE email='${email}' returning * `;
    return connectDB.query(query)
      .then((result) => {
        if (result.rowCount === 0) {
          res.status(400).send({ status: 400, error: 'Account does not exist' });
        }
        return res.status(200).send({ message: 'You are successfully logged in', data: result.rows[0] });
      })
      .catch((error) => {
        if (`Key (email)!=(${email})` || `Key (password)!=(${password})`) {
          return res.status(400).send({ status: 'error', message: 'Invalid Email or Password' });
        }
        res.status(500).send({ status: 500, error: 'Error logging in' });
      });
  }
}

export default UserController;
