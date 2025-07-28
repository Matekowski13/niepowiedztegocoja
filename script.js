document.addEventListener('DOMContentLoaded', () => {
    // --- Tutaj możesz dodawać lub zmieniać pytania ---
    const questions = [
        {
            question: "Wymień zdobywcę Złotej Piłki, który nigdy nie wygrał Ligi Mistrzów.",
            answer: "Pavel Nedvěd"
        },
        {
            question: "Podaj nazwę klubu, w którym grał zarówno Zlatan Ibrahimović, jak i Ronaldo Nazario.",
            answer: "Inter Mediolan"
        },
        {
            question: "Wymień reprezentację, która przegrała finał Mistrzostw Świata co najmniej trzy razy.",
            answer: "Holandia"
        },
        {
            question: "Podaj nazwisko menedżera, który wygrał Premier League z więcej niż jednym klubem.",
            answer: "José Mourinho"
        },
        {
            question: "Wymień piłkarza, który zdobył ponad 100 bramek w Lidze Mistrzów.",
            answer: "Lionel Messi"
        }
    ];

    // Elementy strony
    const questionText = document.getElementById('question-text');
    const answerArea = document.getElementById('answer-area');
    const answerText = document.getElementById('answer-text');
    const mainButton = document.getElementById('main-button');
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');

    let currentQuestionIndex = 0;
    let gameStarted = false;
    let answerRevealed = false;

    // Funkcja do aktualizacji paska postępu
    function updateProgress() {
        const progress = gameStarted ? currentQuestionIndex + 1 : 0;
        const total = questions.length;
        progressBar.style.width = `${(progress / total) * 100}%`;
        progressText.textContent = `Pytanie ${progress} / ${total}`;
    }

    // Funkcja do wyświetlania pytania
    function displayQuestion() {
        answerArea.classList.remove('visible');
        answerArea.classList.add('hidden');
        
        const currentQuestion = questions[currentQuestionIndex];
        questionText.textContent = currentQuestion.question;
        answerText.textContent = currentQuestion.answer;
        
        mainButton.textContent = 'Pokaż moją odpowiedź';
        answerRevealed = false;
        updateProgress();
    }

    // Funkcja do pokazania odpowiedzi
    function revealAnswer() {
        answerArea.classList.remove('hidden');
        setTimeout(() => answerArea.classList.add('visible'), 10); // Małe opóźnienie dla płynności animacji
        
        if (currentQuestionIndex < questions.length - 1) {
            mainButton.textContent = 'Następne pytanie';
        } else {
            mainButton.textContent = 'Zagraj jeszcze raz';
        }
        answerRevealed = true;
    }

    // Funkcja obsługująca kliknięcie głównego przycisku
    function handleButtonClick() {
        if (!gameStarted) {
            // Start gry
            gameStarted = true;
            displayQuestion();
        } else if (answerRevealed) {
            // Przejście do następnego pytania lub restart
            currentQuestionIndex++;
            if (currentQuestionIndex >= questions.length) {
                currentQuestionIndex = 0; // reset
            }
            displayQuestion();
        } else {
            // Pokazanie odpowiedzi
            revealAnswer();
        }
    }

    mainButton.addEventListener('click', handleButtonClick);
    
    // Inicjalizacja
    updateProgress();
});