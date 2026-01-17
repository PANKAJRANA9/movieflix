import { motion } from "framer-motion";

export default function Details() {
  return (
    <motion.div
      className="page"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
    >
      <h2>Movie Details</h2>
    </motion.div>
  );
}
