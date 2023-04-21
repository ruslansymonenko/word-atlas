import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwtToken from 'jsonwebtoken';

//Registration

export const registration = async(req, res) => {
  try{
    const {email, password} = req.body;
    const isUsed = await User.findOne({email});

    if(isUsed) {
      res.json({message: 'This email is already registered'});
    }

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const user = new User({email, password: hash});

    const token = jwtToken.sign({
      id: user._id
      }, 
      process.env.JWT_SECRET,
      {expiresIn: '30d'},
    )

    await user.save();

    res.json({
      user,
      token,
      message: 'User successfully registered'
    });

  } catch(err) {
    console.log(err);
  }
};

//Login

export const login = async (req, res) => {
  try{
    const {email, password} = req.body;
    
    const user = await User.findOne({email});

    if(!user) {
      return res.json({
        message: 'This email is not registered!'
      })
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if(!isPasswordCorrect) {
      return res.json({
        message: 'Password is not correct!'
      })
    }

    const token = jwtToken.sign({
      id: user._id
      }, 
      process.env.JWT_SECRET,
      {expiresIn: '30d'},
    )

    res.json({
      token, 
      user, 
      message: 'You are logged in.'
    })

  } catch (error) {
    console.log(error);
  }
}

export const getMe = async (req, res) => {
  try{
    const user = await User.findById(req.userId);

    if(!user) {
      return res.json({
        message: 'This email is not registered!'
      })
    }

    const token = jwtToken.sign({
      id: user._id
      }, 
      process.env.JWT_SECRET,
      {expiresIn: '30d'},
    )

    res.json({
      user,
      token
    })

  } catch (error) {
    res.json({message: 'No access'})
  }
}