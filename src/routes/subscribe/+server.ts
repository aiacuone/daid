import { json } from '@sveltejs/kit';
import { MAILCHIMP_ID } from '$env/static/private';
import axios from 'axios';
import { PUBLIC_MAILCHIMP_SERVER, PUBLIC_MAILCHIMP_LIST_ID } from '$env/static/public';

export async function POST({ request }) {
	const requestResponse = await request.json();
	const { email } = requestResponse.body;

	axios.post(
		`https://${PUBLIC_MAILCHIMP_SERVER}.api.mailchimp.com/3.0/lists/${PUBLIC_MAILCHIMP_LIST_ID}/members`,
		{
			email_address: email,
			status: 'subscribed'
		},
		{
			headers: { Authorization: `Bearer ${MAILCHIMP_ID}` }
		}
	);

	return json({ success: true });
}
