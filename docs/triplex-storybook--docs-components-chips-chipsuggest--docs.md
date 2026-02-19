# triplex-storybook--docs-components-chips-chipsuggest--docs

Source: https://storybook.triplex-dev.ru/main/?path=/docs/components-chips-chipsuggest--docs

---

# ChipSuggest

Компонент выбора одного значения из списка с возможностью фильтрации. Выбранное значение отображается в виде компонента Chip.

## Особенности:

* **Размеры**: small (SM), medium (MD), large (LG)

## Использование:

Компонент принимает массив опций и обрабатывает выбор через onChange. При выборе опции она отображается в Chip, а при клике на кнопку очистки вызывается clearSelected.

| Name                | Description                                                                                                    | Default | Control                |
| ------------------- | -------------------------------------------------------------------------------------------------------------- | ------- | ---------------------- |
| label\*             | Текст лейбла, который отображается над полем ввода.ReactNode                                                   | \-      | Set string             |
| displayedValue      | Лейбл, отображаемый вместо выбранного значения.ReactNode                                                       | \-      | Set string             |
| targetProps         | Свойства компонента Chip.IChipSuggestTargetProps<T> \| undefined                                               | \-      | \-                     |
| dropdownProps       | Свойства компонента Dropdown.IChipSuggestDropdownProps<T> \| undefined                                         | \-      | \-                     |
| onSelect\*          | Обработчик выбора элемента из списка.(value: T \| undefined) => void                                           | \-      | \-                     |
| value\*             | Выбранное значение.ISuggestOptionundefined                                                                     | \-      | \-                     |
| placeholder         | Текст подсказки.stringundefined                                                                                | \-      | Set string             |
| size\*              | Размер компонента.smmdlg                                                                                       | lg      | Choose option...smmdlg |
| loading             | Флаг состояния загрузки.booleanundefined                                                                       | \-      | Set boolean            |
| options\*           | Список значений.T\[\]                                                                                          | \-      | \-                     |
| noOptionsText       | Текст, отображаемый при отсутствии опций.stringundefined                                                       | \-      | Set string             |
| tooltipOpen         | Флаг управления видимостью Tooltip.booleanundefined                                                            | \-      | \-                     |
| dropdownListLoading | Флаг состояния загрукзи DropdownList.booleanundefined                                                          | \-      | \-                     |
| clearInputOnFocus   | Определяет, нужно ли очищать поле ввода при получении фокуса.booleanundefined                                  | \-      | Set boolean            |
| onFilter\*          | Обработчик фильтрации значений.(value: string) => void                                                         | \-      | \-                     |
| onScrollEnd         | Обработчик окончания скролла списка (доступные в данный момент элементы закончились).(() => void) \| undefined | \-      | \-                     |

## Stories

### Playground

Label

Show code

### Default

Label

Show code

### Sizes

SM

MD

LG

Show code

### States

Default

Selected

Disabled

Show code
