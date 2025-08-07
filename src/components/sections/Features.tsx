'use client'

import { Brain, Target, Users, Zap, Shield, TrendingUp } from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Essay Editing',
      description: 'Advanced AI technology helps craft compelling narratives that showcase your unique story and strengths.',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: Target,
      title: 'Strategic Application Planning',
      description: 'Personalized college list and timeline strategy based on your profile, goals, and admission data.',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: Users,
      title: '1-on-1 Expert Support',
      description: 'Direct guidance from a Carnegie Mellon CS admit who understands what top schools are looking for.',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
  ]

  return (
    <section id="features" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="font-bold mb-4">
            Why Choose <span className="text-gradient">Pathfindr</span>
          </h2>
          <p className="text-lg text-gray-600">
            We combine cutting-edge AI technology with personalized human expertise to give you an unfair advantage.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="card group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-14 h-14 ${feature.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <feature.icon className={`w-7 h-7 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Additional Features */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="flex items-center gap-3">
            <Zap className="w-5 h-5 text-primary" />
            <span className="text-gray-700">Fast turnaround times</span>
          </div>
          <div className="flex items-center gap-3">
            <Shield className="w-5 h-5 text-primary" />
            <span className="text-gray-700">100% confidential</span>
          </div>
          <div className="flex items-center gap-3">
            <TrendingUp className="w-5 h-5 text-primary" />
            <span className="text-gray-700">95% acceptance rate</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features