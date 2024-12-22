import { FaHome, FaInfoCircle, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Footer() {
  return (
    <footer>
         <footer className="py-6 bg-blue-600 text-white text-center">
          <p>&copy; {new Date().getFullYear()} Reca's Shop. All rights reserved.</p>
        </footer>
    </footer>
   
  );
}

export default Footer;
