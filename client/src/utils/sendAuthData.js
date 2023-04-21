import axios from 'axios';

const sendAuthData = async ({email, password}) => {
  try{
    const response = await axios.post('http://localhost:3001/api/auth/login', {email: email, password: password})
    console.log(response.data.message);
    return response.data.message;
  } catch (err) {
    console.log(err);
  }
}

export default sendAuthData;