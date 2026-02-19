# triplex-storybook--docs-components-lightbox-lightboxwithsideoverlay--docs

Source: https://storybook.triplex-dev.ru/main/?path=/docs/components-lightbox-lightboxwithsideoverlay--docs

---

# LightBoxWithSideOverlay

Пример **LightBoxWithSideOverlay** отображает крупный контент поверх страницы. Структура включает заголовок, тело, футер и дополнительные оверлеи.

## Props

| Name                        | Description                                                                         | Default           |
| --------------------------- | ----------------------------------------------------------------------------------- | ----------------- |
| focusTrapProps              | Свойства FocusTrap. Используется npm-пакет focus-trap-react.FocusTrapPropsundefined | \-                |
| isLoading                   | Состояние загрузки.booleanundefined                                                 | \-                |
| loadingTitle                | Текст под спиннером.ReactNode                                                       | \-                |
| isTopLevelSideOverlayOpened | Открыт другой SideOverlay поверх текущего.booleanundefined                          | \-                |
| isTopOverlayOpened          | Открыт TopOverlay в текущем SideOverlay.booleanundefined                            | \-                |
| size                        | Размер компонента.EComponentSizeundefined                                           | EComponentSize.MD |
| onOpen                      | Обработчик открытия оверлея.(() => void) \| undefined                               | \-                |
| onClose                     | Обработчик закрытия оверлея.(() => void) \| undefined                               | \-                |
| opened\*                    | Оверлей открыт.boolean                                                              | \-                |

## Stories

### Default

Открыть LightBox

Show code

### Loading

Открыть LightBox

Show code
