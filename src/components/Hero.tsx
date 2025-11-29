import heroImage from '../assets/hero.svg'
import heroImageMob from '../assets/hero-mob.svg'

function Hero() {
  const stats = [
    {
      value: '63%',
      description: 'снижение риска прогрессирования заболевания или смерти (HR, 0.37 [95% CI, 0.25-0.54]; P<0.0001)',
      fullWidth: true,
    },
    {
      value: '32%',
      description: '6-мес ВБП',
      fullWidth: false,
    },
    {
      value: '22%',
      description: '12-мес ВБП',
      fullWidth: false,
    },
  ]

  return (
    <section 
      className="relative w-full bg-white overflow-hidden min-h-[594px] md:min-h-auto"
    >
      {/* Background Image - Mobile */}
      <img 
        src={heroImageMob}
        alt=""
        className="absolute top-[38px] max-h-[200px] right-0 h-auto object-contain pointer-events-none md:hidden"
        aria-hidden="true"
      />
      {/* Background Image - Desktop */}
      <img 
        src={heroImage}
        alt=""
        className="absolute max-w-[35%] top-[0] right-0 h-auto object-contain pointer-events-none hidden md:block"
        aria-hidden="true"
      />
      
      {/* Content Container */}
      <div className="relative z-10 mx-auto w-full max-w-[1360px] pl-4 pr-4 mt-[56px] pt-[24px] pb-10 md:pl-5 md:pr-5 md:pt-[100px] lg:pl-10 lg:pr-10 lg:pt-[71px] 2xl:px-0">
          {/* Text Content */}
          <div className="flex flex-col items-start gap-6 md:gap-8">
            <h1 className="max-w-[55%] md:max-w-[66%] text-[#61279E] text-[32px] md:text-4xl lg:text-[64px] font-semibold leading-[110%] tracking-[-0.96px] md:tracking-[-2.56px]">
              ТИБСОВО<span className="text-[32px] md:text-4xl lg:text-[64px]">®</span>: индивидуальный подход для наилучшего результата
            </h1>
            
            <p className="text-[#151518] text-sm md:text-xl font-normal leading-[140%] max-w-full md:max-w-[675px] md:pr-5">
              ТИБСОВО<span className="text-sm md:text-xl">®</span> является единственным препаратом таргетной терапии, направленной на mIDH1, который включен в клинические рекомендации ESMO (I-A) и NCCN (категория 1) для пациентов с холангиокарциномой с мутацией в гене IDH1.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="mt-8 md:mt-10 lg:mt-[95px] flex flex-col gap-2 w-full md:max-w-[448px]">
            {/* First large card */}
            <div className="relative rounded-2xl md:rounded-[20px] bg-[rgba(224,219,244,0.4)] p-4 md:p-5 lg:p-5.5 flex flex-col justify-center items-start gap-2 md:gap-3">
              <div className="text-[#61279E] text-2xl md:text-[44px] font-semibold leading-[110%] tracking-[-0.72px] md:tracking-[-1.32px]">
                {stats[0].value}
              </div>
              <div className="text-[#151518] text-xs md:text-base font-normal leading-[140%]">
                {stats[0].description}
              </div>
              {/* Info Icon */}
              <svg 
                className="absolute right-4 top-4 w-5 h-5 opacity-50" 
                width="20" 
                height="20" 
                viewBox="0 0 20 20" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.5">
                  <circle cx="10.0002" cy="9.99995" r="7.50312" stroke="#636466" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9.1665 12.9178H11.0918" stroke="#636466" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10.1326 12.9179V9.37476H9.17383" stroke="#636466" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10.0838 6.87143C10.0838 6.98654 9.99044 7.07985 9.87534 7.07985C9.76023 7.07985 9.66692 6.98654 9.66692 6.87143C9.66692 6.75632 9.76023 6.66301 9.87534 6.66301" stroke="#636466" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9.87513 6.66297C9.99024 6.66297 10.0836 6.75628 10.0836 6.87139" stroke="#636466" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
              </svg>
            </div>

            {/* Two smaller cards - always in row, 1/2 width each on mobile */}
            <div className="flex flex-row items-stretch gap-2">
              {stats.slice(1).map((stat, index) => (
                <div 
                  key={index}
                  className="relative rounded-2xl md:rounded-[20px] bg-[rgba(224,219,244,0.4)] p-4 md:p-5 lg:p-5 flex flex-col justify-center items-start gap-2 md:gap-3 w-1/2 flex-1"
                >
                  <div className="text-[#61279E] text-2xl md:text-[44px] font-semibold leading-[110%] tracking-[-0.72px] md:tracking-[-1.32px]">
                    {stat.value}
                  </div>
                  <div className="text-[#151518] text-xs md:text-base font-normal leading-[140%]">
                    {stat.description}
                  </div>
                  {/* Info Icon */}
                  <svg 
                    className="absolute right-4 top-4 w-5 h-5 opacity-50" 
                    width="20" 
                    height="20" 
                    viewBox="0 0 20 20" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g opacity="0.5">
                      <circle cx="10.0002" cy="9.99995" r="7.50312" stroke="#636466" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M9.1665 12.9178H11.0918" stroke="#636466" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M10.1326 12.9179V9.37476H9.17383" stroke="#636466" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M10.0838 6.87143C10.0838 6.98654 9.99044 7.07985 9.87534 7.07985C9.76023 7.07985 9.66692 6.98654 9.66692 6.87143C9.66692 6.75632 9.76023 6.66301 9.87534 6.66301" stroke="#636466" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M9.87513 6.66297C9.99024 6.66297 10.0836 6.75628 10.0836 6.87139" stroke="#636466" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </g>
                  </svg>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
  )
}

export default Hero
