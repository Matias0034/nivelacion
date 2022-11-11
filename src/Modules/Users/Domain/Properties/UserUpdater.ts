// ?Domain
import { UserProp } from './UserAdder';

export type UserPropUpdater = Omit<UserProp, 'password' | 'status' | 'createAt'>

