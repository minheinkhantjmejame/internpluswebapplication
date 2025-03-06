document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPath = window.location.pathname;

    navLinks.forEach(link => {
        link.classList.remove('active');
        const linkPath = new URL(link.href).pathname;
        if (linkPath === currentPath) {
            link.classList.add('active');
        }
    });

    // ✅ Load saved language from localStorage
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
    updateLanguage(savedLanguage);
});

// Function to update language and translate all elements
async function updateLanguage(language) {
    document.getElementById('dropdownLabel').textContent = language.toUpperCase();

    // ✅ Save the selected language in localStorage
    localStorage.setItem('selectedLanguage', language);

    // ✅ Define translations for static text (placeholders, buttons, etc.)
    const translations = {
        'en': {
            'searchPlaceholder': "Enter the program you are interested in...",
            'applyNow': "Apply Now",
            'internshipProgram': "Internship Program",
            'emailPlaceholder': "Enter your email to get the latest news..."
        },
        'th': {
            'searchPlaceholder': "กรอกโปรแกรมที่คุณสนใจ...",
            'applyNow': "สมัครตอนนี้",
            'internshipProgram': "โปรแกรมฝึกงาน",
            'emailPlaceholder': "กรอกอีเมลของคุณเพื่อรับข่าวสารล่าสุด..."
        },
        'my': {
            'searchPlaceholder': "သင့်စိတ်ဝင်စားသောအစီအစဉ်ကိုရိုက်ထည့်ပါ...",
            'applyNow': "လျှောက်ထားရန်",
            'internshipProgram': "အလုပ်သင်အစီအစဉ်",
            'emailPlaceholder': "နောက်ဆုံးသတင်းများရယူရန်သင့်အီးမေးလ်ထည့်ပါ..."
        }
    };

    // ✅ Update placeholders
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.setAttribute("placeholder", translations[language]?.searchPlaceholder || translations['en'].searchPlaceholder);
    }

    const emailInput = document.getElementById('email');
    if (emailInput) {
        emailInput.setAttribute("placeholder", translations[language]?.emailPlaceholder || translations['en'].emailPlaceholder);
    }

    // ✅ Update text content using predefined translations or Google Translate API
    const elementsToTranslate = document.querySelectorAll('[data-translate]');
    for (const element of elementsToTranslate) {
        const key = element.getAttribute('data-translate');
        
        if (translations[language][key]) {
            element.innerText = translations[language][key];
        } else {
            // Use Google Translate API if predefined translation is unavailable
            const translatedText = await translateText(key, language);
            element.innerText = translatedText;
        }
    }
}

// ✅ Function to translate text using Google Translate API
async function translateText(text, targetLanguage) {
    try {
        const response = await fetch(
            `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLanguage}&dt=t&q=${encodeURIComponent(text)}`
        );
        const data = await response.json();
        return data[0][0][0]; // Extract the translated text
    } catch (error) {
        console.error('Translation error:', error);
        return text; // Fallback to the original text if translation fails
    }
}


// HR JS 

document.addEventListener("DOMContentLoaded", function () {
    const profilePhoto = document.querySelector(".profile_photo");
    const dashboardContent = document.querySelector(".dashboard-content");

    profilePhoto.addEventListener("click", function () {
        // Replace dashboard content with profile details
        dashboardContent.innerHTML = `
            <div class="container-fluid" id="profile_details">
                <h2 class="mb-3">My Profile</h2>

                <!-- Profile Summary -->
                <div class="card p-4 w-50">
                    <div class="d-flex align-items-center">
                        <img src="../assets/img/user_sample_1.png" alt="Profile Photo" class="rounded-circle" width="80" height="80">
                        <div class="ms-3">
                            <h4 class="mb-0">Lhing W.</h4>
                            <span class="badge">HR Manager</span>
                        </div>
                        <button class="btn edit ms-auto"><img src="../assets/icon/edit_pen.png" alt="">  Edit</button>
                    </div>
                </div>

                <!-- Personal Information -->
                <div class="card p-4 mt-3 w-50">
                    <div class="d-flex justify-content-between mb-3">
                        <h5>Personal Information</h5>
                        <button class="btn edit"><img src="../assets/icon/edit_pen.png" alt=""> Edit</button>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <span>Full Name</span><p> Lhing Wang</p>
                            <span>Team</span><p> Project Internplus</p>
                            <span>Phone Number</span><p> 0898144676</p>
                        </div>
                        <div class="col-md-6">
                            <span>Position</span><p>HR Manager</p>
                            <span>Email</span><p>wanglhing@vennessplus.com</p>
                            <span>Line ID</span><p>imlhingw21</p>
                        </div>
                    </div>
                </div>

                <!-- Buttons -->
                <div class="mt-3">
                    <button class="btn" id="logout">Logout</button>
                    <button class="btn ms-2" id="del_account">Delete Account</button>
                </div>
            </div>
        `;
    });
});


// HR JS 
