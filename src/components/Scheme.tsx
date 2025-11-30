import m1 from "../assets/ingib/1.svg";
import m2 from "../assets/ingib/2.svg";
import m3 from "../assets/ingib/3.svg";
import m4 from "../assets/ingib/4.svg";
import m5 from "../assets/ingib/5.svg";
import m6 from "../assets/ingib/6.svg";
import m7 from "../assets/ingib/7.svg";
import m8 from "../assets/ingib/8.svg";
import arrows from "../assets/ingib/arrows.svg";

const Scheme = () => {
  return (
    <div className="w-full bg-white rounded-[16px] overflow-hidden">
      {/* Фоновая область */}
      <div className="bg-[rgba(97,39,158,0.15)] px-5 py-8 md:px-5 md:py-12 lg:px-20 lg:py-[68px]">
        <div className="flex flex-col">
          {/* Заголовок схемы */}
          <h3 className="text-[#61279E] text-2xl font-semibold leading-[120%] tracking-[-0.48px]">
            Селективное ингибирование с помощью ТИБСОВО
            <span className="text-2xl">®</span>
          </h3>

          {/* Схема: 4 блока сверху и 4 блока снизу */}
          <div className="flex flex-col gap-6 mt-6">
            {/* Верхний ряд - 4 блока */}
            <div className="flex flex-col lg:flex-row items-end gap-6 lg:gap-4">
              {/* Блок 1 - mIDH1 (фиолетовый) */}
              <div className="flex flex-col w-full lg:flex-1 gap-3">
                <p className="text-[#151518] text-base font-normal leading-[22px]  pl-4">
                  Таргетное <br /> действие на mIDH1
                </p>
                <div className="flex items-center justify-center">
                  <img src={m1} alt="mIDH1" className="w-[260px] h-[82px]" />
                </div>
              </div>

              {/* Блок 2 - 2-ГГ (фиолетовый) */}
              <div className="flex flex-col w-full lg:flex-1 gap-3">
                <p className="text-[#151518] text-base font-normal leading-[22px]  pl-4">
                  Тибсово ингибирует mIDH1,
                  <br /> блокирует выработку 2ГГ
                </p>
                <div className="flex items-center justify-center">
                  <img src={m2} alt="2-ГГ" className="w-[260px] h-[82px]" />
                </div>
              </div>

              {/* Блок 3 - α-КГ (фиолетовый) */}
              <div className="flex flex-col w-full lg:flex-1 gap-3">
                <p className="text-[#151518] text-base font-normal leading-[22px]  pl-4">
                  Восстанавливаются механизмы <br /> клеточной дифференцировки
                </p>
                <div className="flex items-center justify-center">
                  <img src={m3} alt="КГ" className="w-[260px] h-[82px]" />
                </div>
              </div>

              {/* Блок 4 - mIDH1 (фиолетовый) */}
              <div className="flex flex-col w-full lg:flex-1 gap-3">
                <p className="text-[#151518] text-base font-normal leading-[22px]  pl-4">
                  Контроль
                  <br /> заболевания
                </p>
                <div className="flex items-center justify-center">
                  <img src={m4} alt="mIDH1" className="w-[260px] h-[82px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Стрелки между блоками */}
      <div className="relative flex items-center w-full px-5 md:px-5 lg:px-20">
        {/* Структура точно как у блоков для правильного выравнивания */}
        <div className="flex flex-col lg:flex-row w-full gap-6 lg:gap-4">
          <div className="flex-1"></div>
          <div className="flex-1"></div>
          <div className="flex-1"></div>
          <div className="flex-1"></div>
        </div>
        {/* Стрелки абсолютно позиционированы от СЕРЕДИНЫ первого до СЕРЕДИНЫ последнего блока */}
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 px-5 md:px-5 lg:px-20">
          {/* Стрелки позиционируются от середины первого блока до середины последнего */}
          <div className="absolute left-[15%] right-[15%] flex items-center h-full">
            <img src={arrows} alt="arrows" className="w-full" />
          </div>
        </div>
      </div>

      <div className="bg-[rgba(135,169,226,0.15)] px-5 py-8 md:px-5 md:py-12 lg:px-20 lg:py-[68px]">
        <div className="flex flex-col">
          <div className="flex flex-col gap-6">
            {/* Нижний ряд - 4 блока */}
            <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-4">
              {/* Блок 5 - α-КГ (голубой) */}
              <div className="flex flex-col w-full lg:flex-1 gap-3">
                <div className="flex items-center justify-center">
                  <img src={m5} alt="α-КГ" className="w-[260px] h-[82px]" />
                </div>
                <p className="text-[#151518] text-base font-normal leading-[22px]  pl-4">
                  Мутация с приобретением <br /> функции
                </p>
              </div>

              {/* Блок 6 - 2-ГГ (голубой) */}
              <div className="flex flex-col w-full lg:flex-1 gap-3">
                <div className="flex items-center justify-center">
                  <img src={m6} alt="2-ГГ" className="w-[260px] h-[82px]" />
                </div>
                <p className="text-[#151518] text-base font-normal leading-[22px]  pl-4">
                  Патологическая конверсия <br /> α-КГ в 2-ГГ
                </p>
              </div>

              {/* Блок 7 - Итоговый результат (голубой) */}
              <div className="flex flex-col w-full lg:flex-1 gap-3">
                <div className="flex items-center justify-center">
                  <img src={m7} alt="2-ГГ" className="w-[260px] h-[82px]" />
                </div>
                <p className="text-[#151518] text-base font-normal leading-[22px]  pl-4">
                  Накапливается онкометаболит, что приводит к эпигенетической
                  дисрегуляции
                </p>
              </div>

              {/* Блок 8 - Четвертый блок (голубой) */}
              <div className="flex flex-col w-full lg:flex-1 gap-3">
                <div className="flex items-center justify-center">
                  <img src={m8} alt="2-ГГ" className="w-[260px] h-[82px]" />
                </div>
                <p className="text-[#151518] text-base font-normal leading-[22px]  pl-4 ">
                  Развитие опухоли: избыточная пролиферация и нарушение
                  дифференцировки
                </p>
              </div>
            </div>

            <div className="flex justify-start mt-6">
              <h4 className="text-[#87A9E2] text-2xl font-semibold leading-[120%] tracking-[-0.48px]">
                Паталогическое состояние
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scheme;
