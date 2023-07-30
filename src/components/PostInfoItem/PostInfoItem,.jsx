import "./PostInfoItem.css"
import calcTime from "../../service/calcTime"
export default function PostInfoItem({ content, created }) {
	return (
		<li className="post-info-item">
			<p className="post-info-item__date">{calcTime(created)}</p>
			<h2 className="post-info-item__title">{content}</h2>
		</li>
	)
}
