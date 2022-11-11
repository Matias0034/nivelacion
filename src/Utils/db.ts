import { Sequelize } from 'sequelize';
import conf from './conf';

export default new Sequelize({
	database: conf.database.database,
	username: conf.database.username,
	password: conf.database.password,
	host:     conf.database.host,
	dialect:  'mysql',

});