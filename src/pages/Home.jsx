import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
//import Hero from "../components/Hero";
import MovieRow from "../components/MovieRow";

// Dummy movies array example, replace with your actual data or prop
const movies = [
  {
    title: "Movie One",
    trailer: "https://www.w3schools.com/html/mov_bbb.mp4",
    cast: ["Actor A", "Actor B"],
    rating: 4,
  },
  {
    title: "Movie Two",
    trailer: "https://www.w3schools.com/html/movie.mp4",
    cast: ["Actor C", "Actor D"],
    rating: 5,
  },
];

export default function Home() {
  const [showDialog, setShowDialog] = useState(true);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setVisible(false), 3500); // fade out
    const hideTimer = setTimeout(() => setShowDialog(false), 4000); // remove dialog
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <motion.div
      className="page"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.6 }}
    >
      {/* Landing dialog */}
      <AnimatePresence>
        {showDialog && (
          <motion.p
            className="landing-dialog"
            initial={{ opacity: 1 }}
            animate={{ opacity: visible ? 1 : 0 }}
            exit={{ opacity: 0 }}
            style={{ textAlign: "center", marginBottom: "20px" }}
          >
            It's time for popcorn! Find your next Movies
          </motion.p>
        )}
      </AnimatePresence>

      {/* Pass movies data to MovieRow */}
      <MovieRow movies={movies} />
    </motion.div>
  );
}
