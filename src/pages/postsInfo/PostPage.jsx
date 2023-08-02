import { useRequest } from "../../hooks/useRequest"
import PostInfoList from "../../components/PostInfoList/PostInfoList"
import PostInfoItem from "../../components/PostInfoItem/PostInfoItem,"
import { PanelForButtonsManipulationPosts, ButtonsManipulationPosts } from "../../components/PostInfoButtons/PostInfoButtons"
import { useParams } from "react-router-dom"

export default function PostPage() {
	const { id } = useParams()
	const { stateLoading, data } = useRequest({ url: `https://back-test-0fmn.onrender.com/posts/${id}` })

	return (
		<>
			{stateLoading ? (
				<h1>Загрузка</h1>
			) : data.length != 0 ? (
				<PostInfoList data={data}>
					{({ post: { id, content, created } }) => <PostInfoItem id={id} content={content} created={created} />}
				</PostInfoList>
			) : (
				<></>
			)}

			<PanelForButtonsManipulationPosts>
				<ButtonsManipulationPosts text="Изменить" onClick={() => {}} url={"/posts/new"} loading={false} />
				<ButtonsManipulationPosts text="Удалить пост" color="red" onClick={() => {}} url={"/posts/new"} loading={false} />
			</PanelForButtonsManipulationPosts>
		</>
	)
}
