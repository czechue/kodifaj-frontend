import React from 'react';
import Description from './Description';
import renderer from 'react-test-renderer';

describe('Description component', () => {
  it('renders correctly', () => {
    const content =
      '# Zadanie "simple carousel"\n\nŹródło: https://github.com/czechue/kodifaj-tasks\n\n## Treść zadania\n\n1. Stwórz strukturę HTML widoku karuzeli oraz napisz odpowiednie reguły CSS, tak aby jak najdokładniej odwzorować wygląd przedstawiony na makiecie (patrz katalog `assets/1920x1080.png`).\n\n2. Akcje na stronie:\n\n    1. Toggle button "Arrows" - pokazuje bądź ukrywa strzałki nawigacyjne karuzeli. (Niewidoczny w najmniejszej rozdzielczości).\n    \n    2. Kliknięcie w strzałki przesuwa obrazy odpowiednio w lewo lub prawo.\n    \n    3. Karuzelę można przewijać w nieskończoność (tzw. infinite carousel).\n\n    4. Przyciski pod karuzelą są przypisane na stałe do kolejnych obrazów i robią się aktywne (ciemno-niebieskie) w momencie gdy odpowiedni obraz znajduje się w środku karuzeli.\n    \n    5. Środkowy obraz jest  zawsze powiększony.\n    \n    6. Klik w obraz inny niż środkowy - ustawia go w środku karuzeli.\n    \n3. Nice to have (poziom zaawansowany)\n    \n    1. Kilk w obraz środkowy wyświetla go na warstwie. Obraz główny jest lekko powięszony, pozostałe proporcjonalnie zmniejszone. Zamknięcie modala - po kliknięciu drugi raz w dowolny obszar strony.\n    \n    2. Zmiany obrazów są animowane.\n    \n    3. Karuzela jest w pełni "dostępna", może być obsługiwana tylko za pomocą klawiatury.\n    \n    4. Projekt posiada 100% code coverage.\n\n## Uwagi\n    \n*   Nie korzystaj z frameworków CSS (bootstrap etc.) ani JS (react, angular, vue etc.)\n\n*   Makiety są tylko poglądowe, odwzorowanie nie musi być pixel-perfect.\n\n*   Użyty font to `Poppins`.\n ```js\n\n var React = require(\'react\');\n\n var Markdown = require(\'react-markdown\');\n\n ```';
    const tree = renderer.create(<Description content={content} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
