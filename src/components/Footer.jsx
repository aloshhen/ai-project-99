import { Coffee, Twitter, Instagram, Facebook } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-900 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Coffee className="text-coffee-500" size={32} />
            <span className="font-bold text-2xl text-white">CoffeeEco</span>
          </div>
          
          <nav className="flex space-x-6 mb-4 md:mb-0">
            <a href="#" className="text-slate-400 hover:text-coffee-500 transition-colors">Home</a>
            <a href="#" className="text-slate-400 hover:text-coffee-500 transition-colors">Features</a>
            <a href="#" className="text-slate-400 hover:text-coffee-500 transition-colors">About</a>
            <a href="#" className="text-slate-400 hover:text-coffee-500 transition-colors">Contact</a>
          </nav>
          
          <div className="flex space-x-4">
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              <Twitter size={24} />
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              <Instagram size={24} />
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              <Facebook size={24} />
            </a>
          </div>
        </div>
        
        <div className="text-center text-slate-500 mt-8 pt-6 border-t border-slate-800">
          © 2024 CoffeeEco. All rights reserved.
        </div>
      </div>
    </footer>
  )
}