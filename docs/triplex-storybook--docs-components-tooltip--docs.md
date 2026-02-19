# triplex-storybook--docs-components-tooltip--docs

Source: https://storybook.triplex-dev.ru/main/?path=/docs/components-tooltip--docs

---

# Tooltip

Всплывающая подсказка с таргетом-иконкой.

## Использование

`Tooltip` состоит из таргета `Tooltip.Target` и содержимого `Tooltip.Body`. Можно добавить `Tooltip.Link` и `Tooltip.XButton`.

`toggleType` — `hover` или `click`, `preferPlace` — `above` | `below` | `left` | `right`, `size` — `sm` | `lg`.

Поддерживается адаптивный режим (отображение снизу и только по клику).

| Name                | Description                                                                                                                     | Default | Control |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------- | ------- |
| size\*              | Размер подсказки.ETooltipSize                                                                                                   | \-      | \-      |
| toggleType          | Подсказка должна появляться по наведению или по клику.TTooltipToggleTypeundefined                                               | \-      | \-      |
| preferPlace         | Предпочитаемое место расположения подсказки. Если не помещается, то отобразится там где помещается.ETooltipPreferPlaceundefined | \-      | \-      |
| alignTip            | Расположение указателя.ETooltipAlignundefined                                                                                   | \-      | \-      |
| renderContainer     | Элемент в который будет происходить рендер подсказки.Elementundefined                                                           | \-      | \-      |
| disableAdaptiveMode | Отключить режим адаптивности.booleanundefined                                                                                   | \-      | \-      |
| isOpen              | Признак открыт ли Tooltip.booleanundefined                                                                                      | \-      | \-      |
| toggle              | Контролирующая функция закрытия/открытия.((open: boolean) => void) \| undefined                                                 | \-      | \-      |
| onShow              | Callback-функция появления Tooltip.((node: HTMLDivElement) => void) \| undefined                                                | \-      | \-      |
| targetRef\*         | Ссылка на target-элемент.MutableRefObject<HTMLElement \| null>                                                                  | \-      | \-      |

Show code

## Stories

### Playground

Интерактивная площадка с контролами для размера, способа открытия и позиции.

Show code

### Default

Show code

### Different places

Примеры всех вариантов preferPlace.

above

below

left

right

Show code

### Mobile Header

Примеры тултипа с заголовком для адаптивного режима. В адаптиве открывается только по клику.

Show code

### Render container

!!Смотреть в отдельном окне (особенность разметки storybook)!! Примеры с render-ом в указанный контейнер (DOM-node). Предупреждение: position или transform контейнера или его родителей могут повлиять на позиционирование Tooltip.

Show code
