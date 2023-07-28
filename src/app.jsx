import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { CarsInfo } from "./widgets/CarsInfo"

ReactDOM.createRoot(document.getElementById("root")).render(
	<>
		<BrowserRouter>
			<CarsInfo />
		</BrowserRouter>
	</>
)
