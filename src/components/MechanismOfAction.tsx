import Scheme from "./Scheme";

const MechanismOfAction = () => {
  return (
    <div className="w-full py-20 px-4 md:px-5 md:pb-24">
      <div className="mx-auto w-full max-w-[1360px] rounded-[20px] bg-[#E74C39] py-6 md:py-16">
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
                Мутации IDH1 диагностируются примерно в 10–20% случаев
                внутрипеченочной хронической кавернозной ангиопатии (ХКА):
              </p>
            </div>

            {/* Список пунктов */}
            <div className="flex flex-col gap-10 mt-12 w-full">
              {/* Пункт 1 */}
              <div className="flex items-center gap-6">
                <div className="w-[72px] h-[72px] rounded-full bg-white shadow-[0_0_20px_0_rgba(231,76,57,0.08)] flex-shrink-0 flex items-center justify-center">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Молекула/клетка */}
                    <circle
                      cx="20"
                      cy="20"
                      r="8"
                      stroke="#E74C39"
                      strokeWidth="2"
                      fill="none"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="5"
                      stroke="#E74C39"
                      strokeWidth="2"
                      fill="none"
                    />
                    <circle
                      cx="28"
                      cy="12"
                      r="5"
                      stroke="#E74C39"
                      strokeWidth="2"
                      fill="none"
                    />
                    <circle
                      cx="12"
                      cy="28"
                      r="5"
                      stroke="#E74C39"
                      strokeWidth="2"
                      fill="none"
                    />
                    <circle
                      cx="28"
                      cy="28"
                      r="5"
                      stroke="#E74C39"
                      strokeWidth="2"
                      fill="none"
                    />
                    <line
                      x1="17"
                      y1="17"
                      x2="15"
                      y2="15"
                      stroke="#E74C39"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <line
                      x1="23"
                      y1="17"
                      x2="25"
                      y2="15"
                      stroke="#E74C39"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <line
                      x1="17"
                      y1="23"
                      x2="15"
                      y2="25"
                      stroke="#E74C39"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <line
                      x1="23"
                      y1="23"
                      x2="25"
                      y2="25"
                      stroke="#E74C39"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <p className="text-white text-xl font-normal leading-[28px] flex-1">
                  mIDH1 способствует онкогенезу, катализируя продукцию 2-ГГ, что
                  приводит к нарушению эпигенетической регуляции и клеточного
                  метаболизма.
                </p>
              </div>

              {/* Пункт 2 */}
              <div className="flex items-center gap-6">
                <div className="w-[72px] h-[72px] rounded-full bg-white shadow-[0_0_20px_0_rgba(231,76,57,0.08)] flex-shrink-0 flex items-center justify-center">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Диагностический тест */}
                    <rect
                      x="8"
                      y="10"
                      width="24"
                      height="20"
                      rx="2"
                      stroke="#E74C39"
                      strokeWidth="2"
                      fill="none"
                    />
                    <circle
                      cx="20"
                      cy="18"
                      r="4"
                      stroke="#E74C39"
                      strokeWidth="2"
                      fill="none"
                    />
                    <path
                      d="M16 18L18.5 20.5L24 15"
                      stroke="#E74C39"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <line
                      x1="12"
                      y1="26"
                      x2="28"
                      y2="26"
                      stroke="#E74C39"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <p className="text-white text-xl font-normal leading-[28px] flex-1">
                  Перед началом приема препарата ТИБСОВО
                  <span className="text-xl">®</span> требуется подтвердить
                  наличие у пациентов мутации в гене IDH1 R132 с использованием
                  подходящего диагностического теста.
                </p>
              </div>

              {/* Пункт 3 */}
              <div className="flex items-center gap-6">
                <div className="w-[72px] h-[72px] rounded-full bg-white shadow-[0_0_20px_0_rgba(231,76,57,0.08)] flex-shrink-0 flex items-center justify-center">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Ингибитор/таблетка */}
                    <rect
                      x="10"
                      y="14"
                      width="20"
                      height="12"
                      rx="6"
                      stroke="#E74C39"
                      strokeWidth="2"
                      fill="none"
                    />
                    <line
                      x1="20"
                      y1="14"
                      x2="20"
                      y2="26"
                      stroke="#E74C39"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <circle cx="20" cy="20" r="3" fill="#E74C39" />
                    <path
                      d="M8 20L10 20M30 20L32 20"
                      stroke="#E74C39"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <p className="text-white text-xl font-normal leading-[28px] flex-1">
                  ТИБСОВО<span className="text-xl">®</span> — мощный
                  низкомолекулярный ингибитор мутантного фермента IDH1,
                  являющийся первым представителем своего класса и
                  целенаправленно воздействующий на все известные мутантные
                  варианты IDH1
                </p>
              </div>
            </div>
          </div>
          <Scheme />
        </div>
      </div>
    </div>
  );
};

export default MechanismOfAction;
