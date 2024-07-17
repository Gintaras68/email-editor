import axios from "axios";

class EmailSevice {
  #URL = 'http://localhost:3000/emails'

  async getEmails() {
    const data = await axios.get(this.#URL);
    return data.data;
  }

  async sendEmail(text) {
    const data = await axios.post(this.#URL, {text});
    return data.data;
  }
}

export const emailService = new EmailSevice();