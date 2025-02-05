const translations = {
    en: {
        title: "Raylib C# Tutorials",
        subtitle: "Everything you need to start with Raylib & C#",
        welcome: "Welcome!",
        description: "Here you will find tutorials, code examples & interactive demos for Raylib with C#.",
        cta: "Start with the basics or explore 2D and 3D development with Raylib!",
        "nav-basics": "Basics",
        "nav-2d": "2D",
        "nav-3d": "3D",
        "nav-ui": "UI"
    },
    de: {
        title: "Raylib C# Tutorials",
        subtitle: "Alles, was du brauchst, um mit Raylib & C# zu starten",
        welcome: "Willkommen!",
        description: "Hier findest du Tutorials, Code-Beispiele & interaktive Demos für Raylib mit C#.",
        cta: "Starte mit den Grundlagen oder entdecke 2D- und 3D-Entwicklung mit Raylib!",
        "nav-basics": "Grundlagen",
        "nav-2d": "2D",
        "nav-3d": "3D",
        "nav-ui": "UI"
    },
    ru: {
        title: "Raylib C# Учебники",
        subtitle: "Все, что вам нужно для начала работы с Raylib и C#",
        welcome: "Добро пожаловать!",
        description: "Здесь вы найдете учебники, примеры кода и интерактивные демонстрации для Raylib на C#.",
        cta: "Начните с основ или изучите 2D и 3D разработку с Raylib!",
        "nav-basics": "Основы",
        "nav-2d": "2D",
        "nav-3d": "3D",
        "nav-ui": "UI"
    }
};

function changeLanguage() {
    const lang = document.getElementById("language").value;
    const elements = document.querySelectorAll("[id]");
    elements.forEach(el => {
        if (translations[lang][el.id]) {
            el.textContent = translations[lang][el.id];
        }
    });
}
