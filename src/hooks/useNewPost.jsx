// utils
import { useState } from "react"
import uuid4 from "uuid4"
//hooks
import { useRequest } from "./useRequest"
import useInput from "./useInput"

export default function useNewPost({ postId = "", method = "POST", url }) {
	const [sendApprove, setSendApprove] = useState(false)
	const [body, setBody] = useState({})

	const { stateLoading, data } = useRequest({ url, sendApprove, method, body })
	const [inputNewPost, setInputNewPost] = useInput()

	const onNewPost = () => {
		if (inputNewPost.trim()) {
			const id = postId || uuid4()
			setBody({ id, content: inputNewPost })
			setSendApprove(true)
			setInputNewPost("")
		}
	}

	return {
		data,
		stateLoading,
		inputNewPost,
		setInputNewPost,
		onNewPost
	}
}