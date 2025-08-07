'use client'

import { ArrowRight, Sparkles } from 'lucide-react'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className="relative pt-24 md:pt-32 pb-16 md:pb-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-[--color-primary]/5 via-transparent to-[--color-secondary]/5" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-[--color-primary]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[--color-secondary]/10 rounded-full blur-3xl" />
      
      <div className="container-custom relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[--color-primary]/10 rounded-full">
              <Sparkles className="w-4 h-4 text-[--color-primary]" />
              <span className="text-sm font-semibold text-[--color-primary]">
                AI-Powered Guidance
              </span>
            </div>
            
            {/* Headline */}
            <h1 className="font-bold leading-tight">
              Stand Out.
              <span className="text-gradient"> Get Accepted.</span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              AI-powered college counseling for high-achieving students who want more than generic advice.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn btn-primary btn-lg group">
                Book Your Free Strategy Session
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn btn-secondary btn-lg">
                View Success Stories
              </button>
            </div>
            
            {/* Trust indicators */}
            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i}
                    className="w-10 h-10 bg-gray-300 rounded-full border-2 border-white"
                  />
                ))}
              </div>
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-gray-900">500+</span> students admitted to dream schools
              </p>
            </div>
          </div>
          
          {/* Right Column - Illustration */}
          <div className="relative animate-slide-up">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Placeholder illustration */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl" />
              <div className="absolute inset-4 bg-white rounded-2xl shadow-xl flex items-center justify-center">
                <div className="text-center space-y-4 p-8">
                  <div className="w-20 h-20 bg-primary/10 rounded-full mx-auto flex items-center justify-center">
                    <Sparkles className="w-10 h-10 text-primary" />
                  </div>
                  <p className="text-gray-600">AI-Enhanced Application Platform</p>
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-3 animate-pulse-soft">
                <p className="text-sm font-semibold">Harvard</p>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-3 animate-pulse-soft animation-delay-1000">
                <p className="text-sm font-semibold">MIT</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero