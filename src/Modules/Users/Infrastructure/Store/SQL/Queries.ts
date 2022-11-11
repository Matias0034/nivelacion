/* eslint-disable @typescript-eslint/no-explicit-any */
// ?Domain
import { Email } from '../../../Domain/Models/Email';
import { UserAdder } from '../../../Domain/Models/UserAdder';
import { modeUpdate } from '../../../Domain/Models/UserUpdater';

// ?Infrastructure
import { Schema } from '../../Schemas/Sequelize';

//!Dependencies
import Boom from '@hapi/boom';
import { ModelCtor, Model } from 'sequelize';

export class UserQueries {

	private Schema: ModelCtor<Model>;

	constructor(Schema: Schema) {
		this.Schema = Schema.createSchema();
	}

	protected async create(user: UserAdder): Promise<void>{
		await this.Schema.create(user.get())
			.catch((err) =>{ throw Boom.conflict(err);});
	}     
    
	protected async findPassByEmail(email: Email): Promise<any>{
		return await this.Schema.findOne({ attributes: ['password'], where : { email: email.value}})
			.catch((err) =>{ throw Boom.conflict(err);});
	}      
    
    
	protected async findByEmail(email: Email){
		return await this.Schema.findOne({ where: { email: email.value}, attributes: [ 'id', 'email', 'name', 'status', 'createdAt', 'updatedAt' ]})
			.catch((err) =>{ throw Boom.conflict(err);});
	}   


	protected async findAll(): Promise<any> {
		return await this.Schema.findAll({attributes: [ 'id', 'email', 'name', 'status', 'createdAt', 'updatedAt' ]})
			.catch((err) =>{ throw Boom.conflict(err);});
	}   

	protected async patchUserByEmail(id: number, modeUpdate: modeUpdate){
		return await this.Schema.update(modeUpdate.get(), { where: { id: id } })
			.catch((err) =>{ throw Boom.conflict(err);});
	}   


	// *Just is a logic delete, is not recommended execute physic delete
	protected async deleteByEmail(email: Email){
		return await this.Schema.update({ status: true}, { where: { email: email.value }})
			.catch((err) =>{ throw Boom.conflict(err);});
	}   


	protected async resetPassByEmail(email: Email, password: string){
		return await this.Schema.update({ password: password}, { where: { email: email.value }})
			.catch((err) =>{ throw Boom.conflict(err);});
	}   

}