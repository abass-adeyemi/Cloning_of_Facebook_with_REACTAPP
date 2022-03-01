const NavBar = () => {
	return (
		<>
			<nav class="navbar navbar-light bg-white">
				<div className="container-fluid d-flex justify-content-between">
					<a
						className="navbar-brand fs-3 h4 fw-bold text-primary text-lowercase"
						href="{#}"
					>
						FACEBOOK
					</a>
					<div className="d-flex  mx-5">
						<form class="d-flex ">
							<input
								className="form-control me-2"
								type="search"
								placeholder="mail or phone"
								aria-label="mail"
							/>
							<input
								class="form-control me-2"
								type="password"
								placeholder="password"
								aria-label="password"
							/>
							<button
								class="btn btn-primary text-white my-1 mx-2 fw-normal"
								type="submit"
							>
								Login
							</button>
						</form>
						<a className="text-decoration-none mx-2 py-1 my-1" href="{#}">
							Forgotten account?
						</a>
					</div>
				</div>
			</nav>
		</>
	);
};

export default NavBar;
