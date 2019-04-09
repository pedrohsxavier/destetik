import User from './model';
import bcrypt from 'bcrypt';

class UserController {
  async store(req, res) {
    try {
      if (req.body.password !== req.body.password2)
        return res.json({ error: 'Password does not Match.' });
      const newUser = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      };
      const salts = 10;
      const hashedPassword = await new Promise((resolve, reject) => {
        bcrypt.hash(newUser.password, salts, function(err, hash) {
          if (err) reject(err);
          resolve(hash);
        });
      });
      newUser.password = hashedPassword;
      const user = await User.create(newUser);
      return res.json(user);
    } catch (err) {
      console.log(err);
    }
  }
}

const userController = new UserController();
export default userController;
