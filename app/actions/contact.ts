/**
 * Contact Form Server Action
 * Handles form submission (integrate with email service)
 */

'use server';

export async function submitContactForm(formData: FormData) {
  const name = formData.get('name');
  const email = formData.get('email');
  const company = formData.get('company');
  const service = formData.get('service');
  const message = formData.get('message');

  // Validation
  if (!name || !email || !message) {
    return { error: 'Missing required fields' };
  }

  try {
    // TODO: Integrate with email service (Resend, SendGrid, etc.)
    // For now, just log to console
    console.log('[Contact Form Submission]', {
      name,
      email,
      company,
      service,
      message,
      timestamp: new Date().toISOString(),
    });

    // Example: Send email with Resend
    // const response = await resend.emails.send({
    //   from: 'contact@thetechieguys.com',
    //   to: 'hello@thetechieguys.com',
    //   replyTo: email as string,
    //   subject: `New contact form submission from ${name}`,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
    //     ${service ? `<p><strong>Service Interested In:</strong> ${service}</p>` : ''}
    //     <p><strong>Message:</strong></p>
    //     <p>${message}</p>
    //   `,
    // });

    return {
      success: true,
      message: 'Thanks for reaching out! We will reply within 2 hours.',
    };
  } catch (error) {
    console.error('Contact form error:', error);
    return {
      error: 'Failed to send message. Please try again.',
    };
  }
}
