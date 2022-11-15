const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
	const body = req.body;

	const message = `
		Name: ${body.name}\r\n
		Email: ${body.email}\r\n
		Message: ${body.message}
	`;

	await mail.send({
		to: 'ersinahmeddev@gmail.com',
		from: 'herondevblogdummy@gmail.com',
		subject: 'New web form message!',
		text: message,
		html: message.replace(/\r\n/g, '<br>'),
	});

	res.status(200).json({ status: 'Ok' });
};
