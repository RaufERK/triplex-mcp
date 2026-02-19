# triplex-storybook--docs-components-calendar--docs

Source: https://storybook.triplex-dev.ru/main/?path=/docs/components-calendar--docs

---

# Calendar

Компонент календаря.

## Использование

import { Calendar } from '@sberbusiness/triplex-next';

<Calendar pickedDate={pickedDate} onDateChange={setPickedDate} />

Copy

| Name                 | Description                                                                                                                                                                                            | Default                    | Control |    |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------- | ------- | -- |
| defaultViewDate      | Отображаемая по умолчанию дата.stringMomentundefined                                                                                                                                                   | \-                         | \-      |    |
| format               | Формат для значения.stringundefined                                                                                                                                                                    | YYYYMMDD                   | \-      |    |
| pickType             | Вариант выбора даты.ECalendarPickTypeundefined                                                                                                                                                         | ECalendarPickType.datePick | \-      |    |
| limitRange           | Ограничение выбираемого периода.IDateLimitRangeundefined                                                                                                                                               | object                     | \-      |    |
| markedDays           | Отмеченные дни.TCalendarMarkedDaysundefined                                                                                                                                                            | \-                         | \-      |    |
| disabledDays         | Дни недоступные для выбора.string\[\] \| undefined                                                                                                                                                     | \-                         | \-      |    |
| reversedPick         | Обратный порядок выбора даты.booleanundefined                                                                                                                                                          | \-                         | \-      |    |
| onPageChange         | Обработчик изменения страницы.((viewDate: Moment, viewMode: ECalendarViewMode) => void) \| undefined                                                                                                   | \-                         | \-      |    |
| onViewChange         | Обработчик изменения вида.((viewDate: Moment, viewMode: ECalendarViewMode) => void) \| undefined                                                                                                       | \-                         | \-      |    |
| pickedDate\*         | Выбранная дата.TPickedDateProp                                                                                                                                                                         | \-                         | \-      |    |
| adaptiveMode         | Адаптированный режим.booleanundefined                                                                                                                                                                  | \-                         | \-      |    |
| onDateChange\*       | Обработчик изменения даты.(date: Moment) => void                                                                                                                                                       | \-                         | \-      |    |
| dayHtmlAttributes    | HTML атрибуты компонента дня.TDayHtmlAttributesundefined                                                                                                                                               | \-                         | \-      |    |
| monthHtmlAttributes  | HTML атрибуты компонента месяца.TTdHTMLAttributesWithDataundefined                                                                                                                                     | \-                         | \-      |    |
| yearHtmlAttributes   | HTML атрибуты компонента года.TTdHTMLAttributesWithDataundefined                                                                                                                                       | \-                         | \-      |    |
| prevButtonProps      | Свойства кнопки переключения на предыдущую страницу календаря.TButtonHTMLAttributesWithData \| ((viewMode: ECalendarViewMode) => TButtonHTMLAttributesWithData)                                        | undefined                  | \-      | \- |
| nextButtonProps      | Свойства кнопки переключения на следующую страницу календаря.TButtonHTMLAttributesWithData \| ((viewMode: ECalendarViewMode) => TButtonHTMLAttributesWithData)                                         | undefined                  | \-      | \- |
| viewButtonProps      | Свойства кнопки для смены вида календаря.TButtonHTMLAttributesWithData \| ((viewMode: ECalendarViewMode) => TButtonHTMLAttributesWithData)                                                             | undefined                  | \-      | \- |
| yesterdayButtonProps | Свойства кнопки "Вчера".TButtonHTMLAttributesWithData \| ((viewMode: ECalendarViewMode) => TButtonHTMLAttributesWithData)                                                                              | undefined                  | \-      | \- |
| todayButtonProps     | Свойства кнопки "Сегодня".TButtonHTMLAttributesWithData \| (({ viewMode, currentPeriodSelected, }: { viewMode: ECalendarViewMode; currentPeriodSelected: boolean; }) => TButtonHTMLAttributesWithData) | undefined                  | \-      | \- |
| tomorrowButtonProps  | Свойства кнопки "Завтра".TButtonHTMLAttributesWithData \| ((viewMode: ECalendarViewMode) => TButtonHTMLAttributesWithData)                                                                             | undefined                  | \-      | \- |

февраль 2026

| пн | вт | ср | чт | пт | сб | вс |
| -- | -- | -- | -- | -- | -- | -- |
| 26 | 27 | 28 | 29 | 30 | 31 | 1  |
| 2  | 3  | 4  | 5  | 6  | 7  | 8  |
| 9  | 10 | 11 | 12 | 13 | 14 | 15 |
| 16 | 17 | 18 | 19 | 20 | 21 | 22 |
| 23 | 24 | 25 | 26 | 27 | 28 | 1  |
| 2  | 3  | 4  | 5  | 6  | 7  | 8  |

ВчераСегодняЗавтра

Show code

## Stories

### Playground

февраль 2026

| пн | вт | ср | чт | пт | сб | вс |
| -- | -- | -- | -- | -- | -- | -- |
| 26 | 27 | 28 | 29 | 30 | 31 | 1  |
| 2  | 3  | 4  | 5  | 6  | 7  | 8  |
| 9  | 10 | 11 | 12 | 13 | 14 | 15 |
| 16 | 17 | 18 | 19 | 20 | 21 | 22 |
| 23 | 24 | 25 | 26 | 27 | 28 | 1  |
| 2  | 3  | 4  | 5  | 6  | 7  | 8  |

ВчераСегодняЗавтра

Show code

### Default

февраль 2026

| пн | вт | ср | чт | пт | сб | вс |
| -- | -- | -- | -- | -- | -- | -- |
| 26 | 27 | 28 | 29 | 30 | 31 | 1  |
| 2  | 3  | 4  | 5  | 6  | 7  | 8  |
| 9  | 10 | 11 | 12 | 13 | 14 | 15 |
| 16 | 17 | 18 | 19 | 20 | 21 | 22 |
| 23 | 24 | 25 | 26 | 27 | 28 | 1  |
| 2  | 3  | 4  | 5  | 6  | 7  | 8  |

Show code
