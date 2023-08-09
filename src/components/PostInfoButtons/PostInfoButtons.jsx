import { useEffect, useRef, useState } from "react"
import "./PostInfoButtons.css"
import { Navigate } from "react-router-dom"

export function ButtonsManipulationPosts({ text, color = "blue", onClick, url, loading = true, transit = false }) {
	const classes = `buttons-manipulation-posts ${color}`

	return (
		<>
			<button className={classes} onClick={onClick} to={url}>
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
