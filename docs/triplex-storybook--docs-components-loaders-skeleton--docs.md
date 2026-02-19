# triplex-storybook--docs-components-loaders-skeleton--docs

Source: https://storybook.triplex-dev.ru/main/?path=/docs/components-loaders-skeleton--docs

---

# Skeleton

Элемент для визуализации содержимого, которое еще не загрузилось.

## Особенности

* **Типы**: Dark, Light
* Размер скелетона определяет родительский контейнер или переданный className

## Использование

import { Skeleton, ESkeletonType } from '@sberbusiness/triplex-next';

// Базовый скелетон
<Skeleton />

// Светлый скелетон
<Skeleton type={ESkeletonType.LIGHT} />

// Скелетон с переданным CSS классом
<Skeleton className="custom-skeleton" />

Copy

Show code

| Name | Description                | Default | Control                   |
| ---- | -------------------------- | ------- | ------------------------- |
| type | Тип скелетонаESkeletonType | dark    | Choose option...darklight |

## Stories

### Playground

Show code

### Default

Show code

### Light Background

Show code
