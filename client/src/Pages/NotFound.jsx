
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-scree">
      <div className="text-center">
        {/* Animated Title */}
        <h1 className="text-9xl font-extrabold text-pink-600 animate__animated animate__bounce">
          404
        </h1>
        {/* Fading Subtitle */}
        <p className="text-2xl font-semibold mt-4 animate__animated animate__fadeInUp">
          Oops! Page not found.
        </p>
        <p className="mt-2 animate__animated animate__fadeInUp animate__delay-1s">
          The page you’re looking for doesn’t exist.
        </p>
        {/* Button with Hover Animation */}
        <Link
          to="/"
          className="btn btn-primary bg-pink-600 hover:bg-pink-400 mt-6 animate__animated animate__fadeInUp animate__delay-2s hover:scale-110 transition-transform duration-300"
        >
          Back to Home
        </Link>
        {/* Decorative Animation */}
        <div className="mt-10 animate__animated animate__zoomIn animate__delay-3s">
          <svg
            className="w-16 h-16 text-pink-400 mx-auto"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14l-4-4 1.41-1.41L10 12.17l7.59-7.59L19 6l-9 9z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
