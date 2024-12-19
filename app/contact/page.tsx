'use client';

import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex-grow container mx-auto px-6 py-12 text-center"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl font-extrabold text-gray-800 mb-6"
        >
          Get in Touch
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg text-gray-600 mb-6"
        >
          I'd love to hear from you! Feel free to reach out via email at{" "}
          <a
            href="mailto:me@example.com"
            className="text-blue-500 font-semibold underline"
          >
            me@example.com
          </a>.
        </motion.p>
        <motion.a
          href="mailto:me@example.com"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition"
        >
          Email Me
        </motion.a>
      </motion.main>

    
    </div>
  );
}
