import React, { useState } from "react";


const Contact = () => {

  const clearEntry = () =>{
    setname('');
    setemail('');
    setphone('');
    setconcern('');
  }

  const onHandleSubmit = (e) =>{
    e.preventDefault();
    const data = {name,email,phone,concern}
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
    else if(e.target.name === "phone")
    {
      setphone(e.target.value);
    }
    else if(e.target.name === "concern")
    {
      setconcern(e.target.value);
    }
  }

  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [phone, setphone] = useState('')
  const [concern, setconcern] = useState('')
  return (
    <div className="bg-slate-800 py-[1rem] w-full">
      <form className="flex flex-col items-center" onSubmit={onHandleSubmit}>
        <div className="mb-[20px] flex flex-col gap-1 items-start">
          <label htmlFor="name" className="form-label text-[17px] max-sm:text-[15px]">
            Enter your name
          </label>
          <input
            type="name"
            className="form-control text-black px-[5px] rounded-[5px] w-[25rem] max-sm:w-[80vw] text-[15px] max-sm:text-[14px]"
            id="name"
            name="name"
            value={name}
            onChange={onHandleChange}
          />
        </div>
        <div className="mb-[20px] flex flex-col gap-1 items-start">
          <label htmlFor="email" className="form-label text-[17px] max-sm:text-[15px]">
            Email
          </label>
          <input
            type="email"
            className="form-control text-black px-[5px] rounded-[5px] w-[25rem] max-sm:w-[80vw] text-[15px] max-sm:text-[14px]"
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
          <label htmlFor="phone" className="form-label text-[17px] max-sm:text-[15px]">
            Phone
          </label>
          <input
            type="phone"
            className="form-control text-black px-[5px] rounded-[5px] w-[25rem] max-sm:w-[80vw] text-[15px] max-sm:text-[14px]"
            id="phone"
            name="phone"
            value={phone}
            onChange={onHandleChange}
            required
          />
        </div>
        <div className="form-floating mb-[20px] flex flex-col gap-1 items-start">
          <label htmlFor="floatingTextarea" className="text-[17px] max-sm:text-[15px]">Comments</label>
          <textarea
            className="form-control text-black px-[5px] rounded-[5px] w-[25rem] max-sm:w-[80vw] text-[15px] max-sm:text-[14px]"
            id="floatingTextarea"
            name="concern"
            value={concern}
            onChange={onHandleChange}
          ></textarea>
        </div>
        <div className="flex flex-start gap-3">
          <button type="submit" className="border p-1 px-5 rounded-lg text-[14px] max-sm:text-[13px] cursor-pointer">
            Submit
          </button>
          <button type="reset" onClick={clearEntry} className="border p-1 px-5 rounded-lg text-[14px] max-sm:text-[13px] cursor-pointer">
            Reset
          </button>
        </div>
        
      </form>
    </div>
  );
};

export default Contact;
