const { Pool } = require('pg');

const config = {
    user: 'postgres',
    host: 'localhost',
    password: 'Natyteamo031283',
    database: 'library'
}

const pool = new Pool(config);

const getBooks = async () => {
    try {
        const res = await pool.query('select * from books');
        console.log(res.rows);
        pool.end();
    } catch (error) {
        console.log(error);
    }
}

const insertUser = async () => {
    try {
        const text = 'INSERT INTO users(username, password) VALUES($1, $2)';
        const values = ['pedro', 'pedro1234'];

        const res = await pool.query(text, values);
        console.log(res);
        pool.end();
    } catch (error) {
        console.log(error);
    }
}

const deleteUser = async () => {
    try {
        const text = 'DELETE FROM users WHERE username = $1';
        const value = ['pedro'];

        const res = await pool.query(text, value);
        console.log(res);
        pool.end();
    } catch (error) {
        console.log(error);
    }
}

const editUser = async () => {
    try {
        const text = 'UPDATE users SET username = $1, password = $2 WHERE username = $3';
        const values = ['pablo', 'pablo123', 'cameron'];

        const res = await pool.query(text, values);
        console.log(res);
        pool.end();
    } catch (error) {
        console.log(error);
    }
}

editUser();
