import React, { useState, useEffect } from 'react';

const Sidebar = () => {
	const [nickName, setNickname] = useState('')

	useEffect(() => {
		setNickname(localStorage.getItem("nickname"));
  })

	return (
		<nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
			<div className="container">
				<a className="navbar-brand" href="/">EruralVideo-Tube</a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
				{nickName !== '' ? 
					''
				:
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
						<button className="btn btn-white text-white me-2" type="button" disabled>
							Olá, {nickName}
						</button>
					</ul>
				</div>
				}
			</div>
		</nav>
	)
}

export default Sidebar;