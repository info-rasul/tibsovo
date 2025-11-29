import tibsovoImage from '../assets/tibsovo-product.png'

const ProductInfo = () => {
  return (
    <div className="w-full py-20 px-4 md:px-4 bg-white">
      <div className="mx-auto w-full max-w-[1360px]">
        <div className="flex flex-col gap-6">
          {/* Первый ряд - Первый блок и Третий блок рядом */}
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Первый блок - Текст и кнопка */}
            <div className="flex-1 bg-white p-8 flex flex-col justify-between">
              <div className="flex flex-col">
                {/* Верхний заголовок */}
                <h3 className="text-[#61279E] text-base font-semibold leading-[120%] tracking-[0.48px] uppercase">
                  Способ применения
                </h3>
                
                {/* Контент */}
                <div className="flex flex-col mt-4">
                  {/* Большой заголовок */}
                  <h2 className="text-[#61279E] text-[40px] font-semibold leading-[44px] tracking-[-1.2px]">
                    Режим дозирования ТИБСОВО<span className="text-[40px]">®</span>: один раз в день
                  </h2>
                  
                  {/* Текст описания */}
                  <p className="text-[#151518] text-xl font-normal leading-[28px] mt-6">
                    Препарат ТИБСОВО<span className="text-xl">®</span> в режиме монотерапии показан для лечения взрослых пациентов с местнораспространенной или метастатической холангиокарциномой с мутацией в гене IDH1 R132, ранее получавших лечение, как минимум, в рамках одной линии системной терапии
                  </p>
                </div>
              </div>
              
              {/* Кнопка */}
              <button className="mt-12 self-start px-8 py-4 rounded-lg border border-[#151518] text-[#151518] text-base font-semibold leading-[140%] hover:opacity-90 transition-opacity">
                Скачать брошюру
              </button>
            </div>

            {/* Третий блок - Фотография препарата */}
            <div className="flex-1 lg:flex-none lg:w-[400px] bg-white p-8 flex items-center justify-center relative">
              <div className="w-full h-[500px] rounded-xl flex items-center justify-center overflow-hidden relative z-10">
                <img 
                  src={tibsovoImage} 
                  alt="Препарат ТИБСОВО"
                  className="w-full h-full object-contain max-w-full"
                />
              </div>
            </div>
          </div>

          {/* Второй ряд - Второй блок на всю ширину */}
          <div className="w-full">
            <div className="flex flex-col md:flex-row gap-2">
              {/* Блок 1 - Фиолетовый фон (высота 488px) */}
              <div className="rounded-[20px] bg-[#61279E] p-4 min-w-[240px] md:w-[334px] h-[488px] flex flex-col">
                <div className="w-[72px] h-[72px] rounded-2xl bg-white shadow-[0_0_20px_0_rgba(97,39,158,0.08)] mb-auto flex items-center justify-center">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke="#61279E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 2V6" stroke="#61279E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 2V6" stroke="#61279E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 10H21" stroke="#61279E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 14L16 14" stroke="#61279E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 18L12 18" stroke="#61279E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-white text-base font-normal leading-[22px] mt-auto">
                  Рекомендуемая доза препарата ТИБСОВО<span className="text-base">®</span>: 500 мг ТИБСОВО<span className="text-base">®</span> один раз в сутки
                </p>
              </div>

              {/* Остальные 4 блока в два ряда */}
              <div className="flex-1 flex flex-col gap-2">
                {/* Первый ряд - 2 блока */}
                <div className="flex flex-col md:flex-row gap-2 flex-1">
                  {/* Блок 2 - Светлый фон */}
                  <div className="rounded-[20px] bg-[rgba(224,219,244,0.4)] p-4 min-w-[240px] flex-1 flex flex-col min-h-[240px]">
                    <div className="w-[72px] h-[72px] bg-white mb-auto flex items-center justify-center overflow-hidden">
                      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* Часы */}
                        <circle cx="24" cy="24" r="18" stroke="#61279E" strokeWidth="2" fill="none"/>
                        <circle cx="24" cy="24" r="2" fill="#61279E"/>
                        {/* Стрелки часов */}
                        <line x1="24" y1="24" x2="24" y2="14" stroke="#61279E" strokeWidth="2" strokeLinecap="round"/>
                        <line x1="24" y1="24" x2="28" y2="24" stroke="#61279E" strokeWidth="2" strokeLinecap="round"/>
                        {/* Цифры на часах */}
                        <line x1="24" y1="8" x2="24" y2="10" stroke="#61279E" strokeWidth="1.5"/>
                        <line x1="40" y1="24" x2="38" y2="24" stroke="#61279E" strokeWidth="1.5"/>
                        <line x1="24" y1="40" x2="24" y2="38" stroke="#61279E" strokeWidth="1.5"/>
                        <line x1="8" y1="24" x2="10" y2="24" stroke="#61279E" strokeWidth="1.5"/>
                        {/* Таблетка */}
                        <ellipse cx="32" cy="16" rx="4" ry="6" fill="#61279E" opacity="0.8"/>
                        <line x1="30" y1="16" x2="34" y2="16" stroke="white" strokeWidth="1"/>
                      </svg>
                    </div>
                    <p className="text-[#151518] text-base font-normal leading-[22px] mt-auto">
                      Таблетки принимают один раз в сутки, каждый раз примерно в одно и то же время.
                    </p>
                  </div>

                  {/* Блок 3 - Светлый фон */}
                  <div className="rounded-[20px] bg-[rgba(224,219,244,0.4)] p-4 min-w-[240px] flex-1 flex flex-col min-h-[240px] relative z-0">
                    <div className="w-[72px] h-[72px] bg-white mb-auto flex items-center justify-center overflow-hidden">
                      <img 
                        src="https://api.builder.io/api/v1/image/assets/TEMP/ef498bf99f6dcdad68e24128ff6f013df5e49402?placeholderIfAbsent=true" 
                        alt="Иконка"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <p className="text-[#151518] text-base font-normal leading-[22px] mt-auto">
                      Пациенты должны воздерживаться от приема пищи в течение 2 часов до и 1 часа после приема ТИБСОВО<span className="text-base">®</span>.
                    </p>
                  </div>
                </div>

                {/* Второй ряд - 2 блока */}
                <div className="flex flex-col md:flex-row gap-2 flex-1">
                  {/* Блок 4 - Светлый фон */}
                  <div className="rounded-[20px] bg-[rgba(224,219,244,0.4)] p-4 min-w-[240px] flex-1 flex flex-col min-h-[240px]">
                    <div className="w-[72px] h-[72px] bg-white mb-auto flex items-center justify-center overflow-hidden">
                      <img 
                        src="https://api.builder.io/api/v1/image/assets/TEMP/470ffae152108246572bc0a0f2ade5c25416b35b?placeholderIfAbsent=true" 
                        alt="Иконка"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <p className="text-[#151518] text-base font-normal leading-[22px] mt-auto">
                      Таблетки следует проглатывать целиком, запивая водой
                    </p>
                  </div>

                  {/* Блок 5 - Светлый фон */}
                  <div className="rounded-[20px] bg-[rgba(224,219,244,0.4)] p-4 min-w-[240px] flex-1 flex flex-col min-h-[240px]">
                    <div className="w-[72px] h-[72px] bg-white mb-auto flex items-center justify-center overflow-hidden">
                      <img 
                        src="https://api.builder.io/api/v1/image/assets/TEMP/470ffae152108246572bc0a0f2ade5c25416b35b?placeholderIfAbsent=true" 
                        alt="Иконка"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <p className="text-[#151518] text-base font-normal leading-[22px] mt-auto">
                      Пациенты должны отказаться от употребления грейпфрута и грейпфрутового сока во время лечения.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductInfo

