# triplex-storybook--docs-components-list-list--docs

Source: https://storybook.triplex-dev.ru/main/?path=/docs/components-list-list--docs

---

# List

Компонент List — контейнер для набора элементов. Поддерживает состояние загрузки, пустого списка, выбор элементов и сортировку (drag-and-drop).

| Name    | Description                                                                                                                         | Default | Control |
| ------- | ----------------------------------------------------------------------------------------------------------------------------------- | ------- | ------- |
| loading | Состояние загрузки. Используется при обновлении текущего списка новыми данными, например, после применения фильтра.booleanundefined | \-      | \-      |

## Stories

### Playground

Интерактивный пример списка. Управляйте состоянием loading через панель Storybook.

* Элемент списка
* Элемент списка
* Элемент списка

Show code

### Default

Базовый список.

* Элемент списка
* Элемент списка
* Элемент списка

Show code

### Loading

Список в состоянии загрузки.

* Элемент списка
* Элемент списка
* Элемент списка

Show code

### Empty State

Используется, если нет данных для отображения хотя бы одного элемента списка.

### Title text

Нет данных, но можно предложить какие-то действия для заполнения таблицы.Button NameButton Name

Show code

### Virtualized

Список с виртуализацией для работы с большими наборами данных. Рендерится только видимая область.

* List item 0
* List item 1
* List item 2
* List item 3
* List item 4
* List item 5
* List item 6
* List item 7
* List item 8
* List item 9
* List item 10
* List item 11

Show code

### Sortable

Список с возможностью сортировки элементов.

* List item 0
* List item 1
* List item 2
* List item 3
* List item 4
* List item 5
* List item 6
* List item 7
* List item 8
* List item 9

 To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item. Press space again to drop the item in its new position, or press escape to cancel.

Show code

### Sortable With Interactive Elements

Список с возможностью сортировки интерактивных элементов.

* List item 0
* List item 1
* List item 2
* List item 3
* List item 4
* List item 5
* List item 6
* List item 7
* List item 8
* List item 9

 To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item. Press space again to drop the item in its new position, or press escape to cancel.

Show code
