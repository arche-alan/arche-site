import React, {useState} from "react";
import Button from "./Button";
import {ResponseModel} from '../utils/Types'
import Text from "./Text";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
  const [response, setResponse] = useState(new ResponseModel());
  const [isLoading, setIsLoading] = useState(false);

  const submitForm = () => {
    resetErrors()
    setIsLoading(true)
    fetch("/api/email", {method: "POST", body: JSON.stringify({name, email, phone, description})})
      .then(response => Promise.all([response.ok, response.json()]))
      .then(([ok, data]) => {
        setResponse(data)
        setIsLoading(false)
      })
      .catch(err => {
        setIsLoading(false)
        alert(err)
      })
  }

  const resetErrors = () => setResponse(new ResponseModel())

  return (
    <section className={"form-section"}>
      <section className={"form-wrapper"}>
        <div className={"inputs column"}>

          <div className="input-wrap marg-bot-1" >
            <input className={name ? "focused-input" : ""} placeholder={"Name"} value={name} onChange={e => setName(e.target.value)}/>
            {response.error.name && <Text error>{response.error.name}</Text>}
          </div>

          <div className="input-wrap marg-bot-1">
            <input className={email ? "focused-input" : ""} placeholder={"Email"} value={email} onChange={e => setEmail(e.target.value)}/>
            {response.error.email && <Text error>{response.error.email}</Text>}
          </div>

          <div className="input-wrap">
            <input className={phone ? "focused-input" : ""} placeholder={"Phone"} value={phone} onChange={e => setPhone(e.target.value)}/>
            {response.error.phone && <Text error>{response.error.phone}</Text>}
          </div>
        </div>

        <div className={"textarea"}>
          <textarea className={description ? "focused-input" : ""} placeholder={"Tell us about your project"} value={description} onChange={e => setDescription(e.target.value)}/>
          {response.error.description && <Text error>{response.error.description}</Text>}
        </div>
      </section>
      <section className={"row"}>
        <Button text={"SUBMIT"} onClick={submitForm} isLoading={isLoading}/>
      </section>

      {response.success && <Text className={"marg-top-1 text-center"}>{response.success}</Text>}
    </section>
  );
};
    
export default ContactForm;