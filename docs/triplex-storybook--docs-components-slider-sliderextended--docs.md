# triplex-storybook--docs-components-slider-sliderextended--docs

Source: https://storybook.triplex-dev.ru/main/?path=/docs/components-slider-sliderextended--docs

---

# SliderExtended

Расширенный компонент слайдера для создания кастомных конфигураций.

## Особенности

* **Гибкая конфигурация**: возможность создавать кастомные слайдеры с различными компонентами
* **Компоненты**: Rail, Track, Dot, Marks, Mark, Tooltip
* **Шаги**: настраиваемая длина шага или массив шагов
* **Состояния**: disabled, reverse
* **Кастомизация**: полный контроль над структурой и поведением слайдера

| Name     | Description                                                                                                                                                                                                                                                                                                                       | Default | Control |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- | ------- |
| disabled | Слайдер не активен.booleanundefined                                                                                                                                                                                                                                                                                               | \-      | \-      |
| max\*    | Максимальное значение слайдера.number                                                                                                                                                                                                                                                                                             | \-      | \-      |
| min\*    | Минимальное значение слайдера.number                                                                                                                                                                                                                                                                                              | \-      | \-      |
| reverse  | Реверсивный слайдер.booleanundefined                                                                                                                                                                                                                                                                                              | false   | \-      |
| step\*   | Длина шага, например при длине шага 1, с min-0\. max-100, слайдер будет разделен на 100 шагов. Вместо длины шага можно передать массив шагов, например \[0, 25, 50, 75, 100\]. Будет 3 возможные позиции между min и max. Начальное значение должно быть равно min, последнее значение должно быть равно max.number \| number\[\] | \-      | \-      |
| size\*   | Размер компонента.EComponentSize.MDEComponentSize.LG                                                                                                                                                                                                                                                                              | \-      | \-      |

value = 35

  
35

03566100

Show code

## Stories

### Playground

value = 35

  
35

03566100

Show code

### Default

Базовый пример использования SliderExtended с одним ползунком и метками.

value = 35

  
35

03566100

Show code

### Range

Пример использования SliderExtended для создания слайдера диапазона с двумя ползунками.

values = \[35, 60\]

  
03566100

Show code

### Range With Tooltip

Слайдер диапазона с тултипами для обоих ползунков.

values = \[35, 60\]

  
35

60

03566100

Show code

### With Custom Steps

SliderExtended с кастомными шагами. Ползунок может находиться только в определенных позициях.

value = 50

  
50

0255075100

Show code

### Without Tooltip

SliderExtended без тултипа.

value = 35

  
03566100

Show code

### Disabled

SliderExtended в состоянии disabled.

35

03566100

Show code

### Reverse

Реверсивный SliderExtended.

value = 35

  
35

03566100

Show code

### Amounts

Пример использования SliderExtended с нелинейной шкалой.

1 000 000

  
0 млн1 млн3 млн100 млн

Show code
