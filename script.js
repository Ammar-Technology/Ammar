document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById("menu-button");
  const mainNav = document.getElementById("main-nav");

  menuButton.addEventListener("click", function (event) {
    event.stopPropagation();
    mainNav.classList.toggle("show");
  });

  document.addEventListener("click", function (event) {
    if (!mainNav.contains(event.target) && !menuButton.contains(event.target)) {
      mainNav.classList.remove("show");
    }
  });
});

function applyTheme(isApplied) {
  if (isApplied) {
    document.body.classList.add("apply-theme");
  } else {
    document.body.classList.remove("apply-theme");
  }
}

window.onload = function () {
  const isThemeApplied = localStorage.getItem("themeApplied") === "true";
  applyTheme(isThemeApplied);
};

const button = document.getElementById("changeThemeButton");

button.addEventListener("click", function () {
  const isCurrentlyApplied = document.body.classList.toggle("apply-theme");

  localStorage.setItem("themeApplied", isCurrentlyApplied);
});




document.addEventListener("DOMContentLoaded", function () {
  const languageToggleButton = document.getElementById("languageToggleButton");
  const translatableElements = document.querySelectorAll(".translate");
  const translations = {
    "Ammar": "عمار",
    "Hello! I'm": "مرحبا أنا",
    "Front-End Developer": "مطور واجهة المواقع الأمامية",
    "I love developing complex frontend interfaces in a simple and high-quality manner. With my expertise and dedication to the latest technologies and best practices, I strive to transform ideas into stunning user interfaces that precisely and effectively meet the needs of clients.":
      "أحب تطوير واجهات الواجهة الأمامية المعقدة بطريقة بسيطة وعالية الجودة. ومن خلال خبرتي وتفانيي في استخدام أحدث التقنيات وأفضل الممارسات، أسعى جاهداً لتحويل الأفكار إلى واجهات مستخدم مذهلة تلبي احتياجات العملاء بدقة وفعالية",
    "Ammar Immad": "عمار عماد",
    "Home": "الرئيسية",
    "Skills": "المهارات",
    "Services": "الخدمات",
    "Projects": "المشاريع",
    "About me": "معلومات عنى",
    "Contact Me": "اتصل",
    "skills": "المهارات",
    "Responsive front-end design for all screens":
      "تصميم واجهة أمامية متجاوبة لجميع الشاشات",
    "Designing a personal website that prepares you for the job market":
      "تصميم موقع شخصي يُجهزك لسوق العمل",
    "Modifying the front end of any website": "تعديل الواجهة الأمامية لأي موقع",
    "Front-end programming for a static Or dynamic website":
      "برمجة الواجهة الأمامية لموقع ثابت أو متحرك",
    "Link the website to the domain name, purchase hosting, and link it to Google AdSense to display ads":
      "ربط الموقع باسم النطاق، شراء استضافة، وربطه بـ Google AdSense لعرض الإعلانات",
    "Creating the front-end for the platforms":
      "إنشاء الواجهة الأمامية للمنصات",
    "This profile is a small project created in HTML and CSS for training and practical application":
      "هذا الملف الشخصي هو مشروع صغير تم إنشاؤه باستخدام HTML و CSS للتدريب والتطبيق العملي",
    "Visit the website": "زيارة الموقع",
    "project": "مشروع",
    "blog": "مدونة",
    "Personal blog": "مدونة شخصية",
    "This blog is a project created using HTML and CSS for training and practical application":
      "هذه المدونة هي مشروع تم إنشاؤه باستخدام HTML و CSS للتدريب والتطبيق العملي",
    "Hoist Gym": "هويست جيم",
    "Web site Gym": "موقع ويب لجيم",
    "Hoist Gym is a project created using HTML and CSS for training and practical application":
      "هويست جيم هو مشروع تم إنشاؤه باستخدام HTML و CSS للتدريب والتطبيق العملي",
    "Ammar Immad El Dine Abrahim": "عمار عماد الدين إبراهيم",
    "From and residing in Egypt, Alexandria": "من ومقيم في مصر، الإسكندرية",
    "I work as a freelance front-end developer on Freelancer, Upwork, Fiverr, Fiverr, and Mostaqel":
      "أعمل كمطور واجهة أمامية حر على منصات Freelancer, Upwork, Fiverr, و Mostaqel",
    "I study at the College of Computers and Information, Data Science Department":
      "أدرس في كلية الحاسبات والمعلومات، قسم علوم البيانات",
    "I studied front-end development using the courses and grants provided":
      "درست تطوير الواجهة الأمامية باستخدام الدورات والمنح المقدمة",
    "Let's work together, contact me through social media or freelance sites":
      "لنعمل معا, تواصل معى عن طريق السوشيال ميديا أومواقع العمل الحر",
      "Website containing animation": "موقع يحتوي على الرسوم المتحركة",
    "A website that contains scroll-based animation that moves beautifully and with amazing effect":
     "موقع يحتوي على رسوم متحركة قائمة على التمرير تتحرك بشكل جميل و بتأثير مذهل",
     "Scroll Web": "سكرول ويب",
     "Web site for the Gym": "موقع لصالة الألعاب الرياضية",
     "Personal Blog": "مدونه شخصيه خاصه",
     "This blog is a project created using HTML and CSS for training and practical application": "هذه المدونة عبارة عن مشروع تم إنشاؤه باستخدام HTML وCSS للتدريب والتطبيق العملي",
     "bondi": "بوندى",
     "Services Website": "موقع الخدمات",
     "A completely certified website designed on Bootstrap": "موقع معتمد بالكامل فى تصميمه على Bootstrap",
     "todolist": "قائمة مهام ",
     "Daily Tasks Application": "تطبيق المهام اليومية",
     "An application to manage and complete daily tasks by JavaScript":
      "تطبيق لإدارة وإكمال المهام اليومية بالجافا سكريبت",
    "Egypt, Alexandria, El Agamy, Abo Yossef , Wady El Melok Street":
     "مصر، الإسكندرية، العجمي، أبو يوسف، شارع وادي الملوك",
    "work hours: 12 hours": "ساعات العمل: 12 ساعة",
    "Created by Ammar Imad": "تم الإنشاء بواسطة عمار عماد",
    "Let's work together, contact me through social media or freelance sites":
    "لنعمل معًا، اتصل بي عبر وسائل التواصل الاجتماعي أو مواقع العمل الحر",
    "Slider Images": "سلايدر صور",
    "Image Viewer": "عارض الصور",
    "A simple and modern image slider by JavaScript": "شريط تمرير صور بسيط وحديث بواسطة الجافا سكريبت",
    "Profile Page": "صفحة الملف الشخصي",
    "instaPixel":"إنستابكسل",
    "Website to convert text to image":"موقع لتحويل النص لصورة",
    "An AI Generator, created using React":"توليد الصور بأستخدام الذكاء الأصطناعى",
    "A website to convert text to image using Ai, created using React":"موقع لتحويل النص إلى صورة باستخدام الذكاء الاصطناعي، تم إنشاؤه باستخدام React",
  };

  let currentLanguage = localStorage.getItem("language") || "EN";

  function updateLanguage(language) {
    if (language === "EN") {
      languageToggleButton.querySelector("p").textContent = "EN";
      translatableElements.forEach((element) => {
        const translation = translations[element.textContent.trim()];
        if (translation) {
          element.textContent = translation;
        }
      });
    } else {
      languageToggleButton.querySelector("p").textContent = "ع";
      translatableElements.forEach((element) => {
        const originalText = Object.keys(translations).find(
          (key) => translations[key] === element.textContent.trim()
        );
        if (originalText) {
          element.textContent = originalText;
        }
      });
    }

    localStorage.setItem("language", language);
  }

  updateLanguage(currentLanguage);

  languageToggleButton.addEventListener("click", function () {
    currentLanguage = currentLanguage === "EN" ? "ع" : "EN";
    updateLanguage(currentLanguage);
  });
});





