export default function Modal({ isOpen, onClose }) {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-xl font-bold text-gray-800 text-center mb-4">
            We Will Contact You!
          </h2>
          <p className="text-gray-600 text-center mb-6">
            Thank you for reaching out! Our team will review your request and get back to you within 48 hours.
          </p>
          <button
            onClick={onClose}
            className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Close
          </button>
        </div>
      </div>
    );
  }
  