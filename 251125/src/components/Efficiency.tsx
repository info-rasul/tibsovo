import { useState } from 'react'

const Efficiency = () => {
  const [activeTab, setActiveTab] = useState<'overall' | 'progression' | 'response'>('progression')

  return (
    <div className="w-full px-10 py-20 md:px-5 md:pb-24">
      <div className="mx-auto w-full max-w-[1360px] rounded-[20px] bg-[#61279E] px-4 pt-16 pb-4 md:pb-16">
        <div className="flex flex-col gap-6 px-12 md:px-5">
          {/* Заголовок */}
          <h2 className="text-base font-semibold uppercase leading-[120%] tracking-[0.48px] text-white">
            Эффективность
          </h2>

          {/* Контент */}
          <div className="flex flex-col gap-12">
            {/* Текстовый блок */}
            <div className="flex flex-col gap-6">
              <h3 className="w-full max-w-[949px] text-[40px] font-semibold leading-[110%] tracking-[-1.2px] text-white">
                Исследование ClarIDHy: международное двойное слепое рандомизированное плацебо-контролируемое исследование III фазы.
              </h3>
              <p className="w-full max-w-[949px] text-xl font-normal leading-[140%] text-white">
                Цель исследования ClarIDHy: оценить эффективность и безопасность применения монотерапии ТИБСОВО® в сравнении с ПБО у взрослых пациентов с холангиокарциномой на поздних стадиях с мутацией в гене IDH1 (февраль 2017 – январь 2019).
              </p>
            </div>

            {/* Кнопки */}
            <div className="flex items-center gap-3">
              <button className="flex items-center justify-center gap-2 rounded-lg bg-[#E74C39] px-8 py-4">
                <span className="text-base font-semibold leading-[140%] text-white">
                  Дизайн исследования ClarIDHy
                </span>
              </button>
              <button className="flex items-center justify-center gap-2 rounded-lg border border-white bg-white px-8 py-4">
                <span className="text-base font-semibold leading-[140%] text-[#151518]">
                  Исходные характеристики
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Секция с графиком */}
        <div className="mt-20 flex h-[800px] flex-col justify-between self-stretch rounded-2xl bg-white bg-[linear-gradient(0deg,rgba(224,219,244,0.40),rgba(224,219,244,0.40))]">
          <div className="flex flex-1 flex-col self-stretch">
            {/* Переключатели вкладок */}
            <div className="flex items-center justify-between rounded-lg px-4 py-4 pl-4 pr-3">
              <div className="flex items-center gap-3 rounded-xl bg-white p-1.5 shadow-[0_0_20px_0_rgba(97,39,158,0.08)]">
                <button
                  onClick={() => setActiveTab('overall')}
                  className={`flex items-center justify-center gap-2 rounded-lg px-5 py-3 transition-colors ${
                    activeTab === 'overall' ? 'bg-[#61279E]' : ''
                  }`}
                >
                  <span
                    className={`text-sm font-semibold leading-[140%] ${
                      activeTab === 'overall' ? 'text-white' : 'text-[#151518]'
                    }`}
                  >
                    Общая выживаемость
                  </span>
                </button>
                <button
                  onClick={() => setActiveTab('progression')}
                  className={`flex items-center justify-center gap-2 rounded-lg px-5 py-3 transition-colors ${
                    activeTab === 'progression' ? 'bg-[#61279E]' : ''
                  }`}
                >
                  <span
                    className={`text-sm font-semibold leading-[140%] ${
                      activeTab === 'progression' ? 'text-white' : 'text-[#151518]'
                    }`}
                  >
                    Выживаемость без прогрессии
                  </span>
                </button>
                <button
                  onClick={() => setActiveTab('response')}
                  className={`flex items-center justify-center gap-2 rounded-lg px-5 py-3 transition-colors ${
                    activeTab === 'response' ? 'bg-[#61279E]' : ''
                  }`}
                >
                  <span
                    className={`text-sm font-semibold leading-[140%] ${
                      activeTab === 'response' ? 'text-white' : 'text-[#151518]'
                    }`}
                  >
                    Пациенты с длительным ответом
                  </span>
                </button>
              </div>
              {/* Иконка информации */}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="opacity-60"
              >
                <g opacity="0.6">
                  <circle
                    cx="12.0003"
                    cy="12"
                    r="9.00375"
                    stroke="#636466"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.9995 15.5014H13.3098"
                    stroke="#636466"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.1593 15.5014V11.2496H11.0088"
                    stroke="#636466"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.0999 8.24569C12.0999 8.38382 11.9879 8.4958 11.8498 8.4958C11.7117 8.4958 11.5997 8.38382 11.5997 8.24569C11.5997 8.10756 11.7117 7.99559 11.8498 7.99559"
                    stroke="#636466"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11.8503 7.99564C11.9884 7.99564 12.1004 8.10762 12.1004 8.24574"
                    stroke="#636466"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
            </div>

            {/* Контент графика */}
            <div className="flex flex-1 flex-col gap-12 self-stretch px-8 pb-8 pt-8">
              {/* Статистика */}
              <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-1">
                  <div className="self-stretch text-[80px] font-medium leading-[110%] tracking-[-4px] text-[#61279E]">
                    63%
                  </div>
                  <p className="self-stretch text-base font-normal leading-[140%] text-[#151518]">
                    снижение риска прогрессирования заболевания или смерти (HR, 0.37 [95% CI, 0.25-0.54]; P&lt;0.0001)
                  </p>
                </div>
              </div>

              {/* График */}
              <div className="relative flex flex-1 items-start gap-6 pb-14">
                {/* Y-ось с метками */}
                <div className="flex flex-col justify-between gap-0 py-5">
                  {[1.0, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1, 0.0].map((value) => (
                    <div key={value} className="flex h-px items-center gap-2">
                      <span className="w-6 text-right text-xs font-normal leading-[140%] text-[rgba(21,21,24,0.5)]">
                        {value.toFixed(1)}
                      </span>
                      <div className="h-px w-1 bg-[#151518]"></div>
                    </div>
                  ))}
                </div>

                {/* Область графика */}
                <div className="relative flex flex-1 flex-col">
                  {/* Заголовок Y-оси */}
                  <div className="absolute -left-12 top-1/2 -translate-y-1/2 -rotate-90 whitespace-nowrap text-xs font-normal leading-[140%] text-[#151518]">
                    Выживаемость без прогрессии (%)
                  </div>

                  {/* Горизонтальные линии сетки */}
                  <div className="absolute left-0 top-0 flex h-full w-full flex-col justify-between py-5">
                    {[...Array(11)].map((_, i) => (
                      <div key={i} className="h-px w-full bg-[#CECECE]"></div>
                    ))}
                  </div>

                  {/* SVG график (упрощенная версия) */}
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 757 339"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute left-0 top-0"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <path
                      d="M2.88675 0L-2.38419e-07 5L5.7735 5L2.88675 0ZM2.88672 336H2.38672V337H3.38672V336H2.88672Z"
                      fill="#151518"
                    />
                    {/* Здесь можно добавить реальные данные графика */}
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Efficiency

