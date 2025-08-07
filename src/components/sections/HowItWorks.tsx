'use client'

import { Phone, FileText, Rocket, Trophy } from 'lucide-react'

const HowItWorks = () => {
  const steps = [
    {
      icon: Phone,
      title: 'Free Consultation',
      description: 'Book a free 30-minute strategy call to discuss your goals and create a personalized plan.',
      number: '01',
    },
    {
      icon: FileText,
      title: 'Strategy Development',
      description: 'We build your custom roadmap including school list, timeline, and application strategy.',
      number: '02',
    },
    {
      icon: Rocket,
      title: 'Application Support',
      description: 'Get AI-powered essay editing, interview prep, and ongoing guidance throughout the process.',
      number: '03',
    },
    {
      icon: Trophy,
      title: 'Acceptance Success',
      description: 'Celebrate your acceptances and get support with final school selection and next steps.',
      number: '04',
    },
  ]

  return (
    <section id="how-it-works" className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="font-bold mb-4">
            How <span className="text-gradient">Pathfindr</span> Works
          </h2>
          <p className="text-lg text-gray-600">
            A simple, proven process to get you from where you are to your dream school.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line - Desktop Only */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
          
          <div className="grid md:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Step Card */}
                <div className="text-center space-y-4">
                  {/* Number */}
                  <div className="text-5xl font-bold text-gray-100 mb-4">
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-20 h-20 bg-white rounded-2xl shadow-lg mx-auto flex items-center justify-center group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                    <step.icon className="w-10 h-10 text-primary" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
                
                {/* Arrow - Desktop Only */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-[96px] -right-4 text-primary/30">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="btn btn-primary btn-lg">
            Start Your Journey Today
          </button>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks