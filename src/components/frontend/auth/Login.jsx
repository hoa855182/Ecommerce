import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div id="layoutAuthentication">
      <div id="layoutAuthentication_content">
        <main>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-5">
                <div className="card shadow-lg border-0 rounded-lg mt-5">
                  <div className="card-header">
                    <h3 className="text-center font-weight-light my-4">Login</h3>
                  </div>
                  <div className="card-body">
                    <form>
                      <div className="form-floating mb-3">
                        <input className="form-control" id="inputEmail" type="email" placeholder="name@example.com" />
                        <label>Email address</label>
                      </div>
                      <div className="form-floating mb-3">
                        <input className="form-control" id="inputPassword" type="password" placeholder="Password" />
                        <label>Password</label>
                      </div>
                      <div className="form-check mb-3">
                        <input className="form-check-input" id="inputRememberPassword" type="checkbox" value="" />
                        <label className="form-check-label">
                          Remember Password
                        </label>
                      </div>
                      <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                        <Link className="small" to="password.html">
                          Forgot Password?
                        </Link>
                        <Link className="btn btn-primary" to="/admin/dashboard">
                          Login
                        </Link>
                      </div>
                    </form>
                  </div>
                  <div class="card-footer text-center py-3">
                    <div class="small">
                      <Link to="/Register">Need an account? Sign up!</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <div id="layoutAuthentication_footer">
        <footer class="py-4 bg-dark mt-auto">
          <div class="container-fluid px-4">
            <div class="d-flex align-items-center justify-content-between small">
              <div class="text-muted">Copyright &copy; Your Website 2022</div>
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

export default Login
