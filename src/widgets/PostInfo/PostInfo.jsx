import "./PostInfo.css"
import HomePage from "../../pages/postsInfo/HomePage"
import { Routes, Route } from "react-router-dom"
export function PostInfo() {
	return (
		<div className="postInfo">
			<Routes>
				<Route path="/" element={<HomePage />} />
			</Routes>
		</div>
	)
}
