import React, {Component} from "react";

import "../styles/register.css";
import Layout from "../components/layout";
import SEO from "../components/seo";

class Register extends Component {
    state = {
        account: {email: "", firstName: "", lastName: "", phone: "", level: ""},
        errors: {},
        sucess: ""
    };

    validateProperty = input => {
        if (input.id === "email") {
            if (input.value.trim() === "") return "Email is required";
        }
        if (input.id === "firstName") {
            if (input.value.trim() === "") return "First name is required";
        }
        if (input.id === "lastName") {
            if (input.value.trim() === "") return "Last name is required";
        }
        if (input.id === "level") {
            if (input.value.trim() === "") return "Level is required";
        }

        if (input.id === "phone") {
            if (input.value.trim() === "") return "Phone number is required";
            if (input.value.length < 10) return "Invalid phone number";
        }
    };

    validate = () => {
        const errors = {};

        const {account} = this.state;
        if (account.email.trim() === "") errors.email = "Email is required";
        if (account.firstName.trim() === "")
            errors.firstName = "First name is required";
        if (account.lastName.trim() === "")
            errors.lastName = "Last name is required";
        if (account.phone.trim() === "") errors.phone = "Phone number is required";
        if (account.phone.length < 10) errors.phone = "Invalid phone number";
        if (account.level.trim() === "") errors.level = "Level is required";

        return Object.keys(errors).length === 0 ? null : errors;
    };

    handleChange = e => {
        const errors = {...this.state.errors};
        const errorMessage = this.validateProperty(e.target);
        if (errorMessage) errors[e.target.id] = errorMessage;
        else delete errors[e.target.id];

        const account = {...this.state.account};
        account[e.target.id] = e.target.value;
        this.setState({account, errors});
    };

    handleSubmit = e => {
        e.preventDefault();

        const errors = this.validate();
        this.setState({errors: errors || {}});
        if (errors) return;

        const {email, firstName, lastName, phone, level} = this.state.account;

        // connect to mailchimp api
        fetch(
            `https://aim-backend.herokuapp.com/api/memberAdd/?email=${email}&fistName=${firstName}&lastName=${lastName}&phone=${phone}&level=${level}`
        )
            .then(res => res.json())
            .then(res => {
                if (res) {
                    this.setState({
                        success: "Thanks for Registering. Please check your email"
                    });
                }
            })
            .catch(err => console.log(err));

        console.log("summitit");
        this.setState({
            account: {email: "", firstName: "", lastName: "", phone: "", level: ""}
        });
    };

    render() {
        const {errors, account, success} = this.state;

        return (
            <Layout>
                <SEO title='Register'/>
                <section id="header">
                    <div className="container">
                        <div className="row header">
                            <div className="col-md-12">
                                <h3 className="text-center mb-5">
                                    Sign up now to be a part of the AI revolution
                                </h3>
                            </div>
                            {/* <div className="col-md-6 offset-md-2 google-form">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSdJCGTIIjFdNkOtoSAFezASoRYrGdWZNBPyoBsR4391Un-tuA/viewform?embedded=true"
                  width="640"
                  height="900px"
                  frameborder="0"
                  marginheight="0"
                  acamarginwidth="0"
                >
                  Loading…
                </iframe>
              </div> */}
                            <div className="col-md-6 offset-md-3">
                                <form onSubmit={this.handleSubmit}>
                                    {success && (
                                        <div
                                            className="alert alert-success alert-dismissible fade show"
                                            role="alert"
                                        >
                                            <strong>{success}</strong>
                                            <button
                                                type="button"
                                                className="close"
                                                data-dismiss="alert"
                                                aria-label="Close"
                                            >
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                    )}
                                    <div className="form-group">
                                        <input
                                            type="email"
                                            id="email"
                                            placeholder="Email"
                                            onChange={this.handleChange}
                                            value={account.email}
                                            className="form-control"
                                        />
                                        {errors.email && (
                                            <small className="text-warning">{errors.email}</small>
                                        )}
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            id="firstName"
                                            placeholder="First name"
                                            onChange={this.handleChange}
                                            value={account.firstName}
                                            className="form-control"
                                        />
                                        {errors.firstName && (
                                            <small className="text-warning">{errors.firstName}</small>
                                        )}
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            id="lastName"
                                            placeholder="Last name"
                                            onChange={this.handleChange}
                                            className="form-control"
                                            value={account.lastName}
                                        />
                                        {errors.lastName && (
                                            <small className="text-warning">{errors.lastName}</small>
                                        )}
                                    </div>

                                    <div className="form-group">
                                        <input
                                            type="text"
                                            id="level"
                                            placeholder="Level"
                                            className="form-control"
                                            onChange={this.handleChange}
                                            value={account.level}
                                        />
                                        {errors.level && (
                                            <small className="text-warning">{errors.level}</small>
                                        )}
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            id="phone"
                                            placeholder="Phone"
                                            onChange={this.handleChange}
                                            value={account.phone}
                                            className="form-control"
                                        />
                                        {errors.phone && (
                                            <small className="text-warning">{errors.phone}</small>
                                        )}
                                    </div>

                                    <div className="form-group">
                                        <button type="submit" className="btn btn-primary">
                                            Register
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        );
    }
}

export default Register;
