import { useEffect } from "react"
import { request } from "../service/request"
import { useState } from "react"

export function useRequest({ url, sendApprove = true, body = null, method = "GET" }) {
	const [stateLoading, setStateLoading] = useState()
	const [data, setData] = useState([])
	const [error, setError] = useState()

	useEffect(() => {
		if (sendApprove) {
			;(async () => {
				setStateLoading(true)

				try {
					const response = await request(url, method, body)
					setData(response)
				} catch (error) {
					console.log(error)
					setError(error)
				} finally {
					setStateLoading(false)
				}
			})()
		}
	}, [body, url])

	return { stateLoading, data, error }
}
