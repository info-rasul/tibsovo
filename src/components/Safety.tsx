import icon1 from "../sixth/icons/1.svg";
import icon2 from "../sixth/icons/2.svg";
import icon3 from "../sixth/icons/3.svg";
import IconListItem from "./IconListItem";

function Safety() {
  const listItems = [
    {
      text: "Наиболее частыми нежелательными реакциями были утомляемость (43 %), \nтошнота (42 %), боль в животе (35 %), диарея (35 %), снижение аппетита (24 %), \nасцит (23 %), рвота (23 %), анемия (19 %) и сыпь (15 %).",
      icon: icon3, // 3.svg - первый кружочек
    },
    {
      text: "Наиболее частыми серьезными нежелательными реакциями были \nасцит (2 %), гипербилирубинемия (2 %) и холестатическая желтуха (2 %).",
      icon: icon1, // 1.svg - второй кружочек
    },
    {
      text: "Частота прекращения применения ивосидениба из-за развития нежелательных \nреакций составила 2 %. Нежелательными реакциями, приводившими \nк прекращению лечения, были асцит (1 %) и гипербилирубинемия (1 %).",
      icon: icon2, // 2.svg - третий кружочек
    },
  ];

  return (
    <section className="relative w-full flex flex-col items-stretch justify-start bg-white py-12 md:pt-16 md:pb-8 overflow-hidden">
      {/* Главный контейнер */}
      <div className="w-full max-w-[1360px] mx-auto flex flex-col items-stretch justify-start">
        {/* Внутренний контейнер с контентом */}
        <div
          className="w-full flex flex-col items-stretch justify-start"
        >
          {/* Заголовок секции */}
          <h2 className="text-[#61279E] text-base font-semibold leading-[120%] tracking-[0.48px] uppercase">
            Безопасность
          </h2>

          {/* Блок с основным заголовком и подзаголовком */}
          <div className="mt-4 w-full max-w-[1243px] flex flex-col items-stretch justify-start">
            {/* Основной заголовок */}
            <h3 className="text-[#61279E] text-[28px] md:text-[40px] font-semibold leading-[44px] tracking-[-1.2px]">
              Терапия препаратом ТИБСОВО
              <span className="text-[28px] md:text-[40px]">®</span>{" "}
              характеризуется удовлетворительной переносимостью. <br />
              Профиль безопасности ТИБСОВО
              <span className="text-[28px] md:text-[40px]">®</span> хорошо
              изучен
            </h3>

            {/* Подзаголовок */}
            <p
              className="text-[#151518] text-xl font-normal leading-[28px] mt-6 whitespace-pre-line break-words"
            >
              {`Безопасность монотерапии ТИБСОВО® пациентов с местнораспространенной или метастатической 
холангиокарциномой с мутацией в гене IDH1 R132, ранее получавших лечение, как минимум, в рамках 
одной линии системной терапии:`}
            </p>
          </div>
        </div>

        {/* Блок со списком элементов */}
        <div className="relative mt-10 md:mt-12 md:ml-16 w-full mx-auto flex flex-col items-stretch justify-start overflow-visible">
          {listItems.map((item, index) => (
            <IconListItem
              key={index}
              icon={item.icon}
              text={item.text}
              color="#87A9E2"
              gradientOpacity={0.8}
              className={index > 0 ? "mt-10 md:mt-12" : ""}
              textClassName="md:whitespace-pre-line"
            />
          ))}
        </div>

        {/* Блок с кнопкой */}
        <div
          className="mt-10 md:mt-12 w-full flex flex-col items-start justify-start"
        >
          <button
            className="flex items-center justify-center rounded-lg px-5 md:px-8 py-4 gap-2 overflow-hidden bg-[#E74C39] hover:opacity-90 transition-opacity text-base text-white font-semibold leading-[1.4]"
          >
            <span className="text-white">
              Безопасность в исследовании ClarIDHy
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Safety;
