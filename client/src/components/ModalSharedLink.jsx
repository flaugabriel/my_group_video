import React from "react";
import { toast } from "react-toastify";

const ModalSharedLink = (props) => {

  const closeModal = () => {
    props.refresh.current = false;
  };

  function copy(text){
    navigator.clipboard.writeText(text)
    toast.success('Copiado!')
  }

  const linkCustom = () => {
   return window.location.origin +"/user_rooms/add_user/"+props.room.video.id+"/invite/"+props.room.video.media_video.code_access
  }

  return (
    <div
      className="modal fade"
      id="moda_shared_link"
      tabIndex="-1"
      aria-labelledby="moda_shared_link"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="moda_shared_link">
              Compartilhe o link abaixo com convidados
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() => closeModal()}
            ></button>
          </div>
          <div className="modal-body">
              <div className="form-group">
                <div className="g-3">
                  <div className="col-md-12">
                    <button type="button" className="btn btn-info" onClick={() => copy(linkCustom())} data-bs-container="body" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Top popover">
                      { linkCustom()   }
                    </button>
                  </div>
                </div>
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

export default ModalSharedLink;
