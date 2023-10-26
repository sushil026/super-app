import React from "react";
import Form from "../../components/Form";
import reg from "./Register.module.css";
export default function Register() {
  return (
    <div className={reg.app}>
      <div className={reg.half}>
        <h2>Discover new things on Superapp</h2>
      </div>
      <div className={reg.form}>
        <div className={reg.inside}>
          <h2>SuperApp</h2>
          <p>Create your new account</p>
          <Form />
          <p>
            By clicking on Sign up. you agree to Superapp
            <span> Terms and Conditions of Use</span>
          </p>
          <p>
            To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp
            <span> Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
}
