import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100%",
  height: "400px",
  borderRadius: "12px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
  overflow: "hidden",
};

const center = {
  lat: 56.1188, // Stirling Latitude
  lng: -3.9369, // Stirling Longitude
};

export default function CustomGoogleMap() {
  return (
    <section className="bg-[#1F1F1F] py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-[#FFD700] text-center mb-6">📍 Our Location</h2>
        <div className="rounded-lg overflow-hidden border-4 border-[#FF8C42] shadow-xl">
          <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
            <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={15}>
              <Marker position={center} />
            </GoogleMap>
          </LoadScript>
        </div>
      </div>
    </section>
  );
}
