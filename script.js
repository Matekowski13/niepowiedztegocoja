document.addEventListener('DOMContentLoaded', () => {
    // --- NOWA STRUKTURA PYTAŃ ---
    const questions = [
        // =============== ŚREDNIO TRUDNE ===============
        {
            question: "Wymień klub, który zdobył mistrzostwo Anglii w XXI wieku.",
            answers: ["Manchester United", "Arsenal", "Chelsea", "Manchester City", "Liverpool", "Leicester City"]
        },
        {
            question: "Podaj nazwisko brazylijskiego piłkarza, który wygrał Złotą Piłkę.",
            answers: ["Ronaldinho", "Ronaldo", "Kaká", "Rivaldo"]
        },
        {
            question: "Wymień klub, w którym grał Cristiano Ronaldo.",
            answers: ["Real Madryt", "Manchester United", "Juventus", "Sporting CP", "Al-Nassr"]
        },
        {
            question: "Podaj nazwisko piłkarza, który strzelił ponad 30 goli w jednym sezonie Premier League.",
            answers: ["Alan Shearer", "Cristiano Ronaldo", "Luis Suárez", "Mohamed Salah", "Erling Haaland", "Andy Cole"]
        },
        {
            question: "Wymień reprezentację, która wygrała Mistrzostwa Europy (EURO) więcej niż jeden raz.",
            answers: ["Niemcy", "Hiszpania", "Francja", "Włochy"]
        },
        {
            question: "Wymień afrykańskiego piłkarza, który grał w finale Ligi Mistrzów.",
            answers: ["Didier Drogba", "Samuel Eto'o", "Mohamed Salah", "Sadio Mané", "Riyad Mahrez", "Achraf Hakimi"]
        },
        {
            question: "Wymień polskiego piłkarza, który strzelił gola w fazie pucharowej Ligi Mistrzów.",
            answers: ["Robert Lewandowski", "Krzysztof Piątek", "Piotr Zieliński", "Jerzy Dudek"]
        },
        {
            question: "Podaj nazwisko trenera, który wygrał Premier League.",
            answers: ["Alex Ferguson", "Arsène Wenger", "José Mourinho", "Pep Guardiola", "Jürgen Klopp", "Claudio Ranieri"]
        },
        {
            question: "Wymień holenderskiego piłkarza, który grał w FC Barcelonie.",
            answers: ["Johan Cruyff", "Patrick Kluivert", "Frank de Boer", "Frenkie de Jong", "Memphis Depay"]
        },
        {
            question: "Podaj klub z Serie A, który ma w nazwie miasto, z którego pochodzi.",
            answers: ["AS Roma", "ACF Fiorentina", "SSC Napoli", "Genoa CFC", "Cagliari Calcio"]
        },

        // =============== TRUDNE ===============
        {
            question: "Wymień piłkarza, który zdobył Złotą Piłkę, grając w lidze włoskiej (Serie A).",
            answers: ["Pavel Nedvěd", "Andrij Szewczenko", "Fabio Cannavaro", "Kaká", "Lothar Matthäus", "Marco van Basten"]
        },
        {
            question: "Podaj nazwisko trenera, który wygrał Ligę Mistrzów więcej niż jeden raz.",
            answers: ["Carlo Ancelotti", "Zinedine Zidane", "Pep Guardiola", "José Mourinho", "Alex Ferguson", "Jupp Heynckes"]
        },
        {
            question: "Wymień klub spoza 'Wielkiej Piątki' lig, który grał w finale Ligi Mistrzów w XXI wieku.",
            answers: ["FC Porto", "Ajax Amsterdam", "AS Monaco", "Bayer Leverkusen"]
        },
        {
            question: "Podaj nazwisko piłkarza, który w swojej karierze grał zarówno dla Realu Madryt, jak i FC Barcelony.",
            answers: ["Luís Figo", "Ronaldo Nazario", "Michael Laudrup", "Samuel Eto'o", "Javier Saviola", "Gheorghe Hagi"]
        },
        {
            question: "Wymień bramkarza, który był nominowany do Złotej Piłki w XXI wieku.",
            answers: ["Gianluigi Buffon", "Manuel Neuer", "Iker Casillas", "Oliver Kahn", "Alisson Becker", "Thibaut Courtois"]
        },
        {
            question: "Podaj kraj, który był gospodarzem Mistrzostw Świata, ale nigdy ich nie wygrał.",
            answers: ["Meksyk", "Szwecja", "Szwajcaria", "Japonia", "USA", "RPA", "Rosja"]
        },
        {
            question: "Wymień piłkarza, który wygrał Ligę Mistrzów z co najmniej dwoma różnymi klubami.",
            answers: ["Clarence Seedorf", "Cristiano Ronaldo", "Toni Kroos", "Samuel Eto'o", "Marcel Desailly", "Xherdan Shaqiri"]
        },
        {
            question: "Podaj klub, który wygrał ligę angielską, ale nigdy nie wygrał Premier League (po 1992 r.).",
            answers: ["Leeds United", "Everton", "Aston Villa", "Tottenham Hotspur", "Derby County"]
        },
        {
            question: "Podaj nazwisko piłkarza, który zdobył nagrodę Golden Boy dla najlepszego młodego gracza w Europie.",
            answers: ["Kylian Mbappé", "Lionel Messi", "Wayne Rooney", "Erling Haaland", "Jude Bellingham", "Gavi"]
        },
        {
            question: "Podaj nazwisko włoskiego obrońcy, który wygrał Mistrzostwa Świata w 2006 roku.",
            answers: ["Fabio Cannavaro", "Marco Materazzi", "Gianluca Zambrotta", "Alessandro Nesta", "Gennaro Gattuso"]
        },

        // =============== BARDZO TRUDNE ===============
        {
            question: "Wymień członka drużyny 'Invincibles' Arsenalu z sezonu 2003/04.",
            answers: ["Thierry Henry", "Patrick Vieira", "Robert Pirès", "Dennis Bergkamp", "Sol Campbell", "Jens Lehmann"]
        },
        {
            question: "Podaj nazwisko piłkarza z byłej Jugosławii, który wygrał Złotą Piłkę.",
            answers: ["Luka Modrić"] // To pytanie jest wyjątkiem, tu jest tylko jedna odp., co czyni je bardzo trudnym w tej grze
        },
        {
            question: "Wymień klub, który zdobył mistrzostwo Niemiec, ale obecnie nie gra w Bundeslidze.",
            answers: ["1. FC Kaiserslautern", "Hamburger SV", "1. FC Nürnberg", "Eintracht Braunschweig", "TSV 1860 Monachium"]
        },
        {
            question: "Podaj nazwisko piłkarza, który zagrał w ponad 100 meczach Ligi Mistrzów, ale nigdy jej nie wygrał.",
            answers: ["Zlatan Ibrahimović", "Gianluigi Buffon", "Cesc Fàbregas", "Fernandinho", "Pavel Nedvěd"]
        },
        {
            question: "Wymień japońskiego piłkarza, który grał w jednym z top 5 klubów Serie A (Juventus, Milan, Inter, Roma, Napoli).",
            answers: ["Hidetoshi Nakata", "Shunsuke Nakamura", "Keisuke Honda", "Yuto Nagatomo", "Takehiro Tomiyasu"]
        },
        {
            question: "Wymień członka drużyny Manchesteru United, która zdobyła potrójną koronę w 1999 roku.",
            answers: ["David Beckham", "Ryan Giggs", "Peter Schmeichel", "Roy Keane", "Paul Scholes", "Andy Cole"]
        },
        {
            question: "Podaj nazwisko piłkarza, który zdobył mistrzostwo Anglii z dwoma różnymi klubami.",
            answers: ["N'Golo Kanté", "Riyad Mahrez", "James Milner", "Ashley Cole", "Nicolas Anelka", "Carlos Tevez"]
        },
        {
            question: "Podaj nazwisko trenera, który prowadził klub w finale Ligi Mistrzów, ale go nie wygrał.",
            answers: ["Arsène Wenger", "Diego Simeone", "Jürgen Klopp", "Mauricio Pochettino", "Héctor Cúper"]
        },
        {
            question: "Wymień amerykańskiego piłkarza, który grał w czołowej lidze europejskiej.",
            answers: ["Christian Pulisic", "Clint Dempsey", "Landon Donovan", "Tim Howard", "Weston McKennie"]
        },
        {
            question: "Podaj nazwisko piłkarza, który strzelił gola w El Clásico (Real-Barcelona) w XXI wieku.",
            answers: ["Lionel Messi", "Cristiano Ronaldo", "Raúl", "Samuel Eto'o", "Luis Suárez", "Karim Benzema"]
        },
    ];

    // --- ZAKTUALIZOWANA LOGIKA GRY ---

    const questionText = document.getElementById('question-text');
    const answerArea = document.getElementById('answer-area');
    const answerText = document.getElementById('answer-text');
    const otherAnswersContainer = document.getElementById('other-answers-container');
    const otherAnswersList = document.getElementById('other-answers-list');
    const mainButton = document.getElementById('main-button');
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');

    let currentQuestionIndex = 0;
    let gameStarted = false;
    let answerRevealed = false;
    let forbiddenAnswer = '';
    let otherAnswers = [];

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    
    // Na start tasujemy pytania, żeby nie były zawsze w tej samej kolejności
    shuffleArray(questions);

    function updateProgress() {
        const progress = gameStarted ? currentQuestionIndex + 1 : 0;
        const total = questions.length;
        progressBar.style.width = `${(progress / total) * 100}%`;
        progressText.textContent = `Pytanie ${progress} / ${total}`;
    }

    function displayQuestion() {
        // Ukryj stare odpowiedzi
        answerArea.classList.remove('visible');
        answerArea.classList.add('hidden');
        otherAnswersContainer.classList.remove('visible');
        otherAnswersContainer.classList.add('hidden');
        
        // Pobierz aktualne pytanie i jego możliwe odpowiedzi
        const currentQuestion = questions[currentQuestionIndex];
        const allAnswers = [...currentQuestion.answers]; // Kopiujemy, by nie modyfikować oryginału

        // Losuj "zakazaną" odpowiedź
        const randomIndex = Math.floor(Math.random() * allAnswers.length);
        forbiddenAnswer = allAnswers.splice(randomIndex, 1)[0]; // Wyjmij losowy element
        otherAnswers = allAnswers; // Reszta to inne poprawne odpowiedzi

        questionText.textContent = currentQuestion.question;
        answerText.textContent = forbiddenAnswer;
        
        mainButton.textContent = 'Pokaż moją odpowiedź';
        answerRevealed = false;
        updateProgress();
    }

    function revealAnswer() {
        // Pokaż zakazaną odpowiedź
        answerArea.classList.remove('hidden');
        setTimeout(() => answerArea.classList.add('visible'), 10);
        
        // Wyczyść i uzupełnij listę innych odpowiedzi
        otherAnswersList.innerHTML = '';
        if (otherAnswers.length > 0) {
            otherAnswers.forEach(answer => {
                const li = document.createElement('li');
                li.textContent = answer;
                otherAnswersList.appendChild(li);
            });
            otherAnswersContainer.classList.remove('hidden');
            setTimeout(() => otherAnswersContainer.classList.add('visible'), 10);
        }

        if (currentQuestionIndex < questions.length - 1) {
            mainButton.textContent = 'Następne pytanie';
        } else {
            mainButton.textContent = 'Zagraj jeszcze raz';
        }
        answerRevealed = true;
    }

    function handleButtonClick() {
        if (!gameStarted) {
            gameStarted = true;
            displayQuestion();
        } else if (answerRevealed) {
            currentQuestionIndex++;
            if (currentQuestionIndex >= questions.length) {
                currentQuestionIndex = 0; // reset i tasowanie na nowo
                shuffleArray(questions);
            }
            displayQuestion();
        } else {
            revealAnswer();
        }
    }

    mainButton.addEventListener('click', handleButtonClick);
    
    updateProgress();
});
