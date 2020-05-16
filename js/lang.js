$(function () {    // Lets be professional, shall we?    "use strict";    // Some variables for later    var dictionary, set_lang;	var userLang = navigator.language || navigator.userLanguage;    // Object literal behaving as multi-dictionary    dictionary = {        "english": {"languagecode":"EN","home":"Home","donate":"Donate","contact":"Contact","stylish":"Stylish, futuristic, powerful and free","infocenter":"The Information Center for your Desktop","videooverview":"Video Overview","faq":"Frequently Asked Questions","donateModal":"If you liked Omnimo, please consider donating","donateModalT":"Donations help keep the servers on","fullversion":"This version contains all panels and functionality / features","liteversion":"LITE VERSION","comingsoon":"Coming soon, please wait a bit!","download":"Download","mirror":"Mirror","quickinstall":"Quick Install Instrutions","downloadzip":"Download and extract ZIP Archive","runsetup":"Run Setup.exe (Ignore 3,4 if you have Rainmeter)","followinstructions":"Follow instructions to install Rainmeter","selectinstall":"Select Install","learnmore":"Learn more","tutorials":"Tutorials","whatsnew":"What's new?","whatsnewT":"Check out the new features we included in Omnimo 10","totalredesign":"Total Redesign","totalredesignT":"Icons, themes and resources have been updated to reflect the newest trends","morefeatures":"More features","morefeaturesT":"We removed things that are outdated... and added lots of new exciting stuff!","hdpi":"HDPI / Ultrawide","hdpiT":"Everything supports scaling and HDPI Displays, including Ultrawide 21:9, 42:9","bugs":"Bug fixes and more","bugsT":"We worked on this version for a long time. Now it's better than ever","customizable":"Customizable and Modern","customizableT":"Omnimo comes with hundreds of widgets that you can use on your desktop. Everything can be customized precisely to your liking.","simple":"Simple and fun to use","simpleT":"Easy installation, easy setup. Multiple Languages. An out of the box experience. All you need is imagination to arrange it the way you like.","light":"Light as a feather, yet powerful","lightT":"Despite being the most powerful suite, Omnimo is incredibly light on your PC resources. It won’t slow down your computer if you use it correctly.","viewmore":"View more","howdoesitwork":"How does it work?","poweredbyrainmeter":"Omnimo is powered by Rainmeter, a super fast and simple customization tool that works on Windows.","compatible":"It’s compatible with every other Rainmeter suite.","bestbothworlds":"Best of both worlds","whetheryoulikeit":"Whether you like Windows 10 or not, you can still get a taste of the new Metro interface without having to limit the way you use your computer!","omnimosimply":"Omnimo simply allows you to place modules and items on your desktop, it doesn’t change the way you use Windows. The startmenu, the taskbar, and even the desktop icons (optional) are still there and integrate really well. Almost like Sidebar Gadgets, you can toggle the modules on & off. It integrates brilliantly into Windows XP, Vista, 7 or 8 and even 10!"        				},        "german": {"languagecode":"DE","home":"Homepage","donate":"Spenden","contact":"Kontakt","stylish":"Stilvoll, futuristisch, kraftvoll und kostenlos","infocenter":"Das Information Center für Ihren Desktop","videooverview":"Videoübersicht","faq":"FAQ","donateModal":"Wenn Ihnen Omnimo gefallen hat, sollten Sie eine Spende in Betracht ziehen","donateModalT":"Spenden helfen dabei, die Server am Laufen zu halten","fullversion":"Diese Version enthält alle Panels und Funktionen / Features","liteversion":"LITE VERSION","comingsoon":"Kommt in Kürze, bitte warten Sie ein bisschen!","download":"Download","mirror":"Mirror-link","quickinstall":"Schnellinstallationsanleitung","downloadzip":"Laden Sie das ZIP-Archiv herunter und extrahieren Sie es","runsetup":"Führen Sie Setup.exe aus (ignorieren Sie 3.4, wenn Sie Rainmeter haben).","followinstructions":"Befolgen Sie die Anweisungen zum Installieren von Rainmeter","selectinstall":"Wählen Sie 'Installieren'","learnmore":"Mehr erfahren","tutorials":"Tutorials","whatsnew":"Was gibt's neues?","whatsnewT":"Schauen Sie sich die neuen Funktionen an, die wir in Omnimo 10 enthalten haben","totalredesign":"Totale Neugestaltung","totalredesignT":"Symbole, Themen und Ressourcen wurden aktualisiert, um die neuesten Trends widerzuspiegeln","morefeatures":"Mehr Features","morefeaturesT":"Wir haben veraltete Dinge entfernt ... und viele neue aufregende Dinge hinzugefügt!","hdpi":"HDPI / Ultrawide","hdpiT":"Alles unterstützt Skalierung und HDPI-Displays, einschließlich Ultrawide 21:9, 42:9","bugs":"Fehlerbehebungen und mehr","bugsT":"Wir haben lange an dieser Version gearbeitet. Jetzt aber ist es besser als je zuvor","customizable":"Anpassbar und modern","customizableT":"Omnimo enthält Hunderte von Widgets, die Sie auf Ihrem Desktop verwenden können. Alles kann genau nach Ihren Wünschen angepasst werden.","simple":"Einfach und macht Spaß","simpleT":"Einfache Installation, einfache Einrichtung. Mehrere Sprachen. Ein Out-of-the-Box-Erlebnis. Alles, was Sie brauchen, ist Fantasie, um es so zu arrangieren, wie Sie es möchten.","light":"Leicht aber kraftvoll","lightT":"Obwohl Omnimo die leistungsstärkste Suite ist, schont es Ihre PC-Ressourcen unglaublich. Es wird Ihren Computer nicht verlangsamen, wenn Sie ihn richtig verwenden.","viewmore":"Mehr anzeigen","howdoesitwork":"Wie funktioniert es?","poweredbyrainmeter":"Omnimo wird von Rainmeter unterstützt - das superschnelle und einfache Anpassungstool, das unter Windows funktioniert.","compatible":"Es ist mit jeder anderen Rainmeter-Suite kompatibel.","bestbothworlds":"Das Beste aus beiden Welten","whetheryoulikeit":"Egal, ob Sie Windows 10 mögen oder nicht, Sie können immer noch einen Vorgeschmack auf die neue Metro-Oberfläche erhalten, ohne die Art und Weise einschränken zu müssen, wie Sie Ihren Computer verwenden!","omnimosimply":"Mit Omnimo können Sie einfach Module und Elemente auf Ihrem Desktop platzieren. Die Art und Weise, wie Sie Windows verwenden, wird dadurch nicht geändert. Das Startmenü, die Taskleiste und sogar die Desktopsymbole sind noch vorhanden und lassen sich sehr gut integrieren. Fast wie bei Sidebar-Gadgets können Sie die Module ein- und ausschalten."        				},"dutch":{    "languagecode": "NL",    "home": "Huis",    "donate": "Doneer",    "contact": "Contact",    "stylish": "Stijlvol, futuristisch, krachtig en gratis",    "infocenter": "Het informatiecentrum voor uw desktop",    "videooverview": "Video overzicht",    "faq": "Veel Gestelde Vragen",    "donateModal": "Als je Omnimo graag gebruikt, overweeg dan om te doneren.",    "donateModalT": "Donaties helpen de servers draaiende te houden",    "fullversion": "Deze versie bevat alle panelen en functionaliteit",    "liteversion": "LICHTE VERSIE",    "comingsoon": "Komt binnenkort, nog even wachten!",    "download": "Downloaden",    "mirror": "Mirror",    "quickinstall": "Snelle installatie-instructies",    "downloadzip": "Download en pak het ZIP-archief uit",    "runsetup": "Voer Setup.exe uit (negeer 3,4 als u een regenmeter hebt)",    "followinstructions": "Volg de instructies om Rainmeter te installeren",    "selectinstall": "Selecteer Installeren",    "learnmore": "Meer informatie",    "tutorials": "Tutorials",    "whatsnew": "Wat is er nieuw?",    "whatsnewT": "Bekijk de nieuwe functies die we in Omnimo 10 hebben opgenomen",    "totalredesign": "Totaal herontworpen",    "totalredesignT": "Pictogrammen, thema's en andere objecten zijn bijgewerkt nee de laatste trends",    "morefeatures": "Meer mogelijkheden",    "morefeaturesT": "We hebben verouderde zaken verwijderd ... maar vooral veel nieuwe spannende zaken toegevoegd!",    "hdpi": "HDPI / Ultrawide",    "hdpiT": "Alles ondersteunt schaalbaarheid en HDPI-schermen, inclusief Ultrawide 21: 9, 42: 9",    "bugs": "Bugfixes en meer",    "bugsT": "We hebben lang aan deze versie gewerkt. Het is nu beter dan ooit tevoren!",    "customizable": "Aanpasbaar en modern",    "customizableT": "Omnimo wordt geleverd met honderden widgets die u op uw bureaublad kunt plaatsen. Alles kan precies naar uw wensen worden aangepast.",    "simple": "Eenvoudig en leuk om te gebruiken",    "simpleT": "Gemakkelijke installatie, gemakkelijke configuratie. Meerdere talen. Een out of the box-ervaring. Het enige dat je nodig hebt, is je fantasie om alles naar wens in te delen.",    "light": "Licht als een veertje, maar krachtig",    "lightT": "Ondanks dat het de krachtigste Rainmeter suite is, blijft Omnimo ongelooflijk licht voor uw computer. Het vertraagt uw computer niet als u het correct gebruikt.",    "viewmore": "Bekijk meer",    "howdoesitwork": "Hoe werkt het?",    "poweredbyrainmeter": "Omnimo wordt aangedreven door Rainmeter, een supersnelle en eenvoudige aanpassingstool die werkt op Windows.",    "compatible": "Het is compatibel met elke andere Rainmeter-suite.",    "bestbothworlds": "Het beste van twee werelden",    "whetheryoulikeit": "Of je nu van Windows 10 houdt of niet, je kunt nog steeds proeven aan de nieuwe Metro-interface zonder de manier waarop je je computer gebruikt te veranderen!",    "omnimosimply": "Met Omnimo kunt u eenvoudig modules en items op uw bureaublad plaatsen, het verandert niets aan de manier waarop u Windows gebruikt. Het startmenu, de taakbalk en zelfs de bureaubladpictogrammen (optioneel) zijn er nog steeds. Bijna zoals de windows vista sidebar-gadgets, kunt u de omnimo modules in- en uitschakelen."},"portuguese":{    "languagecode": "PT",    "home": "Casa",    "donate": "Doar",    "contact": "Contato",    "stylish": "Elegante, futurista, poderoso e gratuito",    "infocenter": "O Centro de Informações para o seu Desktop",    "videooverview": "Visão geral do vídeo",    "faq": "perguntas frequentes",    "donateModal": "Se você gostou do Omnimo, considere fazer uma doação",    "donateModalT": "As doações ajudam a manter os servidores",    "fullversion": "Esta versão contém todos os painéis e funcionalidades / recursos",    "liteversion": "VERSÃO LITE",    "comingsoon": "Chegando em breve, aguarde um pouco!",    "download": "Baixar",    "mirror": "Link alternativo",    "quickinstall": "Instruções de instalação rápida",    "downloadzip": "Faça o download e extraia o arquivo ZIP",    "runsetup": "Execute o Setup.exe (ignore 3,4 se você tiver o Rainmeter)",    "followinstructions": "Siga as instruções para instalar o Rainmeter",    "selectinstall": "Selecione Instalar",    "learnmore": "Saber mais",    "tutorials": "Tutoriais",    "whatsnew": "O que há de novo?",    "whatsnewT": "Confira os novos recursos que incluímos no Omnimo 10",    "totalredesign": "Design totalmente novo",    "totalredesignT": "Ícones, temas e recursos foram atualizados para refletir as novas tendências",    "morefeatures": "Mais funcionalidades",    "morefeaturesT": "Removemos coisas desatualizadas ... e adicionámos muitas novidades interessantes!",    "hdpi": "HDPI / Ultrawide",    "hdpiT": "Suporte para monitores HDPI e diversas proporções de tela, incluindo Ultrawide 21:9 e 42:9",    "bugs": "Correções de bugs e mais",    "bugsT": "Trabalhámos nesta versão por um longo tempo. Agora está melhor do que nunca",    "customizable": "Customizável e Moderno",    "customizableT": "O Omnimo vem com centenas de widgets que você pode usar na sua área de trabalho. Tudo pode ser personalizado exatamente ao seu gosto.",    "simple": "Simples e divertido de usar",    "simpleT": "Fácil instalação. Fácil utilização. Múltiplos idiomas. Tudo o que você precisa para organizar o seu ambiente de trabalho da maneira que desejar - a sua imaginação é o limite.",    "light": "Leve como uma pena, muitíssimo poderoso",    "lightT": "Apesar de ser um aplicativo extremamente poderoso e cheio de funcionalidades, o Omnimo é incrivelmente leve nos recursos do seu PC. Não vai abrandar o seu computador se você o usar corretamente.",    "viewmore": "Ver mais",    "howdoesitwork": "Como funciona?",    "poweredbyrainmeter": "O Omnimo funciona em parceria com o Rainmeter, uma ferramenta de personalização super rápida e simples que funciona no Windows.",    "compatible": "É compatível com todos os outros conjuntos do Rainmeter.",    "bestbothworlds": "Melhor dos dois mundos",    "whetheryoulikeit": "Se você gosta do Windows 10 ou não, ainda pode experimentar a nova interface Metro sem precisar limitar a maneira como usa o computador!",    "omnimosimply": "O Omnimo simplesmente permite que você coloque módulos e itens na área de trabalho, mas não muda a maneira como você usa o Windows. O menu Iniciar, a barra de tarefas e até os ícones da área de trabalho (opcional) ainda estão lá e se integram muito bem. Quase como os gadgets da barra lateral, você pode ativar e desativar todos os módulos."},"french": {    "languagecode": "FR",    "home": "Accueil",    "donate": "Doneer",    "contact": "Contact",    "stylish": "Élégant, futuriste, puissant et gratuit",    "infocenter": "Le centre d'information pour votre bureau",    "videooverview": "Présentation vidéo",    "faq": "Questions fréquemment posées",    "donateModal": "Si vous avez aimé Omnimo, pensez à faire un don",    "donateModalT": "Les dons aident à garder les serveurs allumés",    "fullversion": "Cette version contient tous les panneaux et fonctionnalités / fonctionnalités",    "liteversion": "VERSION LITE",    "comingsoon": "Bientôt, veuillez patienter un peu!",    "download": "Télécharger",    "mirror": "Miroir",    "quickinstall": "Instructions d'installation rapide",    "downloadzip": "Téléchargez et extrayez l'archive ZIP",    "runsetup": "Exécutez Setup.exe (Ignorez 3,4 si vous avez Rainmeter)",    "followinstructions": "Suivez les instructions pour installer Rainmeter",    "selectinstall": "Sélectionnez Installer",    "learnmore": "Apprendre encore plus",    "tutorials": "Tutoriels",    "whatsnew": "Quoi de neuf?",    "whatsnewT": "Découvrez les nouvelles fonctionnalités que nous avons incluses dans Omnimo 10",    "totalredesign": "Refonte totale",    "totalredesignT": "Les icônes, les thèmes et les ressources ont été mis à jour pour refléter les dernières tendances",    "morefeatures": "Plus de fonctionnalités",    "morefeaturesT": "Nous avons supprimé des éléments obsolètes ... et ajouté de nombreuses nouveautés intéressantes!",    "hdpi": "HDPI / Ultrawide",    "hdpiT": "Tout prend en charge la mise à l'échelle et les affichages HDPI, y compris Ultrawide 21: 9, 42: 9",    "bugs": "Corrections de bugs et plus",    "bugsT": "Nous avons longtemps travaillé sur cette version. Maintenant c'est mieux que jamais",    "customizable": "Personnalisable et moderne",    "customizableT": "Omnimo est livré avec des centaines de widgets que vous pouvez utiliser sur votre bureau. Tout peut être personnalisé précisément à votre convenance.",    "simple": "Simple et amusant à utiliser",    "simpleT": "Installation facile, configuration facile. Plusieurs langues. Une expérience prête à l'emploi. Tout ce dont vous avez besoin, c'est d'imagination pour l'organiser comme vous le souhaitez.",    "light": "Léger comme une plume, mais puissant",    "lightT": "En dépit d'être la suite la plus puissante, Omnimo est incroyablement léger sur les ressources de votre PC. Cela ne ralentira pas votre ordinateur si vous l'utilisez correctement.",    "viewmore": "Voir plus",    "howdoesitwork": "Comment ça marche?",    "poweredbyrainmeter": "Omnimo est alimenté par Rainmeter, un outil de personnalisation super rapide et simple qui fonctionne sous Windows.",    "compatible": "Il est compatible avec toutes les autres suites Rainmeter.",    "bestbothworlds": "Le meilleur des deux mondes",    "whetheryoulikeit": "Que vous aimiez Windows 10 ou non, vous pouvez toujours avoir un avant-goût de la nouvelle interface Metro sans avoir à limiter la façon dont vous utilisez votre ordinateur!",    "omnimosimply": "Omnimo vous permet simplement de placer des modules et des éléments sur votre bureau, cela ne change pas la façon dont vous utilisez Windows. Le menu de démarrage, la barre des tâches et même les icônes du bureau (en option) sont toujours là et s'intègrent vraiment bien. Presque comme les gadgets de la barre latérale, vous pouvez activer et désactiver les modules."},        "spanish": {"languagecode":"ES","home":"Página de inicio","donate":"Donar","contact":"Contacto","stylish":"Elegante, moderno, poderoso y gratis.","infocenter":"El centro de información para su escritorio","videooverview":"Video Resumen","faq":"Preguntas Frecuentes","donateModal":"Si te gustó Omnimo, considera donar","donateModalT":"Las donaciones ayudan a mantener los servidores encendidos","fullversion":"Esta versión contiene todos los paneles y funcionalidades / características","liteversion":"Version Liviana","comingsoon":"Próximamente, ¡espera un poco!","download":"Descargar","mirror":"Enlace alternativo","quickinstall":"Instrucciones de instalación rápida","downloadzip":"Descargar y extraer ZIP Archive","runsetup":"Ejecute Setup.exe (omitir 3,4 si tiene Rainmeter)","followinstructions":"Siga las instrucciones para instalar Rainmeter","selectinstall":"Seleccione Instalar","learnmore":"Aprende más","tutorials":"Tutoriales","whatsnew":"¿Qué hay de nuevo?","whatsnewT":"Vea las nuevas funciones que incluimos en Omnimo 10","totalredesign":"Rediseño total","totalredesignT":"Se han actualizado iconos, temas y recursos para reflejar las últimas tendencias.","morefeatures":"Más características","morefeaturesT":"Eliminamos cosas que están desactualizadas ... y agregamos muchas cosas nuevas y emocionantes!","hdpi":"HDPI / Ultrawide","hdpiT":"Todo admite pantallas de escala y HDPI, incluidas Ultrawide 21:9, 42:9","bugs":"Corrección de errores","bugsT":"Trabajamos en esta versión durante mucho tiempo. Ahora es mejor que nunca","customizable":"Personalizable y moderno","customizableT":"Omnimo viene con cientos de widgets que puedes usar en tu escritorio. Todo se puede personalizar con precisión a su gusto.","simple":"Simple y divertido para nosotros","simpleT":"Fácil instalación, fácil instalación. Múltiples idiomas. Una experiencia fuera de la caja. Todo lo que necesitas es imaginación para organizarlo como quieras.","light":"Ligero pero poderoso","lightT":"A pesar de ser la suite más poderosa, Omnimo es increíblemente liviano en los recursos de su PC. No ralentizará su computadora si la usa correctamente.","viewmore":"Ver más","howdoesitwork":"¿Como funciona?","poweredbyrainmeter":"Omnimo funciona con Rainmeter, una herramienta de personalización súper rápida y simple para Windows","compatible":"Es compatible con cualquier otra suite Rainmeter.","bestbothworlds":"Lo mejor de ambos mundos","whetheryoulikeit":"Ya sea que le guste Windows 10 o no, aún puede probar la nueva interfaz de Metro sin tener que limitar la forma en que usa su computadora!","omnimosimply":"Omnimo simplemente le permite colocar módulos y elementos en su escritorio, no cambia la forma en que usa Windows. El menú de inicio, la barra de tareas e incluso los iconos del escritorio todavía están allí y se integran muy bien. Casi como Sidebar Gadgets, puede activar y desactivar los módulos."        				},        "russian": {    		"languagecode":"RU","home":"Домой","donate":"Пожертвовать","contact":"Kонтакт","stylish":"Cтильный, футуристический, мощный и бесплатный","infocenter":"Информационный центр для рабочего стола","videooverview":"Видеообзор","faq":"FAQ","donateModal":"Если вам понравилась Omnimo, рассмотрите возможность пожертвования","donateModalT":"Пожертвования помогают поддерживать работу серверов","fullversion":"Эта версия содержит все панели и функциональные возможности","liteversion":"Oблегченная версия","comingsoon":"Скоро, пожалуйста, подождите немного!","download":"Cкачать","mirror":"Альтернативная ссылка","quickinstall":"Инструкции по быстрой установке","downloadzip":"Скачать и распаковать ZIP архив","runsetup":"Запустите Setup.exe (игнорируйте 3.4, если у вас есть Rainmeter)","followinstructions":"Следуйте инструкциям по установке Rainmeter ","selectinstall":"Выберите «Установить»","learnmore":"Узнайте больше","tutorials":"Видеоурок","whatsnew":"Что нового?","whatsnewT":"Ознакомьтесь с новыми функциями в Omnimo 10","totalredesign":"Полный редизайн","totalredesignT":"Иконки, темы и ресурсы были обновлены, чтобы отразить новейшие тенденции","morefeatures":"Больше возможностей","morefeaturesT":"Мы удалили вещи, которые устарели ... и добавили много новых интересных вещей!","hdpi":"HDPI / Ultrawide","hdpiT":"Все поддерживает масштабирование и HDPI дисплеи, включая Ultrawide 21: 9, 42: 9","bugs":"Исправления ошибок и многое другое","bugsT":"Мы долго работали над этой версией. Теперь Omnimo лучше, чем когда-либо","customizable":"Настраиваемый и современный","customizableT":"Omnimo поставляется с сотнями виджетов, которые вы можете использовать на своем рабочем столе. Все может быть настроено именно по вашему вкусу.","simple":"Простой и веселый в использовании","simpleT":"Простая установка, простая настройка. Hа вашем языке. Все, что вам нужно, это воображение, чтобы организовать его так, как вам нравится.","light":"Легкий, но мощный","lightT":"Несмотря на то, что это самый мощный Rainmeter пакет, Omnimo невероятно легок в использовании ресурсов вашего ПК. Oн не замедлит работу вашего компьютера, если вы используете его правильно.","viewmore":"Посмотреть больше","howdoesitwork":"Как это работает?","poweredbyrainmeter":"Omnimo работает от Rainmeter - супер быстрого и простого инструмента настройки Windows","compatible":"Он совместим с любым другим комплектом Rainmeter.","bestbothworlds":"Лучший из обоих миров","whetheryoulikeit":"Нравится ли вам Windows 10 или нет, вы все равно можете почувствовать вкус нового интерфейса Metro без необходимости ограничивать использование компьютера!","omnimosimply":"Omnimo просто позволяет вам размещать модули и элементы на рабочем столе, это не меняет способа использования Windows. Стартовое меню, панель задач и даже значки на рабочем столе - все еще там, и действительно хорошо интегрируются. Почти как гаджеты на боковой панели, вы можете включать и выключать модули."        					        }																    };    // Function for swapping dictionaries    set_lang = function (dictionary) {        $("[data-translate]").text(function () {        			var key = $(this).data("translate");													            if (dictionary.hasOwnProperty(key)) {                return dictionary[key];			            }        });    };    // Swap languages when menu changes    $("#lc").on("click", function () {				        var language = $(this).val().toLowerCase();						        if (dictionary.hasOwnProperty(language)) {            set_lang(dictionary[language]);			localStorage.setItem("lang", language);        }    });			    $("#en").on("click", function () {	localStorage.setItem("lang", "english");	set_lang(dictionary.english);    });		$("#es").on("click", function () {	localStorage.setItem("lang", "spanish");	set_lang(dictionary.spanish);    });			$("#de").on("click", function () {	localStorage.setItem("lang", "german");	set_lang(dictionary.german);    });		$("#ru").on("click", function () {	localStorage.setItem("lang", "russian");	set_lang(dictionary.russian);    });		$("#tr").on("click", function () {	localStorage.setItem("lang", "turkish");	set_lang(dictionary.turkish);    });		$("#it").on("click", function () {	localStorage.setItem("lang", "italian");	set_lang(dictionary.italian);    });		$("#ptbr").on("click", function () {	localStorage.setItem("lang", "portuguese");	set_lang(dictionary.portuguese);    });		$("#pl").on("click", function () {	localStorage.setItem("lang", "polish");	set_lang(dictionary.polish);    });			$("#fi").on("click", function () {	localStorage.setItem("lang", "finnish");	set_lang(dictionary.finnish);    });			$("#he").on("click", function () {	localStorage.setItem("lang", "hebrew");	set_lang(dictionary.hebrew);    });			$("#ar").on("click", function () {	localStorage.setItem("lang", "arabic");	set_lang(dictionary.arabic);    });			$("#hu").on("click", function () {	localStorage.setItem("lang", "hungarian");	set_lang(dictionary.hungarian);    });			$("#sk").on("click", function () {	localStorage.setItem("lang", "slovak");	set_lang(dictionary.slovak);    });			$("#ua").on("click", function () {	localStorage.setItem("lang", "ukrainian");	set_lang(dictionary.ukrainian);    });				$("#ko").on("click", function () {	localStorage.setItem("lang", "korean");	set_lang(dictionary.korean);    });						$("#io").on("click", function () {	localStorage.setItem("lang", "indonesian");	set_lang(dictionary.indonesian);    });					$("#fr").on("click", function () {	localStorage.setItem("lang", "french");	set_lang(dictionary.french);    });		    // Set initial language to English		if (localStorage.lang === undefined) {var lgeo = window.navigator.userLanguage || window.navigator.language;var lgeosub = lgeo.substring(0, 2);if (lgeosub == "ru") {	localStorage.setItem("lang", "russian");	set_lang(dictionary.russian);$("#videopromo").attr('src', 'https://www.youtube.com/embed/rzFW0HqA46M ');	$("#lampspread").attr('class', 'lampspread russian');}else if (lgeosub == "fr") {	localStorage.setItem("lang", "french");	set_lang(dictionary.french);}else if (lgeosub == "de") {		$("#lampspread").attr('class', 'lampspread german');		$("#videopromo").attr('src', 'https://www.youtube.com/embed/a6kcdrsxWr4');			localStorage.setItem("lang", "german");	set_lang(dictionary.german);}else if (lgeosub == "es") {	localStorage.setItem("lang", "spanish");	set_lang(dictionary.spanish);	$("#videopromo").attr('src', 'https://www.youtube.com/embed/toMf15IA5js ');		$("#lampspread").attr('class', 'lampspread spanish');}else if (lgeosub == "it") {	localStorage.setItem("lang", "italian");	set_lang(dictionary.italian);}else if (lgeosub == "nl") {localStorage.setItem("lang", "dutch");set_lang(dictionary.dutch);}}else {var getLanguage = localStorage.getItem('lang') || 'english';set_lang(dictionary[getLanguage]);$("#lampspread").attr('class', 'lampspread ' + getLanguage);if (getLanguage == "german") {		$("#videopromo").attr('src', 'https://www.youtube.com/embed/a6kcdrsxWr4');}else if (getLanguage == "russian") {		$("#videopromo").attr('src', 'https://www.youtube.com/embed/rzFW0HqA46M ');}else if (getLanguage == "spanish") {		$("#videopromo").attr('src', 'https://www.youtube.com/embed/toMf15IA5js ');}else {			$("#videopromo").attr('src', 'https://www.youtube.com/embed/S3sJ1Rh185Q');	}	  $('#anniversary').attr('src','img/10y/' + getLanguage + '.png');					console.log("wheat" + getLanguage);}			 							});