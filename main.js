// document.getElementById('resumeForm')?.addEventListener('submit', function(event) {
//     event.preventDefault();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _a;
//     // Get form elements
//     const profilePictureInput = document.getElementById('profilePic') as HTMLInputElement;
//     const nameElement = document.getElementById('name') as HTMLInputElement;
//     const emailElement = document.getElementById('email') as HTMLInputElement;
//     const phoneElement = document.getElementById('phone') as HTMLInputElement;
//     const educationElement = document.getElementById('education') as HTMLInputElement;
//     const experienceElement = document.getElementById('experience') as HTMLInputElement;
//     const skillsElement = document.getElementById('skills') as HTMLInputElement;
//     const usernameElement = document.getElementById('username') as HTMLInputElement;
//     // Check if all elements are available
//     if ( profilePictureInput && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement && usernameElement) {
//         const name = nameElement.value;
//         const email = emailElement.value;
//         const phone = phoneElement.value;
//         const education = educationElement.value;
//         const experience = experienceElement.value;
//         const skills = skillsElement.value;
//         const username = usernameElement.value;
//         const uniquePath = `resumes/${username.replace(/\s+/g, '_')}_cv.html`;
//         // picture
//         const profilePictureFile = profilePictureInput.files?.[0]
//         const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile): "";
//         // Create resume output
//         const resumeOutput = `
//             <h2>Resume</h2>
//             ${profilePictureURL? `<img src= "${profilePictureURL} alt= "Profile Pic" class =  "profilePicture">`: ""}
//             <p><strong>Name:</strong><span id="edit-name" class="editable">${name}</span></p>
//             <p><strong>Email:</strong><span id="edit-email" class="editable">${email}</span></p>
//             <p><strong>Phone:</strong><span id="edit-phone" class="editable">${phone}</span></p>
//             <h3>Education</h3>
//             <p id="edit-education" class="editable">${education}</p>
//             <h3>Experience</h3>
//             <p id="edit-experience" class="editable">${experience}</p>
//             <h3>Skills</h3>
//             <p id="edit-skills" class="editable">${skills}</p>
//         `;
//         // Create download link
//         const downloadLink = document.createElement('a');
//         downloadLink.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(resumeOutput);
//         downloadLink.download = uniquePath;
//         downloadLink.textContent = 'Download 2024 Resume';
//         // Display resume output
//         const resumeOutputElement = document.getElementById('resumeOutput');
//         if (resumeOutputElement) {
//             resumeOutputElement.innerHTML = resumeOutput;
//             resumeOutputElement.appendChild(downloadLink); // Append the download link here
//             makeEditable(); // Make elements editable after content is injected
//         }
//     } else {
//         console.error('One or more form elements are missing.');
//     }
// });
// // Function to make content editable
// function makeEditable() {
//     const editableElements = document.querySelectorAll('.editable');
//     editableElements.forEach(element => {
//         element.addEventListener('click', function () {
//             const currentElement = element as HTMLElement;
//             const currentValue = currentElement.textContent || "";
//             // Create an input element to replace the text content
//             const input = document.createElement('input');
//             input.type = 'text';
//             input.value = currentValue;
//             input.classList.add('editing-input');
//             // Replace the current element with the input field
//             currentElement.style.display = 'none';
//             currentElement.parentNode?.insertBefore(input, currentElement);
//             // Focus on the input element
//             input.focus();
//             // On input blur, replace the input back with the updated text
//             input.addEventListener('blur', function () {
//                 currentElement.textContent = input.value;
//                 currentElement.style.display = 'inline'; // Make the original element visible again
//                 input.remove(); // Remove the input field
//             });
//         });
//     });
// }
// 
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _this = this;
    var _a;
    event.preventDefault();
    // Get form elements
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    var usernameElement = document.getElementById('username');
    var profilePictureElement = document.getElementById('profilePic');
    if (nameElement && emailElement && phoneElement &&
        educationElement && experienceElement && skillsElement && usernameElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        var username_1 = usernameElement.value;
        // Create resume output
        var resumeHTML = "\n            <h2>Resume</h2>\n            <p><strong>Name:</strong> ".concat(name_1, "</p>\n            <p><strong>Email:</strong> ").concat(email, "</p>\n            <p><strong>Phone:</strong> ").concat(phone, "</p>\n            <h3>Education</h3>\n            <p>").concat(education, "</p>\n            <h3>Experience</h3>\n            <p>").concat(experience, "</p>\n            <h3>Skills</h3>\n            <p>").concat(skills, "</p>\n        ");
        // Display the resume output
        var resumeOutputElement_1 = document.getElementById('resumeOutput');
        if (resumeOutputElement_1) {
            resumeOutputElement_1.innerHTML = resumeHTML;
            resumeOutputElement_1.classList.remove('hidden');
            // If profile picture is selected, display it
            if ((_a = profilePictureElement === null || profilePictureElement === void 0 ? void 0 : profilePictureElement.files) === null || _a === void 0 ? void 0 : _a.length) {
                var file = profilePictureElement.files[0];
                var reader = new FileReader();
                reader.onload = function (e) {
                    var _a;
                    var img = document.createElement('img');
                    img.src = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
                    img.alt = 'Profile Picture';
                    img.style.maxWidth = '150px'; // Set the maximum width
                    img.style.display = 'block'; // Display block to center with margin auto
                    img.style.margin = '0 auto'; // Center the image horizontally
                    img.style.borderRadius = '50%'; // Optional: Make the image circular
                    resumeOutputElement_1.insertBefore(img, resumeOutputElement_1.firstChild);
                };
                reader.readAsDataURL(file);
            }
            // Buttons for download and share
            var buttonsContainer = document.createElement('div');
            buttonsContainer.id = 'buttonsContainer';
            resumeOutputElement_1.appendChild(buttonsContainer);
            var downloadButton = document.createElement('button');
            downloadButton.textContent = 'Download as PDF';
            downloadButton.addEventListener('click', function () {
                window.print();
            });
            buttonsContainer.appendChild(downloadButton);
            var shareLinkButton = document.createElement('button');
            shareLinkButton.textContent = 'Copy Sharable Link';
            shareLinkButton.addEventListener('click', function () { return __awaiter(_this, void 0, void 0, function () {
                var shareableLink, err_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            shareableLink = "https://yourdomain.com/resumes/".concat(username_1.replace(/\s+/g, '_'), "_cv.html");
                            return [4 /*yield*/, navigator.clipboard.writeText(shareableLink)];
                        case 1:
                            _a.sent();
                            alert('Shareable link copied to clipboard!');
                            return [3 /*break*/, 3];
                        case 2:
                            err_1 = _a.sent();
                            console.error('Failed to copy link: ', err_1);
                            alert('Failed to copy link to clipboard. Please try again.');
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            buttonsContainer.appendChild(shareLinkButton);
        }
        else {
            console.error('Resume output container not found');
        }
    }
    else {
        console.error('Form elements are missing');
    }
});
