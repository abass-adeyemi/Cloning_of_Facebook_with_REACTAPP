import NavBar from './NavBar';
const FacebookForgetPasswordClone = () => {
	return (
		<>
			<NavBar />
			<section className="bg-light py-5">
				<div className="container py-5 px-5 d-flex justify-content-center ">
					<div className="row d-flex mx-5 col-6 px-auto gy-2 bg-white border justify-content-center rounded-3">
						<h4 className=" mt-2 mx-2 col px-3">Find Your Account</h4>
						<hr />
						<div className="mx-2 mb-2 ">
							<p className="px-2 fs-5 px-1 mb-3 fw-normal">
								Please enter your email address or mobile number to search for
								your account
							</p>
							<form className="col  px-2 pb-1">
								<input
									className="form-control me-2 lh-lg"
									type="search"
									placeholder="mail or phone"
									aria-label="mail"
								/>
							</form>
						</div>
						<hr />
						<div>
							<div className=" mb-3 d-flex justify-content-end px-3">
								<button
									type="submit"
									className="btn btn-light btn-outline-light text-dark fw-bold px-4 me-3"
								>
									Cancel
								</button>
								<button type="submit" className="btn btn-primary fw-bold">
									Search
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
export default FacebookForgetPasswordClone;
