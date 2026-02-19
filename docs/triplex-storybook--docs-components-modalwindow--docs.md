# triplex-storybook--docs-components-modalwindow--docs

Source: https://storybook.triplex-dev.ru/main/?path=/docs/components-modalwindow--docs

---

# ModalWindow

Компонент **ModalWindow** отображает модальное окно поверх страницы с затемнённым фоном.

## Возможности

* **Размеры**: SM, MD, LG
* **Состояние загрузки**: отображение лоадера поверх контента
* **Фокус-ловушка**: фокус остаётся внутри модального окна
* **Закрытие по Escape**: автоматическое закрытие при нажатии Escape

## Структура

* `ModalWindow` — основной компонент
* `ModalWindowContent` — контейнер контента
* `ModalWindowHeader` — заголовок
* `ModalWindowBody` — тело
* `ModalWindowFooter` — футер
* `ModalWindowClose` — кнопка закрытия

Открыть модальное окно

Show code

| Name                              | Description                                         | Default | Control                |
| --------------------------------- | --------------------------------------------------- | ------- | ---------------------- |
| Hide Состояния itemsСостояния     | Hide Состояния items                                |         |                        |
| isLoading                         | Показать состояние загрузки модального окна.boolean | false   | FalseTrue              |
| Hide Внешний вид itemsВнешний вид | Hide Внешний вид items                              |         |                        |
| size                              | Размер модального окна.EComponentSize               | MD      | Choose option...smmdlg |

## Stories

### Playground

Интерактивный пример модального окна. Управляйте состояниями через панель Storybook.

Открыть модальное окно

Show code

### Sizes

Примеры модальных окон разных размеров: SM, MD и LG.

SM

MD

LG

Show code

### With Long Content

Пример модального окна с длинным контентом и прилипающими заголовком и футером.

Открыть с длинным контентом

Show code

### Loading State

Пример модального окна в состоянии загрузки.

Открыть с загрузкой

Show code
