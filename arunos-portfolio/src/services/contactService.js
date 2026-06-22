export const submitContactForm = async ({ name, email, message }) => {
  await new Promise((resolve) => setTimeout(resolve, 800));
  console.log('Contact Form Submitted:', { name, email, message });
  return { success: true, message: 'Your message has been sent successfully!' };
};
