import React from 'react';
import ReactMarkdown from 'react-markdown';
import CodeBlock from '../../../shared/code-block/CodeBlock';

const taskFields = [
  {
    title: 'Akcje na stronie:',
    listItems: [
      "Toggle button 'Arrows' - pokazuje bądź ukrywa strzałki nawigacyjne karuzeli. (Niewidoczny w najmniejszej rozdzielczości).",
      'Kliknięcie w strzałki przesuwa obrazy odpowiednio w lewo lub prawo.',
      'Karuzelę można przewijać w nieskończoność (tzw. infinite carousel).',
      'Przyciski pod karuzelą są przypisane na stałe do kolejnych obrazów i robią się aktywne (ciemno-niebieskie) w momencie gdy odpowiedni obraz znajduje się w środku karuzeli.',
      'Środkowy obraz jest zawsze powiększony.',
      'Klik w obraz inny niż środkowy - ustawia go w środku karuzeli.',
    ],
  },
  {
    title: 'Nice to have (poziom zaawansowany):',
    listItems: [
      'Kilk w obraz środkowy wyświetla go na warstwie. Obraz główny jest lekko powięszony, pozostałe proporcjonalnie zmniejszone. Zamknięcie modala - po kliknięciu drugi raz w dowolny obszar strony.',
      'Zmiany obrazów są animowane.',
      'Karuzela jest w pełni "dostępna", może być obsługiwana tylko za pomocą klawiatury.',
      'Projekt posiada 100% code coverage.',
    ],
  },
  {
    title: 'Uwagi:',
    listItems: [
      'Nie korzystaj z frameworków CSS (bootstrap etc.) ani JS (react, angular, vue etc.)',
      'Makiety są tylko poglądowe, odwzorowanie nie musi być pixel-perfect.',
      'Użyty font to Poppins.',
    ],
  },
];

interface DescriptionProps {
  content: string;
}

const Description: React.FC<DescriptionProps> = ({ content }) => {
  return (
    <section className="task-description" data-testid="task-desctiption">
      <ReactMarkdown
        source={content}
        renderers={{
          code: CodeBlock,
        }}
      />
    </section>
  );
};

export default Description;
