// Database.js
import SQLite from 'react-native-sqlite-storage';

// Open database connection
const db = SQLite.openDatabase(
  {
    name: 'AppTecDB.js',
    location: 'default',
  },
  () => console.log('Database opened successfully'),
  error => console.error('Error opening database:', error)
);

// Create users table if not exists
db.transaction(tx => {
  tx.executeSql(
    `CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT UNIQUE,
      password TEXT
    );`,
    [],
    () => console.log('Users table created successfully'),
    (_, error) => console.error('Error creating users table:', error)
  );
});

// Query user by email and password
const authenticateUser = (email, password, callback) => {
  db.transaction(tx => {
    tx.executeSql(
      'SELECT * FROM users WHERE email = ? AND password = ?',
      [email, password],
      (_, { rows }) => {
        if (rows.length > 0) {
          const user = rows.item(0);
          callback({ success: true, user });
        } else {
          callback({ success: false, message: 'Invalid email or password' });
        }
      },
      (_, error) => {
        console.error('Error querying user:', error);
        callback({ success: false, message: 'An error occurred' });
      }
    );
  });
};

export { db, authenticateUser };
