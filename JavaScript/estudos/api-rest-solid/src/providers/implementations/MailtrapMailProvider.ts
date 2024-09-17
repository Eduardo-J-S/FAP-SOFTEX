import Mail from "nodemailer/lib/mailer";
import { IMailProvider, IMessage } from "../IMailProvider";
import nodemailer from 'nodemailer';
const dotenv = require('dotenv');

dotenv.config();


export class MailtrapMailProvider implements IMailProvider {
    private transporter: Mail;

    constructor() {
        this.transporter = nodemailer.createTransport({
            host: process.env.MAILTRAP_HOST || 'sandbox.smtp.mailtrap.io', // Use a variável de ambiente
            port: parseInt(process.env.MAILTRAP_PORT || '2525'), // Use a variável de ambiente
            auth: {
                user: process.env.MAILTRAP_USER, // Use a variável de ambiente
                pass: process.env.MAILTRAP_PASS  // Use a variável de ambiente
            }
        });
    }

    async sendMail(message: IMessage): Promise<void> {
        await this.transporter.sendMail({
            to: {
                name: message.to.name,
                address: message.to.email
            },
            from: {
                name: message.from.name,
                address: message.from.email
            },
            subject: message.subject,
            html: message.body
        });
    }
}
