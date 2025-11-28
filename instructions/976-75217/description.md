# Описание блока "Безопасность" (node-id: 976-75217)

## Общая структура

Блок представляет собой вертикальный контейнер (flex-direction: column), содержащий информацию о безопасности препарата ТИБСОВО®. Блок состоит из заголовка, основного текстового блока, списка с иконками и кнопки внизу.

---

## 1. Главный контейнер (Frame 2131329342)

**Тип:** FRAME  
**Расположение:** Корневой элемент блока

**Стили (large):**
- `display`: flex
- `flexDirection`: column
- `alignItems`: stretch
- `justifyContent`: start

**Стили (medium):**
- Без дополнительных стилей

---

## 2. Внутренний контейнер с контентом (Frame 2131329339)

**Тип:** FRAME  
**Расположение:** Первый дочерний элемент главного контейнера

**Стили (large):**
- `display`: flex
- `width`: 100%
- `paddingLeft`: 40px
- `paddingRight`: 40px
- `flexDirection`: column
- `alignItems`: stretch
- `fontFamily`: Geist, -apple-system, Roboto, Helvetica, sans-serif
- `justifyContent`: start

**Стили (medium):**
- `maxWidth`: 100%
- `paddingLeft`: 20px
- `paddingRight`: 20px

### 2.1. Заголовок секции "Безопасность"

**Тип:** TEXT  
**Текст:** "Безопасность"

**Стили (large):**
- `color`: #61279E (var(--Accent_2, #61279E))
- `fontSize`: 16px
- `fontWeight`: 600 (полужирный)
- `lineHeight`: 1.2
- `letterSpacing`: 0.48px
- `textTransform`: uppercase (все буквы заглавные)

**Стили (medium):**
- `maxWidth`: 100%

### 2.2. Блок с основным заголовком и подзаголовком (Frame 2131329313)

**Тип:** FRAME  
**Расположение:** Второй дочерний элемент внутреннего контейнера

**Стили (large):**
- `display`: flex
- `marginTop`: 16px
- `width`: 1243px
- `maxWidth`: 100%
- `flexDirection`: column
- `alignItems`: stretch
- `justifyContent`: start

**Стили (medium):**
- Без дополнительных стилей

#### 2.2.1. Основной заголовок

**Тип:** TEXT  
**Текст:** "Терапия препаратом ТИБСОВО® характеризуется удовлетворительной переносимостью. Профиль безопасности ТИБСОВО® хорошо изучен"

**Стили (large):**
- `color`: #61279E (var(--Accent_2, #61279E))
- `fontSize`: 40px
- `fontWeight`: 600 (полужирный)
- `lineHeight`: 44px
- `letterSpacing`: -1.2px

**Стили (medium):**
- `maxWidth`: 100%

#### 2.2.2. Подзаголовок

**Тип:** TEXT  
**Текст:** "Безопасность монотерапии ТИБСОВО® пациентов с местнораспространенной или метастатической холангиокарциномой с мутацией в гене IDH1 R132, ранее получавших лечение, как минимум, в рамках одной линии системной терапии:"

**Стили (large):**
- `color`: #151518 (var(--Body-Black, #151518))
- `fontSize`: 20px
- `fontWeight`: 400 (обычный)
- `lineHeight`: 28px
- `marginTop`: 24px

**Стили (medium):**
- `maxWidth`: 100%

---

## 3. Блок со списком элементов (Frame 2131329338)

**Тип:** FRAME  
**Расположение:** Второй дочерний элемент главного контейнера

**Стили (large):**
- `display`: flex
- `marginTop`: 48px
- `width`: 1058px
- `maxWidth`: 100%
- `flexDirection`: column
- `alignItems`: stretch
- `justifyContent`: start

**Стили (medium):**
- `marginTop`: 40px

### 3.1. Первый элемент списка (Frame 2131329335)

**Тип:** FRAME  
**Расположение:** Первый дочерний элемент блока списка

**Стили (large):**
- `display`: flex
- `width`: 100%
- `alignItems`: center
- `gap`: 24px
- `justifyContent`: start
- `flexWrap`: wrap

**Стили (medium):**
- `maxWidth`: 100%

#### 3.1.1. Контейнер иконки (Frame 2131329332)

**Тип:** FRAME  
**Расположение:** Первый дочерний элемент элемента списка

