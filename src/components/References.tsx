import frame30Icon from '../eighth/Frame 30.svg'

function References() {
  const referencesText = "Dhillon S. Ivosidenib: first global approval. Drugs. 2018;78:1509–16; \r<br/>Popovici-Muller J, et al. ACS Med Chem Lett. 2018;9:300–5.\r<br/>Vogel A et al. Ann Oncol. 2023;34(2):127-140. \r<br/>NCCN guidelines for biliary tract cancers. Version 1.2023.\r<br/>Zhu AX et al. JAMA Oncol. 2021;7(11):1669-1677. \r<br/>Abou-Alfa GK, Macarulla T, Javle MM, Kelley RK, Lubner SJ, Adeva J, et al. Ivosidenib in IDH1-mutant, chemotherapy-refractory cholangiocarcinoma (ClarIDHy): a multicentre, randomised, double-blind, placebo-controlled, phase 3 study. Lancet Oncol. 2020;21(6):796-807. \r<br/>ОБЩАЯ ХАРАКТЕРИСТИКА ЛЕКАРСТВЕННОГО ПРЕПАРАТА ТИБСОВО® ЛП-№(012213)-(РГ-RU) от 23.10.2025.\r<br/>Mondesir J, Wille-kens C, Touat M, de Botton S. IDH1 and IDH2 mutations as novel therapeutic targets: current perspectives. J Blood Med. 2016;7:171-180. doi:10.2147/JBM.570716 \r<br/>Boscoe AN, Rolland C, Kelley RK. Frequency and prognostic significance of isocitrate dehydrogenase 1 mutations in cholangiocarcinoma: a systematic literature review. J Gustrointesl Oncol. 2019;10(4);751-765. doi:10.21037/jgo.2019.03.10\r<br/>Abou-Alfa GK et al. Characterization of IDH-1 mutant cholangiocarcinoma patients who have received ivosidenib treatment longer than a year. Poster presented at Cholangiocarcinoma Foundation 2023, Salt Lake City, USA.\r"

  // Разбиваем текст по \r<br/> и очищаем от лишних пробелов
  const references = referencesText
    .split(/\r<br\/>/)
    .map(ref => ref.trim())
    .filter(ref => ref.length > 0)

  return (
    <section 
      className="w-full flex flex-col items-stretch justify-start bg-white py-12 md:py-16"
      style={{ 
        fontFamily: 'Geist, -apple-system, Roboto, Helvetica, sans-serif'
      }}
    >
      <div className="w-full max-w-[1360px] mx-auto flex flex-col items-stretch justify-start">
        {/* Основной контейнер с фоном */}
        <div
          className="w-full flex flex-col items-stretch justify-start pr-5 md:pr-10"
        >
          <div
            className="w-full flex flex-col items-stretch justify-start px-5 md:px-12 py-12 md:py-12"
            style={{
              borderRadius: '16px',
              backgroundColor: 'rgba(224, 219, 244, 0.4)',
            }}
          >
          {/* Заголовок с черным кружочком */}
          <div
            className="w-full flex items-center justify-start flex-wrap"
            style={{
              gap: '24px',
              fontSize: '40px',
              color: '#0B0F3E',
              fontWeight: 600,
              letterSpacing: '-1.2px',
              lineHeight: '1.1'
            }}
          >
            {/* Текст заголовка */}
            <h2
              className="flex-1 min-w-0"
              style={{
                flexShrink: 1,
                flexBasis: '0%',
                alignSelf: 'stretch',
                marginTop: 'auto',
                marginBottom: 'auto'
              }}
            >
              Список литературы
            </h2>
            
            {/* Черный кружочек */}
            <div
              className="flex-shrink-0"
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '32px',
                alignSelf: 'stretch',
                position: 'relative',
                marginTop: 'auto',
                marginBottom: 'auto'
              }}
            >
              <img
                src={frame30Icon}
                alt=""
                className="w-full h-full"
                style={{
                  objectFit: 'contain'
                }}
              />
            </div>
          </div>

          {/* Список литературы */}
          <div
            className="w-full flex flex-col items-stretch justify-start"
            style={{
              marginTop: '32px',
              color: '#151518',
              fontSize: '16px',
              fontWeight: 400,
              lineHeight: '22px'
            }}
          >
            {references.map((reference, index) => (
              <p
                key={index}
                className="w-full"
                style={{
                  whiteSpace: 'pre-wrap',
                  wordBreak: 'break-word'
                }}
              >
                {reference}
              </p>
            ))}
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default References

