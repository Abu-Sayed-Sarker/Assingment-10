import { Slide } from "react-awesome-reveal";
import faqImg from '../../assets/FAQ.png'

const FAQ = () => {
    return (
        <div className="w-10/12 mx-auto mt-5 pt-10 space-y-3">
            <Slide><h1 className="lg:text-5xl text-2xl text-pink-600 font-semibold">FAQ:</h1></Slide>
            <div className="lg:flex md:flex items-center">
                <div className="lg:w-2/3 md:w-2/3">
                    <div className="collapse">
                        <input type="radio" name="my-accordion-1" defaultChecked />
                        <div className="collapse-title text-xl font-medium">What types of visas do you assist with?</div>
                        <div className="collapse-content">
                            <p>We provide assistance with a wide range of visa types, including tourist visas, business visas, student visas, work visas, transit visas, and more. If you&apos;re unsure about which visa you need, our team can guide you based on your travel plans.</p>
                        </div>
                    </div>
                    <div className="collapse">
                        <input type="radio" name="my-accordion-1" />
                        <div className="collapse-title text-xl font-medium">How long does it take to process a visa?</div>
                        <div className="collapse-content">
                            <p>The processing time depends on the type of visa, the country, and the embassy&apos;s requirements. Typically, it can range from a few days to several weeks. We will provide you with an estimated timeline based on your specific application</p>
                        </div>
                    </div>
                    <div className="collapse">
                        <input type="radio" name="my-accordion-1" />
                        <div className="collapse-title text-xl font-medium">What documents do I need to apply for a visa?</div>
                        <div className="collapse-content">
                            <p>Required documents vary by visa type and destination country. Common documents include your passport, passport-sized photos, visa application form, travel itinerary, and proof of financial stability. Our team will provide a detailed list based on your specific visa requirements.</p>
                        </div>
                    </div>
                    <div className="collapse">
                        <input type="radio" name="my-accordion-1" />
                        <div className="collapse-title text-xl font-medium">Are your services secure?</div>
                        <div className="collapse-content">
                            <p>Absolutely! We prioritize your privacy and security. All your personal and financial information is securely stored and processed using the highest standards of encryption.</p>
                        </div>
                    </div>
                    <div className="collapse">
                        <input type="radio" name="my-accordion-1" />
                        <div className="collapse-title text-xl font-medium">How can I contact you for more information or assistance?</div>
                        <div className="collapse-content">
                            <p>You can reach us via email, phone, or our website’s contact form. Our customer support team is available to assist you with any questions or concerns you may have.</p>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/3 md:w-1/3">
                    <img src={faqImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default FAQ;