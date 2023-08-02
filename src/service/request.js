export async function request(url, method, body) {
	console.log(body)
	const response = await fetch(url, {
		method,
		body: JSON.stringify(body || undefined),
		headers: {
			"Content-Type": "application/json"
		}
	})
	const data = (await method) == "POST" ? response.text() : response.json()

	return data
}
