import { Fade, Slide } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import img from "../../assets/world-map.png"

const FindVisa = () => {
    return (
        <div className="w-10/12 mx-auto mt-5 pt-10 space-y-3">
            <Slide><h1 className="lg:text-5xl text-2xl text-pink-600 font-semibold">Find a consultant by:</h1></Slide>
            <Fade><p className="lg:text-xl text-base text-pink-400 lg:w-[60%]">Cursus porta, feugiat primis in ultrice ligula risus auctor tempus dolor feugiat, felis lacinia risus interdum auctor id viverra dolor iaculis luctus placerat and massa</p></Fade>

            <div className="grid lg:grid-cols-2 grid-cols-1 pt-4">
                <div className="flex justify-between lg:pr-10">
                    <div>
                        <h1 className="text-2xl font-semibold text-pink-500">Country:</h1>

                        <ul className="pb-2">
                            <Link to={"/allvisa"}><li className="text-xl pt-3"><a>Canada</a></li></Link>
                            <Link to={"/allvisa"}><li className="text-xl pt-3"><a>Australia</a></li></Link>
                            <Link to={"/allvisa"}><li className="text-xl pt-3"><a>United Kingdom</a></li></Link>
                            <Link to={"/allvisa"}><li className="text-xl pt-3"><a>USA</a></li></Link>
                            <Link to={"/allvisa"}><li className="text-xl pt-3"><a>New Zealand</a></li></Link>
                            <Link to={"/allvisa"}><li className="text-xl pt-3"><a>South Korea</a></li></Link>
                        </ul>
                    </div>
                    <div>
                        <h1 className="text-2xl font-semibold text-pink-500">Pratice Area:</h1>

                        <ul className="pb-2">
                            <Link to={"/allvisa"}><li className="text-xl pt-3"><a>Student Visa</a></li></Link>
                            <Link to={"/allvisa"}><li className="text-xl pt-3"><a>Skilled Work Visa</a></li></Link>
                            <Link to={"/allvisa"}><li className="text-xl pt-3"><a>Business visa</a></li></Link>
                            <Link to={"/allvisa"}><li className="text-xl pt-3"><a>Spouse/Family Visa</a></li></Link>
                            <Link to={"/allvisa"}><li className="text-xl pt-3"><a>Tourist & Visitor Visa</a></li></Link>
                            <Link to={"/allvisa"}><li className="text-xl pt-3"><a>Immigration Consult</a></li></Link>
                        </ul>
                    </div>
                </div>
                <div>
                    <img src={img} alt="" />
                </div>
            </div>

        </div>
    );
};

export default FindVisa;