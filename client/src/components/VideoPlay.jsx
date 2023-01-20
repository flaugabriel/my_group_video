import React from "react";

const VideoPlay = () => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked(!checked);
  }

  return (
    <header className="py-5 mb-4">
      <div className="container">
        <div className="text-center my-5">
          <h1 className="fw-bolder">Bem vindo!</h1>
          <p className="lead mb-0">Crie uma sala é assista videos em grupo! &#127871; &#127909; &#127911; &#127916; &#127918;</p>
          <br />
          <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Começa ?</button>

          <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Nova sala</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <span className="text-danger">Todos os campos são obrigatorios.</span>
                  <form>
                    <div className="mb-3">
                      <label htmlFor="recipient-name" className="col-form-label">Nome da sala</label>
                      <input type="text" placeholder="Minha sala bacana" className="form-control" id="recipient-name" value=""/>
                    </div>
                    <div className="form-check form-switch">
                      <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked/>
                      <label className="form-check-label" htmlFor="flexSwitchCheckChecked" value="">Video publico?</label>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="recipient-name" className="col-form-label">Titulo do video</label>
                      <input type="text" placeholder="Meu video de gatinho" className="form-control" id="recipient-name" value=""/>
                    </div>
                    <div className="form-check form-switch">
                      <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" onChange={handleChange} checked={checked}/>
                      <label className="form-check-label" htmlFor="flexSwitchCheckChecked" value="">Fazer upload de um video?</label>
                    </div>
                    {
                      checked ? <div className="mb-3">
                      <label htmlFor="recipient-name" className="col-form-label">Adicione um video</label>
                      <input type="file" className="form-control" id="recipient-name" value=""/>
                    </div> : <div className="mb-3">
                      <label htmlFor="recipient-name" className="col-form-label">Url</label>
                      <input type="text"  placeholder="https://www.site.com" className="form-control" value="" id="recipient-name"/>
                    </div>
                    }
                    <div className="mb-3">
                      <label htmlFor="message-text" className="col-form-label">Descrição</label>
                      <textarea className="form-control" id="message-text" value=""></textarea>
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-primary">Send message</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default VideoPlay;