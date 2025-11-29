import Graphs from './Graphs'
import effectImage from '../assets/effect.svg'

const Efficiency = () => {
  return (
    <div className="w-full max-w-full py-20 md:px-5 md:pb-24">
      <div 
        className="mx-auto w-full max-w-[1360px] rounded-[20px] pt-15 pb-4 md:pb-4 relative overflow-hidden"
        style={{ 
          backgroundColor: '#61279E',
          backgroundImage: `url(${effectImage})`,
          backgroundPosition: 'right top',
          backgroundSize: 'auto',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="flex flex-col gap-6 px-6 md:px-16">
          {/* Заголовок */}
          <h2 className="text-base font-semibold uppercase leading-[120%] tracking-[0.48px] text-white">
            Эффективность
          </h2>

          {/* Контент с блоком mini справа */}
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="flex flex-col gap-12 flex-1">
            {/* Текстовый блок */}
            <div className="flex flex-col gap-6">
              <h3 className="w-full max-w-[949px] text-[40px] font-semibold leading-[110%] tracking-[-1.2px] text-white">
                Исследование ClarIDHy: международное двойное слепое рандомизированное плацебо-контролируемое исследование III фазы.
              </h3>
              <p className="w-full max-w-[949px] text-xl font-normal leading-[140%] text-white">
                Цель исследования ClarIDHy: оценить эффективность и безопасность применения монотерапии ТИБСОВО® в сравнении с ПБО у взрослых пациентов с холангиокарциномой на поздних стадиях с мутацией в гене IDH1 (февраль 2017 – январь 2019).
              </p>
            </div>

            {/* Кнопки */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 flex-wrap">
              <button className="flex items-center justify-center gap-2 rounded-lg bg-[#E74C39] px-6 sm:px-8 py-4 whitespace-nowrap">
                <span className="text-sm sm:text-base font-semibold leading-[140%] text-white">
                  Дизайн исследования ClarIDHy
                </span>
              </button>
              <button className="flex items-center justify-center gap-2 rounded-lg border border-white bg-white px-6 sm:px-8 py-4 whitespace-nowrap">
                <span className="text-sm sm:text-base font-semibold leading-[140%] text-[#151518]">
                  Исходные характеристики
                </span>
              </button>
            </div>
            </div>
          </div>
        </div>

        <Graphs />
      </div>
    </div>
  )
}

export default Efficiency

