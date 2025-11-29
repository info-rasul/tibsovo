import { useState } from 'react'
import graphImage from '../assets/graph.svg'

const Graphs = () => {
  const [activeTab, setActiveTab] = useState<'overall' | 'progression' | 'response'>('progression')

  const tabs = [
    { id: 'overall' as const, label: 'Общая выживаемость' },
    { id: 'progression' as const, label: 'Выживаемость без прогрессии' },
    { id: 'response' as const, label: 'Пациенты с длительным ответом' },
  ]

  return (
    <div className="w-full max-w-full pt-0 md:pt-20 pb-1 px-2 md:px-4">
      <div className="mx-auto w-full max-w-[1360px] rounded-xl md:rounded-2xl bg-white overflow-hidden flex flex-col">
        {/* Content - Two columns */}
        <div className="flex flex-col lg:flex-row flex-1">
          {/* Left side - Stats */}
          <div className="flex-1 flex flex-col">
            {/* Header with tabs */}
            <div className="rounded-lg py-4 md:p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-0">
              <div className="md:rounded-xl bg-white shadow-[0_0_20px_0_rgba(97,39,158,0.12)] p-2 md:p-1.5 flex flex-row items-center gap-2 overflow-x-auto md:overflow-visible w-full md:w-auto scrollbar-hide">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-3 md:px-4.5 md:py-3 rounded-lg text-xs md:text-sm font-semibold leading-[140%] transition-colors whitespace-nowrap flex-shrink-0 ${
                      activeTab === tab.id
                        ? 'bg-[#61279E] text-white'
                        : 'text-[#151518]'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              {/* Info Icon - visible on desktop only */}
              <svg
                className="hidden md:block w-6 h-6 flex-shrink-0"
                width="24"
                height="24"
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
            <div className="flex flex-col px-4 md:px-8 pb-4 md:py-[17px]">
              <div className="flex flex-col relative">
                <div className="flex items-start justify-between">
                  <div className="text-[#61279E] text-[48px] md:text-[80px] font-semibold leading-[120%] md:leading-[110%] tracking-[-1.92px] md:tracking-[-4px]">
                    63%
                  </div>
                  {/* Info Icon - visible on mobile only, positioned to the right */}
                  <svg
                    className="md:hidden w-6 h-6 flex-shrink-0"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="11.9998" cy="12" r="9.00375" stroke="#9D9CA2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10.998 15.5014H13.3083" stroke="#9D9CA2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12.1583 15.5015V11.2497H11.0078" stroke="#9D9CA2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12.0999 8.24569C12.0999 8.38382 11.9879 8.4958 11.8498 8.4958C11.7117 8.4958 11.5997 8.38382 11.5997 8.24569C11.5997 8.10756 11.7117 7.99559 11.8498 7.99559" stroke="#9D9CA2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M11.8498 7.99558C11.9879 7.99558 12.0999 8.10755 12.0999 8.24568" stroke="#9D9CA2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="text-[#151518] text-sm md:text-base font-normal leading-[140%] md:leading-[22px] md:mt-1 md:max-w-[48%]">
                  снижение риска прогрессирования заболевания или смерти (HR, 0.37 [95% CI, 0.25-0.54]; P&lt;0.0001)
                </div>
              </div>
            </div>
            {/* Graph Image */}
            <div className="flex flex-col px-4 pt-8 md:px-8 md:pb-4 md:py-[30px]">
            <img 
              src={graphImage}
              alt="Graph"
              className="w-full h-auto"
            />
            </div>
          </div>

          {/* Right side - Text content */}
          <div className="w-full lg:w-[436px] flex-shrink-0 px-2 md:px-1 pt-12 md:pt-0 py-4 md:pr-4 max-w-full">
            <div className="rounded-xl bg-white shadow-[0_0_20px_0_rgba(97,39,158,0.12)] px-5 py-5 md:px-8 md:pt-11 md:pb-7 flex flex-col gap-5 md:gap-6 h-full">
              <h3 className="text-[#151518] text-2xl md:text-[32px] font-semibold leading-[120%] md:leading-[35px] tracking-[-0.48px] md:tracking-[-0.96px]">
                ТИБСОВО<span className="text-2xl md:text-[32px]">®</span> улучшает мВБП приблизительно в 2 раза по сравнению с плацебо
              </h3>
              <div className="text-[#151518] text-xs md:text-base font-normal leading-[140%] md:leading-[22px]">
                <p className="mb-0 md:mb-5">
                  Ни у одного из пациентов, назначенных в группу
                </p>
                <p className="mb-0 md:mb-5 mt-4 md:mt-0">
                  Частота контроля заболевания составила в группе ивосидениба 53% (частичная ремиссия 2% и стабилизация заболевания 51%), по сравнению с частотой стабилизации заболевания в группе плацебо 28%
                </p>
                <p className="mt-4 md:mt-0">
                  Эффект лечения был одинаковым во всех подгруппах, в том числе у пациентов, получивших один или два режима терапии, а также у пациентов с функциональным статусом (ФС) 0 или 1 по классификации ECOG
                </p>
              </div>
              <button className="mt-0 md:mt-[130px] w-full px-8 py-4 rounded-lg border border-[#151518] text-[#151518] text-sm md:text-base font-semibold leading-[140%] hover:opacity-90 transition-opacity">
                Скачать брошюру
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Graphs
