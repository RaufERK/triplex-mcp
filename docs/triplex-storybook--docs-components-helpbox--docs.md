# triplex-storybook--docs-components-helpbox--docs

Source: https://storybook.triplex-dev.ru/main/?path=/docs/components-helpbox--docs

---

# HelpBox

Иконка помощи с всплывающей подсказкой.

* **Размеры тултипа**: SM, LG
* **Расположение**: above, below, left, right
* **Мобильный заголовок**: отдельная зона для мобильной версии

## Props

| Name                  | Description                                                                                                                     | Default |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------- |
| focusTrapProps        | Свойства FocusTrap. Используется npm-пакет focus-trap-react.FocusTrapPropsundefined                                             | \-      |
| tooltipAriaAttributes | Aria-атрибуты Tooltip.TAriaHTMLAttributesundefined                                                                              | \-      |
| tooltipDataAttributes | Data-атрибуты Tooltip.TDataHTMLAttributesundefined                                                                              | \-      |
| tooltipSize\*         | Размер Tooltip.ETooltipSize                                                                                                     | \-      |
| mobileHeaderContent   | Контент заголовка TooltipMobile.ReactNode                                                                                       | \-      |
| iconProps             | Свойства иконки.ISingleColorIconPropsundefined                                                                                  | \-      |
| isOpen                | Признак открыт ли Tooltip.booleanundefined                                                                                      | \-      |
| preferPlace           | Предпочитаемое место расположения подсказки. Если не помещается, то отобразится там где помещается.ETooltipPreferPlaceundefined | \-      |
| onShow                | Callback-функция появления Tooltip.((node: HTMLDivElement) => void) \| undefined                                                | \-      |
| toggle                | Контролирующая функция закрытия/открытия.((open: boolean) => void) \| undefined                                                 | \-      |

## Playground

| Name             | Description                                   | Default                   | Control                             |
| ---------------- | --------------------------------------------- | ------------------------- | ----------------------------------- |
| tooltipSize\*    | Размер тултипаETooltipSize                    | ETooltipSize.SM           | Choose option...smlg                |
| preferPlace      | Предпочтительное положениеETooltipPreferPlace | ETooltipPreferPlace.ABOVE | Choose option...abovebelowrightleft |
| contentText      | Текст в теле подсказкиstring                  | Текст подсказки           | Текст подсказки                     |
| mobileHeaderText | Текст мобильного заголовкаstring              | Заголовок подсказки       | Заголовок подсказки                 |

## Stories

### Default

Базовый HelpBox c тултипом большого размера.

Show code

### Sizes

Демонстрация размеров тултипа: SM и LG.

Show code

### Placement

Варианты расположения тултипа относительно иконки HelpBox.

above

below

left

right

Show code

### With Mobile Header

Пример использования мобильного заголовка у тултипа.

Show code

### Controlled

Пример контролируемого состояния HelpBox через свойства isOpen/toggle.

ОткрытьЗакрыть

Show code

### Change Icon Props

Изменение свойства iconProps для изменения цвета иконки.

Show code
