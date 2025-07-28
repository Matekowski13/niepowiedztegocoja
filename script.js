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
        {
            question: "Podaj nazwisko piłkarza, który zdobył tytuł króla strzelców na Mistrzostwach Świata w XXI wieku.",
            answers: ["Ronaldo Nazario", "Miroslav Klose", "Thomas Müller", "James Rodríguez", "Harry Kane"]
        },
        {
            question: "Podaj klub, który wygrał mistrzostwo Francji (Ligue 1) w erze dominacji PSG (po 2012 r.).",
            answers: ["AS Monaco", "Lille OSC"]
        },

        // =============== BARDZO TRUDNE ===============
        {
            question: "Wymień członka drużyny 'Invincibles' Arsenalu z sezonu 2003/04.",
            answers: ["Thierry Henry", "Patrick Vieira", "Robert Pirès", "Dennis Bergkamp", "Sol Campbell", "Jens Lehmann"]
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
            answers: ["Arsène Wenger", "Diego Simeone", "Jürgen Klopp", "Mauricio Pochettino", "Héctor Cúper", "Ottmar Hitzfeld"]
        },
        {
            question: "Wymień amerykańskiego piłkarza, który grał w czołowej lidze europejskiej.",
            answers: ["Christian Pulisic", "Clint Dempsey", "Landon Donovan", "Tim Howard", "Weston McKennie", "Gio Reyna"]
        },
        {
            question: "Podaj nazwisko piłkarza, który strzelił gola w El Clásico (Real-Barcelona) w XXI wieku.",
            answers: ["Lionel Messi", "Cristiano Ronaldo", "Raúl", "Samuel Eto'o", "Luis Suárez", "Karim Benzema", "Vinícius Júnior"]
        },
        {
            question: "Wymień piłkarza 'jednego klubu', który całą seniorską karierę spędził w jednym zespole z top 5 lig.",
            answers: ["Francesco Totti", "Paolo Maldini", "Ryan Giggs", "Carles Puyol", "Jamie Carragher", "Paul Scholes"]
        },
        {
            question: "Podaj nazwisko piłkarza, który grał zarówno pod wodzą Pepa Guardioli, jak i José Mourinho.",
            answers: ["Zlatan Ibrahimović", "Samuel Eto'o", "Xabi Alonso", "Arjen Robben", "Kevin De Bruyne", "Cesc Fàbregas"]
        },
        {
            question: "Wymień bramkarza, który strzelił gola w jednej z pięciu czołowych lig europejskich.",
            answers: ["Hans-Jörg Butt", "Alisson Becker", "Peter Schmeichel", "Brad Friedel", "Andrés Palop", "Marwin Hitz"]
        },
        {
            question: "Wymień klub, który zdobył Puchar Interkontynentalny, ale nigdy nie wygrał Klubowych Mistrzostw Świata FIFA.",
            answers: ["Ajax Amsterdam", "Borussia Dortmund", "Juventus", "Feyenoord", "FC Porto", "Crvena zvezda"]
        },
        {
            question: "Podaj nazwisko zdobywcy nagrody 'Piłkarza Roku w Afryce'.",
            answers: ["Didier Drogba", "Yaya Touré", "Samuel Eto'o", "George Weah", "Mohamed Salah", "Sadio Mané", "Nwankwo Kanu"]
        },
        {
            question: "Wymień zdobywcę nagrody Golden Foot, przyznawanej aktywnym graczom powyżej 28 roku życia.",
            answers: ["Ronaldinho", "Roberto Baggio", "Zlatan Ibrahimović", "Cristiano Ronaldo", "Andrés Iniesta", "Robert Lewandowski"]
        },

        // =============== EKSTREMALNIE TRUDNE (2-4 ODPOWIEDZI) ===============
        {
            question: "Wymień osobę, która wygrała Mistrzostwa Świata jako piłkarz i jako trener.",
            answers: ["Mário Zagallo", "Franz Beckenbauer", "Didier Deschamps"]
        },
        {
            question: "Podaj nazwisko piłkarza, który strzelił hat-tricka w finale Mistrzostw Świata.",
            answers: ["Geoff Hurst", "Kylian Mbappé"]
        },
        {
            question: "Wymień klub, który dwukrotnie zdobył 'potrójną koronę' (liga, puchar krajowy, Liga Mistrzów).",
            answers: ["FC Barcelona", "Bayern Monachium"]
        },
        {
            question: "Wymień afrykańską reprezentację, która dotarła do ćwierćfinału Mistrzostw Świata.",
            answers: ["Kamerun", "Senegal", "Ghana", "Maroko"]
        },
        {
            question: "Podaj nazwisko piłkarza, który zdobył Złotą Piłkę trzy razy z rzędu.",
            answers: ["Michel Platini", "Lionel Messi"]
        },
        {
            question: "Wymień drużynę, która zakończyła sezon w najwyższej lidze angielskiej bez porażki.",
            answers: ["Arsenal", "Preston North End"]
        },
        {
            question: "Podaj nazwisko bramkarza, który strzelił gola w meczu Ligi Mistrzów (nie w rzutach karnych).",
            answers: ["Hans-Jörg Butt", "Sinan Bolat", "Vincent Enyeama"]
        },
        
        // =============== TRUDNE (MAKSYMALNIE 5 ODPOWIEDZI) ===============
        {
            question: "Wymień piłkarza, który strzelił gola w dwóch różnych finałach Mistrzostw Świata.",
            answers: ["Vavá", "Pelé", "Paul Breitner", "Zinedine Zidane", "Kylian Mbappé"]
        },
        {
            question: "Podaj nazwisko piłkarza, który zdobył Premier League Golden Boot z dwoma różnymi klubami.",
            answers: ["Alan Shearer", "Jimmy Floyd Hasselbaink", "Robin van Persie"]
        },
        {
            question: "Wymień jeden z pięciu najdroższych klubów piłkarskich na świecie według rankingu Forbesa z 2024 roku.",
            answers: ["Real Madryt", "Manchester United", "FC Barcelona", "Liverpool", "Manchester City"]
        },
        {
            question: "Podaj nazwisko jednego z 5 najlepszych strzelców w historii reprezentacji Brazylii.",
            answers: ["Neymar", "Pelé", "Ronaldo", "Romário", "Zico"]
        },
        {
            question: "Wymień klub, który co najmniej 5 razy wygrał Scudetto, ale został zdegradowany z Serie A.",
            answers: ["AC Milan", "Juventus", "Torino", "Genoa"]
        },
        {
            question: "Wymień miasto, które gościło finał Mistrzostw Świata i finał Ligi Mistrzów.",
            answers: ["Rzym", "Londyn", "Paryż", "Monachium", "Berlin"]
        },
        {
            question: "Wymień klub, który wygrał Puchar Europy/Ligę Mistrzów, a obecnie nie gra w najwyższej klasie rozgrywkowej swojego kraju.",
            answers: ["Hamburger SV", "Steaua Bukareszt"]
        },
        {
            question: "Wymień reprezentację, która przegrała finał Mistrzostw Świata więcej niż jeden raz.",
            answers: ["Niemcy", "Argentyna", "Holandia"]
        },
        {
            question: "Podaj nazwisko piłkarza, który wystąpił na co najmniej pięciu różnych turniejach Mistrzostw Świata.",
            answers: ["Antonio Carbajal", "Lothar Matthäus", "Rafael Márquez", "Lionel Messi", "Cristiano Ronaldo"]
        },
        {
            question: "Podaj nazwisko belgijskiego piłkarza, który znalazł się w pierwszej trójce plebiscytu Złotej Piłki.",
            answers: ["Paul Van Himst", "Jan Ceulemans", "Eden Hazard", "Kevin De Bruyne"]
        },
        {
            question: "Wymień kraj, który organizował Mistrzostwa Europy (EURO) więcej niż jeden raz.",
            answers: ["Francja", "Włochy", "Belgia"]
        },
        {
            question: "Podaj nazwisko piłkarza, który strzelił ponad 40 goli w jednym sezonie La Liga.",
            answers: ["Lionel Messi", "Cristiano Ronaldo", "Luis Suárez"]
        },
        {
            question: "Wymień klub, który wygrał Puchar Anglii (FA Cup) jako drużyna spoza najwyższej ligi.",
            answers: ["Tottenham Hotspur", "West Ham United", "Southampton", "Sunderland"]
        },
        {
            question: "Podaj nazwisko menedżera, który wygrał mistrzostwo Anglii i Puchar Anglii w tym samym sezonie (The Double).",
            answers: ["Alex Ferguson", "Arsène Wenger", "Pep Guardiola", "Kenny Dalglish", "Bill Nicholson"]
        },
        {
            question: "Wymień drużynę, która wygrała mistrzostwo Holandii (Eredivisie) poza 'wielką trójką' (Ajax, PSV, Feyenoord) po 2000 roku.",
            answers: ["AZ Alkmaar", "FC Twente"]
        },
        {
            question: "Podaj nazwisko urugwajskiego piłkarza, który wygrał Złotą Piłkę Mistrzostw Świata (adidas Golden Ball).",
            answers: ["Diego Forlán", "Obdulio Varela"]
        },
        {
            question: "Wymień klub, który zdobył mistrzostwo Grecji więcej niż 10 razy.",
            answers: ["Olympiakos", "Panathinaikos", "AEK Ateny"]
        },
        {
            question: "Podaj nazwisko piłkarza, który otrzymał nagrodę Fair Play na Mistrzostwach Świata.",
            answers: ["Gary Lineker", "Enzo Scifo", "Paolo Maldini", "Iker Casillas"]
        },
        {
            question: "Wymień piłkarza, który strzelił zwycięskiego gola w finale Mistrzostw Europy.",
            answers: ["Éder", "Fernando Torres", "Oliver Bierhoff", "David Trezeguet", "Angelos Charisteas"]
        },
        
        // =============== BARDZO TRUDNE - NOWA PULA 50 PYTAŃ ===============
        // --- Polska Piłka ---
        {
            question: "Wymień polski klub, który grał w fazie grupowej Ligi Mistrzów.",
            answers: ["Legia Warszawa", "Widzew Łódź"]
        },
        {
            question: "Podaj nazwisko polskiego piłkarza, który został królem strzelców w czołowej lidze europejskiej.",
            answers: ["Robert Lewandowski", "Krzysztof Piątek", "Euzebiusz Smolarek", "Jan Furtok", "Andrzej Juskowiak"]
        },
        {
            question: "Wymień polski klub, który zdobył Puchar Polski w XXI wieku, a obecnie gra poza Ekstraklasą.",
            answers: ["Wisła Kraków", "Arka Gdynia", "Zawisza Bydgoszcz", "Dyskobolia Grodzisk Wielkopolski"]
        },
        {
            question: "Podaj nazwisko obcokrajowca, który został królem strzelców polskiej Ekstraklasy.",
            answers: ["Nemanja Nikolić", "Marco Paixão", "Christian Gytkjær", "Igor Angulo", "Stanko Svitlica"]
        },
        {
            question: "Podaj nazwisko Polaka, który strzelił gola na Wembley dla reprezentacji Polski.",
            answers: ["Jan Domarski", "Jakub Moder", "Marek Citko", "Jerzy Brzęczek", "Roman Kosecki"]
        },
        {
            question: "Wymień polski klub, który wyeliminował drużynę z Anglii w europejskich pucharach.",
            answers: ["Widzew Łódź", "Górnik Zabrze", "Legia Warszawa", "Amica Wronki"]
        },
        {
            question: "Podaj nazwisko piłkarza, który w polskiej Ekstraklasie strzelił ponad 150 bramek.",
            answers: ["Ernest Pohl", "Lucjan Brychczy", "Gerard Cieślik", "Tomasz Frankowski", "Marcin Robak"]
        },
        {
            question: "Wymień polskiego piłkarza, który zagrał w lidze japońskiej (J-League).",
            answers: ["Piotr Świerczewski", "Andrzej Kubica", "Krzysztof Kamiński", "Jakub Słowik"]
        },
        {
            question: "Podaj nazwisko trenera, który zdobył Mistrzostwo Polski z co najmniej dwoma różnymi klubami.",
            answers: ["Orest Lenczyk", "Franciszek Smuda", "Henryk Kasperczak", "Władysław Żmuda"]
        },
        {
            question: "Wymień polskiego bramkarza, który obronił rzut karny na Mistrzostwach Świata.",
            answers: ["Jan Tomaszewski", "Wojciech Szczęsny", "Artur Boruc", "Józef Młynarczyk"]
        },
        // --- Angielska Piłka ---
        {
            question: "Wymień piłkarza spoza Wielkiej Brytanii i Irlandii, który był kapitanem Manchesteru United.",
            answers: ["Éric Cantona", "Nemanja Vidić", "Antonio Valencia", "Bruno Fernandes"]
        },
        {
            question: "Podaj nazwisko menedżera, który wygrał Puchar Anglii (FA Cup), ale nigdy nie wygrał mistrzostwa Anglii.",
            answers: ["Roberto Di Matteo", "Harry Redknapp", "Ruud Gullit", "Gianluca Vialli", "Thomas Tuchel"]
        },
        {
            question: "Wymień klub, który grał w Premier League, ale pochodzi z Walii.",
            answers: ["Swansea City", "Cardiff City"]
        },
        {
            question: "Podaj nazwisko piłkarza, który był znany z niezwykle twardej i nieustępliwej gry w Premier League (tzw. 'hard man').",
            answers: ["Roy Keane", "Patrick Vieira", "Vinnie Jones", "Duncan Ferguson", "Jaap Stam"]
        },
        {
            question: "Wymień klub, który wygrał finał play-offów o awans do Premier League (tzw. 'najdroższy mecz świata').",
            answers: ["Crystal Palace", "Fulham", "Luton Town", "Nottingham Forest", "Southampton"]
        },
        {
            question: "Podaj nazwisko piłkarza, który strzelił tzw. 'perfect hat-trick' (prawą nogą, lewą nogą, głową) w Premier League.",
            answers: ["Robbie Fowler", "Yakubu Aiyegbeni", "Didier Drogba", "Christian Pulisic", "Erling Haaland"]
        },
        {
            question: "Wymień afrykańskiego piłkarza, który zdobył nagrodę Piłkarza Roku w Anglii (PFA Player of the Year).",
            answers: ["Riyad Mahrez", "Mohamed Salah", "Didier Drogba"]
        },
        {
            question: "Podaj nazwisko piłkarza, za którego zapłacono ponad 50 mln funtów, a który okazał się 'niewypałem transferowym' w Premier League.",
            answers: ["Ángel Di María", "Timo Werner", "Romelu Lukaku", "Nicolas Pépé", "Andy Carroll"]
        },
        {
            question: "Wymień klub, który ma na swoim stadionie pomnik legendy klubu.",
            answers: ["Arsenal", "Manchester United", "Liverpool", "Manchester City", "Newcastle United"]
        },
        {
            question: "Podaj nazwisko piłkarza, który strzelił gola bezpośrednio z rzutu wolnego w Premier League z odległości ponad 30 metrów.",
            answers: ["David Beckham", "Cristiano Ronaldo", "Laurent Robert", "John Arne Riise", "Maynor Figueroa"]
        },
        // --- Europejska Piłka ---
        {
            question: "Wymień klub, który wygrał nieistniejący już Puchar Zdobywców Pucharów.",
            answers: ["FC Barcelona", "Chelsea", "AC Milan", "Paris Saint-Germain", "Ajax Amsterdam", "Manchester United"]
        },
        {
            question: "Podaj nazwisko skandynawskiego piłkarza (Dania, Szwecja, Norwegia), który wygrał Ligę Mistrzów.",
            answers: ["Peter Schmeichel", "John Arne Riise", "Henrik Larsson", "Jesper Blomqvist", "Ole Gunnar Solskjær"]
        },
        {
            question: "Wymień europejski klub, który jest w całości lub w dużej mierze własnością swoich kibiców ('socios').",
            answers: ["FC Barcelona", "Real Madryt", "Athletic Bilbao", "FC St. Pauli", "AFC Wimbledon"]
        },
        {
            question: "Podaj nazwisko rosyjskiego lub ukraińskiego piłkarza, który wygrał Złotą Piłkę.",
            answers: ["Lew Jaszyn", "Ołeh Błochin", "Ihor Biełanow", "Andrij Szewczenko"]
        },
        {
            question: "Wymień piłkarza, który w swojej karierze otrzymał ponad 15 czerwonych kartek.",
            answers: ["Sergio Ramos", "Gerardo Bedoya", "Cyril Rool", "Felipe Melo", "Paolo Montero"]
        },
        {
            question: "Podaj nazwisko piłkarza, który grał w derbach Rzymu (dla Lazio i Romy).",
            answers: ["Aleksandar Kolarov", "Siniša Mihajlović", "Diego Fuser", "Angelo Peruzzi"]
        },
        {
            question: "Wymień drużynę, której trenerem był słynny Arrigo Sacchi.",
            answers: ["AC Milan", "Reprezentacja Włoch", "Atlético Madryt", "Parma"]
        },
        {
            question: "Podaj nazwisko tureckiego piłkarza, który zdobył medal na Mistrzostwach Świata w 2002 roku.",
            answers: ["Hakan Şükür", "Hasan Şaş", "Rüştü Reçber", "İlhan Mansız", "Emre Belözoğlu"]
        },
        {
            question: "Wymień europejski klub, którego nazwa pochodzi od postaci z mitologii greckiej.",
            answers: ["Ajax Amsterdam", "Atalanta Bergamo", "Heracles Almelo", "Aris Saloniki"]
        },
        {
            question: "Podaj nazwisko piłkarza, który zdobył Złotego Buta (dla najlepszego strzelca w Europie), grając poza top 5 lig.",
            answers: ["Henrik Larsson", "Mário Jardel", "Roy Makaay", "Darko Panczew"]
        },
        // --- Światowa Piłka ---
        {
            question: "Wymień klub z Ameryki Południowej, który wygrał Copa Libertadores więcej niż raz.",
            answers: ["Boca Juniors", "River Plate", "Peñarol", "São Paulo FC", "Flamengo", "Independiente"]
        },
        {
            question: "Podaj nazwisko kolumbijskiego piłkarza znanego z ekstrawaganckiej gry lub wyglądu.",
            answers: ["Carlos Valderrama", "René Higuita", "Faustino Asprilla", "Juan Cuadrado"]
        },
        {
            question: "Wymień reprezentację, która wygrała Złoty Puchar CONCACAF (mistrzostwa Ameryki Północnej).",
            answers: ["Meksyk", "Stany Zjednoczone", "Kanada"]
        },
        {
            question: "Podaj nazwisko meksykańskiego piłkarza, który grał w europejskim klubie z czołówki.",
            answers: ["Hugo Sánchez", "Rafael Márquez", "Javier 'Chicharito' Hernández", "Andrés Guardado", "Hirving Lozano"]
        },
        {
            question: "Wymień drużynę, która wygrała Puchar Narodów Afryki co najmniej 3 razy.",
            answers: ["Egipt", "Kamerun", "Ghana", "Nigeria"]
        },
        {
            question: "Podaj nazwisko japońskiego piłkarza, który był pionierem i przecierał szlaki w Europie.",
            answers: ["Kazuyoshi Miura", "Hidetoshi Nakata", "Shunsuke Nakamura", "Shinji Ono"]
        },
        {
            question: "Wymień klub, który wygrał Ligę Mistrzów AFC (azjatycką Ligę Mistrzów).",
            answers: ["Al-Hilal", "Urawa Red Diamonds", "Jeonbuk Hyundai Motors", "Pohang Steelers", "Al-Ittihad"]
        },
        {
            question: "Podaj nazwisko legendarnego argentyńskiego trenera, znanego z filozofii 'anty-futbolu' lub niezwykłej taktyki.",
            answers: ["Carlos Bilardo", "Helenio Herrera", "César Luis Menotti", "Marcelo Bielsa"]
        },
        {
            question: "Wymień reprezentację, która zadebiutowała na Mistrzostwach Świata w XXI wieku.",
            answers: ["Słowacja", "Bośnia i Hercegowina", "Islandia", "Panama", "Katar"]
        },
        {
            question: "Podaj nazwisko piłkarza, który zdobył nagrodę dla najlepszego gracza Copa América (MVP).",
            answers: ["Lionel Messi", "Luis Suárez", "Alexis Sánchez", "Dani Alves", "Adriano"]
        }
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
