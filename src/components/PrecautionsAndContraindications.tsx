function PrecautionsAndContraindications() {
  const precautions = [
    {
      text: "Перед началом лечения необходимо провести электрокардиографическое исследование (ЭКГ). ",
      boldText: "Продолжительность интервала QT, скорректированный <br />по частоте сердечных сокращений (QTc), должен составлять менее 450 мс."
    },
    {
      text: "По возможности следует избегать сочетанного применения лекарственных препаратов, удлиняющих интервал QTc, или умеренных и сильных ингибиторов CYP3A4."
    },
    {
      text: "Общий и биохимический анализы крови следует выполнять перед началом <br />терапии препаратом ТИБСОВО®, по меньшей мере, один раз в неделю в течение первого месяца лечения.",
      lineBreak: "Общий и биохимический анализы крови следует выполнять перед началом <br />терапии препаратом ТИБСОВО®, по меньшей мере, один раз в неделю <br />в течение первого месяца лечения."
    },
    {
      text: "Женщины, способные к деторождению, должны пройти тест на беременность перед началом лечения препаратом ТИБСОВО® и избегать возникновения беременности во время терапии.",
      lineBreak: "Женщины, способные к деторождению, должны пройти тест на беременность перед началом лечения препаратом ТИБСОВО® и избегать возникновения беременности <br />во время терапии."
    }
  ]

  const contraindications = [
    {
      text: "Гиперчувствительность к ивосиденибу или к любому из вспомогательных веществ.",
      lineBreak: "Гиперчувствительность к ивосиденибу <br />или к любому из вспомогательных веществ."
    },
    {
      text: "Совместное применение сильных индукторов CYP3A4 или дабигатрана.",
      lineBreak: "Совместное применение сильных <br />индукторов CYP3A4 или дабигатрана."
    },
    {
      text: "Врожденный синдром удлиненного интервала QT.",
      lineBreak: "Врожденный синдром <br />удлиненного интервала QT."
    },
    {
      text: "Семейный анамнез внезапной смерти или полиморфной желудочковой тахикардии.",
      lineBreak: "Семейный анамнез внезапной смерти <br />или полиморфной желудочковой тахикардии."
    },
    {
      text: "Продолжительность интервала QT/QTc > 500 мс, независимо от метода расчета корригированного интервала.",
      lineBreak: "Продолжительность интервала QT/QTc > 500 мс, <br />независимо от метода расчета корригированного интервала."
    }
  ]

  return (
    <section 
      className="w-full flex flex-col items-stretch justify-start"
      style={{ fontFamily: 'Geist, -apple-system, Roboto, Helvetica, sans-serif' }}
    >
      {/* Внешний контейнер с отступами */}
      <div className="w-full pl-5 pr-5 md:pl-10 md:pr-10 flex items-center justify-start" style={{ gap: '8px' }}>
        {/* Основной контентный блок */}
        <div 
          className="w-full min-w-[240px] flex flex-col items-stretch justify-start rounded-[20px] overflow-hidden flex-1"
          style={{
            backgroundColor: 'rgba(224, 219, 244, 0.4)',
            paddingTop: '64px',
            paddingBottom: '64px'
          }}
        >
          {/* БЛОК 1: ГЛАВНЫЙ ЗАГОЛОВОК */}
          <div 
            className="w-full max-w-[1082px] px-5 md:px-16 flex items-center justify-start"
            style={{ gap: '8px' }}
          >
            <h2 
              className="w-full max-w-[954px] text-left"
              style={{
                fontSize: '32px',
                fontWeight: 600,
                letterSpacing: '-0.96px',
                lineHeight: '35px',
                color: '#151518',
                fontFamily: 'Geist, -apple-system, Roboto, Helvetica, sans-serif'
              }}
              dangerouslySetInnerHTML={{ __html: "Перед началом приема препарата ТИБСОВО® требуется подтвердить наличие у пациентов мутации в гене IDH1 R132 <br />с использованием подходящего диагностического теста" }}
            />
          </div>

          {/* БЛОК 2: МЕРЫ ПРЕДОСТОРОЖНОСТИ */}
          <div className="mt-10 md:mt-16 w-full flex flex-col items-stretch justify-start">
            {/* Заголовок раздела */}
            <div className="w-full px-5 md:px-16 flex items-center justify-start" style={{ gap: '8px' }}>
              <h3 
                className="flex-1 text-left"
                style={{
                  fontSize: '24px',
                  fontWeight: 600,
                  letterSpacing: '-0.48px',
                  lineHeight: '1.2',
                  color: '#151518',
                  fontFamily: 'Geist, -apple-system, Roboto, Helvetica, sans-serif'
                }}
              >
                Меры предосторожности перед применением:
              </h3>
            </div>

            {/* Список пунктов мер предосторожности */}
            <div className="mt-10 md:mt-12 w-full max-w-[1058px] px-5 md:px-16 flex flex-col items-stretch justify-start">
              {precautions.map((item, index) => (
                <div 
                  key={index}
                  className={`relative w-full flex items-center justify-start overflow-visible ${
                    index > 0 ? 'mt-10 md:mt-12' : ''
                  }`}
                >
                  {/* Единый блок: прямоугольник с кругом и текст */}
                  <div className="relative flex items-center flex-1 min-w-0" style={{ gap: '24px' }}>
                    {/* Прямоугольник, растянутый влево с градиентом прозрачности (фиолетовый) */}
                    <div 
                      className="absolute pointer-events-none"
                      style={{ 
                        left: 'calc((100vw - 1360px) / 2 * -1 - 40px)',
                        right: 'calc(100% - 72px)',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        height: '72px',
                        background: 'linear-gradient(to right, rgba(97, 39, 158, 0) 0%, rgba(97, 39, 158, 0.8) 70%, rgba(97, 39, 158, 0.9) 100%)',
                        borderTopRightRadius: '36px',
                        borderBottomRightRadius: '36px'
                      }}
                    />
                    
                    {/* Фиолетовый круглый блок */}
                    <div 
                      className="relative w-[72px] h-[72px] rounded-full flex items-center justify-center flex-shrink-0 z-10"
                      style={{
                        backgroundColor: '#61279E',
                        boxShadow: '0 0 20px 0 rgba(97, 39, 158, 0.08)'
                      }}
                    />

                    {/* Текст */}
                    <p 
                      className="flex-1 min-w-0 relative z-10"
                      style={{
                        fontSize: '20px',
                        fontWeight: 400,
                        lineHeight: '28px',
                        color: '#151518',
                        fontFamily: 'Geist, -apple-system, Roboto, Helvetica, sans-serif'
                      }}
                      dangerouslySetInnerHTML={{ 
                        __html: item.lineBreak || (item.text + (item.boldText ? `<strong style="font-weight: 700;">${item.boldText}</strong>` : '')) 
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* БЛОК 3: ПРОТИВОПОКАЗАНИЯ */}
          <div className="mt-10 md:mt-16 w-full flex flex-col items-stretch justify-start">
            {/* Заголовок раздела */}
            <div className="w-full px-5 md:px-16 flex items-center justify-start" style={{ gap: '8px' }}>
              <h3 
                className="flex-1 text-left"
                style={{
                  fontSize: '24px',
                  fontWeight: 600,
                  letterSpacing: '-0.48px',
                  lineHeight: '1.2',
                  color: '#151518',
                  fontFamily: 'Geist, -apple-system, Roboto, Helvetica, sans-serif'
                }}
              >
                Противопоказания к применению препарата ТИБСОВО®:
              </h3>
            </div>

            {/* Список пунктов противопоказаний */}
            <div className="mt-10 md:mt-12 w-full max-w-[1058px] px-5 md:px-16 flex flex-col items-stretch justify-start">
              {contraindications.map((item, index) => (
                <div 
                  key={index}
                  className={`relative w-full flex items-center justify-start overflow-visible ${
                    index > 0 ? 'mt-10 md:mt-12' : ''
                  }`}
                >
                  {/* Единый блок: прямоугольник с кругом и текст */}
                  <div className="relative flex items-center flex-1 min-w-0" style={{ gap: '24px' }}>
                    {/* Прямоугольник, растянутый влево с градиентом прозрачности (красный) */}
                    <div 
                      className="absolute pointer-events-none"
                      style={{ 
                        left: 'calc((100vw - 1360px) / 2 * -1 - 40px)',
                        right: 'calc(100% - 72px)',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        height: '72px',
                        background: 'linear-gradient(to right, rgba(246, 8, 8, 0) 0%, rgba(246, 8, 8, 0.8) 70%, rgba(246, 8, 8, 0.9) 100%)',
                        borderTopRightRadius: '36px',
                        borderBottomRightRadius: '36px'
                      }}
                    />
                    
                    {/* Красный круглый блок с минусом */}
                    <div 
                      className="relative w-[72px] h-[72px] rounded-full flex items-center justify-center flex-shrink-0 z-10"
                      style={{
                        backgroundColor: 'rgba(246, 8, 8, 1)',
                        boxShadow: '0px 0px 20px rgba(97, 39, 158, 0.08)',
                        paddingLeft: '14px',
                        paddingRight: '14px'
                      }}
                    >
                      {/* Белая горизонтальная линия (минус) */}
                      <div 
                        className="h-[4px] flex-shrink-0"
                        style={{
                          width: '100%',
                          borderRadius: '16px',
                          backgroundColor: '#FFF'
                        }}
                      />
                    </div>

                    {/* Текст */}
                    <p 
                      className="flex-1 min-w-0 relative z-10"
                      style={{
                        fontSize: '20px',
                        fontWeight: 400,
                        lineHeight: '28px',
                        color: '#151518',
                        fontFamily: 'Geist, -apple-system, Roboto, Helvetica, sans-serif'
                      }}
                      dangerouslySetInnerHTML={{ __html: item.lineBreak || item.text }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PrecautionsAndContraindications

