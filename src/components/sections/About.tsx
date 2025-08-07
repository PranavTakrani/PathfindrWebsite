'use client'

import { CheckCircle, Award, Users, Sparkles } from 'lucide-react'

const About = () => {
  const values = [
    {
      icon: Sparkles,
      title: 'AI-Enhanced Editing',
      description: 'Cutting-edge technology meets human expertise for unparalleled results.',
    },
    {
      icon: Award,
      title: 'Strategic Storytelling',
      description: 'We help you craft narratives that resonate with admissions committees.',
    },
    {
      icon: Users,
      title: 'Proven Results',
      description: '95% of our students get into their top 3 school choices.',
    },
  ]

  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Founder Photo */}
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto">
              {/* Placeholder for founder photo */}
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl" />
              <div className="absolute inset-4 bg-white rounded-xl shadow-xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4" />
                  <p className="text-gray-600 font-semibold">Founder Photo</p>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -z-10 top-8 -right-8 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -z-10 -bottom-8 -left-8 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
          </div>

          {/* Right: Founder Story */}
          <div className="space-y-6">
            <div>
              <p className="text-primary font-semibold mb-2">Meet the Founder</p>
              <h2 className="font-bold mb-4">
                Hi, I'm <span className="text-gradient">[Your Name]</span>
              </h2>
            </div>
            
            <div className="space-y-4 text-gray-600">
              <p className="text-lg">
                As a Carnegie Mellon CS graduate who navigated the complex college admissions process, 
                I understand what it takes to stand out in a sea of qualified applicants.
              </p>
              <p>
                After helping dozens of friends and family members gain admission to top universities, 
                I founded Pathfindr to democratize access to elite college counseling. We combine 
                AI technology with personalized human guidance to give every student their best shot 
                at their dream school.
              </p>
              <p>
                Our approach isn't about gaming the system—it's about helping you present your 
                authentic self in the most compelling way possible.
              </p>
            </div>

            {/* Value Pillars */}
            <div className="space-y-4 pt-4">
              {values.map((value, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{value.title}</h4>
                    <p className="text-sm text-gray-600">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4">
              <button className="btn btn-primary btn-lg">
                Schedule Your Free Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About