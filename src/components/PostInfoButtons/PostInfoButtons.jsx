import "./PostInfoButtons.css"

export function ButtonsManipulationPosts({ text, color = "blue", onClick, id = 0 }) {
	const classes = `buttons-manipulation-posts ${color}`

	const onClickHandler = () => {
		onClick(id)
	}

	return (
		<button className={classes} onClick={onClickHandler}>
			{text}
		</button>
	)
}

export function PanelForButtonsManipulationPosts({ children }) {
	return <div className="panel-for-buttons-manipulation-posts">{children}</div>
}
