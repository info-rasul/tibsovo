import icon1 from "../seventh/icons/1.svg";
import icon2 from "../seventh/icons/2.svg";
import icon3 from "../seventh/icons/3.svg";
import icon4 from "../seventh/icons/4.svg";
import rectangle13Icon from "../seventh/icons/Rectangle 13.svg";
import IconListItem from "./IconListItem";

function PrecautionsAndContraindications() {
  const precautions = [
    {
      text: "Перед началом лечения необходимо провести электрокардиографическое исследование (ЭКГ). ",
      boldText:
        "Продолжительность интервала QT, скорректированный \n по частоте сердечных сокращений (QTc), должен составлять менее 450 мс.",
      icon: icon1,
      },
    {
      text: "По возможности следует избегать сочетанного применения лекарственных препаратов, удлиняющих интервал QTc, или умеренных и сильных ингибиторов CYP3A4.",
      icon: icon2,
    },
    {
      text: "Общий и биохимический анализы крови следует выполнять перед началом \n терапии препаратом ТИБСОВО®, по меньшей мере, один раз в неделю в течение первого месяца лечения.",
      lineBreak:
        "Общий и биохимический анализы крови следует выполнять перед началом \n терапии препаратом ТИБСОВО®, по меньшей мере, один раз в неделю \n в течение первого месяца лечения.",
      icon: icon3,
    },
    {
      text: "Женщины, способные к деторождению, должны пройти тест на беременность перед началом лечения препаратом ТИБСОВО® и избегать возникновения беременности во время терапии.",
      lineBreak:
        "Женщины, способные к деторождению, должны пройти тест на беременность перед началом лечения препаратом ТИБСОВО® и избегать возникновения беременности \n во время терапии.",
      icon: icon4,
    },
  ];

  const contraindications = [
    {
      text: "Гиперчувствительность к ивосиденибу или к любому из вспомогательных веществ.",
      lineBreak:
        "Гиперчувствительность к ивосиденибу \n или к любому из вспомогательных веществ.",
      icon: rectangle13Icon,
    },
    {
      text: "Совместное применение сильных индукторов CYP3A4 или дабигатрана.",
      lineBreak:
        "Совместное применение сильных \n индукторов CYP3A4 или дабигатрана.",
      icon: rectangle13Icon,
    },
    {
      text: "Врожденный синдром удлиненного интервала QT.",
      lineBreak: "Врожденный синдром \n удлиненного интервала QT.",
      icon: rectangle13Icon,
    },
    {
      text: "Семейный анамнез внезапной смерти или полиморфной желудочковой тахикардии.",
      lineBreak:
        "Семейный анамнез внезапной смерти \n или полиморфной желудочковой тахикардии.",
      icon: rectangle13Icon,
    },
    {
      text: "Продолжительность интервала QT/QTc > 500 мс, независимо от метода расчета корригированного интервала.",
      lineBreak:
        "Продолжительность интервала QT/QTc > 500 мс, \n независимо от метода расчета корригированного интервала.",
      icon: rectangle13Icon,
    },
  ];

  return (
    <section
      className="w-full py-20 px-4 md:px-5 md:pb-24"
      style={{
        fontFamily: "Geist, -apple-system, Roboto, Helvetica, sans-serif",
      }}
    >
      {/* Основной контентный блок */}
      <div
        className="mx-auto w-full max-w-[1360px] rounded-[20px] overflow-hidden"
        style={{
          backgroundColor: "rgba(224, 219, 244, 0.4)",
        }}
      >
        <div className="p-6 md:p-16 flex flex-col gap-12">
          {/* БЛОК 1: ГЛАВНЫЙ ЗАГОЛОВОК */}
          <div
            className="w-full flex flex-col items-stretch justify-start"
          >
            <h2
              className="w-full text-left"
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
          <div className="w-full flex flex-col items-stretch justify-start">
            {/* Заголовок раздела */}
            <div
              className="w-full flex items-center justify-start"
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
            <div className="mt-10 md:mt-12 w-full flex flex-col items-stretch justify-start">
              {precautions.map((item, index) => (
                <IconListItem
                  key={index}
                  icon={item.icon}
                  text={item.text}
                  lineBreak={item.lineBreak}
                  boldText={item.boldText}
                  color="#6A19A4"
                  gradientOpacity={1}
                  className={index > 0 ? "mt-10 md:mt-12" : ""}
                />
              ))}
            </div>
          </div>

          {/* БЛОК 3: ПРОТИВОПОКАЗАНИЯ */}
          <div className="w-full flex flex-col items-stretch justify-start">
            {/* Заголовок раздела */}
            <div
              className="w-full flex items-center justify-start"
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
            <div className="mt-10 md:mt-12 w-full flex flex-col items-stretch justify-start">
              {contraindications.map((item, index) => (
                <IconListItem
                  key={index}
                  icon={item.icon}
                  text={item.text}
                  lineBreak={item.lineBreak}
                  color="#E74C39"
                  gradientOpacity={0.8}
                  className={index > 0 ? "mt-10 md:mt-12" : ""}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PrecautionsAndContraindications;
