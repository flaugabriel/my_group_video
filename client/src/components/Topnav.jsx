import React from 'react';

const Topnav = () => {
	return (
		<header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
			<a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">Projeto para teste em Ruby on Rails e React.js para Erural Gabriel Flauzino Mota</a>
			<button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
		</header>
	);
}

export default Topnav;