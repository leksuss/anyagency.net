import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const config = useRuntimeConfig()

  // Validate required fields
  if (!body.name || !body.email || !body.message) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing required fields',
    })
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(body.email)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid email address',
    })
  }

  // Check privacy agreement
  if (!body.agreedToPrivacy) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Privacy policy agreement required',
    })
  }

  try {
    // Create transporter
    const transporter = nodemailer.createTransport({
      host: config.smtpHost,
      port: Number(config.smtpPort),
      secure: false,
      auth: config.smtpUser && config.smtpPass ? {
        user: config.smtpUser,
        pass: config.smtpPass,
      } : undefined,
    })

    // Prepare email content
    const mailOptions = {
      from: config.smtpUser || 'noreply@anyagency.net',
      to: config.contactEmail,
      subject: `New Contact Form Submission from ${body.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        ${body.phone ? `<p><strong>Phone:</strong> ${body.phone}</p>` : ''}
        ${body.company ? `<p><strong>Company:</strong> ${body.company}</p>` : ''}
        ${body.budget ? `<p><strong>Budget Range:</strong> ${body.budget}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${body.message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><small>Sent from AnyAgency website contact form</small></p>
      `,
    }

    // Send email (skip if no SMTP configured)
    if (config.smtpUser && config.smtpPass) {
      await transporter.sendMail(mailOptions)
    } else {
      // Log to console in development if SMTP not configured
      console.log('Contact form submission (SMTP not configured):', body)
    }

    return {
      success: true,
      message: 'Your message has been sent successfully!',
    }
  } catch (error) {
    console.error('Error sending email:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to send message. Please try again later.',
    })
  }
})
