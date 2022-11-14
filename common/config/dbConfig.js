module.exports = {
    development: {
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_SELECTED,
        host: process.env.DB_HOST,
        dialect: "mysql",
        charset: "utf8mb4",
        collation: "utf8mb4_bin",
        dialectOptions: {
            decimalNumbers: true,
            multipleStatements: true
        },
        logging: false
    },
    production: {
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_SELECTED,
        host: process.env.DB_HOST,
        charset: "utf8mb4",
        collation: "utf8mb4_bin",
        dialect: "mysql",
        dialectOptions: {
            decimalNumbers: true,
            multipleStatements: true
        },
        logging: false
    }
}