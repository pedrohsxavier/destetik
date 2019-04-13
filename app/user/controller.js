import User from './model';
import bcrypt from 'bcrypt';

class UserController {
  async store(req, res) {
    try {
      if (req.body.password !== req.body.password2)
        return res.status(400).json({ error: 'Password does not Match.' });
      const { name, email, password } = req.body;
      const checkUser = await User.find({ email });
      if (checkUser.length > 0)
        return res
          .status(400)
          .json({ error: 'This e-mail is already registered.' });
      const newUser = { name, email, password };
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

  async update(req, res, next) {
    try {
      if ('old_password' in req.body) {
        var user = await User.findById(req.params.id);
        const { old_password, password, confirm_password } = req.body;
        const pass_ok = await bcrypt.compare(old_password, user.password);
        if (!pass_ok) return res.json({ error: 'Wrong Password.' });
        if (password !== confirm_password)
          return res.json({ error: 'Password does not Match.' });

        delete req.body['old_password'];
        delete req.body['confirm_password'];
        req.body['password'] = await bcrypt.hash(password, 10);
      }
      user = await User.findOneAndUpdate(
        { _id: req.params.id },
        { $set: req.body },
        { useFindAndModify: false, new: true }
      );
      return res.json(user);
    } catch (err) {
      console.log(err);
    }
  }
}

const userController = new UserController();
export default userController;
