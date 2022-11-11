/* eslint-disable @typescript-eslint/no-explicit-any */
//! Dependencies
import Boom from '@hapi/boom';
import { ModelCtor, Model } from 'sequelize';

// ? Infrastructure
import { Schema } from '../../Schemas/Sequelize';


// ?Domain
import { Email } from '../../../../Users/Domain/Models/Email';
import { TemporalEmail } from '../../../Domain/Models/TemporalEmail';

export class EmailQueries {

	private Schema: ModelCtor<Model>;

	constructor(Schema: Schema) {
		this.Schema = Schema.createSchema();
	}

	//* It verify the code sended to the email of user
	protected async verifyCodeToResetPassword(email: Email, code: number): Promise<any> {
		return await this.Schema.findOne({ where: { email: email.value, code } })
			.catch(err => { throw Boom.conflict(err); });
	}

	protected async getTemporalEmail({ email, code }: { email: Email, code: number }): Promise<any> {
		return await this.Schema.findOne({ where: { email: email.value, code: code } })
			.catch(err => { throw Boom.conflict(err); });
	}

	protected async addTemporalEmail(temporalEmail: TemporalEmail): Promise<any> {
		await this.Schema.create(temporalEmail.getTemporalEmail())
			.catch(err => { throw Boom.conflict(err); });
	}

	protected async disableTemporalEmail(email: Email): Promise<void> {
		await this.Schema.update({ status: true }, { where: { email: email.value } })
			.catch(err => Boom.conflict(err));
	}

	protected async verifyIdToPassChange(idTemporalEmail: number, email: Email): Promise<any> {
		return await this.Schema.findOne({ where: { email: email.value, id: idTemporalEmail } })
			.catch(err => Boom.conflict(err));
	}


	// * temporal email is deleted when the user there is changed her password
	protected async deleteTemporalEmail(idTemporalEmail: number): Promise<void> {
		await this.Schema.destroy({ where: { id: idTemporalEmail } })
			.catch(err => Boom.conflict(err));
	}
}
