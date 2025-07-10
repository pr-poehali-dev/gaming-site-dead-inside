import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("all");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const filteredGames = featuredGames.filter((game) => {
    const matchesSearch =
      game.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      game.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGenre =
      selectedGenre === "all" || game.genre.toLowerCase() === selectedGenre;
    return matchesSearch && matchesGenre;
  });

  return (
    <div className="min-h-screen bg-[#1A1A1A] text-white">
      {/* Navigation */}
      <nav className="bg-black border-b border-gray-800 sticky top-0 z-50 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Icon
                name="Skull"
                size={24}
                className="text-[#D32F2F] animate-pulse-glow"
              />
              <span className="text-xl font-bold font-oswald text-white">
                DEAD INSIDE GAMING
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <Button
                variant="ghost"
                className="text-white hover:text-[#D32F2F] transition-all duration-300 hover:scale-105"
              >
                Главная
              </Button>
              <Button
                variant="ghost"
                className="text-white hover:text-[#D32F2F] transition-all duration-300 hover:scale-105"
              >
                Каталог игр
              </Button>
              <Button
                variant="ghost"
                className="text-white hover:text-[#D32F2F] transition-all duration-300 hover:scale-105"
              >
                Обзоры
              </Button>
              <Button
                variant="ghost"
                className="text-white hover:text-[#D32F2F] transition-all duration-300 hover:scale-105"
              >
                Сообщество
              </Button>
            </div>
            <div className="flex items-center space-x-4">
              <Button className="bg-[#D32F2F] hover:bg-[#B71C1C] text-white transition-all duration-300 hover:scale-105">
                Войти
              </Button>
              <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="md:hidden text-white"
                  >
                    <Icon name="Menu" size={24} />
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="bg-black border-gray-800 text-white"
                >
                  <div className="flex flex-col space-y-4 mt-8">
                    <Button
                      variant="ghost"
                      className="text-white hover:text-[#D32F2F] justify-start"
                    >
                      Главная
                    </Button>
                    <Button
                      variant="ghost"
                      className="text-white hover:text-[#D32F2F] justify-start"
                    >
                      Каталог игр
                    </Button>
                    <Button
                      variant="ghost"
                      className="text-white hover:text-[#D32F2F] justify-start"
                    >
                      Обзоры
                    </Button>
                    <Button
                      variant="ghost"
                      className="text-white hover:text-[#D32F2F] justify-start"
                    >
                      Сообщество
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-black to-gray-900 py-24 animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-6xl font-bold font-oswald mb-6 text-white">
              DEAD INSIDE
              <span className="block text-[#D32F2F] animate-pulse-glow">
                GAMING
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Погружайтесь в мрачный мир игр, где каждый пиксель пропитан
              атмосферой
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
              <Button className="bg-[#D32F2F] hover:bg-[#B71C1C] text-white px-8 py-3 text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#D32F2F]/20">
                <Icon name="Gamepad2" size={20} className="mr-2" />
                Каталог игр
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black px-8 py-3 text-lg transition-all duration-300 hover:scale-105"
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
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-12">
            <h2 className="text-3xl font-bold text-white animate-fade-in">
              Популярные игры
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <div className="flex gap-2">
                <Input
                  placeholder="Поиск игр..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="bg-black border-gray-700 text-white placeholder:text-gray-400 focus:border-[#D32F2F] transition-all duration-300"
                />
                <Select value={selectedGenre} onValueChange={setSelectedGenre}>
                  <SelectTrigger className="bg-black border-gray-700 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-black border-gray-700 text-white">
                    <SelectItem value="all">Все жанры</SelectItem>
                    <SelectItem value="horror">Horror</SelectItem>
                    <SelectItem value="action">Action</SelectItem>
                    <SelectItem value="rpg">RPG</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button
                variant="outline"
                className="border-[#D32F2F] text-[#D32F2F] hover:bg-[#D32F2F] hover:text-white transition-all duration-300"
              >
                Все игры
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredGames.map((game, index) => (
              <Card
                key={game.id}
                className="bg-black border-gray-800 hover:border-[#D32F2F] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#D32F2F]/20 group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={game.image}
                      alt={game.title}
                      className="w-full h-48 object-cover rounded-t-lg transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
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
                  <CardTitle className="text-white mb-2 group-hover:text-[#D32F2F] transition-colors">
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
            <h2 className="text-3xl font-bold text-white animate-fade-in">
              Последние обзоры
            </h2>
            <Button
              variant="outline"
              className="border-[#D32F2F] text-[#D32F2F] hover:bg-[#D32F2F] hover:text-white transition-all duration-300"
            >
              Все обзоры
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reviews.map((review, index) => (
              <Card
                key={review.id}
                className="bg-black border-gray-800 hover:border-[#D32F2F] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#D32F2F]/20 group animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-white group-hover:text-[#D32F2F] transition-colors">
                      {review.game}
                    </CardTitle>
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
                    className="border-[#D32F2F] text-[#D32F2F] hover:bg-[#D32F2F] hover:text-white transition-all duration-300"
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
            <h2 className="text-3xl font-bold text-white mb-4 animate-fade-in">
              Сообщество
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Присоединяйтесь к нашему мрачному сообществу геймеров и делитесь
              своими впечатлениями
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "Users",
                title: "Форум",
                desc: "Обсуждения игр и стратегии",
              },
              {
                icon: "Trophy",
                title: "Турниры",
                desc: "Соревнования и чемпионаты",
              },
              {
                icon: "MessageCircle",
                title: "Чат",
                desc: "Общение в реальном времени",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="bg-black border-gray-800 text-center hover:border-[#D32F2F] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#D32F2F]/20 group animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8">
                  <Icon
                    name={item.icon as any}
                    size={48}
                    className="text-[#D32F2F] mx-auto mb-4 transition-transform duration-300 group-hover:scale-110"
                  />
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#D32F2F] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{item.desc}</p>
                  <Button className="bg-[#D32F2F] hover:bg-[#B71C1C] text-white transition-all duration-300 hover:scale-105">
                    {index === 0
                      ? "Перейти"
                      : index === 1
                        ? "Участвовать"
                        : "Войти"}
                  </Button>
                </CardContent>
              </Card>
            ))}
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
                  <a
                    href="#"
                    className="hover:text-[#D32F2F] transition-colors"
                  >
                    Каталог игр
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#D32F2F] transition-colors"
                  >
                    Обзоры
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#D32F2F] transition-colors"
                  >
                    Новости
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#D32F2F] transition-colors"
                  >
                    Гайды
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Сообщество</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-[#D32F2F] transition-colors"
                  >
                    Форум
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#D32F2F] transition-colors"
                  >
                    Discord
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#D32F2F] transition-colors"
                  >
                    Турниры
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#D32F2F] transition-colors"
                  >
                    Рейтинги
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Связь</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-[#D32F2F] transition-colors"
                  >
                    Контакты
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#D32F2F] transition-colors"
                  >
                    Реклама
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#D32F2F] transition-colors"
                  >
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
