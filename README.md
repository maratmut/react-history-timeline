# React History Timeline

Интерактивное веб-приложение для просмотра исторических событий на временной шкале. Проект разработан с использованием React, TypeScript и GSAP для анимаций.

## Особенности

- Интерактивная круговая навигация по историческим периодам
- Анимированные переходы между периодами
- Слайдер событий для каждого исторического периода
- Плавные анимации с использованием GSAP
- Типизация с помощью TypeScript

## Технологии

- React
- TypeScript
- SCSS
- GSAP (для анимаций)
- Swiper (для слайдера)

## Установка

1. Клонируйте репозиторий:
```bash
git clone https://github.com/your-username/react-history-timeline.git
```

2. Перейдите в директорию проекта:
```bash
cd react-history-timeline
```

3. Установите зависимости:
```bash
npm install
```

## Запуск

Для запуска проекта в режиме разработки:

```bash
npm start
```

Приложение будет доступно по адресу [http://localhost:3000](http://localhost:3000)

## Сборка

Для создания production-сборки:

```bash
npm run build
```

Собранные файлы будут находиться в директории `build`

## Структура проекта

```
src/
  ├── components/
  │   └── HistoricalTimeline/
  │       ├── HistoricalTimeline.tsx
  │       ├── HistoricalTimeline.scss
  │       ├── EventsSlider.tsx
  │       └── EventsSlider.scss
  ├── data/
  │   └── timelineData.ts
  ├── App.tsx
  └── index.tsx
```

## Лицензия

MIT
