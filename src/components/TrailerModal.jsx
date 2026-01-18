import { motion, AnimatePresence } from "framer-motion";

export default function TrailerModal({ movie, onClose }) {
  return (
    <AnimatePresence>
      <motion.div
        className="modal-bg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="modal"
          initial={{ scale: 0.8, y: 100 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.8, y: 100 }}
          transition={{ type: "spring", stiffness: 120 }}
          onClick={(e) => e.stopPropagation()}
        >
          <iframe
            width="100%"
            height="450"
            src={`https://www.youtube.com/embed/${movie.trailerId}?autoplay=1`}
            title={movie.title}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />

          <button onClick={onClose}>Close</button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
