import React from 'react';
import PropTypes from 'prop-types';

Login.propTypes = {

};

function Login(props) {
    return (

        <div className="auth-wrapper d-flex no-block justify-content-center align-items-center position-relative" style={{ background: 'url(assets/images/big/auth-bg.jpg) no-repeat center center' }}>
            <div className="auth-box row text-center">
                <div className="col-lg-7 col-md-5 modal-bg-img" style={{ backgroundImage: 'url(assets/images/big/3.jpg)' }}>
                </div>
                <div className="col-lg-5 col-md-7 bg-white">
                    <div className="p-3">
                        <img src="assets/images/big/icon.png" alt="wrapkit" />
                        <h2 className="mt-3 text-center">Đăng ký tài khoản</h2>
                        <form className="mt-4">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <input className="form-control" type="text" placeholder="Tên" />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <input className="form-control" type="email" placeholder="email" />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <input className="form-control" type="password" placeholder="Mật khẩu" />
                                    </div>
                                </div>
                                <div className="col-lg-12 text-center">
                                    <button type="submit" className="btn btn-block btn-dark">Đăng Ký</button>
                                </div>
                                <div className="col-lg-12 text-center mt-5">
                                    Bạn đã có tài khoản? <a href="#" className="text-danger">Đăng Nhập</a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;