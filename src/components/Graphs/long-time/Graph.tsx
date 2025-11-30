import graphImage from "../../../assets/graphs/3.svg";

const LongTimeGraphsImage = () => {
  return (
    <div>
      <div className="flex flex-col px-4 md:px-8 pb-4 md:py-[17px]">
        <div className="flex flex-col relative">
          <div className="flex items-start justify-between">
            <div className="text-[#61279E] text-[48px] md:text-[80px] font-semibold leading-[120%] md:leading-[110%] tracking-[-1.92px] md:tracking-[-4px]">
              92%
            </div>
            {/* Info Icon - visible on mobile only, positioned to the right */}
            <svg
              className="md:hidden w-6 h-6 flex-shrink-0"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="11.9998"
                cy="12"
                r="9.00375"
                stroke="#9D9CA2"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.998 15.5014H13.3083"
                stroke="#9D9CA2"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.1583 15.5015V11.2497H11.0078"
                stroke="#9D9CA2"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.0999 8.24569C12.0999 8.38382 11.9879 8.4958 11.8498 8.4958C11.7117 8.4958 11.5997 8.38382 11.5997 8.24569C11.5997 8.10756 11.7117 7.99559 11.8498 7.99559"
                stroke="#9D9CA2"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.8498 7.99558C11.9879 7.99558 12.0999 8.10755 12.0999 8.24568"
                stroke="#9D9CA2"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="text-[#151518] text-sm md:text-base font-normal leading-[140%] md:leading-[22px] md:mt-1 md:max-w-[48%]">
            пациентов были живы через 2 года
          </div>
        </div>
      </div>
      {/* Graph Image */}
      <div className="flex flex-col px-4 pt-8 md:px-8 md:pb-4 md:py-[30px]">
        <img src={graphImage} alt="Graph" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default LongTimeGraphsImage;
