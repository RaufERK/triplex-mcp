# triplex-storybook--docs-components-stepper--docs

Source: https://storybook.triplex-dev.ru/main/?path=/docs/components-stepper--docs

---

# Stepper

Компонент Stepper для отображения последовательности шагов с возможностью навигации.

## Особенности

* **Навигация**: Поддержка горизонтальной прокрутки с кнопками навигации
* **Адаптивность**: Автоматическое выравнивание шагов на разных экранах
* **Доступность**: Поддержка ARIA атрибутов и клавиатурной навигации
* **Карусель**: Интегрированная карусель для удобной навигации по шагам

## Использование

Компонент принимает массив шагов и автоматически создает интерактивную навигацию.

1. Completed
2. Disabled
3. Success
4. Available

Show code

| Name           | Description                                     | Default         | Control                                                                    |
| -------------- | ----------------------------------------------- | --------------- | -------------------------------------------------------------------------- |
| steps\*        | Массив шагов для отображенияArray<IStepperStep> | \-              | RAWsteps :\[0 :{...} 5 keys1 :{...} 5 keys2 :{...} 5 keys3 :{...} 4 keys\] |
| size           | Размер степпераEStepperSize                     | EStepperSize.MD | Choose option...smmdlg                                                     |
| selectedStepId | ID выбранного шагаstring                        | \-              | step3                                                                      |

## Stories

### Playground

Интерактивная демонстрация Stepper. Позволяет настраивать список шагов, размер, а также контролировать текущий выбранный шаг.

1. Completed
2. Disabled
3. Success
4. Available

Show code

### Sizes

### Small (SM)

1. Completed
2. Disabled
3. Completed
4. Available
5. Disabled

### Medium (MD)

1. Completed
2. Disabled
3. Completed
4. Available
5. Disabled

### Large (LG)

1. Completed
2. Disabled
3. Completed
4. Available
5. Disabled

Show code

### Types

### Neutral

1. Completed
2. Disabled
3. Completed
4. In Progress
5. Available
6. Disabled

### Error

1. Completed
2. Disabled
3. Error

### Warning

1. Completed
2. Disabled
3. Warning

Show code

### With many steps (overflow)

### Small (SM)

1. In Progress
2. Disabled
3. Completed
4. Available
5. Disabled
6. Disabled
7. Available
8. Disabled
9. Disabled
10. Disabled
11. Disabled
12. Available
13. Disabled
14. Disabled
15. Disabled

### Medium (MD)

1. In Progress
2. Disabled
3. Completed
4. Available
5. Disabled
6. Disabled
7. Available
8. Disabled
9. Disabled
10. Disabled
11. Disabled
12. Available
13. Disabled
14. Disabled
15. Disabled

### Large (LG)

1. In Progress
2. Disabled
3. Completed
4. Available
5. Disabled
6. Disabled
7. Available
8. Disabled
9. Disabled
10. Disabled
11. Disabled
12. Available
13. Disabled
14. Disabled
15. Disabled

Show code

### StepperExtended

1. Completed
2. Completed
3. Completed
4. Completed
5. Completed
6. Completed
7. Completed
8. Completed
9. Completed
10. Completed
11. Completed
12. Completed
13. Completed
14. Completed
15. Completed
16. Completed
17. Completed
18. Completed
19. Completed
20. Completed
21. Completed
22. Completed
23. Completed
24. Completed
25. Completed
26. Completed
27. Completed
28. Completed
29. Completed
30. Completed
31. Completed
32. Completed
33. Completed
34. Completed
35. Completed
36. Completed
37. Completed
38. Completed
39. Completed
40. Completed
41. Completed
42. Completed
43. Completed
44. Completed
45. Completed
46. Completed
47. Completed
48. Completed
49. Completed
50. Completed
51. Completed
52. Completed
53. Completed
54. Completed
55. Completed
56. Completed
57. Completed
58. Completed
59. Completed
60. Completed
61. Completed
62. Completed
63. Completed
64. Completed
65. Completed
66. Completed
67. Completed
68. Completed
69. Completed
70. Completed
71. Completed
72. Completed
73. Completed
74. Completed
75. Completed
76. Completed
77. Completed
78. Completed
79. Completed
80. Completed
81. Completed
82. Completed
83. Completed
84. Completed
85. Completed
86. Completed
87. Completed
88. Completed
89. Completed
90. Completed
91. Completed
92. Completed
93. Completed
94. Completed
95. Completed
96. Completed
97. Completed
98. Completed
99. Completed
100. Completed

Show code
