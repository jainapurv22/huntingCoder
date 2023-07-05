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
        <div className="mb-[20px] flex flex-col gap-1 items-start">
          <label htmlFor="name" className="form-label text-[17px]">
            Enter your name
          </label>
          <input
            type="name"
            className="form-control text-black px-[5px] rounded-[5px] w-[25rem] text-[15px]"
            id="name"
            name="name"
            value={name}
            onChange={onHandleChange}
          />
        </div>
        <div className="mb-[20px] flex flex-col gap-1 items-start">
          <label htmlFor="email" className="form-label text-[17px]">
            Email
          </label>
          <input
            type="email"
            className="form-control text-black px-[5px] rounded-[5px] w-[25rem] text-[15px]"
            id="email"
            name="email"
            value={email}
            onChange={onHandleChange}
          />
          <div id="emailHelp" className="form-text text-[10px]">
            We will never share your email with anyone else.
          </div>
        </div>
        <div className="mb-[20px] flex flex-col gap-1 items-start">
          <label htmlFor="password" className="form-label text-[17px]">
            Password
          </label>
          <input
            type="password"
            className="form-control text-black px-[5px] rounded-[5px] w-[25rem] text-[15px]"
            id="password"
            name="password"
            value={password}
            onChange={onHandleChange}
            required
          />
        </div>
        <div className="form-floating mb-[20px] flex flex-col gap-1 items-start">
          <label htmlFor="floatingTextarea" className="text-[17px]">Comments</label>
          <textarea
            className="form-control text-black px-[5px] rounded-[5px] w-[25rem] text-[15px]"
            id="floatingTextarea"
            name="concern"
            value={concern}
            onChange={onHandleChange}
          ></textarea>
        </div>
        <div className="flex flex-start">
          <button type="submit" className="border p-1 px-5 rounded-lg text-[14px] cursor-pointer">
            Submit
          </button>
        </div>
        
      </form>
    </div>
  );
};

export default Contact;
