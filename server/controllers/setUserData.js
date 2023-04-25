import User from "../models/User.js";
import jwtToken from 'jsonwebtoken';

export const getUserData = async (req, res) => {
  res.json({message: 'hello from server'})
}

export const setUserNickName = () => {
  console.log('yes');
}