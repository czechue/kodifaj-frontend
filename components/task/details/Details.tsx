import React from 'react';
import { Task } from '../../../models/task/task.types';

interface TaskDetailsProps {
  solutions?: string[];
  tasks?: Task[];
  login?: string;
  photo?: string;
}

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
const TaskDetails: React.FC<TaskDetailsProps> = ({ solutions, tasks, login, photo }) => {
  return (
    <>
      <div className="max-w-8xl mx-auto px-4 pt-4">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-2/3 md:mr-4">
            <h3 className="text-4xl font-bold">Treść zadania</h3>
            {taskFields.map((item, index) => {
              return (
                <div key={index}>
                  <p className="font-bold py-4">{item.title}</p>
                  <ul className="list-outside list-disc px-12 max-w-3xl">
                    {item.listItems.map((listElement, index) => {
                      return (
                        <li key={index + 'aa'} className="py-2">
                          {listElement}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
          <div className="w-full md:w-1/3">b</div>
        </div>
      </div>
    </>
  );
};

export default TaskDetails;
