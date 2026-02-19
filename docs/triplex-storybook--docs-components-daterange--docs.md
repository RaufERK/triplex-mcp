# triplex-storybook--docs-components-daterange--docs

Source: https://storybook.triplex-dev.ru/main/?path=/docs/components-daterange--docs

---

# DateRange

Компонент DateRange представляет собой выбор диапазона дат с возможностью навигации.

## Основные возможности

* **Диапазон дат**  
   * выбор периода с помощью двух полей дат
* **Навигация**  
   * кнопки сдвига диапазона назад/вперёд
* **Гибкая настройка сдвига**  
   * настраиваемый шаг (день, неделя, месяц, квартал, год)
* **Кастомизация**  
   * рендер-пропы для пикеров и кнопок

| Name                  | Description                                                                                                | Default                   | Control |
| --------------------- | ---------------------------------------------------------------------------------------------------------- | ------------------------- | ------- |
| value\*               | Диапазон дат.TDateRangeValue                                                                               | \-                        | \-      |
| onChange\*            | Функция, вызывающаяся при изменении диапазона дат.(value: TDateRangeValue) => void                         | \-                        | \-      |
| shiftAmount           | Численная величина сдвига диапазона дат.numberundefined                                                    | 1                         | \-      |
| shiftUnit             | Единица измерения сдвига диапазона дат.EDateRangeShiftUnitundefined                                        | EDateRangeShiftUnit.MONTH | \-      |
| hideNavigation        | Управление отображением/скрытием кнопок сдвига диапазона дат.booleanundefined                              | \-                        | \-      |
| renderPickerFrom\*    | Функция рендеринга поля выбора даты "от".(props: IDateRangePickerProvideProps) => ReactNode                | \-                        | \-      |
| renderPickerTo\*      | Функция рендеринга поля выбора даты "до".(props: IDateRangePickerProvideProps) => ReactNode                | \-                        | \-      |
| renderButtonBack\*    | Функция рендеринга кнопки сдвига диапазона дат "назад".(props: IDateRangeButtonProvideProps) => ReactNode  | \-                        | \-      |
| renderButtonForward\* | Функция рендеринга кнопки сдвига диапазона дат "вперёд".(props: IDateRangeButtonProvideProps) => ReactNode | \-                        | \-      |

Label

Label

Show code

## Stories

### Playground

Интерактивная демонстрация DateRange с расширенными controls. Позволяет настраивать все основные свойства компонента, включая величину и единицу сдвига, начальные значения и отображение кнопок навигации.

Label

Label

Show code

### Default

Базовый пример использования DateRange с стандартными настройками.

Label

Label

Show code

### Without Navigation

DateRange без кнопок навигации - только поля выбора дат.

Label

Label

Show code
