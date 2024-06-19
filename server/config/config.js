const config = {
    database: {
        uri:
            NODE_ENV === "development"
                ? DEVELOPMENT_DATABASE_URL
                : NODE_ENV === "test"
                    ? TEST_DATABASE_URL
                    : PRODUCTION_DATABASE_URL,
    }
}
module.exports=config;