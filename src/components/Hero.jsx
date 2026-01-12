import { motion } from 'framer-motion'
import { Sparkles, Coffee, ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto text-center relative z-10 px-4">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-6xl font-bold mb-6 text-white"
        >
          <span className="bg-gradient-to-r from-coffee-500 to-amber-600 text-transparent bg-clip-text">
            Coffee Ecosystem
          </span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="text-xl text-slate-300 max-w-2xl mx-auto mb-8"
        >
          Revolutionize your coffee experience with personalized brewing, tracking, and community connections
        </motion.p>
        
        <div className="flex justify-center space-x-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-coffee-500 text-white px-6 py-3 rounded-full flex items-center space-x-2 hover:bg-coffee-700 transition-colors"
          >
            <Coffee size={20} />
            <span>Start Brewing</span>
            <ArrowRight size={20} />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-slate-700 text-slate-300 px-6 py-3 rounded-full flex items-center space-x-2 hover:bg-slate-800 transition-colors"
          >
            <Sparkles size={20} />
            <span>Explore Features</span>
          </motion.button>
        </div>
      </div>
    </div>
  )
}