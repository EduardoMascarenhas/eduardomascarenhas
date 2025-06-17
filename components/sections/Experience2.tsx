import Link from 'next/link'


export default function Experience2() {
	return (
		<>

			<section id="portfolio" className="section-experience pt-5">
				<div className="container">
					<div className="rounded-3 border border-1 position-relative overflow-hidden">
						<div className="box-linear-animation position-relative z-1">
							<div className="p-lg-8 p-md-6 p-3 position-relative z-1">
								<div className="d-flex align-items-center">
									<svg className="text-primary-2 me-2" xmlns="http://www.w3.org/2000/svg" width={5} height={6} viewBox="0 0 5 6" fill="none">
										<circle cx="2.5" cy={3} r="2.5" fill="#A8FF53" />
									</svg>
									<span className="text-linear-4 d-flex align-items-center"> Experiência </span>
								</div>
								<h3>
									+8
									<span className="text-300"> anos de </span>
									amor
									 <span className="text-300">
										{' '}pela <br />
										programação
									</span>
								</h3>
								<div className="row mt-5">
									<div className="col-lg-4">
										<div className="d-flex flex-column gap-2">
											<Link href="#" className="technology border border-1 rounded-3 p-3">
												<div className="d-flex align-items-center gap-2">
													<img src="assets/imgs/home-page-2/experience/google.svg" alt="Eduardo Mascarenhas" />
													<div className="d-flex flex-column ms-2">
														<h5 className="mb-1">Scale Systems</h5>
														<span className="text-300">2024 - Atual</span>
													</div>
												</div>
											</Link>
											<Link href="#" className="technology border border-1 rounded-3 p-3">
												<div className="d-flex align-items-center gap-2">
													<img src="assets/imgs/home-page-2/experience/google.svg" alt="Eduardo Mascarenhas" />
													<div className="d-flex flex-column ms-2">
														<h5 className="mb-1">Negócio Animal</h5>
														<span className="text-300">2021 - 2025</span>
													</div>
												</div>
											</Link>
											<Link href="#" className="technology border border-1 rounded-3 p-3">
												<div className="d-flex align-items-center gap-2">
													<img src="assets/imgs/home-page-2/experience/google.svg" alt="Eduardo Mascarenhas" />
													<div className="d-flex flex-column ms-2">
														<h5 className="mb-1">Sudoeste Informática</h5>
														<span className="text-300">2019 - 2021</span>
													</div>
												</div>
											</Link>
											<Link href="#" className="technology border border-1 rounded-3 p-3">
												<div className="d-flex align-items-center gap-2">
													<img src="assets/imgs/home-page-2/experience/google.svg" alt="Eduardo Mascarenhas" />
													<div className="d-flex flex-column ms-2">
														<h5 className="mb-1">Onix Marketing Digital</h5>
														<span className="text-300">2017 - 2019</span>
													</div>
												</div>
											</Link>
										</div>
									</div>
									<div className="col-lg-8 ps-lg-5 mt-5 mt-lg-0">
										<h6 className="text-linear-4">Analista de Sistemas</h6>
										<ul className="mt-4">
											<li className="text-dark mb-3">Liderei o desenvolvimento de aplicações web escaláveis, <span className="text-secondary-2">melhorando o desempenho e a experiência do usuário</span> para milhares de pessoas.</li>
											<li className="text-dark mb-3">Implementei um sitema completo de Chat com WebSocket.</li>
											<li className="text-dark mb-3">Desenvolvi todo o backend e todo o front end do painél administrativo do app da Negócio Animal.</li>
										</ul>
										<div className="d-flex flex-wrap align-items-center gap-3 mt-7">
											<Link href="#" className="text-300 border border-1 px-3 py-1">React.js</Link>
											<Link href="#" className="text-300 border border-1 px-3 py-1">Typescript</Link>
											<Link href="#" className="text-300 border border-1 px-3 py-1">Vue.js</Link>
											<Link href="#" className="text-300 border border-1 px-3 py-1">Node.js</Link>
											<Link href="#" className="text-300 border border-1 px-3 py-1">GraphQL</Link>
										</div>
									</div>
								</div>
							</div>
							<img className="position-absolute top-0 start-0 z-0" src="assets/imgs/home-page-2/services/bg.png" alt="Eduardo Mascarenhas" />
						</div>
					</div>
				</div>
			</section>

		</>
	)
}
