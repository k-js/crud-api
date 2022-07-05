import  sqlite3  from 'sqlite3';
const bdSQLite = new sqlite3.Database('./src/infra/database.db');

process.on('SIGINT', () =>
    bdSQLite.close(() => {
        console.log('BD encerrado!');
        process.exit(0);
    })
);

export {bdSQLite} ;