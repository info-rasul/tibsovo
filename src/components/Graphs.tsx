import { useState } from 'react'

const Graphs = () => {
  const [activeTab, setActiveTab] = useState<'overall' | 'progression' | 'response'>('progression')

  const tabs = [
    { id: 'overall' as const, label: 'Общая выживаемость' },
    { id: 'progression' as const, label: 'Выживаемость без прогрессии' },
    { id: 'response' as const, label: 'Пациенты с длительным ответом' },
  ]

  return (
    <div className="w-full pt-20 pb-1 md:px-4">
      <div className="mx-auto w-full max-w-[1360px] rounded-2xl bg-white overflow-hidden flex flex-col">
        {/* Content - Two columns */}
        <div className="flex flex-col lg:flex-row flex-1">
          {/* Left side - Stats */}
          <div className="flex-1 min-w-[240px] flex flex-col">
            {/* Header with tabs */}
            <div className="rounded-lg p-4 px-4 flex items-center justify-between flex-wrap">
              <div className="rounded-xl bg-white shadow-[0_0_20px_0_rgba(97,39,158,0.08)] p-1.5 flex items-center gap-2 flex-wrap">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4.5 py-3 rounded-lg text-sm font-semibold leading-[140%] transition-colors ${
                      activeTab === tab.id
                        ? 'bg-[#61279E] text-white'
                        : 'text-[#151518]'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              {/* Info Icon */}
              <svg
                className="w-6 h-6 flex-shrink-0"
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
            <div className="flex flex-col px-8 py-[17px]">
              <div className="flex flex-col max-w-[389px]">
                <div className="text-[#61279E] md:text-[80px] text-[40px] font-medium leading-[1.1] tracking-[-4px]">
                  63%
                </div>
                <div className="text-[#151518] text-[16px] font-normal leading-[22px] mt-1">
                  снижение риска прогрессирования заболевания или смерти (HR, 0.37 [95% CI, 0.25-0.54]; P&lt;0.0001)
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Text content */}
          <div className="w-[436px] flex-shrink-0 px-1 py-4 pr-4">
            <div className="rounded-xl bg-white shadow-[0_0_20px_0_rgba(97,39,158,0.08)] p-8 flex flex-col gap-6 h-full">
              <h3 className="text-[#151518] text-[32px] font-semibold leading-[35px] tracking-[-0.96px]">
                ТИБСОВО<span className="text-[32px]">®</span> улучшает мВБП приблизительно в 2 раза по сравнению с плацебо
              </h3>
              <div className="text-[#151518] text-base font-normal leading-[22px]">
                <p className="mb-5">
                  Ни у одного из пациентов, назначенных в группу
                </p>
                <p className="mb-5">
                  Частота контроля заболевания составила в группе ивосидениба 53% (частичная ремиссия 2% и стабилизация заболевания 51%), по сравнению с частотой стабилизации заболевания в группе плацебо 28%
                </p>
                <p>
                  Эффект лечения был одинаковым во всех подгруппах, в том числе у пациентов, получивших один или два режима терапии, а также у пациентов с функциональным статусом (ФС) 0 или 1 по классификации ECOG
                </p>
              </div>
              <button className="mt-[156px] md:mt-33 w-full px-8 py-4 rounded-lg border border-[#151518] text-[#151518] text-base font-semibold leading-[140%] hover:opacity-90 transition-opacity">
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
