import Link from 'next/link'

export default function OffCanvas({ isOffCanvas, handleOffCanvas }: any) {
	return (
		<>
			{/* offCanvas-menu */}
			<div className={`offCanvas__info ${isOffCanvas ? 'active' : ''}`}>
					<div className="offCanvas__close-icon menu-close" onClick={handleOffCanvas}>
						<button><i className="ri-close-line" /></button>
					</div>
					<div className="offCanvas__logo mb-5">
						<h3 className="mb-0">Entre em contato!</h3>
					</div>
					<div className="offCanvas__side-info mb-30">
						<div className="contact-list mb-30">
							<p className="fs-6 fw-medium text-200 mb-5">Eu estou sempre em busca de novos e empolgantes desafios. Entre em contato e vamos criar algo incrível!</p>
							<div className="mb-3">
								<span className="text-400 fs-5">Telefone</span>
								<p className="mb-0">+55 75 9 9244 - 1809</p>
							</div>
							<div className="mb-3">
								<span className="text-400 fs-5">E-mail</span>
								<p className="mb-0">eduardomsmascarenhas@gmail.com</p>
							</div>
							<div className="mb-3">
								<span className="text-400 fs-5">Endereço</span>
								<p className="mb-0">Feira de Santana - BA</p>
							</div>
						</div>
						<div className="contact-list">
							<p className="text-400 fs-5 mb-2">Redes Sociais</p>
							<div className="d-md-flex d-none gap-3">
								<Link href="https://www.linkedin.com/in/eduardo-mascarenhas-b23642284/" target="_blank"
  rel="noopener noreferrer">
									<i className="ri-linkedin-fill fs-18" />
								</Link>
								<Link href="https://github.com/EduardoMascarenhas?tab=repositories" target="_blank"
  rel="noopener noreferrer">
									<i className="ri-github-fill fs-18" />
								</Link>
							</div>
						</div>
					</div>
				</div>
			<div className={`offCanvas__overly ${isOffCanvas ? 'active' : ''}`}  onClick={handleOffCanvas}/>
		</>
	)
}
