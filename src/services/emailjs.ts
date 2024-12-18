import emailjs from '@emailjs/browser';

const EMAIL_SERVICE_ID = 'service_6fbtnng';
const EMAIL_TEMPLATE_ID = 'template_zwhnofn';
const EMAIL_PUBLIC_KEY = 'LDgGZXL103cOvDqP4';

export const sendEmail = async (templateParams: Record<string, unknown>) => {
  try {
    const response = await emailjs.send(
      EMAIL_SERVICE_ID,
      EMAIL_TEMPLATE_ID,
      templateParams,
      EMAIL_PUBLIC_KEY
    );
    return response.status === 200;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
};