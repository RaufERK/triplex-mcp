# triplex-storybook--docs-components-pagination--docs

Source: https://storybook.triplex-dev.ru/main/?path=/docs/components-pagination--docs

---

# Pagination

Компонент пагинации для отображения списка.

## Props

### Pagination

| Name                        | Description                                                          | Default |
| --------------------------- | -------------------------------------------------------------------- | ------- |
| paginationSelectProps       | Свойства компонента PaginationSelect.IPaginationSelectPropsundefined | \-      |
| paginationNavigationProps\* | Свойства компонента PaginationNavigation.IPaginationNavigationProps  | \-      |

### PaginationNavigation

| Name                  | Description                                                                                             | Default   |    |
| --------------------- | ------------------------------------------------------------------------------------------------------- | --------- | -- |
| buttonNextProps       | Свойства кнопки "Следующая страница".Omit<IPaginationNavigationButtonProps, "children" \| "direction">  | undefined | \- |
| buttonPrevProps       | Свойства кнопки "Предыдущая страница".Omit<IPaginationNavigationButtonProps, "children" \| "direction"> | undefined | \- |
| currentPage\*         | Номер текущей страницы.number                                                                           | \-        |    |
| onCurrentPageChange\* | Функция при смене страницы.(currentPage: number) => void                                                | \-        |    |
| totalPages\*          | Общее число страниц.number                                                                              | \-        |    |
| boundaryCount         | Количество всегда видимых страниц в начале и в конце.numberundefined                                    | 0         |    |
| siblingCount          | Количество всегда видимых страниц по краям текущей страницы.numberundefined                             | 0         |    |

### PaginationSelect

| Name                      | Description                                                                                                  | Default      |    |
| ------------------------- | ------------------------------------------------------------------------------------------------------------ | ------------ | -- |
| paginationLabel\*         | Текст лейбла пагинации.ReactNode                                                                             | \-           |    |
| onChange\*                | Обработчик изменения значения.(option: ISelectFieldOption) => void                                           | \-           |    |
| status                    | Визуальное состояние.EFormFieldStatusundefined                                                               | \-           |    |
| placeholder               | Текст или компонент, отображающий выбранное placeholder.ReactNode                                            | \-           |    |
| onOpen                    | Функция, срабатывающая при открытии выпадающего блока.(() => void) \| undefined                              | \-           |    |
| onClose                   | Функция, срабатывающая при закрытии выпадающего блока.(() => void) \| undefined                              | \-           |    |
| loading                   | Состояние загрузки.booleanundefined                                                                          | \-           |    |
| options\*                 | Список опций.ISelectFieldOption\[\]                                                                          | \-           |    |
| closeOnTab                | Закрытие выпадающего блока при нажатии клавиши Tab.booleanundefined                                          | \-           |    |
| targetProps\*             | Свойства, передающиеся в SelectExtendedField.Target.Omit<ISelectExtendedFieldTargetProps, "size" \| "opened" | "setOpened"> | \- |
| dropdownListItemClassName | ClassName передающийся в DropdownListItem.stringundefined                                                    | \-           |    |
| mobileTitle               | Название Select отображающееся в мобильном режиме.ReactNode                                                  | \-           |    |
| value                     | Текущее выбранное значение.ISelectFieldOption                                                                | \-           |    |

## Playground

Интерактивная демонстрация Pagination. В данном примере Pagination.Select не влияет на количество страниц, т.к. totalPages задается напрямую через панель controls.

Показать на странице:

10

* 1
* 2
* ...

| Name            | Description                                         | Default               | Control               |
| --------------- | --------------------------------------------------- | --------------------- | --------------------- |
| currentPage     | Текущая страницаnumber                              | 1                     |                       |
| totalPages      | Общее количество страницnumber                      | 10                    |                       |
| boundaryCount   | Количество видимых страниц в начале и в концеnumber | 0                     |                       |
| siblingCount    | Количество видимых соседей около текущейnumber      | 0                     |                       |
| hidden          | Скрывать селект количества элементовboolean         | false                 | FalseTrue             |
| paginationLabel | Лейбл селекта количества элементовstring            | Показать на странице: | Показать на странице: |

## Stories

### Default

* 1
* 2
* ...

Show code

### With Select Field

Показать на странице:

10

* 1
* ...
* 6
* 7
* 8
* ...
* 30

Show code

### Extended

Для компоновки кастомной пагинации используется компонент PaginationExtended.

* 1
* 2
* 3
* 4
* 5
* ...
* 30

Показать на странице:

10

Show code
