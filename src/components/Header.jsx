import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="header">
      <motion.h1 className="logo" layoutId="logo">
        <span className="flix1">Movies</span>
        <span className="flix1">Flix</span>
      </motion.h1>
    </header>
  );
}
