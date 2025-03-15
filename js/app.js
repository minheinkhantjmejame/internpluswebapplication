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

// packange checking function
document.addEventListener("DOMContentLoaded", function () {
    const standardButton = document.querySelector(".gpa-2"); // Standard package button
    const dashboardContent = document.getElementById("dashboardContent");
    const packageContent = document.getElementById("packageContent");
    const settingsContent = document.getElementById("settingsContent");

    // Inject the package UI inside packageContent div
    packageContent.innerHTML = `
        <div class="mt-4">        
            <div class="row gap-5">
                <div class="col-md-6">
                    <div class="">
                        <h2>Package & Pricing</h2>
                        <div class="d-flex">
                            <div style="width:150px;height:150px; display:flex;justify-content:center;align-items:center;position:relative;">
                                <div style="width:120px; height:120px; border-radius:50%; background-color:#474BC2;display:flex;justify-content:center;align-items:center;">
                                    <img src="../assets/icon/battery_white.png" alt="">
                                </div>
                                <div style="width:120px;height:30px; border-radius:20px; background-color:#B1BBE7; position:absolute; bottom:0;">
                                    <p style="display:flex;justify-content:center;align-items:center;margin-top:3px;">Standard</p>
                                </div>
                            </div>
                            <div style="width:200px; height:150px; display:flex; justify-content:center; align-items:center;">
                                <div style="width:100%; height:100%; display:flex; flex-direction:column; justify-content:center;">
                                    <h4>Standard Package</h4>
                                    <h5 class="mt-2">฿199 /month</h5>
                                </div>
                            </div>
                        </div>
                        <div class="mt-5">
                            <p>Suitable for large organizations or educational institutions that require a complete system.</p>
                            <div class="d-flex justify-content-between w-50">
                                <p><img src="../assets/icon/device.png" /> <span>5</span> devices</p>
                                <p><img src="../assets/icon/user-circle.png" /><span>50</span> users</p>
                            </div>

                            <div class="d-flex justify-content-between">
                                <p> Register for Interns</p>
                                <div style="width:100px;height:30px;border-radius:10px;background-color:#B1BBE7; display:flex;justify-content:center;align-items:center;">
                                    <i class="bi bi-check-square-fill"></i>
                                </div>
                            </div>
                            <div class="d-flex justify-content-between">
                                <p>Track internship status</p>
                                <div style="width:100px;height:30px;border-radius:10px;background-color:#B1BBE7; display:flex;justify-content:center;align-items:center;">
                                    <i class="bi bi-check-square-fill"></i>
                                </div>
                            </div>
                            <div class="d-flex justify-content-between">
                                <p>Storage space</p>
                                <div style="width:100px;height:30px;border-radius:10px;background-color:#B1BBE7; display:flex;justify-content:center;align-items:center;">
                                    <i class="bi bi-check-square-fill"></i>
                                </div>
                            </div>
                            <div class="d-flex justify-content-between">
                                <p>Preliminary results report</p>
                                <div style="width:100px;height:30px;border-radius:10px;background-color:#B1BBE7; display:flex;justify-content:center;align-items:center;">
                                    <i class="bi bi-check-square-fill"></i>
                                </div>
                            </div>
                            <div class="d-flex justify-content-between">
                                <p>Detailed report</p>
                                <div style="width:100px;height:30px;border-radius:10px;background-color:#B1BBE7; display:flex;justify-content:center;align-items:center;">
                                    <i class="bi bi-check-square-fill"></i>
                                </div>
                            </div>
                            <div class="d-flex justify-content-between">
                                <p>Notification system</p>
                                <div style="width:100px;height:30px;border-radius:10px;background-color:#B1BBE7; display:flex;justify-content:center;align-items:center;">
                                    <i class="bi bi-check-square-fill"></i>
                                </div>
                            </div>
                            <div class="d-flex justify-content-between">
                                <p>Maximum intern</p>
                                <div style="width:100px;height:30px;border-radius:10px;background-color:#B1BBE7; display:flex;justify-content:center;align-items:center;">
                                    50 users
                                </div>
                            </div>
                            <div class="d-flex justify-content-between">
                                <p>Maximum administrator</p>
                                <div style="width:100px;height:30px;border-radius:10px;background-color:#B1BBE7; display:flex;justify-content:center;align-items:center;">
                                    5 devices
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="col-md-5">
                <div class="d-flex gap-5" >
                    <div class="d-flex justify-content-cener align-items-center">
                        <h5>Upgrade your package</h5>
                    </div>
                    <div class="d-flex mb-3">
                        <button class="btn btn-outline-secondary active">Monthly</button>
                        <button class="btn btn-outline-secondary ms-2">Yearly</button>
                    </div>
                </div>                
                    <div class="card p-3 mb-2" style="box-shadow:none; border-radius:4px;">
                        <div class="d-flex gap-2 mb-0">
                            <div class="icon mb-0">
                                <span class="icon-container" style="display: flex; background-color: #474bc2; border-radius: 50%; width: 50px; height: 50px; justify-content: center; align-items: center; overflow: hidden; margin: 0; padding: 0;">
                                    <img src="../assets/icon/battery-v-50.png" style="width: 20px; height: 20px; display: block; margin: 0; padding: 0;" alt="">
                                </span>                            
                            </div>
                            <div class="mb-0">                  
                                <h5>Starter Package</h5>
                                <p>Free</p>
                            </div>
                        </div>  
                        <hr/>
                        <p> <img src="../assets/icon/device.png" /> 1 device <img src="../assets/icon/user-circle.png" />  10 users</p>
                    </div>
                    <div class="card p-3 mb-2" style="box-shadow:none; border-radius:4px;">
                        <div class="d-flex gap-2 mb-0">
                            <div class="icon mb-0">
                                <span class="icon-container" style="display: flex; background-color: #474bc2; border-radius: 50%; width: 50px; height: 50px; justify-content: center; align-items: center; overflow: hidden; margin: 0; padding: 0;">
                                    <img src="../assets/icon/battery-v-50.png" style="width: 20px; height: 20px; display: block; margin: 0; padding: 0;" alt="">
                                </span>                            
                            </div>
                            <div class="mb-0">                  
                                <h5>Standard Package</h5>
                                <p> / month</p>
                            </div>
                        </div>  
                        <hr/>
                        <p> <img src="../assets/icon/device.png" /> 1 device <img src="../assets/icon/user-circle.png" />  10 users</p>
                    </div>
                    <div class="card p-3 mb-2" style="box-shadow:none; border-radius:4px;">
                        <div class="d-flex gap-2 mb-0">
                            <div class="icon mb-0">
                                <span class="icon-container" style="display: flex; background-color: #474bc2; border-radius: 50%; width: 50px; height: 50px; justify-content: center; align-items: center; overflow: hidden; margin: 0; padding: 0;">
                                    <img src="../assets/icon/battery-v-50.png" style="width: 20px; height: 20px; display: block; margin: 0; padding: 0;" alt="">
                                </span>                            
                            </div>
                            <div class="mb-0">                  
                                <h5>Premium Package</h5>
                                <p> / month</p>
                            </div>
                        </div>  
                        <hr/>
                        <p> <img src="../assets/icon/device.png" /> 1 device <img src="../assets/icon/user-circle.png" />  10 users</p>
                    </div>
                    <div class="d-flex justify-content-end">
                        <button class="btn mt-2" style="background-color: #474bc2; color:white;" id="cancelPackage">
                            Cancel Package
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Function to switch content
    function showPackageContent() {
        dashboardContent.style.display = "none"; // Hide dashboard
        packageContent.style.display = "block"; // Show package
        settingsContent.style.display = "none"; // Show settings page
    }

    settingsButton.addEventListener("click", function () {
        dashboardContent.style.display = "none"; // Hide dashboard
        
        packageContent.style.display = "none";
    });

    // Function to restore dashboard content
    function restoreDashboard() {
        packageContent.style.display = "none"; // Hide package
        dashboardContent.style.display = "block"; // Show dashboard
    }

    // When the Standard button is clicked, show package content
    standardButton.addEventListener("click", function () {
        showPackageContent();
    });

    // When the cancel button inside the package UI is clicked, restore dashboard
    document.addEventListener("click", function (event) {
        if (event.target.id === "cancelPackage") {
            restoreDashboard();
        }
    });
});

// package checking function

// Setting function
document.addEventListener("DOMContentLoaded", function () {
    const settingsButton = document.getElementById("settingsButton");
    const dashboardContent = document.getElementById("dashboardContent");
    const settingsContent = document.getElementById("settingsContent");
    const packageContent = document.getElementById("packageContent");

    // Inject settings UI only once
    settingsContent.innerHTML = `
        <h2 class="mb-4">Settings</h2>
        <div class="row">
            <div class="col-md-3">
                <nav class="nav flex-column">
                    <a class="nav-link active" href="#">📩 Email & Password</a>
                    <a class="nav-link" href="#">🔔 Notification</a>
                    <a class="nav-link" href="#">🌍 Language</a>
                    <a class="nav-link" href="#">👨‍💼 Supervisor</a>
                    <a class="nav-link" href="#">💰 Allowance</a>
                    <a class="nav-link" href="#">📞 Contact</a>
                    <a class="nav-link" href="#">⭐ Features & Service</a>
                </nav>
            </div>

            <div class="col-md-9 bg-light p-4 rounded">
                <h3>Email & Password</h3>
                <p><strong>Email:</strong> wangling@vannessplus.com</p>
                <button class="btn btn-primary mb-2">Change</button>
                <p><strong>Password:</strong> **********</p>
                <button class="btn btn-primary">Change</button>
                
                <hr>

                <button class="btn btn-danger mt-3">Logout</button>
                <button class="btn btn-outline-danger mt-3">Delete Account</button>
            </div>
        </div>
    `;

    // Show settings page when clicking the button
    settingsButton.addEventListener("click", function () {
        dashboardContent.style.display = "none"; // Hide dashboard
        settingsContent.style.display = "block"; // Show settings page
        packageContent.style.display = "none";
    });
});


// Setting function

// profile change function 

document.addEventListener("DOMContentLoaded", function () {
    // DOM Elements
    const dashboardContent = document.getElementById("dashboardContent");
    const packageContent = document.getElementById("packageContent");
    const settingsContent = document.getElementById("settingsContent");
    const profileContent = document.getElementById("profileContent");
    const profilePhoto = document.querySelector(".profile_photo");
    const standardButton = document.querySelector(".gpa-2");
    const settingsButton = document.getElementById("settingsButton");

    // Initialize content visibility
    dashboardContent.style.display = "block";
    packageContent.style.display = "none";
    settingsContent.style.display = "none";
    profileContent.style.display = "none";

    // Load saved language from localStorage
    const savedLanguage = localStorage.getItem("selectedLanguage") || "en";
    updateLanguage(savedLanguage);

    // Load the profile image from localStorage
    loadProfileImage();

    // Event Listeners
    profilePhoto.addEventListener("click", showProfileContent);
    standardButton.addEventListener("click", showPackageContent);
    settingsButton.addEventListener("click", showSettingsContent);

    // Event Delegation for Profile Actions
    document.addEventListener("click", function (event) {
        if (event.target.closest(".edit-profile-btn")) {
            showEditProfile();
        } else if (event.target.closest(".edit-personal-info-btn")) {
            event.preventDefault();
            showEditPersonalInfo();
        } else if (event.target.closest(".back-profile-btn")) {
            event.preventDefault();
            showProfileContent();
        } else if (event.target.closest(".save-profile-btn")) {
            saveProfile();
        } else if (event.target.closest(".save-personal-info-btn")) {
            savePersonalInfo();
        } else if (event.target.id === "cancelPackage") {
            restoreDashboard();
        }
    });

    // Functions
    function loadProfileImage() {
        // Retrieve profile image from localStorage
        let storedProfileImage = localStorage.getItem("profileImage");

        // If a profile image exists in localStorage, update the navbar profile image
        if (storedProfileImage) {
            let navProfileImg = document.getElementById("navProfileImage");
            if (navProfileImg) {
                navProfileImg.src = storedProfileImage;
            }
        } else {
            // Set a default image if no profile image is stored
            let navProfileImg = document.getElementById("navProfileImage");
            if (navProfileImg) {
                navProfileImg.src = "../assets/img/user_sample_1.png"; // Default image
            }
        }
    }

    function showProfileContent() {
        hideAllContent();
        profileContent.style.display = "block";
        showProfile();
    }

    function showPackageContent() {
        hideAllContent();
        packageContent.style.display = "block";
    }

    function showSettingsContent() {
        hideAllContent();
        settingsContent.style.display = "block";
    }

    function hideAllContent() {
        dashboardContent.style.display = "none";
        packageContent.style.display = "none";
        settingsContent.style.display = "none";
        profileContent.style.display = "none";
    }

    function restoreDashboard() {
        hideAllContent();
        dashboardContent.style.display = "block";
    }

    function showProfile() {
        let profileImage = localStorage.getItem("profileImage") || "../assets/img/user_sample_1.png";
        let profileName = localStorage.getItem("profileName") || "Lhing W.";
        let position = localStorage.getItem("position") || "HR Manager";
        let fullName = localStorage.getItem("fullName") || "Lhing Wang";
        let team = localStorage.getItem("team") || "Project Internplus";
        let email = localStorage.getItem("email") || "wanglhing@vennessplus.com";
        let phone = localStorage.getItem("phone") || "0898144676";
        let lineID = localStorage.getItem("lineID") || "imlhingw21";

        profileContent.innerHTML = `
            <div class="container-fluid" id="profile_details">
                <h2 class="mb-3">My Profile</h2>

                <!-- Profile Summary -->
                <div class="card p-4 w-50">
                    <div class="d-flex align-items-center">
                        <img src="${profileImage}" alt="Profile Photo" class="rounded-circle" width="80" height="80">
                        <div class="ms-3">
                            <h4 class="mb-0">${profileName}</h4>
                            <span class="badge">${position}</span>
                        </div>
                        <button class="btn edit edit-profile-btn ms-auto"><img src="../assets/icon/edit_pen.png" alt="">  Edit</button>
                    </div>
                </div>

                <!-- Personal Information -->
                <div class="card p-4 mt-3 w-50">
                    <div class="d-flex justify-content-between mb-3">
                        <h5>Personal Information</h5>
                        <button class="btn edit-personal-info-btn edit"><img src="../assets/icon/edit_pen.png" alt=""> Edit</button>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <span>Full Name</span><p>${fullName}</p>
                            <span>Team</span><p>${team}</p>
                            <span>Phone Number</span><p>${phone}</p>
                        </div>
                        <div class="col-md-6">
                            <span>Position</span><p>${position}</p>
                            <span>Email</span><p>${email}</p>
                            <span>Line ID</span><p>${lineID}</p>
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
    }

    function showEditProfile() {
        profileContent.innerHTML = `
            <div class="container-fluid d-flex flex-column align-items-start" style="width:auto; margin: auto;">
                <a href="#" class="back-profile-btn d-flex align-items-center mb-3" style="text-decoration: none; color: black;">
                    <i class="bi bi-arrow-left me-2"></i> Back to My Profile
                </a>

                <h2 class="mb-4">Edit Profile</h2>

                <div class="d-flex gap-5">
                    <div class="d-flex flex-column align-items-center">
                        <img id="profilePreview" src="${localStorage.getItem("profileImage") || '../assets/img/user_sample_1.png'}" 
                            alt="Profile Photo" class="rounded" width="180" height="180" style="border: 1px solid #ddd; object-fit: cover;">
                        <button class="btn btn-primary mt-3 px-4 save-profile-btn" style="align-self: self-start; background-color:#474BC2;">Save</button>
                    </div>

                    <div class="w-100 mt-0">
                        <div class="mb-3">
                            <label class="form-label fw-bold">Image</label>
                            <div id="customFileInput" class="d-flex align-items-center py-0"
                                style="cursor: pointer; border: 1px solid #C8C8C8; border-radius: 4px; height: 50px; width: 300px;">
                                
                                <div class="d-flex justify-content-center align-items-center" 
                                    style="width: 40px; height: 100%; background-color: #474BC2;">
                                    <i class="bi bi-image" style="font-size: 20px; color:white;"></i>
                                </div>

                                <span id="fileLabel" class="flex-grow-1 text-truncate mx-2">Choose a file</span>

                                <input type="file" id="profileImageInput" class="d-none">
                            </div>

                            <small class="text-muted">*Supports size up to 10 MB</small>
                        </div>

                        <div class="mb-3">
                            <label class="form-label fw-bold">Profile Name</label>
                            <input type="text" id="profileName" class="form-control"  
                                style="border:1px solid #C8C8C8; border-radius:4px;" 
                                value="${localStorage.getItem("profileName") || 'Emma W.'}">
                        </div>

                        <div class="mb-4">
                            <label class="form-label fw-bold">Role</label>
                            <select id="profileRole" class="form-select" style="border:1px solid #C8C8C8; border-radius:4px;">
                                <option ${localStorage.getItem("position") === "HR Manager" ? "selected" : ""}>HR Manager</option>
                                <option ${localStorage.getItem("position") === "HR" ? "selected" : ""}>HR</option>
                                <option ${localStorage.getItem("position") === "Supervisor" ? "selected" : ""}>Supervisor</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        `;

        let selectedImage = null;

        document.getElementById("customFileInput").addEventListener("click", function () {
            document.getElementById("profileImageInput").click();
        });

        document.getElementById("profileImageInput").addEventListener("change", function (event) {
            let file = event.target.files[0];
            if (file) {
                let reader = new FileReader();
                reader.onload = function (e) {
                    document.getElementById("profilePreview").src = e.target.result;
                    selectedImage = e.target.result;
                    document.getElementById("fileLabel").textContent = file.name;
                };
                reader.readAsDataURL(file);
            }
        });
    }

    function saveProfile() {
        let newProfileName = document.getElementById("profileName").value;
        let newProfileRole = document.getElementById("profileRole").value;
        let selectedImage = document.getElementById("profilePreview").src;

        // Save updated information in localStorage
        localStorage.setItem("profileName", newProfileName);
        localStorage.setItem("position", newProfileRole);
        localStorage.setItem("profileImage", selectedImage);

        // Update the navigation bar profile image
        let navProfileImg = document.getElementById("navProfileImage");
        if (navProfileImg) {
            navProfileImg.src = selectedImage; // Update the src of the profile image in the navbar
        }

        // Go back to the profile page
        showProfileContent();
    }

    function showEditPersonalInfo() {
        profileContent.innerHTML = `
            <div class="container-fluid edit-personal-info">
                <div style="margin-bottom:5px;">
                    <a href="#" class="back-profile-btn" style="text-decoration: none; color: black;">
                        <i class="bi bi-arrow-left"></i> Back to My Profile
                    </a>
                </div>
                <h2 class="mb-3">Edit Personal Information</h2>

                <div class="w-50">
                    <h4>Personal Information</h4>
                    <div class="mb-3">
                        <label class="form-label">Full Name</label>
                        <input type="text" id="fullName" class="form-control" value="${localStorage.getItem("fullName") || 'Lhing Wang'}">
                    </div>

                    <div class="mb-3">
                        <label class="form-label">Position</label>
                        <select id="position" class="form-control">
                            <option ${localStorage.getItem("position") === "HR Manager" ? "selected" : ""}>HR Manager</option>
                            <option ${localStorage.getItem("position") === "HR" ? "selected" : ""}>HR</option>
                            <option ${localStorage.getItem("position") === "Supervisor" ? "selected" : ""}>Supervisor</option>
                        </select>
                    </div>

                    <div class="mb-3">
                        <label class="form-label">Team</label>
                        <input type="text" id="team" class="form-control" value="${localStorage.getItem("team") || 'Project Internplus'}">
                    </div>

                    <div class="mb-3">
                        <label class="form-label">Email Address</label>
                        <input type="email" id="email" class="form-control" value="${localStorage.getItem("email") || 'wanglhing@vennessplus.com'}">
                    </div>

                    <div class="mb-3">
                        <label class="form-label">Phone Number</label>
                        <input type="text" id="phone" class="form-control" value="${localStorage.getItem("phone") || '0898144676'}">
                    </div>

                    <div class="mb-3">
                        <label class="form-label">Line ID</label>
                        <input type="text" id="lineID" class="form-control" value="${localStorage.getItem("lineID") || 'imlhingw21'}">
                    </div>

                    <button class="btn btn-primary save-personal-info-btn" style="background-color:#474BC2;">Save</button>
                </div>
            </div>
        `;

        // Add event listener for the Save button in the personal info form
        document.querySelector(".save-personal-info-btn").addEventListener("click", savePersonalInfo);
    }

    function savePersonalInfo() {
        // Get updated values from the form
        let newFullName = document.getElementById("fullName").value;
        let newPosition = document.getElementById("position").value;
        let newTeam = document.getElementById("team").value;
        let newEmail = document.getElementById("email").value;
        let newPhone = document.getElementById("phone").value;
        let newLineID = document.getElementById("lineID").value;

        // Save updated information in localStorage
        localStorage.setItem("fullName", newFullName);
        localStorage.setItem("position", newPosition);
        localStorage.setItem("team", newTeam);
        localStorage.setItem("email", newEmail);
        localStorage.setItem("phone", newPhone);
        localStorage.setItem("lineID", newLineID);

        // Go back to the profile page
        showProfileContent();
    }
});


// profile change function


// HR JS 
