'use client'

import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah L.',
      school: 'Admitted to Columbia',
      image: '/api/placeholder/60/60',
      quote: 'Pathfindr transformed my application. The AI-powered essay editing helped me tell my story in a way that truly resonated with admissions officers.',
      rating: 5,
    },
    {
      name: 'Michael K.',
      school: 'Admitted to MIT',
      image: '/api/placeholder/60/60',
      quote: 'The strategic guidance was invaluable. Having a CMU CS admit as my counselor gave me insights no one else could provide.',
      rating: 5,
    },
    {
      name: 'Emily R.',
      school: 'Admitted to Stanford',
      image: '/api/placeholder/60/60',
      quote: 'From essay editing to interview prep, Pathfindr was with me every step. I couldn\'t have done it without their support.',
      rating: 5,
    },
  ]

  return (
    <section id="testimonials" className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="font-bold mb-4">
            Success <span className="text-gradient">Stories</span>
          </h2>
          <p className="text-lg text-gray-600">
            Join hundreds of students who achieved their dream school admissions with Pathfindr.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="card relative hover:shadow-xl transition-all duration-300"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-4 right-4 w-8 h-8 text-gray-200" />
              
              {/* Profile */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-gray-300 rounded-full" />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-primary font-medium">{testimonial.school}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-600 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-gray-200">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
            <p className="text-gray-600">Students Admitted</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">95%</div>
            <p className="text-gray-600">Success Rate</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50+</div>
            <p className="text-gray-600">Top Universities</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">4.9</div>
            <p className="text-gray-600">Average Rating</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials