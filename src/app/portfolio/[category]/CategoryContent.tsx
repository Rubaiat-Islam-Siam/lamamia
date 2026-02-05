"use client";

import { motion, Easing } from "framer-motion";
import Image from "next/image";
import { data } from "./data";

interface CategoryContentProps {
  category: string;
}

const CategoryContent = ({ category }: CategoryContentProps) => {
  const easeOut: Easing = [0.25, 0.1, 0.25, 1];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeOut,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: easeOut,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: easeOut,
      },
    },
  };

  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold capitalize bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent">
          {category}
        </h1>
        <motion.p
          className="mt-4 text-gray-600 dark:text-gray-400 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Explore our amazing {category} collection
        </motion.p>
      </motion.div>

      {/* Zigzag Layout */}
      <motion.div
        className="max-w-6xl mx-auto flex flex-col gap-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {data.map((item, index) => (
          <motion.div
            key={item.id}
            variants={itemVariants}
            className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center`}
          >
            {/* Text Content */}
            <motion.div
              className={`space-y-4 ${index % 2 === 1 ? "md:order-2" : "md:order-1"}`}
              variants={index % 2 === 0 ? textVariants : { ...textVariants, hidden: { ...textVariants.hidden, x: 50 }, visible: { ...textVariants.visible, x: 0 } }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.h2
                className="text-3xl md:text-4xl font-bold text-theme-primary dark:text-white"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {item.title}
              </motion.h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </motion.div>

            {/* Image */}
            <motion.div
              className={`relative group ${index % 2 === 1 ? "md:order-1" : "md:order-2"}`}
              variants={index % 2 === 0 ? imageVariants : { ...imageVariants, hidden: { ...imageVariants.hidden, x: -50 }, visible: { ...imageVariants.visible, x: 0 } }}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <motion.div
                className="relative h-72 md:h-96 rounded-2xl overflow-hidden shadow-2xl"
                whileHover={{ boxShadow: "0 25px 50px -12px rgba(147, 51, 234, 0.25)" }}
              >
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
              {/* Decorative elements */}
              <motion.div
                className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-20 blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full opacity-20 blur-xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.2, 0.35, 0.2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default CategoryContent;