**Стили (large):**
- `alignSelf`: stretch
- `display`: flex
- `marginTop`: auto
- `marginBottom`: auto
- `alignItems`: center
- `gap`: -32px
- `justifyContent`: start
- `width`: 176px

**Стили (medium):**
- Без дополнительных стилей

##### 3.1.1.1. Фоновая фигура (Rectangle 12)

**Тип:** RECTANGLE  
**Расположение:** Первый дочерний элемент контейнера иконки

**Стили (large):**
- `alignSelf`: stretch
- `display`: flex
- `marginTop`: auto
- `marginBottom`: auto
- `width`: 136px
- `flexShrink`: 1
- `height`: 72px
- `flex`: 1
- `flexBasis`: 0%

**Стили (medium):**
- Без дополнительных стилей

##### 3.1.1.2. Круглая иконка (Frame 2131329297)

**Тип:** FRAME  
**Расположение:** Второй дочерний элемент контейнера иконки

**Стили (large):**
- `aspectRatio`: 1/1
- `borderRadius`: 100px (полностью круглый)
- `boxShadow`: 0 0 20px 0 rgba(97, 39, 158, 0.08) (тень фиолетового оттенка)
- `alignSelf`: stretch
- `display`: flex
- `marginTop`: auto
- `marginBottom`: auto
- `width`: 72px
- `flexShrink`: 0
- `height`: 72px
- `background`: #87A9E2 (var(--Blue, #87A9E2))

**Стили (medium):**
- Без дополнительных стилей

#### 3.1.2. Текст элемента списка

**Тип:** TEXT  
**Текст:** "Наиболее частыми нежелательными реакциями были утомляемость (43 %), тошнота (42 %), боль в животе (35 %), диарея (35 %), снижение аппетита (24 %), асцит (23 %), рвота (23 %), анемия (19 %) и сыпь (15 %)."

**Стили (large):**
- `color`: #151518 (var(--Body-Black, #151518))
- `fontFamily`: Geist, -apple-system, Roboto, Helvetica, sans-serif
- `fontSize`: 20px
- `fontWeight`: 400 (обычный)
- `lineHeight`: 28px
- `alignSelf`: stretch
- `marginTop`: auto
- `marginBottom`: auto
- `flex`: 1
- `flexShrink`: 1
- `flexBasis`: 0%

**Стили (medium):**
- `maxWidth`: 100%

### 3.2. Второй элемент списка (Frame 2131329336)

**Тип:** FRAME  
**Расположение:** Второй дочерний элемент блока списка

**Стили (large):**
- `display`: flex
- `marginTop`: 48px
- `width`: 100%
- `alignItems`: center
- `gap`: 24px
- `justifyContent`: start
- `flexWrap`: wrap

**Стили (medium):**
- `maxWidth`: 100%
- `marginTop`: 40px

#### 3.2.1. Контейнер иконки (Frame 2131329332)

**Тип:** FRAME  
**Структура:** Аналогична контейнеру иконки первого элемента (см. 3.1.1)

**Стили (large):**
- `alignSelf`: stretch
- `display`: flex
- `marginTop`: auto
- `marginBottom`: auto
- `alignItems`: center
- `gap`: -32px
- `justifyContent`: start
- `width`: 176px

**Стили (medium):**
- Без дополнительных стилей

##### 3.2.1.1. Фоновая фигура (Rectangle 12)

**Тип:** RECTANGLE  
**Структура:** Аналогична фоновой фигуре первого элемента (см. 3.1.1.1)

**Стили (large):**
- `alignSelf`: stretch
- `display`: flex
- `marginTop`: auto
- `marginBottom`: auto
- `width`: 136px
- `flexShrink`: 1
- `height`: 72px
- `flex`: 1
- `flexBasis`: 0%

**Стили (medium):**
- Без дополнительных стилей

##### 3.2.1.2. Круглая иконка (Frame 2131329297)

**Тип:** FRAME  
**Структура:** Аналогична иконке первого элемента (см. 3.1.1.2)

**Стили (large):**
- `aspectRatio`: 1/1
- `borderRadius`: 100px
- `boxShadow`: 0 0 20px 0 rgba(97, 39, 158, 0.08)
- `alignSelf`: stretch
- `display`: flex
- `marginTop`: auto
- `marginBottom`: auto
- `width`: 72px
- `flexShrink`: 0
- `height`: 72px
- `background`: #87A9E2 (var(--Blue, #87A9E2))

