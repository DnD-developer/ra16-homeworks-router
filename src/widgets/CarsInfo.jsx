import HomePage from "../pages/CarsInfo/Homepage"
import DriftPage from "../pages/CarsInfo/Driftpage"
import ForzaPage from "../pages/CarsInfo/ForzaPage"
import TimeAttackPage from "../pages/CarsInfo/TimeAttackPage"
import { Route, Routes } from "react-router-dom"
import Menu from "../components/Menu/Menu"

export function CarsInfo() {
	return (
		<div className="page">
			<Menu />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/drift" element={<DriftPage />} />
				<Route path="/timeattack" element={<TimeAttackPage />} />
				<Route path="/forza" element={<ForzaPage />} />
			</Routes>
		</div>
	)
}
