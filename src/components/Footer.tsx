import logo from '../assets/logo.svg'

function Footer() {
  return (
    <footer
      className="w-full flex flex-col items-center justify-center px-5 md:px-20 py-9"
      style={{
        backgroundColor: 'rgba(224, 219, 244, 0.4)',
        fontFamily: 'Century Gothic, -apple-system, Roboto, Helvetica, sans-serif'
      }}
    >
      <div
        className="w-full flex flex-col items-start"
        style={{
          maxWidth: '1140px'
        }}
      >
        {/* Верхняя часть с логотипом и текстом */}
        <div
          className="w-full flex items-stretch flex-wrap"
          style={{
            maxWidth: '1055px',
            gap: '40px 100px'
          }}
        >
          {/* Логотип */}
          <div className="flex items-start justify-start overflow-hidden">
            <div
              className="flex items-center justify-center"
              style={{
                minHeight: '30px',
                width: '150px'
              }}
            >
              <img
                src={logo}
                alt="Servier Logo"
                className="w-full h-auto"
                style={{
                  objectFit: 'contain'
                }}
              />
            </div>
          </div>

          {/* Текст */}
          <p
            className="flex-1 min-w-0"
            style={{
              color: '#151518',
              fontSize: '20px',
              fontWeight: 400,
              textTransform: 'uppercase',
              flexGrow: 1,
              flexShrink: 1,
              width: '666px',
              maxWidth: '100%'
            }}
          >
            материал предназначен для специалистов здравоохранения
          </p>
        </div>

        {/* Три колонки */}
        <div
          className="w-full flex flex-wrap items-start mt-10 md:mt-12"
          style={{
            gap: '0 93px'
          }}
        >
          {/* Колонка 1: Адрес офиса */}
          <div
            className="flex flex-col items-start"
            style={{
              flex: '0 0 calc(33.333% - 62px)',
              minWidth: '200px',
              fontSize: '12px',
              color: '#151518',
              fontWeight: 400
            }}
          >
            <p
              style={{
                color: '#151518',
                fontWeight: 700,
                lineHeight: '1.25',
                textTransform: 'uppercase'
              }}
            >
              Адрес офиса:
            </p>
            <p
              style={{
                color: '#151518',
                marginTop: '29px'
              }}
            >
              АО «Сервье»:
            </p>
            <p
              style={{
                color: '#151518',
                lineHeight: '18px',
                marginTop: '5px',
                whiteSpace: 'pre-line'
              }}
            >
              {`125196, Москва, ул. Лесная, д.7, этажи 7/8/9
Бизнес-центр Белые Сады`}
            </p>
            <p
              style={{
                color: '#151518',
                marginTop: '5px'
              }}
            >
              Телефон: +7 495 937-07-00
            </p>
            <p
              style={{
                color: '#151518',
                marginTop: '17px'
              }}
            >
              ru.communications@servier.com
            </p>
            <p
              style={{
                color: '#151518',
                lineHeight: '18px',
                marginTop: '14px'
              }}
            >
              ООО «СЕРВЬЕ РУС», 108828 г. Москва, пос. Краснопахорское, квартал 158, вл.2, стр.1, кабинет 169 Тел. +7 (495) 225-80-10
            </p>
          </div>

          {/* Колонка 2: Сообщить о нежелательном явлении */}
          <div
            className="flex flex-col items-stretch mt-10 md:mt-0"
            style={{
              flex: '0 0 calc(33.333% - 62px)',
              minWidth: '200px',
              paddingRight: '1px'
            }}
          >
            <p
              style={{
                color: '#151518',
                fontSize: '12px',
                fontWeight: 700,
                lineHeight: '30px',
                textTransform: 'uppercase'
              }}
            >
              Сообщить о нежелательном явлении
            </p>
            <p
              style={{
                color: '#151518',
                fontSize: '12px',
                fontWeight: 400,
                lineHeight: '18px',
                marginTop: '30px',
                whiteSpace: 'pre-line'
              }}
            >
              {`передать запрос по препарату или связаться по другим
вопросам Вы можете через форму обратной связи`}
            </p>
            <button
              className="flex items-center justify-center mt-8"
              style={{
                borderRadius: '5px',
                border: '1px solid #151518',
                width: '257px',
                maxWidth: '100%',
                paddingLeft: '20px',
                paddingRight: '20px',
                paddingTop: '23px',
                paddingBottom: '20px',
                gap: '20px',
                backgroundColor: 'transparent',
                cursor: 'pointer',
                transition: 'opacity 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '0.8'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '1'
              }}
            >
              <span
                style={{
                  color: '#151518',
                  textAlign: 'center',
                  fontSize: '14px',
                  fontWeight: 700,
                  lineHeight: '1.14'
                }}
              >
                Форма обратной связи
              </span>
              <div
                style={{
                  width: '16px',
                  minHeight: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
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
            className="flex flex-col items-stretch mt-10 md:mt-0"
            style={{
              flex: '0 0 calc(33.333% - 62px)',
              minWidth: '200px',
              fontSize: '12px',
              color: '#151518',
              fontWeight: 400,
              lineHeight: '24px',
              justifyContent: 'center'
            }}
          >
            <p
              style={{
                color: '#151518'
              }}
              dangerouslySetInnerHTML={{
                __html: 'ТИБСОВО® <span style="color: rgba(0,0,0,1);">РУ ЛП-№(012213)-(РГ-RU)</span>'
              }}
            />
            <p
              style={{
                color: '#151518',
                marginTop: '16px'
              }}
            >
              Условия использования
            </p>
            <p
              style={{
                color: '#151518',
                marginTop: '16px'
              }}
            >
              Политика в отношении обработки персональных данных
            </p>
          </div>
        </div>

        {/* Копирайт */}
        <p
          style={{
            color: '#151518',
            fontSize: '12px',
            fontWeight: 400,
            opacity: 0.5,
            marginTop: '15px'
          }}
        >
          © 2025 LES LABORATOIRES SERVIER. АО «Сервье». Все права защищены
        </p>
      </div>
    </footer>
  )
}

export default Footer

