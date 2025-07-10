import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const featuredGames = [
    {
      id: 1,
      title: "Shadow Realm",
      genre: "Horror",
      rating: 9.2,
      image:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop",
      description: "Погружение в мрачный мир теней и страха",
    },
    {
      id: 2,
      title: "Blood Brothers",
      genre: "Action",
      rating: 8.7,
      image:
        "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop",
      description: "Эпичная битва за выживание",
    },
    {
      id: 3,
      title: "Dark Souls IV",
      genre: "RPG",
      rating: 9.5,
      image:
        "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=400&h=300&fit=crop",
      description: "Возвращение легендарной серии",
    },
  ];

  const reviews = [
    {
      id: 1,
      game: "Cyberpunk 2077",
      rating: 8.5,
      author: "DeadGamer",
      date: "2 дня назад",
      preview:
        "Наконец-то игра стала такой, какой должна была быть с самого начала...",
    },
    {
      id: 2,
      game: "Resident Evil 4",
      rating: 9.0,
      author: "HorrorFan",
      date: "5 дней назад",
      preview:
        "Ремейк превзошел все ожидания. Атмосфера страха передана идеально...",
    },
  ];

  return (
    <div className="min-h-screen bg-[#1A1A1A] text-white">
      {/* Navigation */}
      <nav className="bg-black border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Skull" size={24} className="text-[#D32F2F]" />
              <span className="text-xl font-bold font-oswald text-white">
                DEAD INSIDE GAMING
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <Button
                variant="ghost"
                className="text-white hover:text-[#D32F2F]"
              >
                Главная
              </Button>
              <Button
                variant="ghost"
                className="text-white hover:text-[#D32F2F]"
              >
                Каталог игр
              </Button>
              <Button
                variant="ghost"
                className="text-white hover:text-[#D32F2F]"
              >
                Обзоры
              </Button>
              <Button
                variant="ghost"
                className="text-white hover:text-[#D32F2F]"
              >
                Сообщество
              </Button>
            </div>
            <Button className="bg-[#D32F2F] hover:bg-[#B71C1C] text-white">
              Войти
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-black to-gray-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-6xl font-bold font-oswald mb-6 text-white">
              DEAD INSIDE
              <span className="block text-[#D32F2F]">GAMING</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Погружайтесь в мрачный мир игр, где каждый пиксель пропитан
              атмосферой
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-[#D32F2F] hover:bg-[#B71C1C] text-white px-8 py-3 text-lg">
                <Icon name="Gamepad2" size={20} className="mr-2" />
                Каталог игр
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black px-8 py-3 text-lg"
              >
                <Icon name="Users" size={20} className="mr-2" />
                Сообщество
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Games */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-white">Популярные игры</h2>
            <Button
              variant="outline"
              className="border-[#D32F2F] text-[#D32F2F] hover:bg-[#D32F2F] hover:text-white"
            >
              Все игры
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredGames.map((game) => (
              <Card
                key={game.id}
                className="bg-black border-gray-800 hover:border-[#D32F2F] transition-colors"
              >
                <CardHeader className="p-0">
                  <img
                    src={game.image}
                    alt={game.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <Badge
                      variant="secondary"
                      className="bg-[#D32F2F] text-white"
                    >
                      {game.genre}
                    </Badge>
                    <div className="flex items-center space-x-1">
                      <Icon
                        name="Star"
                        size={16}
                        className="text-yellow-500 fill-current"
                      />
                      <span className="text-white font-semibold">
                        {game.rating}
                      </span>
                    </div>
                  </div>
                  <CardTitle className="text-white mb-2">
                    {game.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    {game.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-white">Последние обзоры</h2>
            <Button
              variant="outline"
              className="border-[#D32F2F] text-[#D32F2F] hover:bg-[#D32F2F] hover:text-white"
            >
              Все обзоры
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reviews.map((review) => (
              <Card
                key={review.id}
                className="bg-black border-gray-800 hover:border-[#D32F2F] transition-colors"
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-white">{review.game}</CardTitle>
                    <div className="flex items-center space-x-1">
                      <Icon
                        name="Star"
                        size={16}
                        className="text-yellow-500 fill-current"
                      />
                      <span className="text-white font-semibold">
                        {review.rating}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <span>{review.author}</span>
                    <span>•</span>
                    <span>{review.date}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{review.preview}</p>
                  <Button
                    variant="outline"
                    className="border-[#D32F2F] text-[#D32F2F] hover:bg-[#D32F2F] hover:text-white"
                  >
                    Читать полностью
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Сообщество</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Присоединяйтесь к нашему мрачному сообществу геймеров и делитесь
              своими впечатлениями
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-black border-gray-800 text-center">
              <CardContent className="p-8">
                <Icon
                  name="Users"
                  size={48}
                  className="text-[#D32F2F] mx-auto mb-4"
                />
                <h3 className="text-xl font-bold text-white mb-2">Форум</h3>
                <p className="text-gray-400 mb-4">Обсуждения игр и стратегии</p>
                <Button className="bg-[#D32F2F] hover:bg-[#B71C1C] text-white">
                  Перейти
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-black border-gray-800 text-center">
              <CardContent className="p-8">
                <Icon
                  name="Trophy"
                  size={48}
                  className="text-[#D32F2F] mx-auto mb-4"
                />
                <h3 className="text-xl font-bold text-white mb-2">Турниры</h3>
                <p className="text-gray-400 mb-4">Соревнования и чемпионаты</p>
                <Button className="bg-[#D32F2F] hover:bg-[#B71C1C] text-white">
                  Участвовать
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-black border-gray-800 text-center">
              <CardContent className="p-8">
                <Icon
                  name="MessageCircle"
                  size={48}
                  className="text-[#D32F2F] mx-auto mb-4"
                />
                <h3 className="text-xl font-bold text-white mb-2">Чат</h3>
                <p className="text-gray-400 mb-4">Общение в реальном времени</p>
                <Button className="bg-[#D32F2F] hover:bg-[#B71C1C] text-white">
                  Войти
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Skull" size={24} className="text-[#D32F2F]" />
                <span className="text-xl font-bold text-white">
                  DEAD INSIDE
                </span>
              </div>
              <p className="text-gray-400">
                Мрачный мир игр для истинных ценителей атмосферы
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Разделы</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-[#D32F2F]">
                    Каталог игр
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#D32F2F]">
                    Обзоры
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#D32F2F]">
                    Новости
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#D32F2F]">
                    Гайды
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Сообщество</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-[#D32F2F]">
                    Форум
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#D32F2F]">
                    Discord
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#D32F2F]">
                    Турниры
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#D32F2F]">
                    Рейтинги
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Связь</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-[#D32F2F]">
                    Контакты
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#D32F2F]">
                    Реклама
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#D32F2F]">
                    Поддержка
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Dead Inside Gaming. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
