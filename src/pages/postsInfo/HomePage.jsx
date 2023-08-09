//utils
import { useRequest } from "../../hooks/useRequest"
//constants
import { pathRouters } from "../../shared/postInfo/pathRouters"
import { pathServer } from "../../shared/postInfo/pathServer"
//components
import PostInfoList from "../../components/PostInfoList/PostInfoList"
import PostInfoItem from "../../components/PostInfoItem/PostInfoItem,"
import { PanelForButtonsManipulationPosts, ButtonsManipulationPosts } from "../../components/PostInfoButtons/PostInfoButtons"
import { useState } from "react"

export default function HomePage() {
	const { stateLoading, data } = useRequest({ url: pathServer.home })
	const [transit, setTransit] = useState(false)

	if (stateLoading) {
		return <h1>Загрузка</h1>
	}

	return (
		<>
			<PanelForButtonsManipulationPosts>
				<ButtonsManipulationPosts
					text="Создать пост"
					onClick={() => {
						setTransit(true)
					}}
					url={pathRouters.createPostPage}
					loading={false}
					transit={transit}
				/>
			</PanelForButtonsManipulationPosts>
			<PostInfoList data={data}>
				{posts => {
					if (posts.length > 0) {
						return posts.map(({ id, content, created }) => <PostInfoItem key={id} id={id} content={content} created={created} />)
					}

					return <PostInfoItem key={0} content={"нет постов"} id={0} created={Date.now()} />
				}}
			</PostInfoList>
		</>
	)
}
