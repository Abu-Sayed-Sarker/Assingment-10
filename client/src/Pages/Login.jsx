import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import toast from "react-hot-toast";
import img from "../../src/assets/login1.png"

const Login = () => {

    const { GoogleLogin, LogIn, setuser } = useContext(AuthContext)

    const navigate = useNavigate()


    const provider = new GoogleAuthProvider()


    const handleLoginSubmission = e => {
        e.preventDefault()
        const form = new FormData(e.target);
        const email = form.get("email");
        const password = form.get("password");


        LogIn(email, password)
            .then((result) => {
                const user = result.user;
                setuser(user)
                e.target.reset();
                toast.success("Log In Success");
                navigate("/")

            })
            .catch((error) => {
                const errorCode = error.code;

                toast.error(errorCode)


            });


    }


    const googleLogInBtn = () => {
        GoogleLogin(provider)
            .then((result) => {
                setuser(result.user)
                toast.success("Log In Success");
                navigate("/")
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code
                toast.error(errorCode)
            })
    }
    return (
        <div className="lg:w-10/12 flex mx-auto">
            <div className="card bg-third-color w-full max-w-lg shrink-0 shadow-2xl p-10">
                <h2 className="text-center text-pink-600 font-semibold text-4xl lg:pb-14">Login your account</h2>
                <form onSubmit={handleLoginSubmission} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <Link to={"/Forgat"}><a href="#" className="label-text-alt link link-hover">Forgot password?</a></Link>
                        </label>
                    </div>
                    <div className="form-control mt-6 ">
                        <button className="btn btn-primary bg-pink-600 hover:bg-pink-400 text-black">Login</button>
                    </div>
                </form>
                <div className="mx-auto pb-3">
                    <button onClick={googleLogInBtn} className="text-left btn bg-transparent bg-pink-600 hover:bg-pink-400"><FaGoogle /> Login with Google</button>
                </div>
                <p className="text-center font-semibold">Dont’t Have An Account ? <Link to={"/register"} className="text-red-600">Register</Link></p>
            </div>
            <div className="lg:block hidden">
                <img src={img} alt="" />
            </div>
        </div>
    );
};

export default Login;