**Стили (medium):**
- Без дополнительных стилей

#### 3.2.2. Текст элемента списка

**Тип:** TEXT  
**Текст:** "Наиболее частыми серьезными нежелательными реакциями были асцит (2 %), гипербилирубинемия (2 %) и холестатическая желтуха (2 %)."

**Стили (large):**
- `color`: #151518 (var(--Body-Black, #151518))
- `fontFamily`: Geist, -apple-system, Roboto, Helvetica, sans-serif
- `fontSize`: 20px
- `fontWeight`: 400 (обычный)
- `lineHeight`: 28px
- `alignSelf`: stretch
- `marginTop`: auto
- `marginBottom`: auto
- `flex`: 1
- `flexShrink`: 1
- `flexBasis`: 0%

**Стили (medium):**
- `maxWidth`: 100%

### 3.3. Третий элемент списка (Frame 2131329337)

**Тип:** FRAME  
**Расположение:** Третий дочерний элемент блока списка

**Стили (large):**
- `display`: flex
- `marginTop`: 48px
- `width`: 100%
- `alignItems`: center
- `gap`: 24px
- `justifyContent`: start
- `flexWrap`: wrap

**Стили (medium):**
- `maxWidth`: 100%
- `marginTop`: 40px

#### 3.3.1. Контейнер иконки (Frame 2131329332)

**Тип:** FRAME  
**Структура:** Аналогична контейнеру иконки первого элемента (см. 3.1.1)

**Стили (large):**
- `alignSelf`: stretch
- `display`: flex
- `marginTop`: auto
- `marginBottom`: auto
- `alignItems`: center
- `gap`: -32px
- `justifyContent`: start
- `width`: 176px

**Стили (medium):**
- Без дополнительных стилей

##### 3.3.1.1. Фоновая фигура (Rectangle 12)

**Тип:** RECTANGLE  
**Структура:** Аналогична фоновой фигуре первого элемента (см. 3.1.1.1)

**Стили (large):**
- `alignSelf`: stretch
- `display`: flex
- `marginTop`: auto
- `marginBottom`: auto
- `width`: 136px
- `flexShrink`: 1
- `height`: 72px
- `flex`: 1
- `flexBasis`: 0%

**Стили (medium):**
- Без дополнительных стилей

##### 3.3.1.2. Круглая иконка (Frame 2131329297)

**Тип:** FRAME  
**Структура:** Аналогична иконке первого элемента (см. 3.1.1.2)

**Стили (large):**
- `aspectRatio`: 1/1
- `borderRadius`: 100px
- `boxShadow`: 0 0 20px 0 rgba(97, 39, 158, 0.08)
- `alignSelf`: stretch
- `display`: flex
- `marginTop`: auto
- `marginBottom`: auto
- `width`: 72px
- `flexShrink`: 0
- `height`: 72px
- `background`: #87A9E2 (var(--Blue, #87A9E2))

**Стили (medium):**
- Без дополнительных стилей

#### 3.3.2. Текст элемента списка

**Тип:** TEXT  
**Текст:** "Частота прекращения применения ивосидениба из-за развития нежелательных реакций составила 2 %. Нежелательными реакциями, приводившими к прекращению лечения, были асцит (1 %) и гипербилирубинемия (1 %)."

**Стили (large):**
- `color`: #151518 (var(--Body-Black, #151518))
- `fontFamily`: Geist, -apple-system, Roboto, Helvetica, sans-serif
- `fontSize`: 20px
- `fontWeight`: 400 (обычный)
- `lineHeight`: 28px
- `alignSelf`: stretch
- `marginTop`: auto
- `marginBottom`: auto
- `flex`: 1
- `flexShrink`: 1
- `flexBasis`: 0%

**Стили (medium):**
- `maxWidth`: 100%

---

## 4. Блок с кнопкой (Frame 2131329340)

**Тип:** FRAME  
**Расположение:** Третий дочерний элемент главного контейнера

**Стили (large):**
- `display`: flex
- `marginTop`: 48px
- `width`: 100%
- `paddingLeft`: 40px
- `paddingRight`: 40px
- `flexDirection`: column
- `alignItems`: start
- `fontFamily`: Geist, -apple-system, Roboto, Helvetica, sans-serif
- `fontSize`: 16px
- `color`: #FFF (var(--Body-White, #FFF))
- `fontWeight`: 600 (полужирный)
- `lineHeight`: 1.4
- `justifyContent`: start

