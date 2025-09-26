document.addEventListener('DOMContentLoaded', () => {
    const translations = {
        en: {
            resumeTitle: "CV Arsen Solovian",
            fullName: "Arsen Solovian",
            position: "C++/Qt Developer | Desktop Applications | Problem-Solving & Optimization",
            
            aboutMeTitle: "About Me",
            aboutMeText: "I specialize in designing and developing efficient desktop applications using C++ and Qt, with a strong focus on performance, usability, and solving real-world problems. <br><br>My experience spans across building bots, web applications, mobile solutions, and desktop software, delivering end-to-end projects that enhance user experience and streamline workflows. <br><br>Beyond software development, I am deeply passionate about the computer industry and hardware components, which gives me a strong technical foundation and a practical understanding of how software interacts with systems. <br><br>I am always eager to take on challenges that require problem-solving, optimization, and creative thinking.",
            
            experienceTitle: "Experience",
            exp1Title: "Software Developer",
            exp1Company: "PWNZ inc.",
            exp1Date: "Jan 2024 - Apr 2024",
            //exp1Desc: "Developed and maintained high-performance desktop applications using C++ and the Qt framework. Collaborated with a team to implement new features, fix bugs, and optimize code for better performance and user experience.",

            hardSkillsTitle: "Technical Skills",
            softSkillsTitle: "Soft Skills",
            softSkill1: "Problem Solving",
            softSkill2: "Teamwork",
            softSkill3: "Adaptability",
            softSkill4: "Attention to Detail",
            
            projectsTitle: "Pet-Projects",
            project1Name: "WOT Configurator",
            project1Desc: "A Windows application designed for convenient viewing, managing, editing, saving, and validating the World of Tanks configuration file preferences.xml.",
            project2Name: "WOT Mod Installer",
            project2Desc: "A user-friendly tool for installing and managing modifications (mods) for the game World of Tanks.",
            project3Name: "WOT Personal Assistant",
            project3Desc: "A personal assistant application for World of Tanks players, providing statistics, notifications, and other useful features.",
            projectLink: "View More",

            educationTitle: "Education",
            edu1Title: "State University of Information and Communication Technologies",
            edu1Subtitle: "Master's degree, Software Engineering",
            edu1Date: "2025 - 2027",
            edu2Title: "State University of Information and Communication Technologies",
            edu2Subtitle: "Bachelor's degree, Software Engineering",
            edu2Date: "2021 - 2025",
            
            coursesTitle: "Courses and Certificates",
            course1Title: "Fundamentals of Software Testing",
            course1Subtitle: "Prometheus",
            course1Date: "2025",
            course2Title: "Git for Distributed Software Development",
            course2Subtitle: "Prometheus",
            course2Date: "2024",
            course3Title: "C++ Algorithm Development and Analysis",
            course3Subtitle: "Prometheus",
            course3Date: "2022",
            
            languagesTitle: "Languages",
            lang1: "Ukrainian: Native",
            lang2: "English: Advanced (C1)",
            lang3: "German: Beginner (A1)",
            
            githubBtn: "GitHub",
            linkedinBtn: "LinkedIn"
        },
        ua: {
            resumeTitle: "CV Arsen Solovian",
            fullName: "Арсен Олександрович Солов'ян",
            position: "C++/Qt Developer | Desktop Applications | Problem-Solving & Optimization",
            
            aboutMeTitle: "Про мене",
            aboutMeText: "Я спеціалізуюся на проектуванні та розробці ефективних настільних додатків з використанням C++ та Qt, з сильним акцентом на продуктивність, зручність використання та вирішення реальних проблем.<br><br>Мій досвід охоплює створення ботів, веб-додатків, мобільних рішень та програмного забезпечення для настільних ПК, реалізуючи комплексні проекти, що покращують взаємодію з користувачем та оптимізують робочі процеси.<br><br>Окрім розробки програмного забезпечення, я глибоко захоплений комп'ютерною індустрією та апаратними компонентами, що дає мені міцну технічну основу та практичне розуміння того, як програмне забезпечення взаємодіє з системами.<br><br>Я завжди готовий братися за завдання, що вимагають вирішення проблем, оптимізації та креативного мислення.",
            
            experienceTitle: "Досвід роботи",
            exp1Title: "Розробник програмного забезпечення",
            exp1Company: "PWNZ inc.",
            exp1Date: "Січень 2024 - Квітень 2024",
            //exp1Desc: "Розробляв та підтримував високопродуктивні десктопні додатки з використанням C++ та фреймворку Qt. Співпрацював з командою для впровадження нових функцій, виправлення помилок та оптимізації коду для підвищення продуктивності та покращення користувацького досвіду.",

            hardSkillsTitle: "Hard Skills",
            softSkillsTitle: "Soft Skills",
            softSkill1: "Вирішення проблем",
            softSkill2: "Робота в команді",
            softSkill3: "Адаптивність",
            softSkill4: "Уважність до деталей",

            projectsTitle: "Pet-Проекти",
            project1Name: "WOT Configurator",
            project1Desc: "Застосунок для Windows, призначений для зручного перегляду, керування, редагування, збереження та перевірки конфігураційного файлу preferences.xml гри World of Tanks.",
            project2Name: "WOT Mod Installer",
            project2Desc: "Зручний інструмент для встановлення та керування модифікаціями (модами) для гри World of Tanks.",
            project3Name: "WOT Personal Assistant",
            project3Desc: "Персональний асистент для гравців World of Tanks, що надає статистику, сповіщення та інші корисні функції.",
            projectLink: "Дивитись більше",

            educationTitle: "Освіта",
            edu1Title: "Державний університет інформаційно-комунікаційних технологій",
            edu1Subtitle: "Магістр, Інженерія програмного забезпечення",
            edu1Date: "2025 - 2027",
            edu2Title: "Державний університет інформаційно-комунікаційних технологій",
            edu2Subtitle: "Бакалавр, Інженерія програмного забезпечення",
            edu2Date: "2021 - 2025",
            
            coursesTitle: "Курси та сертифікати",
            course1Title: "Основи тестування програмного забезпечення",
            course1Subtitle: "Prometheus",
            course1Date: "2025",
            course2Title: "Git для розподіленої розробки ПЗ",
            course2Subtitle: "Prometheus",
            course2Date: "2024",
            course3Title: "Розробка та аналіз алгоритмів C++",
            course3Subtitle: "Prometheus",
            course3Date: "2022",
            
            languagesTitle: "Мови",
            lang1: "Українська: Рідна",
            lang2: "Англійська: Просунутий (C1)",
            lang3: "Німецька: Початковий (А1)",
            
            githubBtn: "GitHub",
            linkedinBtn: "LinkedIn"
        }
    };

    const languageSwitcher = document.querySelector('.language-switcher');
    const langBtns = document.querySelectorAll('.lang-btn');

    function updateContent(lang) {
        const elementsToTranslate = document.querySelectorAll('[data-i18n-key]');
        elementsToTranslate.forEach(element => {
            const key = element.getAttribute('data-i18n-key');
            if (translations[lang] && translations[lang][key]) {
                if (element.tagName === 'TITLE') {
                    document.title = translations[lang][key];
                } else {
                    element.innerHTML = translations[lang][key];
                }
            }
        });

        langBtns.forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        });
        
        localStorage.setItem('lang', lang);
    }

    languageSwitcher.addEventListener('click', (event) => {
        if (event.target.classList.contains('lang-btn')) {
            const lang = event.target.getAttribute('data-lang');
            updateContent(lang);
        }
    });

    const savedLang = localStorage.getItem('lang') || 'ua'; 
    updateContent(savedLang);
});