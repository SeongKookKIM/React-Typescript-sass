import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      className="home"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <h1>Home</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae
        cupiditate, sint quis commodi, similique autem rem necessitatibus
        possimus, debitis quo nulla. Illo magnam ut aspernatur sint porro
        dolorem? Nesciunt, praesentium.
      </p>
    </motion.div>
  );
}

export default Home;
