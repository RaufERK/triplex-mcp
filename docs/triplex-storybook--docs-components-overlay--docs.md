# triplex-storybook--docs-components-overlay--docs

Source: https://storybook.triplex-dev.ru/main/?path=/docs/components-overlay--docs

---

# Overlay

Компонент Overlay — затемняющий слой с выезжающей панелью из выбранной стороны контейнера/страницы.

## Возможности

* **Расположение панели**: RIGHT, LEFT, TOP, BOTTOM
* **Режимы позиционирования**: relative (по родителю) и fixed (на всю страницу)
* **События**: opening, open, closing, close
* **Доступность**: кликабельная маска, управление с клавиатуры в содержимом панели

| Name        | Description                                                    | Default | Control                            |
| ----------- | -------------------------------------------------------------- | ------- | ---------------------------------- |
| direction\* | Расположение панелиEOverlayDirection                           | \-      | Choose option...rightlefttopbottom |
| fixed       | Фиксированное позиционирование на всю страницуbooleanundefined | \-      | FalseTrue                          |
| opened\*    | Состояние открытостиboolean                                    | \-      | FalseTrue                          |
| label       | Текст кнопки открытияstring                                    | \-      | Открыть оверлей                    |

Открыть оверлей

Содержимое оверлея

Закрыть

Show code

## Stories

### Playground

Интерактивная демонстрация Overlay: выбор направления, fixed и состояния opened.

Открыть оверлей

Содержимое оверлея

Закрыть

Show code

### Directions

Примеры всех направлений выезжающей панели.

RIGHT

Открыть

Панель (RIGHT)

Закрыть

LEFT

Открыть

Панель (LEFT)

Закрыть

TOP

Открыть

Панель (TOP)

Закрыть

BOTTOM

Открыть

Панель (BOTTOM)

Закрыть

Show code

### Fixed

Fixed-оверлей занимает всю страницу поверх контента.

Открыть fixed оверлей

Оверлей на всю страницу (fixed)

Закрыть

Show code
