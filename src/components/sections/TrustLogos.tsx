'use client'

const TrustLogos = () => {
  const schools = ['Harvard', 'MIT', 'Stanford', 'Yale', 'Princeton', 'Columbia', 'CMU', 'UCLA']

  return (
    <section className="py-12 md:py-16 bg-gray-50 border-y border-gray-100">
      <div className="container-custom">
        <p className="text-center text-sm text-gray-500 mb-8 uppercase tracking-wider font-semibold">
          Our Students Have Been Accepted To
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {schools.map((school) => (
            <div
              key={school}
              className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
            >
              <span className="text-xl md:text-2xl font-bold tracking-tight opacity-50 hover:opacity-70 transition-opacity">
                {school}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustLogos