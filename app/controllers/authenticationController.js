import { View } from 'react-native'; // Importa View desde 'react-native'
import IndexPage from '../pages/index'; // Importa IndexPage desde '../pages/index'

// Simulated user data (replace with your actual authentication logic)
const users = [
  { id: 1, numDeControl: '20140185', nip: '1421', nombreUsuario: 'Uriel Carbajal' },
  { id: 2, numDeControl: '20140189', nip: '1234', nombreUsuario: 'Miguel Ángel Ibarra' },
  { id: 3, numDeControl: '19141139', password: '123', nombreUsuario: 'Oscar Escamilla' },
];

// Function to authenticate user
const loginUser = (numDeControl, nip) => {
  const { success, user } = authenticateUser(numDeControl, nip);
  if (success) {
    return { success: true, user };
  } else {
    return { success: false, message: 'Número de control o contraseña inválidos' };
  }
};

// Modificar authenticateUser para devolver el usuario en caso de éxito
const authenticateUser = (numDeControl, nip) => {
  const user = users.find(user => user.numDeControl === numDeControl && user.nip === nip);
  if (!user) {
    return { success: false, message: 'Número de control o contraseña inválidos' };
  }
  return { success: true, user }; // Devuelve el usuario en caso de éxito
};


// Export authentication controller functions
export { authenticateUser, loginUser};
