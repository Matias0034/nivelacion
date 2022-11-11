/* eslint-disable @typescript-eslint/no-explicit-any */
import { Email } from '../../../Users/Domain/Models/Email';
import { TemporalEmail } from '../Models/TemporalEmail';

export interface EmailRepository {
    createTemporalEmail: (temporalEmail: TemporalEmail) => Promise<any>
    readTemporalEmail: ({ email, code }: { email: Email, code: number }) => Promise<any>
    finishTemporalEmail: (email: Email) => Promise<void>
    checkCodeToResetPassword: (email: Email, code: number) => Promise<any>
    checkIdToPassChange: (idTemporalEmail: number, email: Email) => Promise<any>
    eliminateTemporalEmail: (idTemporalEmail: number) => Promise<any>
  }
  