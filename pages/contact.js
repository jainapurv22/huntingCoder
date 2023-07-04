import React, { useState } from "react";


const Contact = () => {

  const onHandleSubmit = (e) =>{
    e.preventDefault();
    const data = {name,email,password,concern}
    try {
      const response = fetch("http://localhost:3000/api/postcontact", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      const result = response.text;
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  const onHandleChange = (e) =>{
    console.log(e);
    if(e.target.name === "name")
    {
      setname(e.target.value);
    }
    else if(e.target.name === "email")
    {
      setemail(e.target.value);
    }
    else if(e.target.name === "password")
    {
      setpassword(e.target.value);
    }
    else if(e.target.name === "concern")
    {
      setconcern(e.target.value);
    }
  }

  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [concern, setconcern] = useState('')
  return (
    <div className="bg-slate-800 py-[1rem]">
      <form className="flex flex-col items-center" onSubmit={onHandleSubmit}>
        <div className="mb-[20px] flex flex-col gap-1 items-center">
          <label htmlFor="name" className="form-label text-[21px]">
            Enter your name
          </label>
          <input
            type="name"
            className="form-control text-black px-[5px] rounded-[5px]"
            id="name"
            name="name"
            value={name}
            onChange={onHandleChange}
          />
        </div>
        <div className="mb-[20px] flex flex-col gap-1 items-center">
          <label htmlFor="email" className="form-label text-[21px]">
            Email
          </label>
          <input
            type="email"
            className="form-control text-black px-[5px] rounded-[5px]"
            id="email"
            name="email"
            value={email}
            onChange={onHandleChange}
          />
          <div id="emailHelp" className="form-text text-[13px]">
            We will never share your email with anyone else.
          </div>
        </div>
        <div className="mb-[20px] flex flex-col gap-1 items-center">
          <label htmlFor="password" className="form-label text-[21px]">
            Password
          </label>
          <input
            type="password"
            className="form-control text-black px-[5px] rounded-[5px]"
            id="password"
            name="password"
            value={password}
            onChange={onHandleChange}
          />
        </div>
        <div className="form-floating mb-[20px] flex flex-col gap-1 items-center">
          <label htmlFor="floatingTextarea" className="text-[21px]">Comments</label>
          <textarea
            className="form-control text-black px-[5px] rounded-[5px]"
            placeholder="Show your concern"
            id="floatingTextarea"
            name="concern"
            value={concern}
            onChange={onHandleChange}
          ></textarea>
        </div>
        <button type="submit" className="border p-1 px-6 rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
