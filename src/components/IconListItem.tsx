interface IconListItemProps {
  icon: string;
  text: string;
  boldText?: string;
  color: string;
  showGradient?: boolean;
  className?: string;
  textClassName?: string;
  gradientOpacity?: number; // Опциональная прозрачность градиента (0-1)
  boxShadow?: string; // Опциональная кастомная тень
  iconSize?: number; // Размер иконки (ширина и высота) в пикселях
}

function IconListItem({
  icon,
  text,
  boldText,
  color,
  showGradient = true,
  className = "",
  textClassName = "",
  gradientOpacity = 0.8,
  boxShadow = "0 0 20px 0 rgba(97, 39, 158, 0.08)",
  iconSize = 72,
}: IconListItemProps) {
  // Парсим цвет для градиента
  const getRgbaColor = (hexColor: string, opacity: number) => {
    const r = parseInt(hexColor.slice(1, 3), 16);
    const g = parseInt(hexColor.slice(3, 5), 16);
    const b = parseInt(hexColor.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  };

  // Вычисляем размер иконки пропорционально iconSize
  // iconSize = 72 -> iconImageSize = 40
  // iconSize = 56 -> iconImageSize = 32
  // Линейная интерполяция: iconImageSize = 0.5 * iconSize + 4
  const iconImageSize = Math.round(0.5 * iconSize + 4);

  return (
    <div
      className={`relative w-full flex items-center gap-6 justify-start overflow-visible ${className}`}
    >
      {/* Единый блок: прямоугольник с кругом и текст */}
      <div
        className="relative flex items-center flex-1 min-w-0"
        style={{ gap: "24px" }}
      >
        {/* Прямоугольник, растянутый влево с градиентом прозрачности */}
        {showGradient && (
          <div
            className="absolute pointer-events-none"
            style={{
              left: "calc((100vw - 1360px) / 2 * -1 - 40px)",
              right: `calc(100% - ${iconSize}px)`,
              top: "50%",
              transform: "translateY(-50%)",
              height: `${iconSize}px`,
              background: `linear-gradient(to right, ${getRgbaColor(
                color,
                0
              )} 0%, ${getRgbaColor(color, gradientOpacity)} 100%)`,
              borderTopRightRadius: `${iconSize / 2}px`,
              borderBottomRightRadius: `${iconSize / 2}px`,
            }}
          />
        )}

        {/* Круглый блок с иконкой */}
        <div
          className="relative rounded-full flex items-center justify-center flex-shrink-0 z-10"
          style={{
            width: `${iconSize}px`,
            height: `${iconSize}px`,
            backgroundColor: color,
            boxShadow: boxShadow,
          }}
        >
          <img
            src={icon}
            alt=""
            style={{
              width: `${iconImageSize}px`,
              height: `${iconImageSize}px`,
              objectFit: "contain",
            }}
          />
        </div>

        {/* Текст элемента списка */}
        <p
          className={`text-[#151518] text-xl font-normal leading-[28px] flex-1 min-w-0 relative z-10 whitespace-pre-line ${textClassName}`}
          style={{ wordBreak: "break-word" }}
        >
          {text}
          {boldText && (
            <>
              {" "}
              <strong style={{ fontWeight: 700 }}>{boldText}</strong>
            </>
          )}
        </p>
      </div>
    </div>
  );
}

export default IconListItem;

