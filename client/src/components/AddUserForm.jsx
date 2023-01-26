import { useState } from "react";
import axios from 'axios';

function AddUserForm({ form, urlApi}) {
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    console.log(form);
    function fetchCounties(data){
      const dataFormat = { user_room: data}
      axios({
        url: urlApi + 'user_rooms/add_user', 
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        data: JSON.stringify(dataFormat),
      }).then((err) => {
        setMessage("Salvo com sucesso!");
        setStatus("success");
        console.log(err);
      }).catch((err) => {
        setMessage(err.response.data.messenger);
        setStatus("error");
      });
    }

      console.log('form', form);
      let data = {user_room: form}
      console.log('data', data);
  
      fetchCounties(data)
  };

  return { handleSubmit, status, message };
}

export default AddUserForm;