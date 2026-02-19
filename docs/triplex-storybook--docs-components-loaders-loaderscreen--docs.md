# triplex-storybook--docs-components-loaders-loaderscreen--docs

Source: https://storybook.triplex-dev.ru/main/?path=/docs/components-loaders-loaderscreen--docs

---

# LoaderScreen

Лоадер виждет, закрывает контент и отображает лоадер в середине своей области.

## Особенности

* Для использования с loaderSmall необходимо передать тему и размер

## Использование

import { LoaderScreen } from '@sberbusiness/triplex-next';

// LoaderScreen с loaderSmall
<LoaderScreen type="small" theme={ELoaderSmallTheme.BRAND} size={ELoaderSmallSize.MD} />

// LoaderScreen с loaderMiddle
<LoaderScreen type="middle" />

Copy

Show code

| Name   | Description                                            | Default                 | Control                      |
| ------ | ------------------------------------------------------ | ----------------------- | ---------------------------- |
| type\* | Тип лоадера"small""middle"                             | \-                      | Choose option...smallmiddle  |
| theme  | Тема (только для типа small)ELoaderSmallThemeundefined | ELoaderSmallTheme.BRAND | Choose option...brandneutral |
| size   | Размер (только для типа small)EComponentSizeundefined  | EComponentSize.MD       | Choose option...smmdlg       |

## Stories

### Playground

Show code

### Small Loader

Show code

### Middle Loader

Show code
