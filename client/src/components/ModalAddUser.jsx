import axios from "axios";
import { useState, useEffect } from "react";
import countyForm from "./AddUserForm";

const ModalAddUser = (props) => {
  const [isLoad, setIsLoad] = useState(true);
  const [users, setUsers] = useState({});
  const [inputs, setInputs] = useState({});

  function fetchUsers() {
    return axios.get(props.urlApi + "users").then((res) => res.data);
  }

  useEffect(() => {
    let mounted = props.openModal;
      fetchUsers().then((user) => {
        if (mounted && isLoad) {
          setUsers(user);
          setIsLoad(false);
        }
      });

    return () => (mounted = false);
  });

  const closeModal = () => {
    setInputs({})
    setUsers({})
    setIsLoad(true)
    props.refresh.current = false;
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    countyForm(inputs, props.urlApi);
  }

  return (
    <div
      className="modal fade"
      id="modal_add_user"
      tabIndex="-1"
      aria-labelledby="modal_add_user"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-sl">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="modal_add_user">
              Convidar usuários
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
              <div className="form-group">
                <form
                  className="g-3"
                  onSubmit={handleSubmit}
                >
                  <div className="col-md-12">
                    <input
                      type="hidden"
                      name="room_id"
                      onChange={handleChange} 
                      value={inputs.roomId || ''} 
                    />
                  </div>
                  <div className="col-md-12">
                    <label htmlFor="validationCustom04" className="form-label">
                      Buscar por apelido
                    </label>
                    <select
                      className="form-select"
                      id="validationCustom04"
                      name="user_id"
                      value={inputs.userId || ''}
                      onChange={handleChange}
                    >
                      <option value="" selected>
                        Selecione...
                      </option>
                      {users && users.length > 0 ? (
                        users.map((user) => (
                          <option key={user.id} value={user.id}>{user.nickname}</option>
                        ))
                      ) : (
                        <option selected disabled>
                          Não foram encontrado nem um usuário
                        </option>
                      )}
                    </select>
                  </div>
                  <div className="mb-3 pt-3">
                    <button className="btn btn-success" type="submit">
                      Enviar
                    </button>
                  </div>
                </form>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => closeModal()}
              data-bs-dismiss="modal"
            >
              Fecha
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalAddUser;
