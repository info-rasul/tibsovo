const MechanismOfAction = () => {
  return (
    <div className="w-full py-20 px-4 md:px-5 md:pb-24">
      <div className="mx-auto w-full max-w-[1360px] rounded-[20px] bg-[#E74C39] p-6 md:p-16">
        <div className="flex flex-col gap-12">
          {/* Первый блок - Текст */}
          <div className="flex flex-col w-full">
            {/* Верхний заголовок */}
            <h3 className="text-white text-base font-semibold leading-[120%] tracking-[0.48px] uppercase">
              Механизм действия
            </h3>
            
            {/* Контент */}
            <div className="flex flex-col mt-4">
              {/* Большой заголовок */}
              <h2 className="text-white text-[40px] font-semibold leading-[110%] tracking-[-1.2px]">
                Роль мутации гена IDH1 при холангиокарциноме
              </h2>
              
              {/* Текст описания */}
              <p className="text-white text-xl font-normal leading-[28px] mt-6">
                Мутации IDH1 диагностируются примерно в 10–20% случаев внутрипеченочной хронической кавернозной ангиопатии (ХКА):
              </p>
            </div>

            {/* Список пунктов */}
            <div className="flex flex-col gap-10 mt-12 w-full">
              {/* Пункт 1 */}
              <div className="flex items-center gap-6">
                <div className="w-[72px] h-[72px] rounded-full bg-white shadow-[0_0_20px_0_rgba(231,76,57,0.08)] flex-shrink-0 flex items-center justify-center">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Молекула/клетка */}
                    <circle cx="20" cy="20" r="8" stroke="#E74C39" strokeWidth="2" fill="none"/>
                    <circle cx="12" cy="12" r="5" stroke="#E74C39" strokeWidth="2" fill="none"/>
                    <circle cx="28" cy="12" r="5" stroke="#E74C39" strokeWidth="2" fill="none"/>
                    <circle cx="12" cy="28" r="5" stroke="#E74C39" strokeWidth="2" fill="none"/>
                    <circle cx="28" cy="28" r="5" stroke="#E74C39" strokeWidth="2" fill="none"/>
                    <line x1="17" y1="17" x2="15" y2="15" stroke="#E74C39" strokeWidth="1.5" strokeLinecap="round"/>
                    <line x1="23" y1="17" x2="25" y2="15" stroke="#E74C39" strokeWidth="1.5" strokeLinecap="round"/>
                    <line x1="17" y1="23" x2="15" y2="25" stroke="#E74C39" strokeWidth="1.5" strokeLinecap="round"/>
                    <line x1="23" y1="23" x2="25" y2="25" stroke="#E74C39" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <p className="text-white text-xl font-normal leading-[28px] flex-1">
                  mIDH1 способствует онкогенезу, катализируя продукцию 2-ГГ, что приводит к нарушению эпигенетической регуляции и клеточного метаболизма.
                </p>
              </div>

              {/* Пункт 2 */}
              <div className="flex items-center gap-6">
                <div className="w-[72px] h-[72px] rounded-full bg-white shadow-[0_0_20px_0_rgba(231,76,57,0.08)] flex-shrink-0 flex items-center justify-center">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Диагностический тест */}
                    <rect x="8" y="10" width="24" height="20" rx="2" stroke="#E74C39" strokeWidth="2" fill="none"/>
                    <circle cx="20" cy="18" r="4" stroke="#E74C39" strokeWidth="2" fill="none"/>
                    <path d="M16 18L18.5 20.5L24 15" stroke="#E74C39" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <line x1="12" y1="26" x2="28" y2="26" stroke="#E74C39" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <p className="text-white text-xl font-normal leading-[28px] flex-1">
                  Перед началом приема препарата ТИБСОВО<span className="text-xl">®</span> требуется подтвердить наличие у пациентов мутации в гене IDH1 R132 с использованием подходящего диагностического теста.
                </p>
              </div>

              {/* Пункт 3 */}
              <div className="flex items-center gap-6">
                <div className="w-[72px] h-[72px] rounded-full bg-white shadow-[0_0_20px_0_rgba(231,76,57,0.08)] flex-shrink-0 flex items-center justify-center">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Ингибитор/таблетка */}
                    <rect x="10" y="14" width="20" height="12" rx="6" stroke="#E74C39" strokeWidth="2" fill="none"/>
                    <line x1="20" y1="14" x2="20" y2="26" stroke="#E74C39" strokeWidth="2" strokeLinecap="round"/>
                    <circle cx="20" cy="20" r="3" fill="#E74C39"/>
                    <path d="M8 20L10 20M30 20L32 20" stroke="#E74C39" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <p className="text-white text-xl font-normal leading-[28px] flex-1">
                  ТИБСОВО<span className="text-xl">®</span> — мощный низкомолекулярный ингибитор мутантного фермента IDH1, являющийся первым представителем своего класса и целенаправленно воздействующий на все известные мутантные варианты IDH1
                </p>
              </div>
            </div>
          </div>

          {/* Второй блок - Схема */}
          <div className="w-full bg-white rounded-[16px] overflow-hidden">
            {/* Фоновая область */}
            <div className="bg-[rgba(97,39,158,0.15)] px-5 py-8 md:px-5 md:py-12 lg:px-20 lg:py-[68px]">
              <div className="flex flex-col">
                {/* Заголовок схемы */}
                <h3 className="text-[#61279E] text-2xl font-semibold leading-[120%] tracking-[-0.48px]">
                  Селективное ингибирование с помощью ТИБСОВО<span className="text-2xl">®</span>
                </h3>

                {/* Схема: 4 блока сверху и 4 блока снизу */}
                <div className="flex flex-col gap-6 mt-6">
                  {/* Верхний ряд - 4 блока */}
                  <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-4">
                    {/* Блок 1 - mIDH1 (фиолетовый) */}
                    <div className="flex flex-col w-full lg:flex-1 gap-3">
                      <div className="flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-[#61279E] flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_0_rgba(97,39,158,0.2)]">
                          <span className="text-white text-sm font-medium">mIDH1</span>
                        </div>
                      </div>
                      <p className="text-[#151518] text-base font-normal leading-[22px] text-center">
                        Тибсово ингибирует mIDH1, блокирует выработку 2ГГ
                      </p>
                    </div>

                    {/* Блок 2 - 2-ГГ (фиолетовый) */}
                    <div className="flex flex-col w-full lg:flex-1 gap-3">
                      <div className="flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-[#61279E] flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_0_rgba(97,39,158,0.2)]">
                          <span className="text-white text-sm font-medium">2-ГГ</span>
                        </div>
                      </div>
                      <p className="text-[#151518] text-base font-normal leading-[22px] text-center">
                        Восстанавливаются механизмы клеточной дифференцировки
                      </p>
                    </div>

                    {/* Блок 3 - α-КГ (фиолетовый) */}
                    <div className="flex flex-col w-full lg:flex-1 gap-3">
                      <div className="flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-[#61279E] flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_0_rgba(97,39,158,0.2)]">
                          <span className="text-white text-sm font-medium">α-КГ</span>
                        </div>
                      </div>
                      <p className="text-[#151518] text-base font-normal leading-[22px] text-center">
                        Контроль заболевания
                      </p>
                    </div>

                    {/* Блок 4 - mIDH1 (красный) */}
                    <div className="flex flex-col w-full lg:flex-1 gap-3">
                      <div className="flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-[#E74C39] flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_0_rgba(231,76,57,0.2)]">
                          <span className="text-white text-sm font-medium">mIDH1</span>
                        </div>
                      </div>
                      <p className="text-[#151518] text-base font-normal leading-[22px] text-center">
                        Мутация с приобретением функции
                      </p>
                    </div>
                  </div>

                  {/* Нижний ряд - 4 блока */}
                  <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-4">
                    {/* Блок 5 - α-КГ (красный) */}
                    <div className="flex flex-col w-full lg:flex-1 gap-3">
                      <div className="flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-[#E74C39] flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_0_rgba(231,76,57,0.2)]">
                          <span className="text-white text-sm font-medium">α-КГ</span>
                        </div>
                      </div>
                      <p className="text-[#151518] text-base font-normal leading-[22px] text-center">
                        Патологическая конверсия α-КГ в 2-ГГ
                      </p>
                    </div>

                    {/* Блок 6 - 2-ГГ (красный) */}
                    <div className="flex flex-col w-full lg:flex-1 gap-3">
                      <div className="flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-[#E74C39] flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_0_rgba(231,76,57,0.2)]">
                          <span className="text-white text-sm font-medium">2-ГГ</span>
                        </div>
                      </div>
                      <p className="text-[#151518] text-base font-normal leading-[22px] text-center">
                        Накапливается онкометаболит, что приводит к эпигенетической дисрегуляции
                      </p>
                    </div>

                    {/* Блок 7 - Итоговый результат (красный) */}
                    <div className="flex flex-col w-full lg:flex-1 gap-3">
                      <div className="flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-[#E74C39] flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_0_rgba(231,76,57,0.2)]">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      </div>
                      <p className="text-[#151518] text-base font-normal leading-[22px] text-center">
                        Развитие опухоли: избыточная пролиферация и нарушение дифференцировки
                      </p>
                    </div>

                    {/* Блок 8 - Пустой блок для симметрии */}
                    <div className="flex flex-col w-full lg:flex-1 gap-3">
                      <div className="flex items-center justify-center">
                        <div className="w-16 h-16"></div>
                      </div>
                    </div>
                  </div>

                  {/* Заголовок "Патологическое состояние" внизу */}
                  <div className="flex justify-start mt-6">
                    <h4 className="text-[#87A9E2] text-2xl font-semibold leading-[120%] tracking-[-0.48px]">
                      Паталогическое состояние
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Кнопка */}
          <div className="flex flex-col items-center w-full max-w-[260px] mx-auto mt-12">
            <div className="relative">
              <button className="flex items-center justify-center rounded-xl w-[260px] h-[82px] px-6 bg-[#61279E] hover:bg-[#4f1f7d] transition-colors duration-200 shadow-[0_0_20px_0_rgba(97,39,158,0.2)]">
                <span className="text-white text-base font-semibold leading-[1.1] tracking-[-0.48px] whitespace-nowrap">
                  mlDH1
                </span>
              </button>
              {/* Выступ-указатель внизу */}
              <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[12px] border-t-[#61279E]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MechanismOfAction

