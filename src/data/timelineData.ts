export interface TimelinePeriod {
  id: number;
  years: string;
  title: string;
  events: Array<{
    id: number;
    date: string;
    title: string;
    description: string;
  }>;
}

export const timelineData: { periods: TimelinePeriod[] } = {
  periods: [
    {
      id: 1,
      years: "1980-1986",
      title: "Технологии",
      events: [
        {
          id: 1,
          date: "1980",
          title: "Персональный компьютер",
          description: "Появление первых персональных компьютеров IBM PC"
        },
        {
          id: 2,
          date: "1981",
          title: "MS-DOS",
          description: "Выпуск операционной системы MS-DOS от Microsoft"
        },
        {
          id: 3,
          date: "1982",
          title: "Компакт-диск",
          description: "Выпуск первого коммерческого компакт-диска"
        },
        {
          id: 4,
          date: "1983",
          title: "Интернет",
          description: "Создание протокола TCP/IP - основы современного интернета"
        },
        {
          id: 5,
          date: "1984",
          title: "Apple Macintosh",
          description: "Выпуск первого компьютера Macintosh с графическим интерфейсом"
        },
        {
          id: 6,
          date: "1985",
          title: "Microsoft Windows",
          description: "Выпуск первой версии операционной системы Windows"
        }
      ]
    },
    {
      id: 2,
      years: "1987-1991",
      title: "Наука",
      events: [
        {
          id: 1,
          date: "1987",
          title: "Сверхпроводимость",
          description: "Открытие высокотемпературной сверхпроводимости"
        },
        {
          id: 2,
          date: "1988",
          title: "Озоновый слой",
          description: "Подписание Монреальского протокола по защите озонового слоя"
        },
        {
          id: 3,
          date: "1989",
          title: "Геном человека",
          description: "Начало проекта по расшифровке генома человека"
        },
        {
          id: 4,
          date: "1990",
          title: "Хаббл",
          description: "Запуск космического телескопа Хаббл"
        },
        {
          id: 5,
          date: "1991",
          title: "Web",
          description: "Создание World Wide Web в CERN"
        }
      ]
    },
    {
      id: 3,
      years: "1992-1997",
      title: "Медицина",
      events: [
        {
          id: 1,
          date: "1992",
          title: "Стволовые клетки",
          description: "Первые успешные эксперименты со стволовыми клетками"
        },
        {
          id: 2,
          date: "1993",
          title: "ДНК-чип",
          description: "Разработка первого ДНК-микрочипа для генетического анализа"
        },
        {
          id: 3,
          date: "1994",
          title: "Вакцины",
          description: "Создание новых методов производства вакцин"
        },
        {
          id: 4,
          date: "1995",
          title: "Генная терапия",
          description: "Первое применение генной терапии для лечения заболеваний"
        },
        {
          id: 5,
          date: "1996",
          title: "Клонирование",
          description: "Создание первого клонированного млекопитающего - овечки Долли"
        },
        {
          id: 6,
          date: "1997",
          title: "Протеомика",
          description: "Развитие протеомики как нового направления в медицине"
        }
      ]
    },
    {
      id: 4,
      years: "1998-2010",
      title: "Интернет",
      events: [
        {
          id: 1,
          date: "1998",
          title: "Google",
          description: "Основание компании Google"
        },
        {
          id: 2,
          date: "2001",
          title: "Wikipedia",
          description: "Запуск онлайн-энциклопедии Wikipedia"
        },
        {
          id: 3,
          date: "2003",
          title: "MySpace",
          description: "Создание социальной сети MySpace"
        },
        {
          id: 4,
          date: "2004",
          title: "Facebook",
          description: "Запуск социальной сети Facebook"
        },
        {
          id: 5,
          date: "2005",
          title: "YouTube",
          description: "Создание видеохостинга YouTube"
        },
        {
          id: 6,
          date: "2007",
          title: "iPhone",
          description: "Выпуск первого iPhone, революция в мобильных технологиях"
        }
      ]
    },
    {
      id: 5,
      years: "2015-2022",
      title: "Искусственный интеллект",
      events: [
        {
          id: 1,
          date: "2015",
          title: "Нейросети",
          description: "Прорыв в развитии глубоких нейронных сетей"
        },
        {
          id: 2,
          date: "2016",
          title: "AlphaGo",
          description: "ИИ AlphaGo побеждает чемпиона мира по го"
        },
        {
          id: 3,
          date: "2017",
          title: "Transformer",
          description: "Создание архитектуры Transformer для обработки языка"
        },
        {
          id: 4,
          date: "2018",
          title: "Беспилотные автомобили",
          description: "Массовое тестирование беспилотных автомобилей"
        },
        {
          id: 5,
          date: "2019",
          title: "BERT",
          description: "Развитие языковых моделей на основе BERT"
        },
        {
          id: 6,
          date: "2020",
          title: "GPT-3",
          description: "Выпуск языковой модели GPT-3"
        }
      ]
    },
    {
      id: 6,
      years: "2023-2025",
      title: "Будущие технологии",
      events: [
        {
          id: 1,
          date: "2023",
          title: "Квантовые компьютеры",
          description: "Создание первого коммерческого квантового компьютера"
        },
        {
          id: 2,
          date: "2023",
          title: "Метавселенная",
          description: "Развитие технологий виртуальной реальности нового поколения"
        },
        {
          id: 3,
          date: "2024",
          title: "Генная терапия",
          description: "Прорыв в лечении генетических заболеваний"
        },
        {
          id: 4,
          date: "2024",
          title: "Нейроинтерфейсы",
          description: "Разработка новых интерфейсов взаимодействия мозг-компьютер"
        },
        {
          id: 5,
          date: "2025",
          title: "Телемедицина",
          description: "Развитие дистанционных медицинских консультаций"
        },
        {
          id: 6,
          date: "2025",
          title: "Зеленые технологии",
          description: "Внедрение новых экологически чистых источников энергии"
        }
      ]
    }
  ]
};