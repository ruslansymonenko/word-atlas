import axios from 'axios';

const sendRegistrationData = async ({email, password}) => {
  try{
    const response = await axios.post('http://localhost:3001/api/auth/registration', {email: email, password: password})

    return response.data.message;
  } catch (err) {
    console.log(err);
  }
}

export default sendRegistrationData;