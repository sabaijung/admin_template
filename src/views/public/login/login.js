import React, { Component } from 'react';
//import { AuthLogin } from '../../../services/Service.Login';
import { withRouter } from 'react-router-dom';
import './login.css';
import loginImg from '../../../assets/images/login/login.png';
import { Link } from 'react-router-dom';
//import Swal from 'sweetalert2';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            showPassword: false,
            loading: false,
        };
    }

    handleShow = () => {
        this.setState({ showPassword: !this.state.showPassword });
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        this.setState({ loading: true });

    };

    render() {
        return (
            <div className="flex justify-center items-center mx-auto add_background ">
                <div className="flex justify-around items-center w-auto mt-8 bg-transparent rounded-3xl shadow-md border-t-2 border-opacity-20 p-5">
                    <div className="p-20 hidden lg:block">
                        <img className="object-scale-down h-49 w-96" src={loginImg} alt="login Img" />
                    </div>
                    <div className="p-0 lg:p-20">
                        <h1 className="text-blue-800 text-center my-8 text-2xl">เข้าสู่ระบบ</h1>
                        <form onSubmit={this.handleSubmit}>
                            <div className="my-5">
                                <label className="text-gray-600">อีเมล์</label>
                                <input
                                    required
                                    className="login-input"
                                    type="email"
                                    value={this.state.email}
                                    onChange={(e) => this.setState({ email: e.target.value })}
                                />
                            </div>
                            <div className="my-5">
                                <label className="text-gray-600">รหัสผ่าน</label>
                                <div className="relative">
                                    <input
                                        required
                                        className="login-input"
                                        type={this.state.showPassword ? 'text' : 'password'}
                                        value={this.state.password}
                                        onChange={(e) => this.setState({ password: e.target.value })}
                                    />
                                    {this.state.showPassword ? (
                                        <i onClick={this.handleShow} className="cursor-pointer text-gray-600 fas fa-eye absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"></i>
                                    ) : (
                                        <i onClick={this.handleShow} className="cursor-pointer text-gray-600 fas fa-eye-slash absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"></i>
                                    )}
                                </div>
                                <div className="flex justify-end">
                                    <Link to={'/ForgotPassword'} className="text-sm py-1 underline cursor-pointer">
                                        ลืมรหัสผ่าน
                                    </Link>
                                </div>
                            </div>
                            <div className="flex justify-center mt-2">
                                <button type="submit" className="login-btn btn-lg btn-login">
                                    {this.state.loading ? <i class="fas fa-spinner"></i> : "ตกลง"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter((Login));