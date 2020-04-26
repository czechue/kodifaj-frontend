import { NextApiRequest, NextApiResponse } from 'next';
import { Task } from '../../models/task.types';

const dummyRes = [
  {
    images: [
      'https://images.unsplash.com/photo-1445358952072-12e33523825c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=400',
      'https://images.unsplash.com/photo-1426901555017-389235de7b0d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=400',
      'https://images.unsplash.com/photo-1445359179985-460648949e10?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=400',
    ],
    tips: ['testowa wskazówka', 'no elo'],
    tags: ['html', 'css', 'js'],
    _solutions: ['5e15022ccafcb4869c153e61', '5e164f31cafcb4869c153e62'],
    _id: '5e14e877fa42402079e38e44',
    title: 'Prosta Karuzela - test1 5',
    repo: 'https://github.com/czechue/kodifaj/projects/1',
    content:
      '# Zadanie "simple carousel"\n\nŹródło: https://github.com/czechue/kodifaj-tasks\n\n## Treść zadania\n\n1. Stwórz strukturę HTML widoku karuzeli oraz napisz odpowiednie reguły CSS, tak aby jak najdokładniej odwzorować wygląd przedstawiony na makiecie (patrz katalog `assets/1920x1080.png`).\n\n2. Akcje na stronie:\n\n    1. Toggle button "Arrows" - pokazuje bądź ukrywa strzałki nawigacyjne karuzeli. (Niewidoczny w najmniejszej rozdzielczości).\n    \n    2. Kliknięcie w strzałki przesuwa obrazy odpowiednio w lewo lub prawo.\n    \n    3. Karuzelę można przewijać w nieskończoność (tzw. infinite carousel).\n\n    4. Przyciski pod karuzelą są przypisane na stałe do kolejnych obrazów i robią się aktywne (ciemno-niebieskie) w momencie gdy odpowiedni obraz znajduje się w środku karuzeli.\n    \n    5. Środkowy obraz jest  zawsze powiększony.\n    \n    6. Klik w obraz inny niż środkowy - ustawia go w środku karuzeli.\n    \n3. Nice to have (poziom zaawansowany)\n    \n    1. Kilk w obraz środkowy wyświetla go na warstwie. Obraz główny jest lekko powięszony, pozostałe proporcjonalnie zmniejszone. Zamknięcie modala - po kliknięciu drugi raz w dowolny obszar strony.\n    \n    2. Zmiany obrazów są animowane.\n    \n    3. Karuzela jest w pełni "dostępna", może być obsługiwana tylko za pomocą klawiatury.\n    \n    4. Projekt posiada 100% code coverage.\n\n## Uwagi\n    \n*   Nie korzystaj z frameworków CSS (bootstrap etc.) ani JS (react, angular, vue etc.)\n\n*   Makiety są tylko poglądowe, odwzorowanie nie musi być pixel-perfect.\n\n*   Użyty font to `Poppins`.\n',
    _user: {
      _id: '5e007403fd4ca4f47df69913',
      login: 'czechue',
      photo: 'https://avatars1.githubusercontent.com/u/21274642?v=4',
    },
    createdAt: '2020-01-07T20:22:15.153Z',
  },
  {
    images: ['https://source.unsplash.com/user/erondu/400x300'],
    tips: [],
    tags: ['html', 'js', 'css'],
    _solutions: [],
    _id: '5e71418dd109d66eb32715d7',
    title: 'Super trudne zadanie - nierozwionrzesz',
    repo: 'https://github.com/czechue/kodifaj/projects/1',
    content: 'Na tym żeby je **rozwiązać**.',
    _user: {
      _id: '5e007403fd4ca4f47df69913',
      login: 'czechue',
      photo: 'https://avatars1.githubusercontent.com/u/21274642?v=4',
    },
    createdAt: '2020-03-17T21:30:53.031Z',
  },
];

export default (req: NextApiRequest, res: NextApiResponse<Task[]>): void => {
  res.status(200).json(dummyRes);
};
