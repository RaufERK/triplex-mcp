# triplex-storybook--docs-components-tagcolor--docs

Source: https://storybook.triplex-dev.ru/main/?path=/docs/components-tagcolor--docs

---

# TagColor

Компонент, который используется для маркировки и классификации.

## Особенности

* Размеры - small (SM), medium (MD), large (LG)
* Статусы - default(по умолчанию), success, info, warning, error

## Использование

import { TagColor } from '@sberbusiness/triplex-next';   

<TagColor size={EComponentSize.LG} status={ETagColorStatus.SUCCESS}>Tag text</TagColor>

Copy

| Name     | Description                     | Default                 | Control                                        |
| -------- | ------------------------------- | ----------------------- | ---------------------------------------------- |
| size\*   | Размер компонентаEComponentSize | \-                      | Choose option...smmdlg                         |
| status   | СтатусETagColorStatusundefined  | ETagColorStatus.DEFAULT | Choose option...defaultsuccessinfowarningerror |
| children | Текст тегаstring                | \-                      | Tag text                                       |

## Stories

### Playground

Tag text

Show code

### Default

Тег без выбранного статуса.

Tag text

Show code

### Different Sizes

Теги разных размеров: small (SM), medium (MD), large (LG).

Tag textTag textTag text

Show code

### Different Statuses

Теги с разными цветовыми статусами: default(по умолчанию), success, info, warning, error.

Tag textTag textTag textTag textTag text

Show code

### With overflow

Тег с длинным текстом, который обрезается многоточием.

Very long tag text that should be truncated with ellipsis

Show code
