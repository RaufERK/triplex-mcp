# triplex-storybook--docs-components-mediawidth--docs

Source: https://storybook.triplex-dev.ru/main/?path=/docs/components-mediawidth--docs

---

# MediaWidth

Компонент, который рендерит элементы в зависимости от ширины окна браузера.

## Особенности

* Позволяет задавать минимальную ширину экрана, максимальную ширину экрана или их одновременно.
* Если не задана ни минимальная, ни максимальная ширина экрана - всегда будет отображаться fallback.

## Использование

import { MediaWidth } from '@sberbusiness/triplex-next';

<MediaWidth minWidth={EScreenWidth.MD_MIN} maxWidth={EScreenWidth.LG_MAX}>
    <div>Контент для экранов от 768px до 1199px</div>
</MediaWidth>

Copy

| Name       | Description                                                                                                                | Default | Control                                                    |
| ---------- | -------------------------------------------------------------------------------------------------------------------------- | ------- | ---------------------------------------------------------- |
| minWidth   | Минимальная ширина экрана, при которой будут отрендерены children.EScreenWidthundefined                                    | \-      | Choose option...575px576px767px768px991px992px1199px1200px |
| maxWidth   | Максимальная ширина экрана, при которой будут отрендерены children.EScreenWidthundefined                                   | \-      | Choose option...575px576px767px768px991px992px1199px1200px |
| children\* | Элементы, которые рендерятся, когда ширина окна браузера попадает в диапазон minWidth и/или maxWidth.React.ReactElement    | \-      | Set string                                                 |
| fallback\* | Элементы, которые рендерятся, когда ширина окна браузера не попадает в диапазон minWidth и/или maxWidth.React.ReactElement | \-      | Set string                                                 |

Контент виден только на экранах шириной от 768px до 1199px включительно

Show code

## Stories

### Between Width

Заданы максимальная и минимальная допустимая ширина - minWidth и maxWidth. Контент отображается на экранах, чья ширина находится в диапазоне от 768px до 1199px включительно.

Контент виден только на экранах шириной от 768px до 1199px включительно

Show code

### Min Width

Задана только минимальная необходимая ширина - minWidth. Контент отображается на экранах шириной 768px и более.

Контент виден только на экранах шириной 768px и более

Show code

### Max Width

Задана только максимальная допустимая ширина - maxWidth. Контент отображается на экранах шириной до 767px включительно.

Контент виден только на экранах шириной до 1199px включительно

Show code

### Fallback

Не указаны ни minWidth, ни maxWidth. В этом случае всегда отображается fallback.

Fallback отображается всегда

Show code

### Mobile View

Контент переключается между мобильной (экран шириной менее 768px) и десктоп (экран шириной 768px и более) версиями.

Десктоп контент

Show code
