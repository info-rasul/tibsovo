import Scheme from "./Scheme";
import r1 from '../assets/roles/1.svg'
import r2 from '../assets/roles/2.svg'
import r3 from '../assets/roles/3.svg'

const MechanismOfAction = () => {
  return (
    <div className="w-full py-20 px-4 md:px-5 md:pb-24">
      <div className="mx-auto w-full max-w-[1360px] rounded-[20px] bg-[#E74C39] py-6 md:py-16">
        <div className="flex flex-col gap-12 px-4">
          {/* Первый блок - Текст */}
          <div className="flex flex-col w-full px-8">
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
                Мутации IDH1 диагностируются примерно в 10–20% случаев <br />
                внутрипеченочной хронической кавернозной ангиопатии (ХКА):
              </p>
            </div>

            {/* Список пунктов */}
            <div className="flex flex-col gap-10 mt-12 w-full px-14">
              {/* Пункт 1 */}
              <div className="flex items-center gap-6">
                <div className="w-[72px] h-[72px] rounded-full bg-white shadow-[0_0_20px_0_rgba(231,76,57,0.08)] flex-shrink-0 flex items-center justify-center">
                  <img src={r1} alt="m1" className="w-[40px] h-[40px]" />
                </div>
                <p className="text-white text-xl font-normal leading-[28px] flex-1">
                  mIDH1 способствует онкогенезу, катализируя продукцию 2-ГГ, что
                  приводит <br /> к нарушению эпигенетической регуляции и клеточного
                  метаболизма.
                </p>
              </div>

              {/* Пункт 2 */}
              <div className="flex items-center gap-6">
                <div className="w-[72px] h-[72px] rounded-full bg-white shadow-[0_0_20px_0_rgba(231,76,57,0.08)] flex-shrink-0 flex items-center justify-center">
                <img src={r2} alt="m1" className="w-[40px] h-[40px]" />
                </div>
                <p className="text-white text-xl font-normal leading-[28px] flex-1">
                  Перед началом приема препарата ТИБСОВО
                  <span className="text-xl">®</span> требуется подтвердить
                  наличие <br /> у пациентов мутации в гене IDH1 R132 с использованием
                  подходящего <br /> диагностического теста.
                </p>
              </div>

              {/* Пункт 3 */}
              <div className="flex items-center gap-6">
                <div className="w-[72px] h-[72px] rounded-full bg-white shadow-[0_0_20px_0_rgba(231,76,57,0.08)] flex-shrink-0 flex items-center justify-center">
                <img src={r3} alt="m1" className="w-[40px] h-[40px]" />
                </div>
                <p className="text-white text-xl font-normal leading-[28px] flex-1">
                  ТИБСОВО<span className="text-xl">®</span> — мощный
                  низкомолекулярный ингибитор мутантного фермента IDH1,<br />
                  являющийся первым представителем своего класса и
                  целенаправленно <br /> воздействующий на все известные мутантные
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
