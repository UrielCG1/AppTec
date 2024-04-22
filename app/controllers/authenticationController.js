import { View } from 'react-native'; // Importa View desde 'react-native'
import IndexPage from '../pages/index'; // Importa IndexPage desde '../pages/index'

// Simulated user data (replace with your actual authentication logic)
const users = [
  { id: 1, numDeControl: '20140185', password: '1421' },
  { id: 2, numDeControl: '20140189', password: '1234' },
];

// Function to authenticate user
const authenticateUser = (numDeControl, password) => {
  const user = users.find(user => user.numDeControl === numDeControl && user.password === password);
  if (!user) {
    return { success: false, message: 'Número de control o contraseña inválidos' };
  }
  return { success: true };
};

const loginUser = (numDeControl, password) => {
  const { success } = authenticateUser(numDeControl, password);
  if (success) {
    return { success: true };
  } else {
    return { success: false, message: 'Número de control o contraseña inválidos' };
  }
};

// Export authentication controller functions
export { authenticateUser, loginUser };
