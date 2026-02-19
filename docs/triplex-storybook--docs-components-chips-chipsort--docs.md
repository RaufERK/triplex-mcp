# triplex-storybook--docs-components-chips-chipsort--docs

Source: https://storybook.triplex-dev.ru/main/?path=/docs/components-chips-chipsort--docs

---

# ChipSort

ChipSelect с иконкой выбора сортировки.

## Особенности

* **Размеры**: SM, MD, LG.
* Элемент отображается как selected, если выбранное значение (value) отличается от свойства defaultValue.

| Name           | Description                                                                                                                                      | Default | Control |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------- | ------- |
| defaultValue   | Дефолтное значение, если текущее значение равно дефолтному, элемент не будет подсвечен как измененный.ISelectExtendedFieldDefaultOptionundefined | \-      | \-      |
| onChange\*     | Обработчик изменения значения.(option: ISelectFieldOption) => void                                                                               | \-      | \-      |
| disabled       | Состояние disabled.booleanundefined                                                                                                              | \-      | \-      |
| value          | Текущее выбранное значение.ISelectFieldOptionundefined                                                                                           | \-      | \-      |
| label          | ReactNode                                                                                                                                        | \-      | \-      |
| size\*         | EComponentSize                                                                                                                                   | \-      | \-      |
| onOpen         | Функция, срабатывающая при открытии выпадающего блока.(() => void) \| undefined                                                                  | \-      | \-      |
| onClose        | Функция, срабатывающая при закрытии выпадающего блока.(() => void) \| undefined                                                                  | \-      | \-      |
| options\*      | Список опций.ISelectFieldOption\[\]                                                                                                              | \-      | \-      |
| closeOnTab     | Закрытие выпадающего блока при нажатии клавиши Tab.booleanundefined                                                                              | \-      | \-      |
| displayedValue | ReactNode                                                                                                                                        | \-      | \-      |

Show code

## Stories

### Playground

Show code

### Default

Show code

### Different Sizes

Show code
