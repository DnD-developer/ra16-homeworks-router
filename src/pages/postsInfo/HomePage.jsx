import { useRequest } from "../../hooks/useRequest"
import PostInfoList from "../../components/PostInfoList/PostInfoList"
import PostInfoItem from "../../components/PostInfoItem/PostInfoItem,"
import { PanelForButtonsManipulationPosts, ButtonsManipulationPosts } from "../../components/PostInfoButtons/PostInfoButtons"

export default function HomePage() {
	const { stateLoading, data, error } = useRequest("https://back-test-0fmn.onrender.com/posts")
	return (
		<>
			<PanelForButtonsManipulationPosts>
				<ButtonsManipulationPosts text="Опубликовать пост" onClick={() => console.log("Опубликовать пост")} />
			</PanelForButtonsManipulationPosts>
			{stateLoading ? (
				<h1>Загрузка</h1>
			) : (
				<PostInfoList data={data}>
					{posts => {
						if (posts.length > 0) {
							return posts.map(({ id, content, created }) => <PostInfoItem key={id} content={content} created={created} />)
						}

						return <PostInfoItem key={0} content={"нет постов"} created={Date.now()} />
					}}
				</PostInfoList>
			)}
		</>
	)
}
