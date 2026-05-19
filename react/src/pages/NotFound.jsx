import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            404 - Page Not Found
          </h1>
          <p className="mt-3 text-base text-gray-500">
            We're sorry, but the page you're looking for doesn't exist.
          </p>
          <Link
            to="/"
            className="mt-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;