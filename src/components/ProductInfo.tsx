import tibsovoImage from '../assets/product-tbs.png'
import ProductInstruct from './ProductInstruct'

const ProductInfo = () => {
  return (
    <div className="w-full px-4 md:px-4 bg-white">
      <div className="mx-auto w-full max-w-[1360px]">
        <div className="flex flex-col">
          {/* Первый ряд - Первый блок и Третий блок рядом */}
          <div className="flex flex-col lg:flex-row md:gap-48">
            {/* Первый блок - Текст и кнопка */}
            <div className="flex-1 pt-7 flex flex-col">
              <div className="flex flex-col">
                {/* Верхний заголовок */}
                <h3 className="text-[#61279E] text-base font-semibold leading-[120%] tracking-[0.48px] uppercase">
                  Способ применения
                </h3>
                
                {/* Контент */}
                <div className="flex flex-col mt-4">
                  {/* Большой заголовок */}
                  <h2 className="text-[#61279E] text-[40px] font-semibold leading-[44px] tracking-[-1.2px]">
                    Режим дозирования ТИБСОВО<span className="text-[40px]">®</span>: один раз в день
                  </h2>
                  
                  {/* Текст описания */}
                  <p className="text-[#151518] text-xl font-normal leading-[28px] mt-6">
                    Препарат ТИБСОВО<span className="text-xl">®</span> в режиме монотерапии показан для лечения взрослых пациентов с местнораспространенной или метастатической холангиокарциномой с мутацией в гене IDH1 R132, ранее получавших лечение, как минимум, в рамках одной линии системной терапии
                  </p>
                </div>
              </div>
              
              {/* Кнопка */}
              <button className="mt-11 self-start px-8 py-4 rounded-lg border border-[#151518] text-[#151518] text-base font-semibold leading-[140%] hover:opacity-90 transition-opacity">
                Скачать брошюру
              </button>
            </div>

            {/* Третий блок - Фотография препарата */}
            <div className="flex-1 lg:flex-none bg-white pt-5 px-6 flex items-center justify-center relative">
              <div className="w-full h-[444px] rounded-xl flex items-center justify-center overflow-hidden relative z-10">
                <img 
                  src={tibsovoImage} 
                  alt="Препарат ТИБСОВО"
                  className="w-full h-full object-contain max-w-full"
                />
              </div>
            </div>
          </div>
          <ProductInstruct />
        </div>
      </div>
    </div>
  )
}

export default ProductInfo

