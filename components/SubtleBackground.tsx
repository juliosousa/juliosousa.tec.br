"use client"

import { motion } from "framer-motion"

export default function SubtleBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Gradient mesh background */}
      <div className="absolute inset-0 opacity-[0.08]">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white to-transparent" />
        <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-white to-transparent" />
      </div>

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-20 -right-20 w-[600px] h-[600px]"
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-full h-full bg-gradient-radial from-white/20 via-white/10 to-transparent rounded-full blur-3xl" />
      </motion.div>

      <motion.div
        className="absolute -bottom-20 -left-20 w-[500px] h-[500px]"
        animate={{
          x: [0, -80, 0],
          y: [0, 80, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      >
        <div className="w-full h-full bg-gradient-radial from-white/20 via-white/10 to-transparent rounded-full blur-3xl" />
      </motion.div>

      {/* Grid pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.1]">
        <defs>
          <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M 50 0 L 0 0 0 50" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Subtle scan line effect */}
      <motion.div
        className="absolute left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
        animate={{
          y: [0, typeof window !== 'undefined' ? window.innerHeight : 1000, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  )
}