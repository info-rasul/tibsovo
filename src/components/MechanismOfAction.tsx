import Scheme from "./Scheme";
import r1 from '../assets/roles/1.svg'
import r2 from '../assets/roles/2.svg'
import r3 from '../assets/roles/3.svg'
import IconListItem from "./IconListItem";

const MechanismOfAction = () => {
  const items = [
    {
      icon: r1,
      text: "mIDH1 способствует онкогенезу, катализируя продукцию 2-ГГ, что приводит \n к нарушению эпигенетической регуляции и клеточного метаболизма.",
    },
    {
      icon: r2,
      text: "Перед началом приема препарата ТИБСОВО® требуется подтвердить наличие \n у пациентов мутации в гене IDH1 R132 с использованием подходящего \n диагностического теста.",
    },
    {
      icon: r3,
      text: "ТИБСОВО® — мощный низкомолекулярный ингибитор мутантного фермента IDH1,\n являющийся первым представителем своего класса и целенаправленно \n воздействующий на все известные мутантные варианты IDH1",
    },
  ];

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
              {items.map((item, index) => (
                <IconListItem
                  key={index}
                  icon={item.icon}
                  text={item.text}
                  color="#FFFFFF"
                  showGradient={true}
                  gradientOpacity={0.8}
                  textClassName="text-white"
                  boxShadow="0 0 20px 0 rgba(231, 76, 57, 0.08)"
                />
              ))}
            </div>
          </div>
          <Scheme />
        </div>
      </div>
    </div>
  );
};

export default MechanismOfAction;
