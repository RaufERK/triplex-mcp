# triplex-storybook--docs-components-islandwidget--docs

Source: https://storybook.triplex-dev.ru/main/?path=/docs/components-islandwidget--docs

---

# IslandWidget

Визуально обособленный блок, предназначенный для представления сгруппированной информации, набора связанных действий или определенной функциональности.

## Особенности

* В адаптивном режиме можно отключить сворачивание контента с помощью свойства **disableAdaptiveCollapsing**. По умолчанию контент отображается в свернутом состоянии.

## Состав

* Header — шапка контента
* Body — основной контент
* Footer — нижняя часть
* ExtraFooter — дополнительная нижняя часть

## Props

### IslandWidget

| Name                      | Description                                                                         | Default |
| ------------------------- | ----------------------------------------------------------------------------------- | ------- |
| renderBody\*              | Рендер-функция Body.(props: IIslandWidgetBodyProps) => ReactNode                    | \-      |
| renderFooter              | Рендер-функция Footer.((props: IIslandWidgetFooterProps) => ReactNode) \| undefined | \-      |
| renderHeader\*            | Рендер-функция Header.(props: IIslandWidgetHeaderProps) => ReactNode                | \-      |
| disableAdaptiveCollapsing | Отключение возможности сворачивания контента в адаптиве.booleanundefined            | \-      |

### IslandWidget.ExtraFooter

| Name | Description                                          | Default |
| ---- | ---------------------------------------------------- | ------- |
| open | Контролируемое состояние открытости.booleanundefined | false   |

## Playground

### Title

дд.мм.гггг

Description

Content

Link text

Button textButton text

| Name                      | Description                                                             | Default   | Control |
| ------------------------- | ----------------------------------------------------------------------- | --------- | ------- |
| disableAdaptiveCollapsing | Отключение возможности сворачивания контента в адаптивеbooleanundefined | FalseTrue |         |

## Stories

### Default

### Title

дд.мм.гггг

Description

Content

Link text

Button textButton text

Show code

### Without Footer

### Title

Description

Content

Show code

### With Footer And Extra Footer

IslandWidget с Footer и ExtraFooter.

Open Extra FooterClose Extra Footer

### Title

Description

Content

Link text

Button textButton text

Extra footer content

Show code

### Without Footer And With Extra Footer

IslandWidget с ExtraFooter без Footer.

Open Extra FooterClose Extra Footer

### Title

Description

Content

Extra footer content

Show code

### With Extra Footer And Island Widget Height

IslandWidget с ExtraFooter и передачей высоты для IslandWidgetWrapper.

Open Extra FooterClose Extra Footer

### Title

Description

Content

Extra footer content

Show code