document.addEventListener('DOMContentLoaded', function() {
  // Initialize EmailJS with your public key
  emailjs.init('7vAPY9RdB69aS5GGp');
  
  // Reference to .pop element
  const popElement = document.querySelector('.pop');
  const messageElement = document.querySelector(".pop p");

  // Form submission handler
  document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault();

      // Collect form data
      const firstName = document.getElementById('first-name').value;
      const lastName = document.getElementById('last-name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;

      // Prepare email template parameters
      const templateParams = {
          first_name: firstName,
          last_name: lastName,
          email: email,
          message: message
      };

      // Send email using EmailJS
      emailjs.send('service_4vzkb4n', 'template_r8t86r1', templateParams)
          .then(function(response) {
              console.log('SUCCESS!', response.status, response.text);
              // Show .pop and update message
              popElement.style.display = 'block';
              messageElement.textContent = 'Message sent successfully!';
              // Clear form fields
              document.getElementById('contact-form').reset();
          }, function(error) {
              console.error('FAILED...', error);
              // Show .pop and update message
              popElement.style.display = 'block';
              messageElement.textContent = `An error occurred while sending the message. Please try again.`;
          });
  });
});

let exitButton = document.querySelector(`.pop div button`);
exitButton.onclick = function() {
  document.querySelector('.pop').style.display = 'none';
}

