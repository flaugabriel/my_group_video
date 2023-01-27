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
      <VideoPlay urlApi={props.urlApi} />
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="accordion" id="accordionPanelsStayOpenExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                    Sobre
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingOne">
                  <div className="accordion-body">
                  Ao realizar um upload você pode criar uma sala é convidar
                  pessoas por meio de um link para visualizar o video em grupo.
                  <p className="text-info">
                    As salas/nicknames/videos só ficam disponiveis por 1 hora, depois disso serão removidas.
                  </p>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="row">
              {rooms && rooms.length > 0 ? (
                rooms.map((item) => (
                  <div key={item.id} className="col-lg-3">
                    <div className="card mb-4">
                      <div className="player-wrapper">
                        <ReactPlayer className="react-player" width="100%" height="100%" url={item.media_video.url_player === 'https://' ? item.media_video.video : item.media_video.url_player} controls = {true}/>
                      </div>
                      <div className="card-body">
                        <div className="small text-muted">Criado em: {item.created_at} {item.status == 'public_room' ? '- Publico' : ''}</div>
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
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
