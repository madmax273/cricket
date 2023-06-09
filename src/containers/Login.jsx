import React, { useState } from "react";

const Login = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [mobile, setMobile] = useState("")
    const [city, setCity] = useState("")
    const [height, setHeight] = useState("")
    const [weight, setWeight] = useState("")
    const [gender, setGender] = useState("")

    const handleSubmit = async (e) =>{
        e.preventDefault();
        console.log("12")
        
        if(firstName ==="" || lastName ==="" || email ===""|| mobile === "" || city === "" || height === "" || weight=== "" || gender ===""){
            return
        }
        const f ={}
        
        f.firstName = firstName
        f.lastName = lastName
        f.email = email
        f.mobile = mobile
        f.city = city
        f.height = height
        f.weight = weight
        f.gender = gender
        console.log("formDAta", f)
        console.log("first", firstName, lastName, email, mobile, city, height, weight, gender)
        console.log("2")
        console.log("submit",e)


        try {
            const response = await fetch("http://localhost:8000/register", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(f),
            });
      
            if (response.ok) {
              console.log("Registration successful");
              // Reset form fields
              setFirstName("");
              setLastName("");
              setEmail("");
              setMobile("");
              setCity("");
              setHeight("");
              setWeight("");
              setGender("");
            } else {
              console.log("Registration failed");
            }
          } catch (error) {
            console.log("Error:", error);
          }

    }


    
    

    return (
        <>
        <div>
            <h1>CRICKET ACADEMY REGISTRATION</h1>
        </div>
        <form onSubmit={(e)=>handleSubmit(e)}>
        <div className="form-row">
        <div className="form-group col-md-6">
            <label htmlFor="inputFirstName">First Name</label>
            <input
              type="text"
              className="form-control"
              id="inputFirstName"
              placeholder="First Name"
              onChange={(e)=>setFirstName(e.target.value)}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputLastName">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="inputLastName"
              placeholder="Last Name"
              onChange={(e)=>setLastName(e.target.value)}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputEmail">Email</label>
            <input
              type="email"
              className="form-control"
              id="inputEmail"
              placeholder="Email"
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputCity">City</label>
            <input
              type="text"
              className="form-control"
              id="inputCity"
              placeholder="City"
              onChange={(e)=>setCity(e.target.value)}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputHeight">Height(cm)</label>
            <input
              type="Number"
              className="form-control"
              id="inputHeight"
              placeholder="Height"
              onChange={(e)=>setHeight(e.target.value)}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputWeight">Weight</label>
            <input
              type="Number"
              className="form-control"
              id="inputWeight"
              placeholder="Weight"
              onChange={(e)=>setWeight(e.target.value)}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputGender">gender</label>
             <input
              type="text"
              className="form-control"
              id="inputGender"
              placeholder="gender"
              onChange={(e)=>setGender(e.target.value)}
            /> 
            {/* <select 
            type="text"
            id="inputPassword4" 
            className="form-control"
            name="cars">
            <option value="male">male</option>
            <option value="female">female</option>
            </select> */}
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="inputMobile">Mobile Number</label>
          <input
            type="text"
            className="form-control"
            id="inputMobile"
            placeholder="Mobile Number"
            onChange={(e)=>setMobile(e.target.value)}
          />
        </div>
        {/* <div className="form-group">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="gridCheck" />
            <label className="form-check-label" htmlFor="gridCheck">
              Check me out
            </label>
          </div>
        </div> */}
        <button type="submit" className="btn btn-primary">
          Register candidate
        </button>
      </form>
      </>
    )
}

export default Login;