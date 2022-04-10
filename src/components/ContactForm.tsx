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

  const encode = (data: any) => {
    return Object.keys(data)
      .map((key: string) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

  const submitForm = (e: any) => {
    e.preventDefault()
    resetErrors()
    setIsLoading(true)
    // fetch("/api/email", {method: "POST", body: JSON.stringify({name, email, phone, description})})
    //   .then(response => Promise.all([response.ok, response.json()]))
    //   .then(([ok, data]) => {
    //     setResponse(data)
    //     setIsLoading(false)
    //   })
    //   .catch(err => {
    //     setIsLoading(false)
    //     alert(err)
    //   })
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, phone, description})
    })
      .then(() => {
        setResponse(new ResponseModel("Thank you for reaching out! We'll be in touch very soon."))
        setIsLoading(false)
      })
      .catch(error => {
        setIsLoading(false)
        alert(error)
      });
  }

  const resetErrors = () => setResponse(new ResponseModel())

  return (
    <section className={"form-section"}>
      <form name="contact" method="POST" data-netlify="true" onSubmit={submitForm}>
        <input type="hidden" name="form-name" value="contact" />

        <section className={"form-wrapper"}>
          <div className={"inputs column"}>

            <div className="input-wrap marg-bot-1" >
              <input name={"name"} required className={name ? "focused-input" : ""} placeholder={"Name"} value={name} onChange={e => setName(e.target.value)}/>
              {response.error.name && <Text error>{response.error.name}</Text>}
            </div>

            <div className="input-wrap marg-bot-1">
              <input name={"email"} type={"email"} required className={email ? "focused-input" : ""} placeholder={"Email"} value={email} onChange={e => setEmail(e.target.value)}/>
              {response.error.email && <Text error>{response.error.email}</Text>}
            </div>

            <div className="input-wrap">
              <input name={"phone"} type={"tel"} required className={phone ? "focused-input" : ""} placeholder={"Phone"} value={phone} onChange={e => setPhone(e.target.value)}/>
              {response.error.phone && <Text error>{response.error.phone}</Text>}
            </div>
          </div>

          <div className={"textarea"}>
            <textarea name={"description"} required className={description ? "focused-input" : ""} placeholder={"Tell us about your project"} value={description} onChange={e => setDescription(e.target.value)}/>
            {response.error.description && <Text error>{response.error.description}</Text>}
          </div>
        </section>
        <section className={"row"}>
          <Button text={"SUBMIT"} type={"submit"} isLoading={isLoading}/>
        </section>

        {response.success && <Text className={"marg-top-1 text-center"}>{response.success}</Text>}
      </form>
    </section>
  );
};
    
export default ContactForm;