import "./PostInfo.css"
import HomePage from "../../pages/postsInfo/HomePage"
import CreatePostPage from "../../pages/postsInfo/CreatePostPage"
import PostPage from "../../pages/postsInfo/PostPage"
import { Routes, Route } from "react-router-dom"
export function PostInfo() {
	return (
		<div className="postInfo">
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/posts/new" element={<CreatePostPage />} />
				<Route path="/posts/:id" element={<PostPage />} />
			</Routes>
		</div>
	)
}
