import React from 'react';
import { View, Text } from 'react-native';
import LoginPage from './Pages/login';


const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Stack>
        <LoginPage path="/" />
        {/* Aquí puedes agregar más pantallas según sea necesario */}
      </Stack>
    </View>
  );
};

export default App;