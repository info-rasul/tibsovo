import { useState } from 'react'
import CommonGraphsImage from './common/Graph'
import LongTimeGraphsImage from './long-time/Graph'
import NoProgressGraphsImage from './no-progress/Graph'
import CommonDescGraph from './common/Desc'
import LongTimeDescGraph from './long-time/Desc'
import NoProgressDescGraph from './no-progress/Desc'

const Graphs = () => {
  const [activeTab, setActiveTab] = useState<'common' | 'longTime' | 'noProgress'>('common')

  const tabs = [
    { id: 'common' as const, label: 'Общая выживаемость' },
    { id: 'longTime' as const, label: 'Выживаемость без прогрессии' },
    { id: 'noProgress' as const, label: 'Пациенты с длительным ответом' },
  ]

  return (
    <div className="w-full max-w-full pt-0 md:pt-20 pb-1 px-2 md:px-4">
      <div className="mx-auto w-full max-w-[1360px] rounded-xl md:rounded-2xl bg-white overflow-hidden flex flex-col">
        {/* Content - Two columns */}
        <div className="flex flex-col lg:flex-row flex-1">
          {/* Left side - Stats */}
          <div className="flex-1 flex flex-col md:max-w-[68%] overflow-auto">
            {/* Header with tabs */}
            <div className="rounded-lg py-2 md:py-4 md:p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-0">
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
              {activeTab === 'common' && <CommonGraphsImage />}
              {activeTab === 'longTime' && <LongTimeGraphsImage />}
              {activeTab === 'noProgress' && <NoProgressGraphsImage />}
            </div>
          </div>

          {activeTab === 'common' && <CommonDescGraph />}
          {activeTab === 'longTime' && <LongTimeDescGraph />}
          {activeTab === 'noProgress' && <NoProgressDescGraph />}
        </div>
      </div>
    </div>
  )
}

export default Graphs
