//utils"
import { useParams } from "react-router-dom"
import { useState } from "react"
//constants
import { pathServer } from "../../shared/postInfo/pathServer"
import { pathRouters } from "../../shared/postInfo/pathRouters"
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
	const [transit, setTransit] = useState(false)

	const {
		stateLoading: sendPostLoading,
		inputNewPost,
		setInputNewPost,
		onNewPost
	} = useNewPost({ url: `${pathServer.home}${id}`, method, postId: id })

	const { stateLoading, data } = useRequest({ url: `${pathServer.home}${id}` })

	const deletePost = () => {
		setMethod("DELETE")
		onNewPost("DELETE")
		setTransit(true)
	}

	const saveEdit = () => {
		setMethod("PUT")
		onNewPost()
		setTransit(true)
	}

	if (stateLoading || sendPostLoading) {
		return <h1>Загрузка</h1>
	}

	if (edit) {
		return (
			<>
				<PostInfoNewPost text={inputNewPost} onChange={setInputNewPost} />
				<PanelForButtonsManipulationPosts>
					<ButtonsManipulationPosts
						text="Сохранить"
						onClick={() => {
							saveEdit()
						}}
						url={pathRouters.homePage}
						loading={sendPostLoading}
						transit={transit}
					/>
					<ButtonsManipulationPosts
						text="Отменить"
						color="red"
						onClick={() => {
							setEdit(false)
						}}
						loading={false}
					/>
				</PanelForButtonsManipulationPosts>
			</>
		)
	}

	return (
		<>
			<PostInfoList data={data}>
				{data => {
					return <PostInfoItem id={data.post.id} content={data.post.content} created={data.post.created} />
				}}
			</PostInfoList>

			<PanelForButtonsManipulationPosts>
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
					url={pathRouters.homePage}
					loading={sendPostLoading}
					transit={transit}
				/>
			</PanelForButtonsManipulationPosts>
		</>
	)
}
