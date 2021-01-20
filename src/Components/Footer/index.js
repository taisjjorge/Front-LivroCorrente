import './footer.css';

export default function Footer (){
    return (
        <div className="main-footer">
            <div className="container-footer">

                <h6 className="logo">LivroCorrente</h6>
                
                <div className="info-inicio">
                    <h6 className="title">Início</h6> {/*Uppercase via css*/}
                    <a className="item-footer" href="#">Quem Somos</a>
                    <a className="item-footer" href="#">Pontos de Coleta</a>
                    <a className="item-footer" href="#">Bibliotecas</a>
                </div>

                <div className="suporte">
                    <h6 className="title">Suporte</h6>
                    <a className="item-footer" href="#">Voluntários</a>
                    <a className="item-footer" href="#">Parceiros</a>
                    <a className="item-footer" href="#">FAQ</a>
                </div>

                <div className="socialmedia">
                    <h6 className="title">Nossas Redes Sociais</h6>
                    <div className="redes-sociais">
                        <a className="icone-contato" href="http://instagram.com"><i class="fa fa-instagram fa-2x" aria-hidden="true"></i></a>
                        <a className="icone-contato" href="http://facebook.com"><i class="fa fa-facebook-square fa-2x" aria-hidden="true"></i></a>
                        <a className="icone-contato" href="http://linkdin.com"><i class="fa fa-linkedin-square fa-2x" aria-hidden="true"></i></a>
                    </div>
                </div> 
            </div>

            <p className="copyright">
                © Copyright 2021 Livro Corrente, Inc. Todos os direitos reservados.
                As diversas marcas comerciais e redes de bibliotecas aqui apresentadas pertencem a seus respectivos proprietários
            </p>
            
        </div>
    );
}