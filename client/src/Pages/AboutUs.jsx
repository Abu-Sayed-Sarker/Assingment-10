import aboutImg from '../assets/about.png'
const AboutUs = () => {
    return (
        <div>
            <h1 className="text-center pt-5 lg:text-5xl text-3xl font-bold text-pink-600">About us</h1>
            <div className="w-10/12 mx-auto gap-5 flex lg:flex-row md:flex-row flex-col lg:items-center">
                <div className='lg:w-1/2'>
                    <img src={aboutImg} alt="" />
                </div>
                <div className='lg:w-1/2'>
                    <h1 className='text-2xl font-semibold text-pink-400 mb-5'>About e-visa</h1>
                    <p className='text-legt'>
                        Welcome to E-VISA, your trusted partner in securing seamless travel experiences through our reliable visa services. We are a team of experienced professionals dedicated to simplifying the visa application process for individuals and businesses alike.

                        At E-VISA, we understand that navigating the complexities of visa requirements can be stressful and time-consuming. That’s why we offer tailored solutions to ensure that you obtain your visa quickly, efficiently, and with minimal hassle. Whether you are planning a vacation, a business trip, or need to relocate, we are here to support you every step of the way.

                        Our services are designed to guide you through the entire visa application journey, from initial consultation and document preparation to submission and tracking. We have built strong relationships with embassies, consulates, and immigration authorities worldwide to provide our clients with accurate, up-to-date information.

                        We pride ourselves on our commitment to customer satisfaction, offering transparent pricing, prompt assistance, and a secure platform for processing your visa applications. Our goal is to make your travel dreams a reality, with peace of mind that your visa is in expert hands.

                        Let us take care of the details so you can focus on what truly matters—your upcoming adventure.

                        Your journey starts here with E-VISA.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;