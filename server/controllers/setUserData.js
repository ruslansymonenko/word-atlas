import User from "../models/User.js";
import jwtToken from 'jsonwebtoken';

export const getUserData = async (req, res) => {
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

export const setUserNickName = async (req, res) => {
  const receivedNickName = req.body.nickname;

  try {
    await User.findByIdAndUpdate(req.body.userId, {nickName: receivedNickName});

  } catch (err) {
    res.json({message: 'Some error, please try later..'})
  }

  res.json({message: 'Yor data received'});
}