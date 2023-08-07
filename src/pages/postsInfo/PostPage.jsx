//utilsquest"
import { useParams } from "react-router-dom"
import { useState } from "react"
// hooks
import useNewPost from "../../hooks/useNewPost"
import { useRequest } from "../../hooks/useRequest"
//components
import PostInfoList from "../../components/PostInfoList/PostInfoList"
import PostInfoItem from "../../components/PostInfoItem/PostInfoItem,"
import { PanelForButtonsManipulationPosts, ButtonsManipulationPosts } from "../../components/PostInfoButtons/PostInfoButtons"

import { PostInfoNewPost } from "../../components/PostInfoNewPost/PostInfoNewPost"

export default function PostPage() {
	const { id } = useParams()
	const [edit, setEdit] = useState(false)
	const [method, setMethod] = useState("POST")

	const {
		stateLoading: sendPostLoading,
		inputNewPost,
		setInputNewPost,
		onNewPost
	} = useNewPost({ url: `https://back-test-guau.onrender.com/posts/${id}`, method, postId: id })

	const { stateLoading, data } = useRequest({ url: `https://back-test-guau.onrender.com/posts/${id}` })

	const deletePost = () => {
		setMethod("DELETE")
		onNewPost("DELETE")
	}

	const saveEdit = () => {
		setMethod("PUT")
		onNewPost()
	}

	return (
		<>
			{stateLoading || sendPostLoading ? (
				<h1>Загрузка</h1>
			) : !edit ? (
				<PostInfoList data={data}>
					{data => {
						return <PostInfoItem id={data.post.id} content={data.post.content} created={data.post.created} />
					}}
				</PostInfoList>
			) : (
				<PostInfoNewPost text={inputNewPost} onChange={setInputNewPost} />
			)}

			<PanelForButtonsManipulationPosts>
				{!edit ? (
					<>
						<ButtonsManipulationPosts
							text="Изменить"
							onClick={() => {
								setInputNewPost(data.post.content)
								setEdit(true)
							}}
							loading={false}
						/>
						<ButtonsManipulationPosts
							text="Удалить пост"
							color="red"
							onClick={() => {
								deletePost()
							}}
							url={"/"}
							loading={sendPostLoading}
						/>
					</>
				) : (
					<>
						<ButtonsManipulationPosts
							text="Сохранить"
							onClick={() => {
								saveEdit()
							}}
							url={"/"}
							loading={sendPostLoading}
						/>
						<ButtonsManipulationPosts
							text="Отменить"
							color="red"
							onClick={() => {
								setEdit(false)
							}}
							loading={false}
						/>
					</>
				)}
			</PanelForButtonsManipulationPosts>
		</>
	)
}
