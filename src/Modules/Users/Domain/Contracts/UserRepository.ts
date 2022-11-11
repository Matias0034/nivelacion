/* eslint-disable @typescript-eslint/no-explicit-any */
// ?Domain
import { Email } from '../Models/Email';
import { UserAdder } from '../Models/UserAdder';
import { modeUpdate } from '../Models/UserUpdater';

export interface UserRepository {
    createUser: (User: UserAdder) => Promise<void>
    readUsers: () => Promise<any>
    readUserByEmail: (email: Email) => Promise<any>
    updatedUserByEmail: (id: number, UserUpdater: modeUpdate) => Promise<any>
    deleteUserByEmail: (email: Email) => Promise<any>
    readPassByEmail: (email: Email) => Promise<any>
    resetPassword: (email: Email, password: string) => Promise<void>

}