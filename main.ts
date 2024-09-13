document.getElementById('resumeForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form elements
    const nameElement = document.getElementById('name') as HTMLInputElement | null;
    const emailElement = document.getElementById('email') as HTMLInputElement | null;
    const phoneElement = document.getElementById('phone') as HTMLInputElement | null;
    const educationElement = document.getElementById('education') as HTMLInputElement | null;
    const experienceElement = document.getElementById('experience') as HTMLInputElement | null;
    const skillsElement = document.getElementById('skills') as HTMLInputElement | null;
    const usernameElement = document.getElementById('username') as HTMLInputElement | null;
    const profilePictureElement = document.getElementById('profilePic') as HTMLInputElement | null;

    if (
        nameElement && emailElement && phoneElement &&
        educationElement && experienceElement && skillsElement && usernameElement
    ) {
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;
        const username = usernameElement.value;

        // Create resume output
        let resumeHTML = `
            <h2>Resume</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <h3>Education</h3>
            <p>${education}</p>
            <h3>Experience</h3>
            <p>${experience}</p>
            <h3>Skills</h3>
            <p>${skills}</p>
        `;

        // Display the resume output
        const resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeHTML;
            resumeOutputElement.classList.remove('hidden');

            // If profile picture is selected, display it
            if (profilePictureElement?.files?.length) {
                const file = profilePictureElement.files[0];
                const reader = new FileReader();
                reader.onload = function(e) {
                    const img = document.createElement('img');
                    img.src = e.target?.result as string;
                    img.alt = 'Profile Picture';
                    img.style.maxWidth = '150px'; // Set the maximum width
                    img.style.display = 'block'; // Display block to center with margin auto
                    img.style.margin = '0 auto'; // Center the image horizontally
                    img.style.borderRadius = '50%'; // Optional: Make the image circular
                    resumeOutputElement.insertBefore(img, resumeOutputElement.firstChild);
                };
                reader.readAsDataURL(file);
            }

            // Buttons for download and share
            const buttonsContainer = document.createElement('div');
            buttonsContainer.id = 'buttonsContainer';
            resumeOutputElement.appendChild(buttonsContainer);

            const downloadButton = document.createElement('button');
            downloadButton.textContent = 'Download as PDF';
            downloadButton.addEventListener('click', () => {
                window.print();
            });
            buttonsContainer.appendChild(downloadButton);

            const shareLinkButton = document.createElement('button');
            shareLinkButton.textContent = 'Copy Sharable Link';
            shareLinkButton.addEventListener('click', async () => {
                try {
                    const shareableLink = `https://yourdomain.com/resumes/${username.replace(/\s+/g, '_')}_cv.html`;
                    await navigator.clipboard.writeText(shareableLink);
                    alert('Shareable link copied to clipboard!');
                } catch (err) {
                    console.error('Failed to copy link: ', err);
                    alert('Failed to copy link to clipboard. Please try again.');
                }
            });
            buttonsContainer.appendChild(shareLinkButton);
        } else {
            console.error('Resume output container not found');
        }
    } else {
        console.error('Form elements are missing');
    }
});
