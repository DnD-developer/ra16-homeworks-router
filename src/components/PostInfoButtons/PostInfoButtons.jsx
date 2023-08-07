import { useState } from "react"
import "./PostInfoButtons.css"
import { Navigate } from "react-router-dom"

export function ButtonsManipulationPosts({ text, color = "blue", onClick, url, loading = true }) {
	const classes = `buttons-manipulation-posts ${color}`
	const [transit, setTransit] = useState(false)

	const onClickHandler = () => {
		onClick()

		if (url) {
			setTransit(true)
		}
	}

	return (
		<>
			<button className={classes} onClick={onClickHandler} to={url}>
				{text}
			</button>
			{transit && !loading ? <Navigate to={url} replace={true} /> : <></>}
		</>
	)
}

export function PanelForButtonsManipulationPosts({ children }) {
	return (
		<>
			<div className="panel-for-buttons-manipulation-posts">{children}</div>
		</>
	)
}
