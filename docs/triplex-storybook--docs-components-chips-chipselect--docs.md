# triplex-storybook--docs-components-chips-chipselect--docs

Source: https://storybook.triplex-dev.ru/main/?path=/docs/components-chips-chipselect--docs

---

# ChipSelect

Компонент ChipSelect позволяет выбрать одно значение из списка опций. Выбранное значение отображается в виде компонента Chip.

## Особенности:

* **Размеры**: small (SM), medium (MD), large (LG)

## Использование:

Компонент принимает массив опций и обрабатывает выбор через onChange. При выборе опции она отображается в Chip, а при клике на кнопку очистки вызывается clearSelected.

| Name            | Description                                                                     | Default | Control |
| --------------- | ------------------------------------------------------------------------------- | ------- | ------- |
| clearSelected\* | () => void                                                                      | \-      | \-      |
| label           | ReactNode                                                                       | \-      | \-      |
| displayedValue  | ReactNode                                                                       | \-      | \-      |
| disabled        | Состояние disabled.booleanundefined                                             | \-      | \-      |
| onChange\*      | Обработчик изменения значения.(option: ISelectFieldOption) => void              | \-      | \-      |
| value           | Текущее выбранное значение.ISelectFieldOptionundefined                          | \-      | \-      |
| size\*          | EComponentSize                                                                  | \-      | \-      |
| onOpen          | Функция, срабатывающая при открытии выпадающего блока.(() => void) \| undefined | \-      | \-      |
| onClose         | Функция, срабатывающая при закрытии выпадающего блока.(() => void) \| undefined | \-      | \-      |
| options\*       | Список опций.ISelectFieldOption\[\]                                             | \-      | \-      |
| closeOnTab      | Закрытие выпадающего блока при нажатии клавиши Tab.booleanundefined             | \-      | \-      |

## Stories

### Playground

Выберите опцию

Show code

### Default

Выберите опцию

Show code

### Sizes

SM

MD

LG

Show code

### States

Default

Первая опция

Вторая опция

Show code

### With Custom Displayed Value

⭐ Первая опция

**Выбрано:** Первая опция (value: option1)  
**Отображается:** ⭐ Первая опция

Show code
