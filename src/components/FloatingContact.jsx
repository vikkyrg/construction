import { FaWhatsapp, FaPhone } from 'react-icons/fa';

const FloatingContact = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-4">
      <a href="tel:+15551234567" className="w-12 h-12 bg-dark text-white rounded-full flex items-center justify-center shadow-lg hover:bg-accent hover:text-dark transition-colors" aria-label="Call Us">
        <FaPhone className="text-xl" />
      </a>
      <a href="https://wa.me/15551234567" target="_blank" rel="noreferrer" className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors" aria-label="WhatsApp">
        <FaWhatsapp className="text-2xl" />
      </a>
    </div>
  );
};

export default FloatingContact;