**Стили (medium):**
- `maxWidth`: 100%
- `paddingLeft`: 20px
- `paddingRight`: 20px
- `marginTop`: 40px

### 4.1. Кнопка (Button)

**Тип:** INSTANCE  
**Расположение:** Единственный дочерний элемент блока с кнопкой

**Стили (large):**
- `justifyContent`: center
- `alignItems`: center
- `borderRadius`: 8px
- `display`: flex
- `paddingLeft`: 32px
- `paddingRight`: 32px
- `paddingTop`: 16px
- `paddingBottom`: 16px
- `gap`: 8px
- `overflow`: hidden
- `background`: #E74C39 (var(--Accent, #E74C39))

**Стили (medium):**
- `paddingLeft`: 20px
- `paddingRight`: 20px

#### 4.1.1. Текст кнопки

**Тип:** TEXT  
**Текст:** "Безопасность в исследовании ClarIDHy"

**Стили (large):**
- `color`: #FFF (var(--Body-White, #FFF))
- `alignSelf`: stretch
- `marginTop`: auto
- `marginBottom`: auto

**Стили (medium):**
- Без дополнительных стилей

---

## Цветовая палитра

- **Акцентный цвет (фиолетовый):** #61279E (var(--Accent_2, #61279E))
- **Синий (иконки):** #87A9E2 (var(--Blue, #87A9E2))
- **Черный (текст):** #151518 (var(--Body-Black, #151518))
- **Красный (кнопка):** #E74C39 (var(--Accent, #E74C39))
- **Белый (текст кнопки):** #FFF (var(--Body-White, #FFF))
- **Тень иконки:** rgba(97, 39, 158, 0.08)

---

## Типографика

### Шрифты
- **Основной шрифт:** Geist, -apple-system, Roboto, Helvetica, sans-serif

### Размеры шрифтов
- **Заголовок секции:** 16px (font-weight: 600, uppercase)
- **Основной заголовок:** 40px (font-weight: 600)
- **Подзаголовок и текст списка:** 20px (font-weight: 400)
- **Текст кнопки:** 16px (font-weight: 600)

### Межстрочные интервалы
- **Заголовок секции:** line-height: 1.2
- **Основной заголовок:** line-height: 44px
- **Подзаголовок и текст списка:** line-height: 28px
- **Текст кнопки:** line-height: 1.4

---

## Отступы и размеры

### Основные отступы
- **Горизонтальные отступы контейнера (large):** 40px (слева и справа)
- **Горизонтальные отступы контейнера (medium):** 20px (слева и справа)
- **Отступ между заголовком и основным блоком:** 16px
- **Отступ между основным заголовком и подзаголовком:** 24px
- **Отступ между элементами списка:** 48px (large), 40px (medium)
- **Отступ между блоком списка и кнопкой:** 48px (large), 40px (medium)

### Размеры элементов
- **Ширина основного текстового блока:** 1243px (max-width: 100%)
- **Ширина блока списка:** 1058px (max-width: 100%)
- **Ширина контейнера иконки:** 176px
- **Размер круглой иконки:** 72px × 72px
- **Размер фоновой фигуры:** 136px × 72px
- **Отступ между иконкой и текстом:** 24px
- **Внутренние отступы кнопки:** 32px (горизонтальные), 16px (вертикальные)

---

## Адаптивность

### Breakpoints
- **large:** Основной размер экрана
- **medium:** Средний размер экрана (планшеты)

### Изменения на medium:
- Горизонтальные отступы контейнеров уменьшаются с 40px до 20px
- Отступы между элементами списка уменьшаются с 48px до 40px
- Внутренние отступы кнопки уменьшаются с 32px до 20px (горизонтальные)
- Все элементы получают `maxWidth: 100%` для корректного отображения на узких экранах

---

## Особенности верстки

1. **Flexbox layout:** Все контейнеры используют flexbox для выравнивания элементов
2. **Responsive design:** Блок адаптируется под разные размеры экранов
3. **Иконки:** Круглые иконки с тенью, расположенные слева от текста
4. **Цветовое кодирование:** Использование фирменных цветов (фиолетовый для заголовков, синий для иконок, красный для кнопки)
5. **Типографическая иерархия:** Четкое разделение уровней заголовков по размеру и весу шрифта

