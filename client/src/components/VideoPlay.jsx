import React, { Fragment, useRef, useState } from "react";
import ReactPlayer from 'react-player'
import { toast } from "react-toastify";
import ModalSharedLink from '../components/ModalSharedLink';
import axios from "axios";

const VideoPlay = (props) => {
  const [error, setError] = useState(null);
  const [videoStatus, setVideoStatus] = useState(false);
  const [videoType, setVideoType] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [inputs, setInputs] = useState({});
  const [selectedFile, setSelectedFile] = useState(null);
  const refresh = useRef(null)
  
  const toggleVideoType = () => {
    setVideoType(!videoType);
  };

  const toggleVideoPublic = () => {
    setVideoStatus(!videoStatus);
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0])
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("selectedFile", selectedFile);
    const newRoom = {
      room: {
        name: inputs.name,
        status: videoStatus === true ? 'public_room' : 'private_room',
        user: {
          nickname: inputs.nickname
        },
        media_video_attributes: {
          title: inputs.title,
          description: inputs.description,
          url_player: inputs.url_player || 'https://',
          video: selectedFile || null
        }
      }
    }

    axios({
      url: props.urlApi + 'rooms',
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data',
      },
      data: newRoom,
    }).then((response) => {
      localStorage.setItem("nickname", response.data.create_by);
      window.location.href = 'rooms/' + response.data.id
    }).catch(error => {
      setError(error);
    });

    showAlert()
  }

  function clearForm() {
    return setInputs({})
  }

  function showAlert() {
    if (error) {
      toast.error(error.response.data.toString());
    } else {
      toast.success('Sala criada!');
    }
  }

  function deleteRoom(id) {
    axios.delete(`${props.urlApi}/rooms/${id}`).then((resp) => {
      if (resp.data.status === 422) {
        toast.error(resp.data.messenger)
      } else {
        localStorage.clear();
        window.location.href = '/';
        toast.success('Sala fechada');
      }
    });
  }

  return (
    <header className="py-5">
      <div className="container">
        {props.video?.media_video !== undefined ?
          <div className="text-center my-5">
            {
              props.current_user && props.canSeeVideo ? 
                <ReactPlayer className="bs-card-video" width="1250px" height="500px" url={props.video.media_video.url_player === 'https://' ? props.video.media_video.video : props.video.media_video.url_player} controls = {true}/>
                : 
                <Fragment>
                  <a className="btn btn-info text-white my-5 me-3" data-bs-toggle="modal" href='/#' onClick={() => setOpenModal(true)} data-bs-target='#moda_shared_link'> Clique aqui para visualizar o link de acesso!</a>
                  <ModalSharedLink room={props} openModal={openModal} urlApi={props.urlApi} refresh={refresh} />
                </Fragment>
            }
            {
              props.current_user && props.video.create_by === props.current_user?
                <Fragment>
                  <a className="btn btn-info text-white my-5 me-3" data-bs-toggle="modal" href='/#' onClick={() => setOpenModal(true)} data-bs-target='#moda_shared_link'> Convidar</a>
                  <ModalSharedLink room={props} openModal={openModal} urlApi={props.urlApi} refresh={refresh} />
                  <a className="btn btn-danger my-5 me-3" href="#!" onClick={() => deleteRoom(props.video.id)}>Fecha sala</a>
                </Fragment>
                : ''
            }
            <a className="btn btn-primary my-5 me-3" href="/">Voltar</a>
          </div>
          :
          <div className="text-center my-5">
            <h1 className="fw-bolder">Bem vindo!</h1>
            <p className="lead mb-0">
              Crie uma sala é assista videos em grupo! &#127871; &#127909;
              &#127911; &#127916; &#127918;
            </p>
            <br />
            <button
              type="button"
              className="btn btn-outline-dark"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              data-bs-whatever="@mdo"
            >
              Começar ?
            </button>

            <div
              className="modal fade"
              id="exampleModal"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      Nova sala
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <span className="text-danger">
                      Todos os campos são obrigatorios.
                    </span>
                    <form onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <label
                          htmlFor="recipient-name"
                          className="col-form-label"
                        >
                          Seu apelido
                        </label>
                        <input
                          type="text"
                          placeholder="Thor"
                          className="form-control"
                          id="recipient-name"
                          onChange={handleChange}
                          value={inputs.nickname || ''}
                          name="nickname"
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="recipient-name"
                          className="col-form-label"
                        >
                          Nome da sala
                        </label>
                        <input
                          type="text"
                          placeholder="Minha sala bacana"
                          className="form-control"
                          id="recipient-name"
                          onChange={handleChange}
                          value={inputs.name || ''}
                          name="name"
                          required
                        />
                      </div>
                      <div className="form-check form-switch">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="flexSwitchCheckChecked"
                          value={inputs.status || ''}
                          name="status"
                          onChange={toggleVideoPublic}
                          checked={videoStatus}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexSwitchCheckChecked"
                          required
                        >
                          Video publico?
                        </label>
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="recipient-name"
                          className="col-form-label"
                        >
                          Titulo do video
                        </label>
                        <input
                          type="text"
                          placeholder="Meu video de gatinho"
                          className="form-control"
                          id="recipient-name"
                          onChange={handleChange}
                          value={inputs.title || ''}
                          name="title"
                        />
                      </div>
                      <div className="form-check form-switch">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="flexSwitchCheckChecked"
                          onChange={toggleVideoType}
                          checked={videoType}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexSwitchCheckChecked"
                          value=""
                        >
                          Fazer upload de um video?
                        </label>
                      </div>
                      {videoType ? (
                        <div className="mb-3">
                          <label
                            htmlFor="recipient-name"
                            className="col-form-label"
                          >
                            Adicione um video
                          </label>
                          <input
                            type="file"
                            className="form-control"
                            id="recipient-name"
                            onChange={handleFileSelect}
                            accept="video/mp4,video/x-m4v,video/*"
                            name="video"
                          />
                        </div>
                      ) : (
                        <div className="mb-3">
                          <label
                            htmlFor="recipient-name"
                            className="col-form-label"
                          >
                            Url
                          </label>
                          <input
                            type="text"
                            placeholder="https://www.site.com"
                            className="form-control"
                            onChange={handleChange}
                            value={inputs.url_player || ''}
                            name="url_player"
                            id="recipient-name"
                          />
                        </div>
                      )}
                      <div className="mb-3">
                        <label htmlFor="message-text" className="col-form-label">
                          Descrição
                        </label>
                        <textarea
                          className="form-control"
                          id="message-text"
                          onChange={handleChange}
                          value={inputs.description || ''}
                          name="description"
                        ></textarea>
                      </div>
                      <button
                        type="button"
                        className="btn btn-danger  me-3"
                        data-bs-dismiss="modal"
                      >
                        Fechar
                      </button>
                      <button type="submit" className="btn btn-success me-3">
                        Salvar
                      </button>

                      <button
                        type="button"
                        className="btn btn-secondary  me-3"
                        onClick={clearForm}
                      >
                        Limpar
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    </header>
  );
};

export default VideoPlay;
