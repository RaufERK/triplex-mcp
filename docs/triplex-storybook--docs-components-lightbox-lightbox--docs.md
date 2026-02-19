# triplex-storybook--docs-components-lightbox-lightbox--docs

Source: https://storybook.triplex-dev.ru/main/?path=/docs/components-lightbox-lightbox--docs

---

# LightBox

Компонент **LightBox** отображает крупный контент поверх страницы. Структура включает заголовок, тело, футер и дополнительные оверлеи. Если контента мало, рекомендуется использовать Page.Body типа FIRST, чтобы не было пустого пространства. Если контента много, рекомендуется использовать Page.Body типа SECOND, и внутри него использовать несколько Island.

## Props

| Name                      | Description                                                                                                                | Default                         | Control |    |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------- | ------- | -- |
| focusTrapProps            | Свойства FocusTrap. Используется npm-пакет focus-trap-react.FocusTrapPropsundefined                                        | \-                              | \-      |    |
| forwardRef                | Ref на контейнер LightBox.MutableRefObject<HTMLElement \| null>                                                            | undefined                       | \-      | \- |
| mountNode                 | DOM-нода в которую будет рендерится лайтбокс.HTMLDivElementundefined                                                       | \-                              | \-      |    |
| lightBoxViewManagerNodeId | Идентификатор DOM-элемента, в визуальных границах (левая и правая координата) которого рендерится лайтбокс.stringundefined | LightBox-next-view-manager-node | \-      |    |
| isLoading                 | Флаг состояния загрузки.booleanundefined                                                                                   | \-                              | \-      |    |
| isSideOverlayOpened       | Флаг открытия боковой панели.booleanundefined                                                                              | \-                              | \-      |    |
| isTopOverlayOpened        | Флаг открытия верхней панели.booleanundefined                                                                              | \-                              | \-      |    |

## Playground

Открыть LightBox

| Name                            | Description                                                  | Default | Control   |
| ------------------------------- | ------------------------------------------------------------ | ------- | --------- |
| Hide Состояния itemsСостояния   | Hide Состояния items                                         |         |           |
| isLoading                       | Показать состояние загрузки LightBox.boolean                 | false   | FalseTrue |
| Hide Содержимое itemsСодержимое | Hide Содержимое items                                        |         |           |
| showControls                    | Отображать навигационные кнопки LightBox.Controls.boolean    | true    | FalseTrue |
| Hide Контент itemsКонтент       | Hide Контент items                                           |         |           |
| stickyHeader                    | Использовать sticky-позиционирование для Page.Header.boolean | true    | FalseTrue |
| stickyFooter                    | Использовать sticky-позиционирование для Page.Footer.boolean | true    | FalseTrue |

## Stories

### Default

Базовая конфигурация LightBox с активными контролами и липкими шапкой и футером.

Открыть LightBox

Show code

### Small Content

Базовая конфигурация LightBox с активными контролами и липкими шапкой и футером.

Открыть LightBox

Show code

### Split Mode

Конфигурация LightBox в режиме split-mode. LightBox занимает 90% ширины экрана и располагается по центру. DOM-элемент с идентификатором LightBox-next-view-manager-node-example используется для позиционирования LightBox. Граница этого элемента равна границам LightBox.

Открыть LightBox

Show code
