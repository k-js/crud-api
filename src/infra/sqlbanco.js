import sqlite3  from 'sqlite3';
const bancoDados = new sqlite3.Database('');

process.on('SIGINT', () =>
    bancoDados.close(() => {
        console.log('BD encerrado!');
        process.exit(0);
    })
);

export {bancoDados} ;