import tibsovo1 from "../assets/icons/1.svg";
import tibsovo2 from "../assets/icons/2.svg";
import tibsovo3 from "../assets/icons/3.svg";
import tibsovo4 from "../assets/icons/4.svg";
import tibsovo5 from "../assets/icons/5.svg";

const ProductInstruct = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row gap-2">
        {/* Блок 1 - Фиолетовый фон (высота 488px) */}
        <div className="rounded-[20px] bg-[#61279E] p-4 min-w-[240px] md:w-[334px] h-[488px] flex flex-col">
          <div className="w-[72px] h-[72px] rounded-2xl bg-white shadow-[0_0_20px_0_rgba(97,39,158,0.08)] mb-auto flex items-center justify-center">
            <img src={tibsovo1} alt="Доза препарата" />
          </div>
          <p className="text-white text-base font-normal leading-[22px] mt-auto px-4 py-3">
            Рекомендуемая доза препарата ТИБСОВО
            <span className="text-base">®</span>: 500 мг ТИБСОВО
            <span className="text-base">®</span> один раз в сутки
          </p>
        </div>

        {/* Остальные 4 блока в два ряда */}
        <div className="flex-1 flex flex-col gap-2">
          {/* Первый ряд - 2 блока */}
          <div className="flex flex-col md:flex-row gap-2 flex-1">
            {/* Блок 2 - Светлый фон */}
            <div className="rounded-[20px] bg-[rgba(224,219,244,0.4)] p-4 min-w-[240px] flex-1 flex flex-col min-h-[240px]">
              <div className="w-[72px] h-[72px] rounded-2xl bg-white shadow-[0_0_20px_0_rgba(97,39,158,0.08)] mb-auto flex items-center justify-center">
                <img src={tibsovo2} alt="Доза препарата" />
              </div>
              <p className="text-[#151518] text-base font-normal leading-[22px] mt-auto px-4 py-3">
              Таблетки принимают один раз в сутки,<br /> каждый раз примерно в одно и то же время. 
              </p>
            </div>

            {/* Блок 3 - Светлый фон */}
            <div className="rounded-[20px] bg-[rgba(224,219,244,0.4)] p-4 min-w-[240px] flex-1 flex flex-col min-h-[240px] relative z-0">
              <div className="w-[72px] h-[72px] rounded-2xl bg-white shadow-[0_0_20px_0_rgba(97,39,158,0.08)] mb-auto flex items-center justify-center">
                <img src={tibsovo3} alt="Доза препарата" />
              </div>
              <p className="text-[#151518] text-base font-normal leading-[22px] mt-auto px-4 py-3">
              Таблетки следует проглатывать <br /> целиком, запивая водой.
            
              </p>
            </div>
          </div>

          {/* Второй ряд - 2 блока */}
          <div className="flex flex-col md:flex-row gap-2 flex-1">
            {/* Блок 4 - Светлый фон */}
            <div className="rounded-[20px] bg-[rgba(224,219,244,0.4)] p-4 min-w-[240px] flex-1 flex flex-col min-h-[240px]">
              <div className="w-[72px] h-[72px] rounded-2xl bg-white shadow-[0_0_20px_0_rgba(97,39,158,0.08)] mb-auto flex items-center justify-center">
                <img src={tibsovo4} alt="Доза препарата" />
              </div>
              <p className="text-[#151518] text-base font-normal leading-[22px] mt-auto px-4 py-3">
              Пациенты должны воздерживаться от приема пищи в течение 2 часов
                до и 1 часа после приема ТИБСОВО
                <span className="text-base">®</span>.
              </p>
            </div>

            {/* Блок 5 - Светлый фон */}
            <div className="rounded-[20px] bg-[rgba(224,219,244,0.4)] p-4 min-w-[240px] flex-1 flex flex-col min-h-[240px]">
              <div className="w-[72px] h-[72px] rounded-2xl bg-white shadow-[0_0_20px_0_rgba(97,39,158,0.08)] mb-auto flex items-center justify-center">
                <img src={tibsovo5} alt="Доза препарата" />
              </div>
              <p className="text-[#151518] text-base font-normal leading-[22px] mt-auto px-4 py-3">
                Пациенты должны отказаться от употребления грейпфрута и
                грейпфрутового сока во время лечения.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInstruct;
