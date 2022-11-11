import dotenv from 'dotenv';
dotenv.config();

const conf = {
	database: {
		username: process.env.USER_DB,
		password: process.env.PASS_DB,
		database: process.env.DATABASE_NAME,
		host: process.env.HOST_DB,
		dialect: process.env.DIALECT
	}
};

export default conf;

