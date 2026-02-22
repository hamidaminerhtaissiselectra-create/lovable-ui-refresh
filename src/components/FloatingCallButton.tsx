import { Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const FloatingCallButton = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed bottom-6 right-6 z-50 flex flex-col gap-4"
    >
      {/* Bouton WhatsApp */}
      <motion.a
        href="https://wa.me/33603205967"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#128C7E] transition-colors flex items-center justify-center group relative"
        aria-label="Contacter par WhatsApp"
      >
        <MessageCircle className="h-7 w-7" />
        <span className="absolute right-full mr-3 bg-white text-foreground px-3 py-1 rounded-lg text-sm font-bold shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-accent/10">
          WhatsApp
        </span>
      </motion.a>

      {/* Bouton Appel Direct */}
      <motion.a
        href="tel:+33603205967"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-accent text-accent-foreground p-4 rounded-full shadow-2xl hover:bg-accent/90 transition-colors flex items-center justify-center group relative"
        aria-label="Appeler directement"
      >
        <Phone className="h-7 w-7" />
        <span className="absolute right-full mr-3 bg-white text-foreground px-3 py-1 rounded-lg text-sm font-bold shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-accent/10">
          Appeler
        </span>
      </motion.a>
    </motion.div>
  );
};

export default FloatingCallButton;
