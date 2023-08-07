import "./Menu.css"
import MenuItem from "../MenuItem/MenuItem"

export default function Menu() {
	return (
		<nav className="menu">
			<MenuItem customeClass="menu__item" activeCustomClass="menu__item-active" text="Главная страница" path="/" />
			<MenuItem customeClass="menu__item" activeCustomClass="menu__item-active" text="Дрифт-такси" path="/drift" />
			<MenuItem customeClass="menu__item" activeCustomClass="menu__item-active" text="Time Attac" path="/timeattack" />
			<MenuItem customeClass="menu__item" activeCustomClass="menu__item-active" text="Forza Karting" path="/forza" />
		</nav>
	)
}
