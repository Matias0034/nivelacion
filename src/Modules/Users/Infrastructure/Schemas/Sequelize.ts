import { Sequelize, DataTypes, ModelCtor, Model } from 'sequelize';

export class Schema {
	private Sequelize: Sequelize;

	constructor(Sequelize: Sequelize) {
		this.Sequelize = Sequelize;
	}


	public createSchema(): ModelCtor<Model> {
		return this.Sequelize.define('users', {
			name: {
				type:  DataTypes.TEXT,
				allowNull: true,
				unique: false
			},
			password: {
				type: DataTypes.TEXT,
				allowNull: false,
				unique: false
			},
			email: {
				type: DataTypes.TEXT,
				allowNull: false,
				unique: false,
				validate:{
					isEmail: true
				}
			},
			status: DataTypes.BOOLEAN,
			createdAt: DataTypes.DATE,
			updatedAt: DataTypes.DATE
		});

	}
}


