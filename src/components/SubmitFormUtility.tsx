import emailjs from '@emailjs/browser';

type MyFormValues = {
  name: string;
  email: string;
  message: string;
}

const sendEmail = (form: MyFormValues) => {
  emailjs.send('service_aqw9j6d', 'template_ctm2avr', form, 'Mjxkj4D1-S3aeh8aE');
};

export default sendEmail;