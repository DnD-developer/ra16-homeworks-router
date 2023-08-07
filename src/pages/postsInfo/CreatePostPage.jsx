// hooks
import useNewPost from "../../hooks/useNewPost"
//Components
import { PanelForButtonsManipulationPosts, ButtonsManipulationPosts } from "../../components/PostInfoButtons/PostInfoButtons"
import { PostInfoNewPost } from "../../components/PostInfoNewPost/PostInfoNewPost"

export default function CreatePostPage() {
	const { stateLoading, inputNewPost, setInputNewPost, onNewPost } = useNewPost({ url: "https://back-test-guau.onrender.com/posts" })
	return (
		<>
			{stateLoading ? "Загрузка" : <PostInfoNewPost text={inputNewPost} onChange={setInputNewPost} />}

			<PanelForButtonsManipulationPosts>
				<ButtonsManipulationPosts text="Опубликовать пост" onClick={onNewPost} url={"/"} loading={stateLoading} />
			</PanelForButtonsManipulationPosts>
		</>
	)
}
