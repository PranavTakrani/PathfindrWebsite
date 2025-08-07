'use client'

import { ArrowRight, Calendar } from 'lucide-react'

const CTABanner = () => {
  return (
    <section className="section-padding bg-gradient-to-r from-primary to-primary-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full translate-y-1/2 -translate-x-1/2" />
      </div>
      
      <div className="container-custom relative">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          {/* Icon */}
          <div className="w-16 h-16 bg-white/20 rounded-full mx-auto flex items-center justify-center mb-6">
            <Calendar className="w-8 h-8 text-white" />
          </div>
          
          {/* Headline */}
          <h2 className="text-white font-bold">
            Ready to Build a Standout Application?
          </h2>
          
          {/* Subtext */}
          <p className="text-xl text-white/90">
            Schedule your free consultation and get personalized guidance today. 
            Limited spots available for the upcoming application season.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button className="btn bg-white hover:bg-gray-100 text-primary px-8 py-4 text-lg font-semibold group">
              Book Free Consultation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="btn border-2 border-white text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold">
              View Pricing Plans
            </button>
          </div>
          
          {/* Urgency Indicator */}
          <p className="text-white/80 text-sm pt-4">
            ⚡ Only 5 spots remaining for this month
          </p>
        </div>
      </div>
    </section>
  )
}

export default CTABanner