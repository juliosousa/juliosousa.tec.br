"use client"

import { motion } from "framer-motion"

export default function FloatingOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Main large orb */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 opacity-10"
        initial={{ scale: 0 }}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-full h-full rounded-full bg-gradient-radial from-white/10 to-transparent blur-3xl" />
      </motion.div>

      {/* Secondary orb */}
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-72 h-72 opacity-10"
        initial={{ scale: 0 }}
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -150, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      >
        <div className="w-full h-full rounded-full bg-gradient-radial from-white/10 to-transparent blur-3xl" />
      </motion.div>

      {/* Small floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.2 + 0.1
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Grid lines */}
      <svg className="absolute inset-0 w-full h-full opacity-5">
        <defs>
          <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M 50 0 L 0 0 0 50" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Animated lines */}
      <svg className="absolute inset-0 w-full h-full">
        <motion.line
          x1="10%"
          y1="50%"
          x2="30%"
          y2="50%"
          stroke="white"
          strokeWidth="0.5"
          opacity="0.2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
        <motion.line
          x1="70%"
          y1="30%"
          x2="90%"
          y2="30%"
          stroke="white"
          strokeWidth="0.5"
          opacity="0.2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: 1.5
          }}
        />
      </svg>
    </div>
  )
}