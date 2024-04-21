import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9', // Background color changed to a light gray
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20, // Padding horizontal for better spacing
  },
  title: {
    fontSize: 28, // Increased font size for the title
    fontWeight: 'bold',
    marginBottom: 30, // Increased margin bottom for the title
    color: '#333', // Title color changed to a darker gray
  },
  input: {
    height: 50, // Increased input height for better usability
    borderColor: '#ccc', // Light gray border color
    borderWidth: 1,
    borderRadius: 8, // Increased border radius for a rounded look
    paddingHorizontal: 15, // Horizontal padding for input text
    marginBottom: 20,
    width: '100%',
    fontSize: 16, // Increased font size for input text
    color: '#333', // Text color changed to a darker gray
  },
  error: {
    color: 'red',
    marginBottom: 20, // Increased margin bottom for error message
  },
  button: {
    backgroundColor: '#007bff', // Button background color changed to a primary blue
    paddingVertical: 15, // Vertical padding adjusted for button text alignment
    borderRadius: 8,
    marginBottom: 20, // Increased margin bottom for better spacing
    width: '100%', // Button width set to full width
    alignItems: 'center', // Center align button text
  },
  buttonText: {
    color: '#fff',
    fontSize: 18, // Increased font size for button text
    fontWeight: 'bold',
  },
});

export default styles;
