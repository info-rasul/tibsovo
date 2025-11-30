import frame30Icon from "../eighth/Frame 30.svg";

function References() {
  return (
    <section className="w-full flex flex-col items-stretch justify-start bg-white py-12 md:pt-6 md:pb-24">
      <div className="w-full max-w-[1360px] mx-auto flex flex-col items-stretch justify-start">
        {/* Основной контейнер с фоном */}
        <div className="w-full flex flex-col items-stretch justify-start">
          <div className="w-full flex flex-col items-stretch justify-start px-5 md:px-12 py-12 md:py-12 rounded-2xl bg-[rgba(224,219,244,0.4)]">
            {/* Заголовок с черным кружочком */}
            <div className="w-full flex items-center justify-start flex-wrap gap-6 text-[40px] text-[#0B0F3E] font-semibold tracking-[-1.2px] leading-[1.1]">
              {/* Текст заголовка */}
              <h2 className="flex-1">
                Список литературы
              </h2>

              {/* Черный кружочек */}
              <div className="flex-shrink-0 w-8 h-8 rounded-full self-stretch relative my-auto">
                <img
                  src={frame30Icon}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Список литературы */}
            <div className="w-full flex flex-col items-stretch justify-start mt-8 px-2 text-[#151518] text-base font-normal leading-[1.4] md:max-w-[72%]">
              <ol className="list-decimal list-outside ml-4 space-y-4">
                <li>
                  Dhillon S. Ivosidenib: first global approval. Drugs.
                  2018;78:1509–16;
                </li>
                <li>
                  Popovici-Muller J, et al. ACS Med Chem Lett. 2018;9:300–5.
                </li>
                <li>Vogel A et al. Ann Oncol. 2023;34(2):127-140.</li>
                <li>
                  NCCN guidelines for biliary tract cancers. Version 1.2023.
                </li>
                <li>Zhu AX et al. JAMA Oncol. 2021;7(11):1669-1677.</li>
                <li>
                  Abou-Alfa GK, Macarulla T, Javle MM, Kelley RK, Lubner SJ,
                  Adeva J, et al. Ivosidenib in IDH1-mutant,
                  chemotherapy-refractory cholangiocarcinoma (ClarIDHy): a
                  multicentre, randomised, double-blind, placebo-controlled,
                  phase 3 study. Lancet Oncol. 2020;21(6):796-807.
                </li>
                <li>
                  ОБЩАЯ ХАРАКТЕРИСТИКА ЛЕКАРСТВЕННОГО ПРЕПАРАТА ТИБСОВО®
                  ЛП-№(012213)-(РГ-RU) от 23.10.2025.
                </li>
                <li>
                  Mondesir J, Wille-kens C, Touat M, de Botton S. IDH1 and
                  IDH2 mutations as novel therapeutic targets: current
                  perspectives. J Blood Med. 2016;7:171-180.
                  doi:10.2147/JBM.570716
                </li>
                <li>
                  Boscoe AN, Rolland C, Kelley RK. Frequency and prognostic
                  significance of isocitrate dehydrogenase 1 mutations in
                  cholangiocarcinoma: a systematic literature review. J
                  Gustrointesl Oncol. 2019;10(4);751-765.
                  doi:10.21037/jgo.2019.03.10
                </li>
                <li>
                  Abou-Alfa GK et al. Characterization of IDH-1 mutant
                  cholangiocarcinoma patients who have received ivosidenib
                  treatment longer than a year. Poster presented at
                  Cholangiocarcinoma Foundation 2023, Salt Lake City, US
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default References;
