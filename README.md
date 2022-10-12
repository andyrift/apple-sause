# AppleSause

## Описание
Торговая площадка по типу Юлы или Авито упрощенном исполнении
## Наименование
AppleSause
## Предметная область
Любые товары или услуги, которые разместят пользователи
## Данные
- Пользователи
- Роли
- Рейтинги
- Личные сообщения
- Объявления
- Категории
- Избранные объявления
## Для каждого элемента данных - ограничения
- Объявление обязательно имеет категорию (есть категория uncategorized которая не рассматривается при сортировке по категориям)
- Категория обязательно имеет категорию (если категория категории - uncategorized то эта категория первична)
- Рейтинг целое число от 1 до 5 (средний рейтинг вещественный)
## Общие ограничения целостности
- Категории нельзя редактировать никому кроме разработчиков
- Каждый пользователь может редактировать только свои объявления (за исключением администраторов)
- Личные сообщения между двумя пользователями доступны только этим двум пользователям
## Пользовательские роли
- Гость
  - может просматривать объявления
- Зарегистрированный пользователь 
  - может всё что может гость
  - может публиковать объявления
  - может снимать объявления с публикации
  - может помечать объявления как завершенные
  - может добавлять любые открытые объявления в избранное
  - может писать и получать личные сообщения
- Администратор
  - может всё что может зарегистрированный пользователь
  - может удалять чужие объявления
  - может блокировать пользователей
## UI / API 
## Технологии разработки
  - Язык программирования
    - HTML
    - CSS
    - JavaScript
  - СУБД
    - postgreSQL
## Тестирование
