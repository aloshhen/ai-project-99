import { motion } from 'framer-motion'
import { Coffee, ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <div className="bg-slate-950 py-20">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold mb-6 text-white"
        >
          Ready to <span className="text-coffee-500">Transform Your Coffee Experience?</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-xl text-slate-300 max-w-2xl mx-auto mb-8"
        >
          Join thousands of coffee enthusiasts and elevate your brewing journey
        </motion.p>
        
        <div className="flex justify-center space-x-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-coffee-500 text-white px-8 py-4 rounded-full flex items-center space-x-2 text-lg hover:bg-coffee-700 transition-colors"
          >
            <Coffee size={24} />
            <span>Get Started</span>
            <ArrowRight size={24} />
          </motion.button>
        </div>
      </div>
    </div>
  )
}