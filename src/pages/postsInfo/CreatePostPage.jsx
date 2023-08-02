import { useRequest } from "../../hooks/useRequest"
import { PanelForButtonsManipulationPosts, ButtonsManipulationPosts } from "../../components/PostInfoButtons/PostInfoButtons"
import { PostInfoNewPost } from "../../components/PostInfoNewPost/PostInfoNewPost"
import uuid4 from "uuid4"
import { useState } from "react"

export default function CreatePostPage() {
	const [inputNewPost, setInputNewPost] = useState("")
	const [sendApprove, setSendApprove] = useState(false)
	const [body, setBody] = useState({})
	const { stateLoading } = useRequest({ url: "https://back-test-0fmn.onrender.com/posts", sendApprove, method: "POST", body })

	const onClickNewPost = () => {
		if (inputNewPost.trim()) {
			const id = uuid4()
			setBody({ id, content: inputNewPost })
			setSendApprove(true)
			setInputNewPost("")
		}
	}

	const onInputText = text => {
		setInputNewPost(text)
	}

	return (
		<>
			{stateLoading ? "Загрузка" : <PostInfoNewPost text={inputNewPost} onChange={onInputText} />}

			<PanelForButtonsManipulationPosts>
				<ButtonsManipulationPosts text="Опубликовать пост" onClick={onClickNewPost} url={"/"} loading={stateLoading} />
			</PanelForButtonsManipulationPosts>
		</>
	)
}
