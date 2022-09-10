import React from 'react'
import perfil from '../../assets/perfil.png'

const Header = () => {
	return (
		<div id="header">
			<nav>
				<input
					className="nav__item"
					type="search"
					name="search"
					placeholder="Search..."
					autoComplete="off"
				/>
				<button className="nav__item">
					<i className="fa fa-bell"></i>
				</button>
				<button className="nav__item profile__btn">
					<figure>
						<img src={perfil} alt="avatar" style={{ filter: 'contrast(0.9)' }} />
					</figure>
				</button>
			</nav>
		</div>
	)
}

export default Header
