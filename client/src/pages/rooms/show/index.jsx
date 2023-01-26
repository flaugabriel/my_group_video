import React, { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import VideoPlay from "../../../components/VideoPlay";

const RoomShow = (props) => {
  const { id } = useParams();
  const [room, setRoom] = useState({});
  const [users, setUsers] = useState({});
  const [isLoad, setIsLoad] = useState(true);

  function getAPIData() {
    return axios.get(props.urlApi + "rooms/" + id).then((res) => res.data);
  }

  function getUsers() {
    return axios.get(props.urlApi + "user_rooms/show_users/" + id).then((res) => res.data);
  }

  useEffect(() => {
    let mounted = true;

    if (mounted && isLoad) {
      getUsers().then((items) => {
        setUsers(items);
        setIsLoad(false);
      });

      getAPIData().then((items) => {
        setRoom(items);
        setIsLoad(false);
      });
    }

    return () => mounted;
  });

  return (
    <Fragment>
      <VideoPlay video={room} urlApi={props.urlApi}/>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title h4">{room.media_video?.title}</h2>
                <div className="small text-muted">Sala: {room.name}</div>
                <div className="small text-muted">
                  Criado em: {room.created_at}{" "}
                  {room.status == "public_room" ? "- Publico" : ""}
                </div>
                <div className="small text-muted">
                  Criado por: {room.create_by}
                </div>
                <p className="card-text">{room.media_video?.description}</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card">
              <div className="my-3 p-3 bg-body rounded">
                <h6 className="border-bottom pb-2 mb-0">Participantes</h6>
                {users && users.length > 0 ? (
                  users.map((user) => (
                <div key={user.id } className="d-flex text-muted pt-3">
                  <div  className="pb-3 mb-0 small lh-sm border-bottom w-100">
                    <div className="d-flex justify-content-between">
                      <strong className="text-gray-dark">{user.user}</strong>
                      <a className="btn btn-danger" href="#">Remover</a>
                    </div>
                    <span className="d-block">Adicionado em: {user.date_add}</span>
                    <span className="d-block">{user.admin}</span>
                  </div>
                </div>
                  ))
                  ) : (
                    <span>Não foi encontrado nenhuma pessoa</span>
                  )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default RoomShow;
