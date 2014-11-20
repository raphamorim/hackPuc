/*
 * Config environments.
 */
var Config = {};

/*
 * Set current environment.
 */
Config.env = process.env["NODE_ENV"] || "development";

/*
 * Environment: Development.
 */
Config.development = {
  name: "development",
  defaultUrl: "http://localhost",
  serverPort: 3000
};

/*
 * Environment: Production.
 */
Config.production = {
    name: "production",
    defaultUrl: "http://localhost",
    serverPort: 3000,
};

config = Config[Config.env];
config.env = Config.env;
exports.config = config;
