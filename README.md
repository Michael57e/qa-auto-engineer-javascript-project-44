### Hexlet tests and linter status:
[![Actions Status](https://github.com/Michael57e/qa-auto-engineer-javascript-project-44/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/Michael57e/qa-auto-engineer-javascript-project-44/actions)

[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=Michael57e_qa-auto-engineer-javascript-project-44&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=Michael57e_qa-auto-engineer-javascript-project-44)

## Description
Brain Gemes - это серия игр с разными правилами, в которых игрок должен ответить правильно на 3 вопроса подряд. Если игрок дает неверный ответ, игра заканчивается, а игрок может сделать очередную попытку. Количество попыток не ограничено.

## Requirements
* Unix system (MacOS/Linux)
* Node.js 13.2 and higher

## Setup
Склонируйте репозиторий:
```
git clone git@github.com:Michael57e/qa-auto-engineer-javascript-project-44.git
```

Из корневой папки проекта установить зависимости:
```
npm install
```

Запустить проект:
```
npm start
```

Команды для запуска конкретной игры приведены в описании игр.

## Brain Even
Суть игры в следующем: пользователю показывается случайное число. И ему нужно ответить yes, если число чётное, или no — если нечётное.

### Run game
```
brain-even
```

[![asciicast](https://asciinema.org/a/xnGjhZ5kQXaHREkfxL1gQThiR.svg)](https://asciinema.org/a/xnGjhZ5kQXaHREkfxL1gQThiR)

## Brain Calc
Суть игры в следующем: пользователю показывается случайное математическое выражение, например 35 + 16, которое нужно вычислить и записать правильный ответ.

### Run game
```
brain-calc
```

[![asciicast](https://asciinema.org/a/0Qp0SBrF6oVx5djcfAp1UXj8W.svg)](https://asciinema.org/a/0Qp0SBrF6oVx5djcfAp1UXj8W)

## Brain GCD
Суть игры в следующем: пользователю показывается два случайных числа, например, 25 50. Пользователь должен вычислить и ввести наибольший общий делитель этих чисел.

### Run game
```
brain-gcd
```

[![asciicast](https://asciinema.org/a/nP0uI7dz54y5BVvA2rY9Fk58g.svg)](https://asciinema.org/a/nP0uI7dz54y5BVvA2rY9Fk58g)

## Brain Progression
Показываем игроку ряд чисел, образующий арифметическую прогрессию, заменив любое из чисел двумя точками. Игрок должен определить это число.

### Run game
```
brain-progression
```

[![asciicast](https://asciinema.org/a/FwJq0UlMtfHyl7DVNShYaGBFR.svg)](https://asciinema.org/a/FwJq0UlMtfHyl7DVNShYaGBFR)

## Brain Prime
Простое число - это число, отличное от 1 и делится без остатка только на 1 и на само себя.

### Run game
```
brain-prime
```

[![asciicast](https://asciinema.org/a/t0trPd1FIhLsnQtUDbw7MiXxu.svg)](https://asciinema.org/a/t0trPd1FIhLsnQtUDbw7MiXxu)
