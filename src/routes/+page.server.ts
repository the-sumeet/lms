import { fail } from '@sveltejs/kit';
import nodemailer from 'nodemailer';
import type { Actions } from './$types';
import { GMAIL_USER, GMAIL_APP_PASSWORD, TO_MAIL } from '$env/static/private';

export const actions: Actions = {
	contact: async ({ request }) => {
		const data = await request.formData();
		const firstName = data.get('first-name')?.toString();
		const lastName = data.get('last-name')?.toString();
		const email = data.get('email')?.toString();
		const phone = data.get('phone-number')?.toString();
		const message = data.get('message')?.toString();

		// Basic validation
		if (!firstName || !lastName || !email || !message) {
			return fail(400, {
				error: 'Please fill in all required fields.'
			});
		}

		// Email validation
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			return fail(400, {
				error: 'Please enter a valid email address.'
			});
		}

		try {
			// Verify credentials are available
			if (!GMAIL_USER || !GMAIL_APP_PASSWORD) {
				console.error('Gmail credentials not found in environment variables');
				return fail(500, {
					error: 'Email service configuration error. Please try again later.'
				});
			}

			// Create transporter for Gmail
			const transporter = nodemailer.createTransport({
				service: 'gmail',
				host: 'smtp.gmail.com',
				port: 587,
				secure: false,
				auth: {
					user: GMAIL_USER,
					pass: GMAIL_APP_PASSWORD.trim(), // Remove any whitespace
				},
			});

			// Verify the connection
			await transporter.verify();
			// Email content
			const mailOptions = {
				from: GMAIL_USER,
				to: TO_MAIL, // Send to your own email
				subject: `New Contact Form Submission from ${firstName} ${lastName}`,
				html: `
					<h2>New Contact Form Submission</h2>
					<p><strong>Name:</strong> ${firstName} ${lastName}</p>
					<p><strong>Email:</strong> ${email}</p>
					<p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
					<p><strong>Message:</strong></p>
					<p>${message.replace(/\n/g, '<br>')}</p>
					<hr>
					<p><small>This email was sent from the contact form on your website.</small></p>
				`
			};

			// Send email
			await transporter.sendMail(mailOptions);

			return {
				success: true,
				message: 'Thank you for your message! We will get back to you soon.'
			};
		} catch (error) {
			console.error('Error sending email:', error);
			return fail(500, {
				error: 'Sorry, there was an error sending your message. Please try again later.'
			});
		}
	}
};