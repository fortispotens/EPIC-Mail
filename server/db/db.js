import client from '../connectDB';

const createTables = () => {
  const tables = `
  DROP TABLE IF EXISTS users CASCADE;
  DROP TABLE IF EXISTS messages CASCADE;

    CREATE TABLE users(
        id SERIAL PRIMARY KEY,
        email VARCHAR(128) UNIQUE,
        firstname VARCHAR(30) NOT NULL,
        lastname VARCHAR(30) NOT NULL,
        password VARCHAR NOT NULL
      );

      CREATE TABLE messages(
        id SERIAL PRIMARY KEY,
        role TIMESTAMP WITH TIME ZONE,
        subject VARCHAR(100) NOT NULL,
        message VARCHAR(500) NOT NULL,
        status VARCHAR(10) NOT NULL DEFAULT 'UNREAD'
      );

      CREATE TABLE groups(
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        groupOwnerId VARCHAR(100) NOT NULL,
      );


  `;

  return client.query(tables)
    .then((res) => {
      console.log('All tables were created successfully!');
      return process.exit();
    })
    .catch((err) => {
      console.log('Error occured while creating the tables: ', err);
      client.end();
      return process.exit();
    });
};


export default createTables();
