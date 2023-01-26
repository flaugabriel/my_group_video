import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import VideoPlay from "../../components/VideoPlay";
import ReactPlayer from 'react-player'

const Home = (props) => {
  const [rooms, setRooms] = useState({});

  function getAPIData() {
    return axios.get(props.urlApi + "rooms").then((res) => res.data);
  }

  useEffect(() => {
    let mounted = true;
    getAPIData().then((items) => {
      if (mounted) {
        setRooms(items);
      }
    });
    if (rooms && rooms.length > 0) {
      mounted = false;
    } else {
      mounted = true;
    }

    return () => mounted;
  });

  return (
    <Fragment>
      <VideoPlay urlApi={props.urlApi}/>
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="row">
                {rooms && rooms.length > 0 ? (
                  rooms.map((item) => (
                  <div key={item.id} className="col-lg-6">
                    <div  className="card mb-4">
                      <div className="player-wrapper">
                        <ReactPlayer className="react-player"   width="100%" height="100%" url={item.media_video.url_player} />
                      </div>
                      <div className="card-body">
                        <div className="small text-muted">Criado em: {item.created_at} { item.status == 'public_room' ? '- Publico' : ''}</div>
                        <h2 className="card-title h4">{item.name}</h2>
                        <p className="card-text">
                          {item.media_video.description}
                        </p>
                        <a className="btn btn-primary" href={`/rooms/${item.id}`}>
                         Entrar na sala →
                        </a>
                      </div>
                    </div>
                  </div>
                  ))
                ) : (
                  <span>Não foi encontrado nenhuma pessoa</span>
                )}
            </div>
            <nav aria-label="Pagination">
              <hr className="my-0" />
              <br />
              <h5>Desenvolvido por Gabriel Flauzino Mota</h5>
            </nav>
          </div>
          <div className="col-lg-4">
            <div className="card mb-4">
              <div className="card-header bg-success text-white">
                Entrar em uma sala com codigo de acesso
              </div>
              <div className="card-body">
                <div className="input-group">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Digite o seu codigo de acesso"
                    aria-label="Por nomePor nome"
                    aria-describedby="button-search"
                  />
                  <button
                    className="btn btn-primary"
                    id="button-search"
                    type="button"
                  >
                    Entrar
                  </button>
                </div>
              </div>
            </div>
         
            <div className="card mb-4">
              <div className="card-header">Sobre</div>
              <div className="card-body">
                Ao realizar um upload você pode criar uma sala é convidar
                pessoas por meio de um link para visualizar o video em grupo
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
