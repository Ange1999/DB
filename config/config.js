const env = process.env;
const config = {
    db: {
        host: env.DB_HOST || 'localhost',
        user: env.DB_USER || 'Ange',
        password: env.DB_PASSWORD || "UseTheForce$69",
        //database: env.DB_NAME || 'Library',
        waitForConnections: true,
        connectionLimit: env.DB_CONN_LIMIT || 2

    }
};

module.exports = config;
