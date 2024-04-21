import { View } from 'react-native'; // Importa View desde 'react-native'
import IndexPage from '../pages/index'; // Importa IndexPage desde '../pages/index'

// Simulated user data (replace with your actual authentication logic)
const users = [
  { id: 1, email: 'user1@example.com', password: 'password1' },
  { id: 2, email: 'user2@example.com', password: 'password2' },
  // Add more users as needed
];

// Function to authenticate user
const authenticateUser = (email, password) => {
  const user = users.find(user => user.email === email && user.password === password);
  if (!user) {
    return { success: false, message: 'Invalid email or password' };
  }
  return { success: true };
};

const loginUser = (email, password) => {
  const { success } = authenticateUser(email, password);
  if (success) {
    return { success: true };
  } else {
    return { success: false, message: 'Invalid email or password' };
  }
};

// Export authentication controller functions
export { authenticateUser, loginUser };
