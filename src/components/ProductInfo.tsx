import tibsovoImage from '../assets/product-tbs.png'
import ProductInstruct from './ProductInstruct'

const ProductInfo = () => {
  return (
    <div className="w-full px-0 md:px-4 bg-white relative">
      <div className="mx-auto w-full max-w-[1360px]">
        <div className="flex flex-col relative">
          {/* Мобильная версия - абсолютное позиционирование */}
          {/* Первый ряд - Первый блок и Третий блок рядом */}
          <div className="flex flex-col lg:flex-row md:gap-48 relative">
            {/* Первый блок - Текст и кнопка */}
            <div className="flex-1 pt-12 pb-6 md:pt-6 flex flex-col px-4 md:px-0 relative z-10">
              <div className="flex flex-col gap-3 md:gap-0">
                {/* Верхний заголовок */}
                <h3 className="text-[#61279E] text-xs md:text-base font-semibold leading-[120%] tracking-[0.36px] md:tracking-[0.48px] uppercase">
                  Способ применения
                </h3>
                
                {/* Контент */}
                <div className="flex flex-col gap-4 md:gap-0 md:mt-4">
                  {/* Большой заголовок */}
                  <h2 className="text-[#61279E] text-2xl md:text-[40px] font-semibold leading-[120%] md:leading-[44px] tracking-[-0.48px] md:tracking-[-1.2px]">
                    Режим дозирования ТИБСОВО<span className="text-2xl md:text-[40px]">®</span>: один раз в день
                  </h2>
                  
                  {/* Текст описания */}
                  <p className="text-[#151518] text-sm md:text-xl font-normal leading-[140%] md:leading-[28px] md:mt-4">
                    Препарат ТИБСОВО<span className="text-sm md:text-xl">®</span> в режиме монотерапии показан для лечения взрослых пациентов с местнораспространенной или метастатической холангиокарциномой с мутацией в гене IDH1 R132, ранее получавших лечение, как минимум, в рамках одной линии системной терапии
                  </p>
                </div>
              </div>
              
              {/* Кнопка */}
              <button className="mt-8 md:mt-12 self-stretch md:self-start px-8 py-4 rounded-lg border border-[#151518] text-[#151518] text-sm md:text-base font-semibold leading-[100%] hover:opacity-90 transition-opacity">
                Скачать брошюру
              </button>
            </div>

            {/* Третий блок - Фотография препарата - только на десктопе */}
            <div className="md:flex flex-1 lg:flex-none bg-white pt-5 px-6 items-end justify-center relative">
              <div className="w-full h-[267px] md:h-[444px] rounded-xl flex items-end justify-center overflow-hidden relative z-10">
                <img 
                  src={tibsovoImage} 
                  alt="Препарат ТИБСОВО"
                  className="w-full h-full object-contain max-w-full"
                />
              </div>
            </div>
          </div>
          
          {/* ProductInstruct - с отступами для мобильных */}
          <div className="px-4 md:px-0 relative z-10">
            <ProductInstruct />
          </div>
          {/* Блок с предупреждением */}
          <div className="p-10  pb-12 relative z-10 flex items-start">
            {/* Иконка предупреждения */}
            <div className="flex items-center flex-shrink-0">
     
            </div>
            {/* Текст предупреждения */}
            <p className="flex-1 text-[#151518] text-xs md:text-base font-semibold md:font-normal leading-[140%] md:leading-[22px] pt-1">
              Лечение следует продолжать до прогрессии заболевания или до тех пор, пока пациент не перестанет переносить терапию.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductInfo

