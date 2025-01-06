import img1 from '../../assets/school-books-young-adult-education.jpg'
import img2 from '../../assets/Torist.jpg'
import img3 from '../../assets/note-map-book-pen.jpg'
import { Fade, Slide } from 'react-awesome-reveal';
const Banner = () => {
    return (
        <div>
            <div className="carousel w-full mt-0">
                <div id="slide1" className="carousel-item relative w-full h-[70vh]">
                    <div className="w-full relative">
                        <img
                            src={img1}
                            className="w-full  h-[70vh]" />
                        <div className='absolute top-0 w-full backdrop-blur-sm bg-black/30 h-[70vh]'>
                            <Slide direction='down'>
                                <h1 className='lg:pt-40 pt-56 uppercase lg:text-8xl text-5xl font-bold text-pink-600 text-center'>Study Abroad</h1>
                            </Slide>
                            <Fade cascade delay={2.0}>
                                <p className='lg:text-2xl lg:px-0 px-4 text-xl text-center max-w-6xl text-pink-400 mx-auto'>If you want to study abroad, then to fulfill your dream, we have brought you all the best student visas that will make your dream of studying abroad come true.</p>
                            </Fade>

                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle border bg-transparent">❮</a>
                        <a href="#slide2" className="btn btn-circle border bg-transparent">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full h-[70vh]">
                    <div className="w-full relative">
                        <img
                            src={img2}
                            className="w-full  h-[70vh]" />
                        <div className='absolute top-0 w-full backdrop-blur-sm bg-black/30 h-[70vh]'>
                            <Slide direction='down'>
                                <h1 className='lg:pt-40 pt-56 uppercase lg:text-8xl text-5xl font-bold text-pink-600 text-center'>Jov in avrode</h1>
                            </Slide>
                            <Fade delay={2.0}>
                                <p className='lg:text-2xl lg:px-0 px-4 text-xl text-center max-w-6xl text-pink-400 mx-auto'>If you want to work abroad then to fulfill your dream we have brought you all the best office visas that will make your dream of working abroad come true.</p>
                            </Fade>

                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle border bg-transparent">❮</a>
                        <a href="#slide3" className="btn btn-circle border bg-transparent">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full h-[70vh]">
                    <div className="w-full relative">
                        <img
                            src={img3}
                            className="w-full  h-[70vh]" />
                        <div className='absolute top-0 w-full backdrop-blur-sm bg-black/30 h-[70vh]'>
                            <Slide direction='down'>
                                <h1 className='lg:pt-40 pt-56 uppercase lg:text-8xl text-5xl font-bold text-pink-600 text-center'>World tour</h1>
                            </Slide>
                            <Fade delay={2.0}>
                                <p className='lg:text-2xl lg:px-0 px-4 text-xl text-center max-w-6xl text-pink-400 mx-auto'>To make your world tour dreams come true, we have brought you the opportunity to visit some of the best and most popular countries. So don&apos;t delay and book the tourist visa of your choice now</p>
                            </Fade>

                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle border bg-transparent">❮</a>
                        <a href="#slide1" className="btn btn-circle border bg-transparent">❯</a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;