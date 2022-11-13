const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.SENDGRID_API_KEY);

const TO_EMAIL = process.env.TO_EMAIL;
const FROM_EMAIL = process.env.FROM_EMAIL;

export default async (req, res) => {
	const body = req.body;

	const message = `
		Name: ${body.name}\r\n
		Email: ${body.email}\r\n
		Message: ${body.message}
	`;

	const data = {
		to: TO_EMAIL,
		from: FROM_EMAIL,
		subject: 'New web form message!',
		text: message,
		html: message.replace(/\r\n/g, '<br>'),
	};

	await mail.send(data);

	res.status(200).json({ status: 'Ok' });
};
