import { Primitives } from './Primitives';
import {UserProp  } from './UserAdder';


export type LogProp = Primitives<Pick<UserProp, 'email'|'name' | 'status'| 'status'>>