import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Register() {
  const [register, setRegister] = useState({
    name: '',
    email: '',
    password: '',
    error_list: [],
  })

  const handleInput = (e) => {
    e.persist()
    setRegister({ ...register, [e.target.name]: e.target.value })
  }

  const registerSubmit = (e) => {
    e.prevenDefault()

    const data = {
      name: register.name,
      email: register.email,
      password: register.password,
    }

    axios.get('/sanctum/csrf-cookie').then((response) => {
      axios.post(`http://127.0.0.1:8000/api/register`, data).then((res) => {
        
      })
    })
  }

  return (
    <div id="layoutAuthentication">
      <div id="layoutAuthentication_content">
        <main>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-7">
                <div className="card shadow-lg border-0 rounded-lg mt-5">
                  <div className="card-header">
                    <h3 className="text-center font-weight-light my-4">Create Account</h3>
                  </div>
                  <div className="card-body">
                    <form onSubmit={registerSubmit}>
                      <div className="row mb-3">
                        <div className="col-md-12">
                          <div className="form-floating mb-3 mb-md-0">
                            <input
                              onChange={handleInput}
                              value={register.name}
                              name="name"
                              className="form-control"
                              id="inputFirstName"
                              type="text"
                              placeholder="Enter your first name"
                            />
                            <label>Full name</label>
                            <span>{register.error_list.name}</span>
                          </div>
                        </div>
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          onChange={handleInput}
                          value={register.email}
                          name="email"
                          className="form-control"
                          id="inputEmail"
                          type="email"
                          placeholder="name@example.com"
                        />
                        <label>Email address</label>
                        <span>{register.error_list.email}</span>
                      </div>
                      <div className="row mb-3">
                        <div className="col-md-12">
                          <div className="form-floating mb-3 mb-md-0">
                            <input
                              onChange={handleInput}
                              value={register.password}
                              name="password"
                              className="form-control"
                              id="inputPassword"
                              type="password"
                              placeholder="Password"
                            />
                            <label>Password</label>
                            <span>{register.error_list.password}</span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 mb-0">
                        <div className="d-grid">
                          <button type="submit" className="btn btn-primary btn-block">
                            Create Account
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="card-footer text-center py-3">
                    <div className="small">
                      <Link to="/Login">Have an account? Go to login</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <div id="layoutAuthentication_footer">
        <footer className="py-4 bg-dark mt-auto">
          <div className="container-fluid px-4">
            <div className="d-flex align-items-center justify-content-between small">
              <div className="text-muted">Copyright &copy; Your Website 2022</div>
              <div>
                <Link to="#">Privacy Policy</Link>
                &middot;
                <Link to="#">Terms &amp; Conditions</Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Register
