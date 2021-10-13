import * as sgMail from '@sendgrid/mail'

export class EmailController {
  private from: string
  private sgMail: sgMail.MailService
  constructor() {
    this.sgMail = sgMail
    this.from = `${process.env.SENDGRID_FROM_EMAIL}`
    this.setKey()
  }

  private setKey(): void {
    this.sgMail.setApiKey(`${process.env.SENDGRID_API_KEY}`)
  }

  private createMsg(
    to: string,
    subject: string,
    text: string,
    name: string,
    templateId?: string
  ) {
    return {
      to,
      from: this.from,
      templateId: templateId || `${process.env.SENDGRID_API_TEMPLATE}`,
      dynamic_template_data: {
        subject: subject,
        text: text,
        name: name,
      },
    }
  }

  public sendEmail(email: string, subject: string, text: string, name: string) {
    const msg = this.createMsg(email, subject, text, name)
    return this.sgMail.send(msg)
  }
}
