export default function CustomGoogleMap() {
  return (
    <section className="bg-[#1F1F1F] py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-[#FFD700] text-center mb-6">
          📍 Discover Our Location
        </h2>
        <div className="relative rounded-lg overflow-hidden border-4 border-[#FF8C42] shadow-xl">
          {/* Embed the Google Maps iframe with the updated data */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2255.292935063796!2d-3.940520193717725!3d56.11830262011706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x488862eacb14d8ad%3A0x2a3dfd0b94aec67f!2sThe%20Stirling%20Arcade!5e0!3m2!1sen!2s!4v1739622058948!5m2!1sen!2s"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Get Directions Button */}
        <div className="mt-6 text-center">
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=56.11830262011706,-3.940520193717725"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#FF8C42] text-white px-6 py-3 rounded-full text-lg font-semibold transition duration-300 hover:bg-[#FFD700]"
          >
             Get Directions
          </a>
        </div>
      </div>
    </section>
  );
}

