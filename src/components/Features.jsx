import { motion } from 'framer-motion'
import { Zap, Globe, Users, Coffee } from 'lucide-react'

const FeatureCard = ({ icon: Icon, title, description }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-coffee-500 transition-all"
  >
    <div className="mb-4 text-coffee-500">
      <Icon size={40} />
    </div>
    <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
    <p className="text-slate-400">{description}</p>
  </motion.div>
)

export default function Features() {
  const features = [
    {
      icon: Zap,
      title: 'Instant Brewing',
      description: 'Smart recommendations and precision brewing at your fingertips'
    },
    {
      icon: Globe,
      title: 'Global Coffee Network',
      description: 'Connect with coffee lovers and discover unique roasts worldwide'
    },
    {
      icon: Users,
      title: 'Community Insights',
      description: 'Share experiences, get tips, and track your coffee journey'
    },
    {
      icon: Coffee,
      title: 'Personalized Tracking',
      description: 'Monitor your coffee consumption, preferences, and health metrics'
    }
  ]

  return (
    <div className="py-20 bg-slate-950">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold text-center mb-12 text-white"
        >
          Features That <span className="text-coffee-500">Brew Possibilities</span>
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  )
}