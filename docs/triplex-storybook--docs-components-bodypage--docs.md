# triplex-storybook--docs-components-bodypage--docs

Source: https://storybook.triplex-dev.ru/main/?path=/docs/components-bodypage--docs

---

# BodyPage

Компонент BodyPage — тело страницы/контейнера для контента.

## Возможности

* **Два типа**: `FIRST` — контент внутри Island (карточки), `SECOND` — контент без карточки
* **Вертикальные отступы**: поддержка `verticalMargin` с вариантами LARGE (24px) и SMALL (16px)
* **Гибкость**: можно передавать любой произвольный контент

| Name           | Description                                          | Default | Control                     |
| -------------- | ---------------------------------------------------- | ------- | --------------------------- |
| type\*         | Тип компонента BodyPageEBodyPageType                 | first   | Choose option...firstsecond |
| size           | Размер острова.EComponentSizeundefined               | \-      | \-                          |
| verticalMargin | Вертикальные отступы контентаEBodyPageVerticalMargin | large   | Choose option...largesmall  |
| children       | Контент страницыReact.ReactNode                      | \-      | \-                          |

## Stories

### Playground

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Show code

### Default

BodyPage типа FIRST — контент внутри карточки (Island).

BodyPage типа FIRST оборачивает контент в компонент Island (карточку) с белым фоном и тенью.

  
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

Show code

### Type Second

BodyPage типа SECOND — контент без карточки.

BodyPage типа SECOND отображает контент без карточки.

  
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

Show code

### With Vertical Margin Small

BodyPage с маленькими вертикальными отступами (SMALL = 16px).

BodyPage с уменьшенными вертикальными отступами (16px вместо 24px).

Show code
