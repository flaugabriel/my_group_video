import React, { Fragment, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const Invitation = (props) => {
  const { code_access, id } = useParams();
  const [error, setError] = useState(null);
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const newUserRoom = {
      user_room: {
        code_access: code_access,
        room_id: id,
        user: {
          nickname: inputs.nickname
        },
      }
    }

    axios({
      url: props.urlApi + 'user_rooms/add_user',
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: JSON.stringify(newUserRoom),
    }).then((response) => {
      if (response.data.status === 404) {
        setError(response.data.messenger)
      }else{
      window.location.href = `http://${window.location.host}/rooms/${id}`
      }
    });
    

    showAlert()
  }

  function showAlert() {
    if (error) {
      toast.error(error);
    } else {
      toast.success('Entrando na sala!');
    }
  }

  return (
    <Fragment>
      <header className="py-5">
        <div className="container">
          <div className="text-center my-5"></div>
        </div>
      </header>
      <div className="container col-2">
        <form  onSubmit={handleSubmit}>
          <h1 className="h3 mb-3 fw-normal">Codigo de acesso: <span className="text-info">{code_access}</span></h1>
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              onChange={handleChange}
              value={inputs.nickname || ''}
              name="nickname"
            />
            <label htmlFor="floatingInput">Novo apelido</label>
          </div>
          <br />
          <button className="w-100 btn btn-lg btn-success" type="submit">
            Aceitar convite
          </button>
        </form>
      </div>
    </Fragment>
  );
};

export default Invitation;
