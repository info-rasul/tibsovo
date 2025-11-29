import stomachIcon from "../sixth/icons/1.svg";

function PrecautionsAndContraindications() {
  const precautions = [
    {
      text: "Перед началом лечения необходимо провести электрокардиографическое исследование (ЭКГ). ",
      boldText:
        "Продолжительность интервала QT, скорректированный \n по частоте сердечных сокращений (QTc), должен составлять менее 450 мс.",
      icon: stomachIcon,
      },
    {
      text: "По возможности следует избегать сочетанного применения лекарственных препаратов, удлиняющих интервал QTc, или умеренных и сильных ингибиторов CYP3A4.",
      icon: stomachIcon,
    },
    {
      text: "Общий и биохимический анализы крови следует выполнять перед началом \n терапии препаратом ТИБСОВО®, по меньшей мере, один раз в неделю в течение первого месяца лечения.",
      lineBreak:
        "Общий и биохимический анализы крови следует выполнять перед началом \n терапии препаратом ТИБСОВО®, по меньшей мере, один раз в неделю \n в течение первого месяца лечения.",
      icon: stomachIcon,
    },
    {
      text: "Женщины, способные к деторождению, должны пройти тест на беременность перед началом лечения препаратом ТИБСОВО® и избегать возникновения беременности во время терапии.",
      lineBreak:
        "Женщины, способные к деторождению, должны пройти тест на беременность перед началом лечения препаратом ТИБСОВО® и избегать возникновения беременности \n во время терапии.",
      icon: stomachIcon,
    },
  ];

  const contraindications = [
    {
      text: "Гиперчувствительность к ивосиденибу или к любому из вспомогательных веществ.",
      lineBreak:
        "Гиперчувствительность к ивосиденибу \n или к любому из вспомогательных веществ.",
      icon: stomachIcon,
    },
    {
      text: "Совместное применение сильных индукторов CYP3A4 или дабигатрана.",
      lineBreak:
        "Совместное применение сильных \n индукторов CYP3A4 или дабигатрана.",
      icon: stomachIcon,
    },
    {
      text: "Врожденный синдром удлиненного интервала QT.",
      lineBreak: "Врожденный синдром \n удлиненного интервала QT.",
      icon: stomachIcon,
    },
    {
      text: "Семейный анамнез внезапной смерти или полиморфной желудочковой тахикардии.",
      lineBreak:
        "Семейный анамнез внезапной смерти \n или полиморфной желудочковой тахикардии.",
      icon: stomachIcon,
    },
    {
      text: "Продолжительность интервала QT/QTc > 500 мс, независимо от метода расчета корригированного интервала.",
      lineBreak:
        "Продолжительность интервала QT/QTc > 500 мс, \n независимо от метода расчета корригированного интервала.",
      icon: stomachIcon,
    },
  ];

  return (
    <section
      className="w-full flex flex-col items-stretch justify-start"
      style={{
        fontFamily: "Geist, -apple-system, Roboto, Helvetica, sans-serif",
      }}
    >
      {/* Внешний контейнер с отступами */}
      <div
        className="w-full pl-5 pr-5 md:pl-10 md:pr-10 flex items-center justify-start"
        style={{ gap: "8px" }}
      >
        {/* Основной контентный блок */}
        <div
          className="w-full min-w-[240px] flex flex-col items-stretch justify-start rounded-[20px] overflow-hidden flex-1"
          style={{
            backgroundColor: "rgba(224, 219, 244, 0.4)",
            paddingTop: "64px",
            paddingBottom: "64px",
          }}
        >
          {/* БЛОК 1: ГЛАВНЫЙ ЗАГОЛОВОК */}
          <div
            className="w-full max-w-[1082px] px-5 md:px-16 flex items-center justify-start"
            style={{ gap: "8px" }}
          >
            <h2
              className="w-full max-w-[954px] text-left"
              style={{
                fontSize: "32px",
                fontWeight: 600,
                letterSpacing: "-0.96px",
                lineHeight: "35px",
                color: "#151518",
                fontFamily:
                  "Geist, -apple-system, Roboto, Helvetica, sans-serif",
              }}
              dangerouslySetInnerHTML={{
                __html:
                  "Перед началом приема препарата ТИБСОВО® требуется подтвердить наличие у пациентов мутации в гене IDH1 R132 <br />с использованием подходящего диагностического теста",
              }}
            />
          </div>

          {/* БЛОК 2: МЕРЫ ПРЕДОСТОРОЖНОСТИ */}
          <div className="mt-10 md:mt-16 w-full flex flex-col items-stretch justify-start">
            {/* Заголовок раздела */}
            <div
              className="w-full px-5 md:px-16 flex items-center justify-start"
              style={{ gap: "8px" }}
            >
              <h3
                className="flex-1 text-left"
                style={{
                  fontSize: "24px",
                  fontWeight: 600,
                  letterSpacing: "-0.48px",
                  lineHeight: "1.2",
                  color: "#151518",
                  fontFamily:
                    "Geist, -apple-system, Roboto, Helvetica, sans-serif",
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
                  className={`relative w-full flex items-center gap-6 justify-start overflow-visible ${
                    index > 0 ? "mt-10 md:mt-12" : ""
                  }`}
                >
                  {/* Единый блок: прямоугольник с кругом и текст */}
                  <div
                    className="relative flex items-center flex-1 min-w-0"
                    style={{ gap: "24px" }}
                  >
                    {/* Прямоугольник, растянутый влево с градиентом прозрачности */}
                    <div
                      className="absolute pointer-events-none"
                      style={{
                        left: "calc((100vw - 1360px) / 2 * -1 - 40px)",
                        right: "calc(100% - 72px)",
                        top: "50%",
                        transform: "translateY(-50%)",
                        height: "72px",
                        background:
                          "linear-gradient(to right, rgba(135, 169, 226, 0) 0%, rgba(135, 169, 226, 0.8) 100%)",
                        borderTopRightRadius: "36px",
                        borderBottomRightRadius: "36px",
                      }}
                    />

                    {/* Голубой круглый блок */}
                    <div
                      className="relative w-[72px] h-[72px] rounded-full flex items-center justify-center flex-shrink-0 z-10"
                      style={{
                        backgroundColor: "#6A19A4",
                        boxShadow: "0 0 20px 0 rgba(97, 39, 158, 0.08)",
                      }}
                    >
                      <img
                        src={item.icon}
                        alt=""
                        className="w-10 h-10"
                        style={{
                          objectFit: "contain",
                        }}
                      />
                    </div>

                    {/* Текст элемента списка */}
                    <p
                      className="text-[#151518] text-xl font-normal leading-[28px] flex-1 min-w-0 relative z-10 whitespace-pre-line md:whitespace-pre-line"
                      style={{ wordBreak: "break-word" }}
                    >
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* БЛОК 3: ПРОТИВОПОКАЗАНИЯ */}
          <div className="mt-10 md:mt-16 w-full flex flex-col items-stretch justify-start">
            {/* Заголовок раздела */}
            <div
              className="w-full px-5 md:px-16 flex items-center justify-start"
              style={{ gap: "8px" }}
            >
              <h3
                className="flex-1 text-left"
                style={{
                  fontSize: "24px",
                  fontWeight: 600,
                  letterSpacing: "-0.48px",
                  lineHeight: "1.2",
                  color: "#151518",
                  fontFamily:
                    "Geist, -apple-system, Roboto, Helvetica, sans-serif",
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
                  className={`relative w-full flex items-center gap-6 justify-start overflow-visible ${
                    index > 0 ? "mt-10 md:mt-12" : ""
                  }`}
                >
                  {/* Единый блок: прямоугольник с кругом и текст */}
                  <div
                    className="relative flex items-center flex-1 min-w-0"
                    style={{ gap: "24px" }}
                  >
                    {/* Прямоугольник, растянутый влево с градиентом прозрачности */}
                    <div
                      className="absolute pointer-events-none"
                      style={{
                        left: "calc((100vw - 1360px) / 2 * -1 - 40px)",
                        right: "calc(100% - 72px)",
                        top: "50%",
                        transform: "translateY(-50%)",
                        height: "72px",
                        background:
                          "linear-gradient(to right, rgba(135, 169, 226, 0) 0%, rgba(135, 169, 226, 0.8) 100%)",
                        borderTopRightRadius: "36px",
                        borderBottomRightRadius: "36px",
                      }}
                    />

                    {/* Голубой круглый блок */}
                    <div
                      className="relative w-[72px] h-[72px] rounded-full flex items-center justify-center flex-shrink-0 z-10"
                      style={{
                        backgroundColor: "##F60808",
                        boxShadow: "0 0 20px 0 rgba(97, 39, 158, 0.08)",
                      }}
                    >
                      <img
                        src={item.icon}
                        alt=""
                        className="w-10 h-10"
                        style={{
                          objectFit: "contain",
                        }}
                      />
                    </div>

                    {/* Текст элемента списка */}
                    <p
                      className="text-[#151518] text-xl font-normal leading-[28px] flex-1 min-w-0 relative z-10 whitespace-pre-line md:whitespace-pre-line"
                      style={{ wordBreak: "break-word" }}
                    >
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PrecautionsAndContraindications;
