import IconSectionHeader from "./IconSectionHeader";

function DrugInteractions() {
  const sections = [
    {
      title: "Сильные или умеренные ингибиторы CYP3A4",
      items: [
        {
          text: "Совместное применение с умеренными или сильными ингибиторами CYP3A4 повышает концентрацию ивосидениба в плазме, что может увеличить риск удлинения интервала QTc."
        },
        {
          text: "<strong>Умеренные ингибиторы CYP3A4:</strong> апрепитант, циклоспорин, дилтиазем, эритромицин, флуконазол, грейпфрут и грейпфрутовый сок, изавуконазол, верапамил."
        },
        {
          text: "<strong>Сильные ингибиторы CYP3A4:</strong> кларитромицин, итраконазол, кетоконазол, позаконазол, ритонавир, вориконазол."
        },
        {
          text: "Необходимо соблюдать осторожность при проведении лечения и тщательно контролировать параметры ЭКГ пациентов на предмет удлинения интервала QTc в отсутствие подходящего альтернативного лечения."
        },
        {
          text: "При невозможности избежать применения умеренных или сильных ингибиторов CYP3A4 дозу ивосидениба следует снизить до 250 мг один раз в сутки."
        }
      ]
    },
    {
      title: "Сильные индукторы CYP3A4",
      items: [
        {
          text: "Ивосидениб является субстратом CYP3A4. Ожидается, что совместное применение сильных индукторов CYP3A4 (например, карбамазепина, фенобарбитала, фенитоина, рифампицина, препаратов зверобоя продырявленного (Hypericum perforatum)) снизит концентрацию ивосидениба в плазме, в связи с этим совместное применение вышеуказанных препаратов с препаратом ТИБСОВО® противопоказано."
        }
      ]
    },
    {
      title: "Лекарственные препараты, удлиняющие интервал QTc",
      items: [
        {
          text: "Совместное применение лекарственных препаратов, удлиняющих интервал QTc (например, антиаритмических средств, фторхинолонов, антагонистов 5-HT3-рецепторов, противогрибковых средств группы триазолов), может повышать риск удлинения интервала QTc, такого применения следует по возможности избегать во время лечения препаратом ТИБСОВО®."
        },
        {
          text: "Необходимо соблюдать осторожность при проведении лечения и тщательно контролировать параметры ЭКГ на предмет удлинения интервала QTc в отсутствие подходящего альтернативного лечения."
        }
      ]
    },
    {
      title: "Влияние ТИБСОВО® на другие лекарственные препараты",
      items: [
        {
          text: "Ивосидениб индуцирует CYP3A4, CYP2B6, CYP2C8, CYP2C9 и может индуцировать CYP2C19. Следовательно, он способен снизить системную экспозицию субстратов этих ферментов."
        },
        {
          text: "При невозможности избежать применения таких лекарственных препаратов у пациентов следует контролировать утрату эффективности субстратов."
        },
        {
          text: "К субстратам CYP3A4 с узким терапевтическим диапазоном относятся: алфентанил, циклоспорин, эверолимус, фентанил, пимозид, хинидин, сиролимус, такролимус."
        },
        {
          text: "К субстратам CYP2B6 с узким терапевтическим диапазоном относятся: циклофосфамид, ифосфамид, метадон."
        },
        {
          text: "К субстратам CYP2C8 с узким терапевтическим диапазоном относятся: паклитаксел, пиоглитазон, репаглинид."
        },
        {
          text: "К субстратам CYP2C9 с узким терапевтическим диапазоном относятся: фенитоин, варфарин."
        },
        {
          text: "К субстратам CYP2C19 относится: омепразол."
        },
        {
          text: "Итраконазол или кетоконазол не следует совместно применять с ивосиденибом из-за ожидаемого снижения противогрибковой эффективности этих препаратов."
        }
      ]
    }
  ]

  return (
    <section 
      className="w-full flex flex-col items-stretch justify-start bg-white pb-[100px] md:pb-[120px]"
    >
    
        {/* Заголовок секции - отдельный блок */}
        <div className="w-full">
          <div className="w-full max-w-[1243px] flex flex-col items-stretch justify-start pl-0">
            <h2 
              className="text-[#151518] text-[32px] font-semibold leading-[35px] tracking-[-0.96px]"
            >
              Взаимодействие с другими лекарственными препаратами и другие виды взаимодействия
            </h2>
          </div>
        </div>

        {/* Главный контейнер */}
        <div className="w-full max-w-[1360px] mx-auto flex flex-col items-stretch justify-start">
        {/* Внутренний контейнер с контентом */}
        <div 
          className="w-full flex flex-col items-start justify-start pr-5 md:pr-10 text-[32px] text-[#151518] font-semibold tracking-[-0.96px] leading-[35px] pl-0"
        >
          {/* Блок со списком секций */}
          <div 
            className="w-full max-w-[1171px] flex flex-col items-stretch justify-start mt-16"
          >
            {sections.map((section, sectionIndex) => (
              <div 
                key={sectionIndex}
                className={`relative w-full flex items-start justify-start overflow-visible md:flex-wrap gap-6 ${
                  sectionIndex > 0 ? 'mt-12' : ''
                }`}
              >
                {/* Контейнер иконки */}
                <IconSectionHeader
                  color="#87A9E2"
                  gradientOpacity={0.8}
                />

                {/* Контент секции */}
                <div 
                  className="flex-1 min-w-0 flex flex-col items-stretch justify-start relative z-10 min-w-[240px]"
                >
                    {/* Заголовок секции */}
                    <h3 
                      className="text-[#151518] text-[24px] font-semibold leading-[1.2] tracking-[-0.48px]"
                    >
                      {section.title}
                    </h3>

                    {/* Список элементов */}
                    <div className="mt-6 w-full flex flex-col items-stretch justify-start">
                      {section.items.map((item, itemIndex) => (
                        <div 
                          key={itemIndex}
                          className={`relative w-full flex items-start justify-start gap-3 ${
                            itemIndex > 0 ? 'mt-5' : ''
                          }`}
                        >
                          {/* Буллет-точка */}
                          <div 
                            className="flex items-center justify-center flex-shrink-0 w-7 pl-1.5 pr-1.5 pt-2 pb-2"
                          >
                            <div 
                              className="rounded-full flex-shrink-0 w-3 h-3 bg-[#87A9E2]"
                            />
                          </div>

                          {/* Текст элемента */}
                          <p 
                            className="flex-1 min-w-0 text-[#151518] text-xl font-normal leading-[28px]"
                            dangerouslySetInnerHTML={{ __html: item.text }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
        
            ))}
          </div>
        </div>
        </div>
    
    </section>
  )
}

export default DrugInteractions

