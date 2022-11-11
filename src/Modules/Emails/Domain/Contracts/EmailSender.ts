import { SendEmail } from '../Models/SendEmail';

export interface EmailRepositorySender {
  Send: (Email: SendEmail) => Promise<void>
}
