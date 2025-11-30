import logo from '../assets/logo.svg'

function Footer() {
  return (
    <footer
      className="w-full flex flex-col items-center justify-center px-5 md:px-20 py-9 bg-[rgba(224,219,244,0.4)]"
    >
      <div
        className="w-full flex flex-col items-start max-w-[1140px]"
      >
        {/* Верхняя часть с логотипом и текстом */}
        <div
          className="w-full flex items-stretch flex-wrap max-w-[1055px] gap-y-[40px] gap-x-[100px]"
        >
          {/* Логотип */}
          <div className="flex items-start justify-start overflow-hidden">
            <div
              className="flex items-center justify-center min-h-[30px] w-[150px]"
            >
              <img
                src={logo}
                alt="Servier Logo"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Текст */}
          <p
            className="flex-1 min-w-0 text-[#151518] text-[20px] font-normal uppercase flex-grow flex-shrink w-[666px] max-w-full"
          >
            материал предназначен для специалистов здравоохранения
          </p>
        </div>

        {/* Три колонки */}
        <div
          className="w-full flex flex-wrap items-start mt-10 md:mt-12 gap-x-[93px]"
        >
          {/* Колонка 1: Адрес офиса */}
          <div
            className="flex flex-col items-start flex-[0_0_calc(33.333%-62px)] min-w-[200px] text-xs text-[#151518] font-normal"
          >
            <p
              className="text-[#151518] font-bold leading-[1.25] uppercase"
            >
              Адрес офиса:
            </p>
            <p
              className="text-[#151518] mt-[29px]"
            >
              АО «Сервье»:
            </p>
            <p
              className="text-[#151518] leading-[18px] mt-[5px] whitespace-pre-line"
            >
              {`125196, Москва, ул. Лесная, д.7, этажи 7/8/9
Бизнес-центр Белые Сады`}
            </p>
            <p
              className="text-[#151518] mt-[5px]"
            >
              Телефон: +7 495 937-07-00
            </p>
            <p
              className="text-[#151518] mt-[17px]"
            >
              ru.communications@servier.com
            </p>
            <p
              className="text-[#151518] leading-[18px] mt-[14px]"
            >
              ООО «СЕРВЬЕ РУС», 108828 г. Москва, пос. Краснопахорское, квартал 158, вл.2, стр.1, кабинет 169 Тел. +7 (495) 225-80-10
            </p>
          </div>

          {/* Колонка 2: Сообщить о нежелательном явлении */}
          <div
            className="flex flex-col items-stretch mt-10 md:mt-0 flex-[0_0_calc(33.333%-62px)] min-w-[200px] pr-[1px]"
          >
            <p
              className="text-[#151518] text-xs font-bold leading-[30px] uppercase"
            >
              Сообщить о нежелательном явлении
            </p>
            <p
              className="text-[#151518] text-xs font-normal leading-[18px] mt-[30px] whitespace-pre-line"
            >
              передать запрос по препарату или связаться по другим вопросам Вы можете через форму обратной связи
            </p>
            <button
              className="flex items-center justify-center mt-8 rounded-[5px] border border-[#151518] w-[257px] max-w-full pl-5 pr-5 pt-[23px] pb-5 gap-5 bg-transparent cursor-pointer transition-opacity duration-200 hover:opacity-80"
            >
              <span
                className="text-[#151518] text-center text-sm font-bold leading-[1.14]"
              >
                Форма обратной связи
              </span>
              <div
                className="w-4 min-h-[12px] flex items-center justify-center"
              >
                <svg
                  width="16"
                  height="12"
                  viewBox="0 0 16 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 6H15M15 6L10 1M15 6L10 11"
                    stroke="#151518"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </button>
          </div>

          {/* Колонка 3: ТИБСОВО® и условия использования */}
          <div
            className="flex flex-col items-stretch mt-10 md:mt-0 flex-[0_0_calc(33.333%-62px)] min-w-[200px] text-xs text-[#151518] font-normal leading-6 justify-center"
          >
            <p className="text-[#151518]">
              ТИБСОВО® <span className="text-black">РУ ЛП-№(012213)-(РГ-RU)</span>
            </p>
            <p
              className="text-[#151518] mt-4"
            >
              Условия использования
            </p>
            <p
              className="text-[#151518] mt-4"
            >
              Политика в отношении обработки персональных данных
            </p>
          </div>
        </div>

        {/* Копирайт */}
        <p
          className="text-[#151518] text-xs font-normal opacity-50 mt-[15px]"
        >
          © 2025 LES LABORATOIRES SERVIER. АО «Сервье». Все права защищены
        </p>
      </div>
    </footer>
  )
}

export default Footer

