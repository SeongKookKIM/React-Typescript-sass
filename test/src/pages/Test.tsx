import { motion } from "framer-motion";

function Test() {
  return (
    <motion.div
      className="test"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 3 }}
    >
      <h1>Test</h1>
      <p>
        TESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTtttttttttttttt
      </p>
    </motion.div>
  );
}

export default Test;
