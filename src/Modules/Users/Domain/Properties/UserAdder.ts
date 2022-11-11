// ?Domain
import { Email } from '../Models/Email';

export interface UserProp {
    name: string,
    status: boolean,
    password: string
    email: Email
    createAt: Date
    updatedAt: Date
}

