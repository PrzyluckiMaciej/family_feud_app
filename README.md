<h1>Family Feud App</h1>
<a href="#pol">Wersja polska</a><br><br>

The app was created with the use of the React library. It can be used to host a Family Feud style game.

<h3>How to play:</h3>
One person is the game host - they're the only one who interacts with the app directly. This person's role is to present the questions, uncover answers, award points and add X's when a contestant has answered wrong. The rest of the players are contestants tasked with answering the questions.

<h3>Starting the app:</h3>
To start the app type <i>npm start</i> in the terminal (make sure you're in the <i>family_feud_app</i> directory). All of the data (questions, answers and players) is kept in the browser's local storage, so it will prevail after closing the app. After launching the app two buttons will be visible:

- The question mark button - adds a new question card filled with default data.
- The plus button - shows a form that adds a new player. Each player must have a unique name.

<h3>Players:</h3>

- Trash button - deletes the player.
- Plus button - adds 1 point. Clicking on the point count brings them back down to 0.
- Minus button - adds one X (up to 3). Clicking on the name clears the X's.

<h3>Question Cards:</h3>

- Each question has 8 answers by default.
- Clicking on an answer reveals it.
- To delete the question card, click the trash button in the top right corner.
- To edit the question card, click the pencil button to the left of the trash button.
- Clicking the pencil button enables Edit Mode, which allows you to edit the question and the answers.
- To disable an answer from showing you can leave it empty (for example a question could only have 5 answers assigned, then the last 3 answers should be left empty). Empty answers will no longer have a number displayed outside of the Edit Mode.
- The question is required, it cannot be left empty.

<br><h1 id="pol">Aplikacja Familiada</h1>

Aplikacja została utworzona przy pomocy biblioteki React. Można jej używać do poprowadzenia gry w stylu Familiady.

<h3>Jak grać:</h3>
Jedna osoba jest gospodarzem - tylko ona wchodzi w bezpośrednią interakcję z aplikacją. Jej zadaniem jest prezentacja pytań, odsłanianie odpowiedzi, przydzielanie punktów i dodawanie krzyżyków w przypadku nieprawidłowej odpowiedzi. Reszta graczy to uczestnicy, których zadaniem jest odpowiadanie na pytania

<h3>Uruchamianie aplikacji:</h3>
Aby uruchomić aplikację należy wpisać <i>npm start</i> w terminalu (upewnij się, że jesteś w folderze <i>family_feud_app</i>). Wszystkie dane (pytania, odpowiedzi i gracze) są przechowywane w local storage w przeglądarce, więc zostaną zachowane po zamknięciu aplikacji. Po uruchomieniu aplikacji widoczne będą dwa przyciski:

- Przycisk z pytajnikiem - dodaje nową kartę z pytaniem wypełnioną domyślnymi danymi.
- Przycisk z plusem - wyświetla formularz dodający nowego gracza. Każdy gracz musi posiadać unikalną nazwę.

<h3>Gracze:</h3>

- Przycisk kosza - usuwa gracza.
- Przycisk plus - dodaje 1 punkt. Kliknięcie licznika punktów wyzeruje je.
- Przycisk minus - dodaje 1 krzyżyk (maksymalnie można dodać 3). Kliknięcie nazwy gracza usuwa wszystkie krzyżyki.

<h3>Karty z pytaniami:</h3>

- Każde pytanie domyślnie posiada 8 odpowiedzi.
- Kliknięcie na odpowiedź odsłania ją.
- Aby usunąć kartę z pytaniem, należy kliknąć na ikonę kosza w prawym górnym rogu.
- Aby edytować kartę z pytaniem, należy kliknąć na ikonę ołówka na lewo od ikony kosza.
- Kliknięcie ikony ołówka włącza tryb edycji, który pozwala na edycję pytania i odpowiedzi.
- Aby wyłączyć wyświetlanie odpowiedzi należy pozostawić ją pustą (na przykład jeśli pytanie ma 5 przypisanych odpowiedzi, to należy pozostawić 3 ostatnie odpowiedzi puste). Puste odpowiedzi nie będą miały wyświetlanego numeru poza trybem edycji.
- Pytanie jest wymagane, nie może pozostać puste.