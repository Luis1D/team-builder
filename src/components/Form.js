import React, { useState } from "react";



const Member = props => {
    const [input, setInput] = useState({ name: "", email: "", role: "", id: null });

//************************* Form Handlers *************************

const inputHandler = event => {
    setInput({ ...input, [event.target.name]: event.target.value });
};

const submitHandler = event => {
    event.preventDefault();
    props.add({ ...input, id: Math.random() });
    setInput({ name: "", email: "", role: "", id: null });
};

// *************************

  return (
    <form onSubmit={submitHandler} className="form">
        <h1>Add Member</h1>

        <div className="input-container">
            {/* NAME INPUT */}
            <label htmlFor="Name">
            Name:{" "}
            <input type="text" value={input.name} onChange={inputHandler} name="name" />
            </label>
            
            {/* EMAIL INPUT */}
            <label htmlFor="Email">
            Email:{" "}
            <input type="text" value={input.email} onChange={inputHandler} name="email" />
            </label>

            {/* ROLE INPUT */}
            <label htmlFor="Role">
            Role:{" "}
            <input type="text" value={input.role} onChange={inputHandler} name="role" />
            </label>
        </div>

        <button>Add Member</button>
    </form>
  );
};

export default Member;
