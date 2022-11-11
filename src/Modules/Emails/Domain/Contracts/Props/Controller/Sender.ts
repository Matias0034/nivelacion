import { SendReminder } from '../Send';

export interface EmailSender {
  SendEmailReminder: (data: SendReminder) => Promise<void>
}
