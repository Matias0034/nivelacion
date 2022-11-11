import { Email } from '../../../../Users/Domain/Models/Email';

export interface Send {
  from: Email
  to: Email
  subject: string
  html: string
}

export interface SendReminder {
  destiny: string
  subject: string
  html: string
}
