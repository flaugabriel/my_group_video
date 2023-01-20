import React from 'react';

const Sidebar = () => {
	return (
		<nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
			<div className="container">
				<a className="navbar-brand" href="#!">EruralVideo-Tube</a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
						<button className="btn btn-secondary me-2" type="button" disabled>
							Meu nome
						</button>
						<button type="button" className="btn btn-primary position-relative me-2">
							Convites
							<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
								99+
								<span className="visually-hidden">unread messages</span>
							</span>
						</button>
					</ul>
				</div>
			</div>
		</nav>
	)
}

export default Sidebar;