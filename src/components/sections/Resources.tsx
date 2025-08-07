'use client'

import { Download, FileText, Video, BookOpen } from 'lucide-react'

const Resources = () => {
  const resources = [
    {
      icon: FileText,
      title: 'Top 10 Essay Mistakes',
      description: 'Avoid the common pitfalls that get applications rejected.',
      type: 'Guide',
      action: 'Download Guide',
    },
    {
      icon: Video,
      title: 'Interview Prep Masterclass',
      description: 'Learn how to ace your college interviews with confidence.',
      type: 'Video',
      action: 'Watch Video',
    },
    {
      icon: BookOpen,
      title: 'College List Builder',
      description: 'Create the perfect balanced list of safety, match, and reach schools.',
      type: 'Template',
      action: 'Get Template',
    },
    {
      icon: FileText,
      title: 'Activities Resume Guide',
      description: 'Structure your extracurriculars to maximize impact.',
      type: 'Guide',
      action: 'View Guide',
    },
  ]

  return (
    <section id="resources" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="font-bold mb-4">
            Free Resources for <span className="text-gradient">Families</span>
          </h2>
          <p className="text-lg text-gray-600">
            Get started with our expert guides and templates designed to give you an edge.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource, index) => (
            <div 
              key={index}
              className="card hover:shadow-lg transition-all duration-300 group hover:-translate-y-1"
            >
              {/* Type Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {resource.type}
                </span>
                <resource.icon className="w-5 h-5 text-gray-400" />
              </div>
              
              {/* Content */}
              <h4 className="font-bold mb-2">{resource.title}</h4>
              <p className="text-sm text-gray-600 mb-4">{resource.description}</p>
              
              {/* Action Button */}
              <button className="text-primary font-semibold text-sm hover:text-primary-dark transition-colors flex items-center gap-2 group">
                {resource.action}
                <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-16 bg-white rounded-2xl shadow-sm p-8 md:p-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-3">Get Weekly College Prep Tips</h3>
              <p className="text-gray-600">
                Join 10,000+ families receiving expert advice and exclusive resources every week.
              </p>
            </div>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button className="btn btn-primary">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resources