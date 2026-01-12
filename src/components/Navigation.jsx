import { motion } from 'framer-motion'
import { Menu, Coffee, User } from 'lucide-react'

export default function Navigation() {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-slate-950/70 py-4"
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Coffee className="text-coffee-500" size={24} />
          <span className="font-bold text-xl text-white">CoffeeEco</span>
        </div>
        <div className="flex items-center space-x-4">
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-white hover:text-coffee-500 transition-colors"
          >
            <Menu size={24} />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-coffee-500 text-white rounded-full p-2"
          >
            <User size={20} />
          </motion.button>
        </div>
      </div>
    </motion.nav>
  )
}