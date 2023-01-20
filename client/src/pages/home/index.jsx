import React, { Fragment } from "react";
import VideoPlay from "../../components/VideoPlay";

const Home = () => {
  return (
    <Fragment>
      <VideoPlay />
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="card mb-4">
              <a href="#!"><img className="card-img-top" src="https://dummyimage.com/850x350/dee2e6/6c757d.jpg" alt="..." /></a>
              <div className="card-body">
                <div className="small text-muted">January 1, 2022</div>
                <h2 className="card-title">Featured Post Title</h2>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!</p>
                <a className="btn btn-primary" href="#!">Entrar →</a>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="card mb-4">
                  <a href="#!"><img className="card-img-top" src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg" alt="..." /></a>
                  <div className="card-body">
                    <div className="small text-muted">January 1, 2022</div>
                    <h2 className="card-title h4">Post Title</h2>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla.</p>
                    <a className="btn btn-primary" href="#!">Read more →</a>
                  </div>
                </div>
                <div className="card mb-4">
                  <a href="#!"><img className="card-img-top" src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg" alt="..." /></a>
                  <div className="card-body">
                    <div className="small text-muted">January 1, 2022</div>
                    <h2 className="card-title h4">Post Title</h2>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla.</p>
                    <a className="btn btn-primary" href="#!">Read more →</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="card mb-4">
                  <a href="#!"><img className="card-img-top" src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg" alt="..." /></a>
                  <div className="card-body">
                    <div className="small text-muted">January 1, 2022</div>
                    <h2 className="card-title h4">Post Title</h2>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla.</p>
                    <a className="btn btn-primary" href="#!">Read more →</a>
                  </div>
                </div>
                <div className="card mb-4">
                  <a href="#!"><img className="card-img-top" src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg" alt="..." /></a>
                  <div className="card-body">
                    <div className="small text-muted">January 1, 2022</div>
                    <h2 className="card-title h4">Post Title</h2>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam.</p>
                    <a className="btn btn-primary" href="#!">Read more →</a>
                  </div>
                </div>
              </div>
            </div>
            <nav aria-label="Pagination">
              <hr className="my-0" />
              <br />
              <h5>Desenvolvido por Gabriel Flauzino Mota</h5>
            </nav>
          </div>
          <div className="col-lg-4">
            <div className="card mb-4">
              <div className="card-header bg-success text-white">Entrar em uma sala com codigo de acesso</div>
              <div className="card-body">
                <div className="input-group">
                  <input className="form-control" type="text" placeholder="Digite o seu codigo de acesso" aria-label="Por nomePor nome" aria-describedby="button-search" />
                  <button className="btn btn-primary" id="button-search" type="button">Entrar</button>
                </div>
              </div>
            </div>
            <div className="card mb-4">
              <div className="card-header">Pesquisar sala</div>
              <div className="card-body">
                <div className="input-group">
                  <input className="form-control" type="text" placeholder="Por nome" aria-label="Por nomePor nome" aria-describedby="button-search" />
                  <button className="btn btn-primary" id="button-search" type="button">Buscar</button>
                </div>
              </div>
            </div>
            <div className="card mb-4">
              <div className="card-header">Top 10 Salas com mais reações</div>
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-6">
                    <ul className="list-unstyled mb-0">
                      <li><a href="#!">Jose</a></li>
                      <li><a href="#!">Manuel</a></li>
                      <li><a href="#!">teste</a></li>
                    </ul>
                  </div>
                  <div className="col-sm-6">
                    <ul className="list-unstyled mb-0">
                      <li>23424</li>
                      <li>234</li>
                      <li>33</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mb-4">
              <div className="card-header">Sobre</div>
              <div className="card-body">Ao realizar um upload você pode criar uma sala é convidar pessoas por meio de um link para visualizar o video em grupo</div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Home;