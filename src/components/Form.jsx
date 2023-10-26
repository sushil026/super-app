import React, {  useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import form from "./Form.module.css";

export default function Form() {
  const navigateTo = useNavigate();
  const initialValues = {
    name: "",
    userName: "",
    mail: "",
    mobile: "",
  };
  // useEffect(()=>{

  // },[]);
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isChecked, setCheck] = useState(false);
  const handleCheck = () => {
    setCheck(!isChecked);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
  };
  useEffect(()=>{
    if (Object.keys(formErrors).length === 0 && isChecked) {
          localStorage.setItem("name", formValues.name);
          localStorage.setItem("userName", formValues.userName);
          localStorage.setItem("mail", formValues.mail);
          localStorage.setItem("mobile", formValues.mobile);
          setTimeout(()=>{
            navigateTo("/select-genre")
          }, 1000)
        }
  }, [formErrors]);
  const validate = (val) => {
    const errors = {};
    const nameTest = /^[\w\s]{3,}$/;
    const userNameTest = /^[\w\S]{5,}$/;
    const mailTest = /^[\w._\S]{5,}@[\w]{4,}.[\w]{3,4}$/;
    const mobileTest = /^[\d]{10}$/;
    if (!val.name) {
      errors.name = "Field is required";
    } else if (!nameTest.test(val.name)) {
      errors.name = "Provide a valid name";
    }
    if (!val.userName) {
      errors.userName = "Feild is required";
    } else if (!userNameTest.test(val.userName)) {
      errors.userName = "Invalid Username entered";
    }
    if (!val.mail) {
      errors.mail = "Feild is required";
    } else if (!mailTest.test(val.mail)) {
      errors.mail = "Invalid E-mail entered";
    }
    if (!val.mobile) {
      errors.mobile = "Feild is required";
    } else if (!mobileTest.test(val.mobile)) {
      errors.mobile = "Invalid Phone Number";
    }
    if (!isChecked) {
      errors.checked = "Check this box if you want to proceed";
    }
    return errors;
  };

  return (
    <div className={form.container}>
      <input
        id="name"
        placeholder="Name"
        name="name"
        value={formValues.name}
        onChange={handleChange}
      />
      <label>{formErrors.name}</label>
      <input
        id="userName"
        placeholder="UserName"
        name="userName"
        value={formValues.userName}
        onChange={handleChange}
      />
      <label>{formErrors.userName}</label>
      <input
        id="mail"
        placeholder="Email"
        name="mail"
        value={formValues.mail}
        onChange={handleChange}
      />
      <label>{formErrors.mail}</label>
      <input
        id="mobile"
        placeholder="Mobile"
        name="mobile"
        value={formValues.mobile}
        onChange={handleChange}
      />
      <label>{formErrors.mobile}</label>
      <div className={form.confirm}>
        <input
          className={form.cnfrm}
          type="checkbox"
          value="confirm"
          checked={isChecked}
          onChange={handleCheck}
        />
        <p> Share my registration data with Superapp</p>
      </div>
      <label>{formErrors.checked}</label>
      <button onClick={handleSubmit}>SIGN UP</button>
    </div>
  );
}
