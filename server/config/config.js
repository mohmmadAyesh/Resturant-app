require('dotenv').config();

const config = {
    database: {
        uri: process.env.MONGO_URI
    },
    server: {
        port: process.env.PORT || 5000
    },
    jwt: {
        secret: process.env.JWT_SECRET
    }
};

module.exports = config;
