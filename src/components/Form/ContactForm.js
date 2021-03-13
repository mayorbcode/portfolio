import React from "react";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/f/mbjpnadn"
        method="POST"
      >
        <legend>Contact me!</legend>
        <p>
          <label htmlFor="email">Your Email:</label>
          <input type="email" name="email" id="email"/>
        </p>
        <p>
          <label htmlFor="message">Message:</label>
          <textarea name="message" id="message"/>
        </p>
        {status === "SUCCESS" ? <p style={{color: 'white', textAlign: 'center', fontSize: '1.2rem'}}>Sent!</p> : <button>Send</button>}
        {status === "ERROR" && <p style={{color: 'white', textAlign: 'center'}}>Ooops! There was an error.</p>}
      </form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}