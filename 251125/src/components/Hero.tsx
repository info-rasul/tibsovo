import heroImage from '../assets/hero.svg'

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
      className="relative w-full bg-white overflow-hidden" 
      style={{ 
        backgroundImage: `url(${heroImage})`,
        backgroundPosition: 'right top',
        backgroundSize: '40% auto',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Content Container */}
      <div className="relative z-10 mx-auto w-full max-w-[1360px] pl-5 pr-5 pt-[100px] pb-10 lg:pl-10 lg:pr-10 lg:pt-[127px] 2xl:px-0 overflow-y-auto">
        {/* Text Content */}
        <div className="flex flex-col items-start gap-8 max-w-[911px]">
          <h1 className="text-[#61279E] text-4xl md:text-[64px] font-semibold leading-[110%] tracking-[-2.56px] font-['Geist',_-apple-system,_Roboto,_Helvetica,_sans-serif]">
            ТИБСОВО®: индивидуальный подход для наилучшего результата
          </h1>
          
          <p className="text-[#151518] text-xl font-normal leading-[140%] max-w-[675px] font-['Geist',_-apple-system,_Roboto,_Helvetica,_sans-serif]">
            ТИБСОВО® является единственным препаратом таргетной терапии, направленной на mIDH1, который включен в клинические рекомендации ESMO (I-A) и NCCN (категория 1) для пациентов с холангиокарциномой с мутацией в гене IDH1.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="mt-10 lg:mt-[89px] flex flex-col gap-2 max-w-[448px]">
          {/* First large card */}
          <div className="relative rounded-[20px] bg-[rgba(224,219,244,0.4)] p-5 md:p-6 flex flex-col justify-center items-start gap-3">
            <div className="text-[#61279E] text-[44px] font-semibold leading-[110%] tracking-[-1.32px] font-['Geist',_-apple-system,_Roboto,_Helvetica,_sans-serif]">
              {stats[0].value}
            </div>
            <div className="text-[#151518] text-base font-normal leading-[140%] font-['Geist',_-apple-system,_Roboto,_Helvetica,_sans-serif]">
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

          {/* Two smaller cards in a row */}
          <div className="flex items-center gap-2">
            {stats.slice(1).map((stat, index) => (
              <div 
                key={index}
                className="relative rounded-[20px] bg-[rgba(224,219,244,0.4)] p-5 md:p-6 flex flex-col justify-center items-start gap-3 flex-1"
              >
                <div className="text-[#61279E] text-[44px] font-semibold leading-[110%] tracking-[-1.32px] font-['Geist',_-apple-system,_Roboto,_Helvetica,_sans-serif]">
                  {stat.value}
                </div>
                <div className="text-[#151518] text-base font-normal leading-[140%] font-['Geist',_-apple-system,_Roboto,_Helvetica,_sans-serif]">
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

