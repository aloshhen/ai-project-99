import { motion } from 'framer-motion'
import { Workflow, Target, Award } from 'lucide-react'

const StepCard = ({ icon: Icon, title, description }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-slate-900 p-6 rounded-xl flex items-start space-x-4 border border-slate-800"
  >
    <div className="text-coffee-500 mt-1">
      <Icon size={32} />
    </div>
    <div>
      <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
      <p className="text-slate-400">{description}</p>
    </div>
  </motion.div>
)

export default function About() {
  const steps = [
    {
      icon: Workflow,
      title: 'Smart Brewing Process',
      description: 'Customize every aspect of your coffee preparation'
    },
    {
      icon: Target,
      title: 'Precise Recommendations',
      description: 'AI-powered suggestions based on your taste profile'
    },
    {
      icon: Award,
      title: 'Quality Metrics',
      description: 'Track brewing quality, bean origin, and personal preferences'
    }
  ]

  return (
    <div className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold text-center mb-12 text-white"
        >
          How <span className="text-coffee-500">CoffeeEco</span> Works
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <StepCard key={index} {...step} />
          ))}
        </div>
      </div>
    </div>
  )
}