import { FaToolbox } from "react-icons/fa";
import { FaEarthAmericas } from "react-icons/fa6";
import { HiHomeModern, HiMiniUsers } from "react-icons/hi2";

const VisaCatagory = () => {
    return (
        <div className="w-10/12 mx-auto">
            <div className="grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2 pt-10">
                <div className="p-5">
                    <div className="text-9xl">
                        <HiHomeModern />
                    </div>
                    <h4 className="text-2xl font-medium text-pink-600 py-3">Education Visa</h4>
                    <p>
                        An education visa permits studying abroad legally, requiring proof of admission, financial stability, and language proficiency. It lasts the program&apos;s duration and may need renewal for extended studies
                    </p>

                </div>

                <div className="p-5">
                    <div className="text-9xl">
                        <HiMiniUsers />
                    </div>
                    <h4 className="text-2xl font-medium text-pink-600 py-3">Job Seeker Visa</h4>
                    <p>
                        A job seeker visa allows individuals to enter a country to search for employment. It typically requires qualifications, proof of financial means, and is valid for a limited duration
                    </p>

                </div>

                <div className="p-5">
                    <div className="text-9xl">
                        <FaToolbox />
                    </div>
                    <h4 className="text-2xl font-medium text-pink-600 py-3">PR Visa</h4>
                    <p>
                        A PR (Permanent Resident) visa grants individuals the right to live, work, and study indefinitely in a foreign country while retaining citizenship of their home country, with potential benefits.
                    </p>

                </div>

                <div className="p-5">
                    <div className="text-9xl">
                        <FaEarthAmericas />
                    </div>
                    <h4 className="text-2xl font-medium text-pink-600 py-3">Tourist & Visitor Visa</h4>
                    <p>
                        A tourist or visitor visa allows individuals to enter a country temporarily for leisure, sightseeing, or visiting friends and family. It usually has a short validity period and specific restrictions.
                    </p>

                </div>
            </div>

        </div>
    );
};

export default VisaCatagory;