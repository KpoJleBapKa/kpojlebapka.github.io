document.addEventListener('DOMContentLoaded', () => {
    // Об'єкт для перекладу
    const translations = {
        en: {
            resumeTitle: "Resume - Arsen Solovian",
            fullName: "Arsen Solovian",
            position: "Junior C++ Developer",
            aboutMeTitle: "PC skills",
            aboutMeText: "Before university, I was mainly interested in PC components and solving technical problems and errors. During my studies, I started to actively develop new skills, including: software development for PCs, mobile devices (Android), game development (for PCs), website development, and bots (Discord, Telegram). Technologies I have worked with: C++, C, C#, HTML/CSS/JS/TS, Java, Kotlin, Git, SQLite, Docker, QT, CMake. My main programming language is C++.",
            skillsTitle: "Skills",
            skill1: "Analytical Thinking",
            skill2: "Fast Learning",
            skill3: "Communication Skills",
            educationTitle: "Education",
            edu1Title: "State University of Information and Communication Technologies",
            edu1Subtitle: "F2 Software Engineering",
            edu1Date: "2025 - 2027",
            edu2Title: "State University of Information and Communication Technologies",
            edu2Subtitle: "121 Software Engineering",
            edu2Date: "2021 - 2025",
            coursesTitle: "Courses and Certificates",
            course1Title: "Fundamentals of Software Testing",
            course1Subtitle: "Software Testing",
            course1Date: "2025",
            course2Title: "Git for Distributed Software Development",
            course2Subtitle: "Using GIT",
            course2Date: "2024",
            course3Title: "C++ Algorithm Development and Analysis",
            course3Subtitle: "C++ Algorithm Skills",
            course3Date: "2022",
            languagesTitle: "Languages",
            lang1: "Ukrainian: Native",
            lang2: "English: Advanced (C1)",
            projectTitle: "My Biggest Project",
            projectName: "WOT Configurator",
            projectDescription: "A Windows application designed for convenient viewing, management, editing, saving, and validation of the World of Tanks configuration file preferences.xml.",
            projectLink: "Learn more about the project"
        },
        ua: {
            resumeTitle: "Резюме - Арсен Солов'ян",
            fullName: "Арсен Олександрович Солов'ян",
            position: "Junior C++ Developer",
            aboutMeTitle: "Комп'ютерні навички",
            aboutMeText: "До вступу в університет переважно цікавився ПК комплектуючими та вирішенням технічних проблем і помилок. Під час навчання в університеті почав активно розвивати нові навички, зокрема: розробка ПЗ для ПК, мобільних пристроїв (Android), розробка ігор (для ПК), розробка веб-сайтів, ботів (дискорд, телеграм). Технології, з якими мав справу: C++, C, C#, HTML/CSS/JS/TS, Java, Kotlin, Git, SQLite, Docker, QT, CMake. Основна мова програмування: C++.",
            skillsTitle: "Навички",
            skill1: "Аналітичне мислення",
            skill2: "Швидке навчання",
            skill3: "Комунікативні навички",
            educationTitle: "Освіта",
            edu1Title: "Державний університет інформаційно-комунікаційних технологій",
            edu1Subtitle: "F2 інженерія програмного забезпечення",
            edu1Date: "2025 - 2027",
            edu2Title: "Державний університет інформаційно-комунікаційних технологій",
            edu2Subtitle: "121 інженерія програмного забезпечення",
            edu2Date: "2021 - 2025",
            coursesTitle: "Курси та сертифікати",
            course1Title: "Основи тестування програмного забезпечення",
            course1Subtitle: "Тестування ПЗ",
            course1Date: "2025",
            course2Title: "Git для розподіленої розробки ПЗ",
            course2Subtitle: "Використання GIT",
            course2Date: "2024",
            course3Title: "Розробка та аналіз алгоритмів C++",
            course3Subtitle: "Навички з розробки алгоритмів на мові C++",
            course3Date: "2022",
            languagesTitle: "Мови",
            lang1: "Українська: Рідна",
            lang2: "Англійська: Поглиблений (C1)",
            projectTitle: "Найбільший проєкт",
            projectName: "WOT Configurator",
            projectDescription: "Застосунок для Windows, призначений для зручного перегляду, керування, редагування, збереження та перевірки конфігураційних файлів preferences.xml гри World of Tanks.",
            projectLink: "Детальніше про проєкт"
        }
    };

    const languageSwitcher = document.querySelector('.language-switcher');
    const langBtns = document.querySelectorAll('.lang-btn');

    // Функція для оновлення вмісту сторінки
    function updateContent(lang) {
        const elementsToTranslate = document.querySelectorAll('[data-i18n-key]');
        elementsToTranslate.forEach(element => {
            const key = element.getAttribute('data-i18n-key');
            if (translations[lang] && translations[lang][key]) {
                if (element.tagName === 'TITLE') {
                    document.title = translations[lang][key];
                } else {
                    element.textContent = translations[lang][key];
                }
            }
        });

        // Оновлюємо активний клас для кнопок мови
        langBtns.forEach(btn => {
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
        
        // Зберігаємо обрану мову у localStorage
        localStorage.setItem('lang', lang);
    }

    // Додаємо обробник подій на клік
    languageSwitcher.addEventListener('click', (event) => {
        if (event.target.classList.contains('lang-btn')) {
            const lang = event.target.getAttribute('data-lang');
            updateContent(lang);
        }
    });

    // Встановлюємо мову при завантаженні сторінки
    // Якщо мова збережена в localStorage, використовуємо її
    const savedLang = localStorage.getItem('lang') || 'en';
    updateContent(savedLang);
});