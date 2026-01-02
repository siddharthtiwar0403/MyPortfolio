document.addEventListener('DOMContentLoaded', function () {
    // Theme Toggle
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;

    // Check for saved theme preference or use preferred color scheme
    const savedTheme = localStorage.getItem('theme') ||
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    body.setAttribute('data-theme', savedTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });

    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Animated Text
    const textElement = document.querySelector('.sec-text');
    const textArray = ["CSE Student", "UI/UX Designer", "Graphic Designer"];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let isEnd = false;

    function typeText() {
        const currentText = textArray[textIndex];

        if (isDeleting) {
            textElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            textElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }

        if (!isDeleting && charIndex === currentText.length) {
            isEnd = true;
            isDeleting = true;
            setTimeout(typeText, 1500);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            isEnd = false;
            textIndex = (textIndex + 1) % textArray.length;
            setTimeout(typeText, 500);
        } else {
            const speed = isDeleting ? 50 : 100;
            setTimeout(typeText, speed);
        }
    }

    // Start typing effect after a delay
    setTimeout(typeText, 1000);

    // Projects Data
    const projects = [
        {
            title: "Blog App Inegrated with AI",
            description: "A fully responsive Blog App where user can see the blog posted by admin they can comment genrate new blog using AI. Admin will approve or delete the blog and coment be posting it.",
            tags: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"],
            image: "blogimg.png",
            liveLink: "https://quick-blog-chi-mauve.vercel.app/",
            codeLink: "https://github.com/siddharthtiwar0403/Blog-App.git"
        },
        {
            title: "Water Quality Checker App",
            description: "Real-time Water Quality checker by using TDS, ph value, TURBUDITY. It will also give suggestion like cost effective water purifier, prevention, filteration Using AI",
            tags: ["NEXT JS", "API", "Tailwind CSS", "Python", "AI"],
            image: "K1000img.png",
            liveLink: "https://water-quality-app-theta.vercel.app/",
            codeLink: "https://github.com/siddharthtiwar0403/water-quality-app.git"
        },
        {
            title: "Daily Dose News App",
            description: "Made Daily Dose News App where you can read daily by using different filters like bussiness, general, health and many more I am uaing API.",
            tags: ["React", "Node.js", "Express", "API", "Tailwind CSS"],
            image: "newsimg.png",
            liveLink: "https://siddharthtiwar0403.github.io/Daily-Dose-NewsApp/",
            codeLink: "https://github.com/siddharthtiwar0403/Daily-Dose-NewsApp.git"
        },
        {
            title: "Mood Tracking app",
            description: "In summer vaction i have partipated in code circuit hackathon in which i have made Mood Tracking app in which you update your daily mood and you will get different suggestion according to last 7 day mood. Data will be stored in local storge.",
            tags: ["HTML", "CSS", "JAVASCRIPT"],
            image: "codecircuitimg.png",
            liveLink: "https://siddharthtiwar0403.github.io/Code-Circuit-Project-1/",
            codeLink: "https://github.com/siddharthtiwar0403/Code-Circuit-Project-1.git"
        },
        {
            title: "Text Analyzer",
            description: "Text Analyser App user can perferform different functionality like Counting number of word, Conververting upper case or lower case, reading the sectence theme toggle button is also there.",
            tags: ["HTML", "CSS", "JavaScript", "React", "API"],
            image: "textappimg.png",
            liveLink: "https://siddharthtiwar0403.github.io/Text-Analyzer-App/",
            codeLink: "https://github.com/siddharthtiwar0403/Text-Analyzer-App.git"
        },
        {
            title: "Recipe Finder App",
            description: "Search for recipes by ingredient with nutritional information and saving favorites.",
            tags: ["JavaScript", "API", "Firebase"],
            image: "project6.jpg",
            liveLink: "#",
            codeLink: "#"
        }
    ];

    // Display Projects
    const projectsGrid = document.querySelector('.projects-grid');
    const viewMoreBtn = document.getElementById('view-more-btn');
    let visibleProjects = 3;

    function displayProjects() {
        projectsGrid.innerHTML = '';
        const projectsToShow = projects.slice(0, visibleProjects);

        projectsToShow.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card';

            projectCard.innerHTML = `
                <div class="project-image">
                    <img src="${project.image}" alt="${project.title}">
                </div>
                <div class="project-info">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="project-tags">
                        ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                    <div class="project-links">
                        <a href="${project.liveLink}" target="_blank"><i class="fas fa-external-link-alt"></i> Live</a>
                        <a href="${project.codeLink}" target="_blank"><i class="fab fa-github"></i> Code</a>
                    </div>
                </div>
            `;

            projectsGrid.appendChild(projectCard);
        });

        // Show/hide view more button
        if (visibleProjects >= projects.length) {
            viewMoreBtn.style.display = 'none';
        } else {
            viewMoreBtn.style.display = 'inline-block';
        }
    }

    // View More Projects
    viewMoreBtn.addEventListener('click', () => {
        visibleProjects = projects.length;
        displayProjects();
    });

    // Initialize projects display
    displayProjects();

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // Form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            // Here you would typically send the form data to a server
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
        });
    }
});

// Shooting stars matching  implementation
function createStars() {
    const container = document.querySelector('.shooting-stars');

    // Remove old stars
    document.querySelectorAll('.shooting-star').forEach(star => {
        if (!star.getAnimations().length) star.remove();
    });

    // Create 1-3 new stars
    const count = 7 + Math.floor(Math.random() * 2);

    for (let i = 0; i < count; i++) {
        const star = document.createElement('div');
        star.className = 'shooting-star';

        // Start from random point in top-right quadrant
        const startX = 80 + Math.random() * 30;
        const startY = Math.random() * 30;

        // Random angle between -30° to -60°
        const angle = -60 + (Math.random() * 60 - 15);

        // Random speed (fast)
        const duration = 2000 + Math.random() * 1500;

        // Random delay
        const delay = Math.random() * 3000;

        // Set initial position
        star.style.left = `${startX}%`;
        star.style.top = `${startY}%`;

        // Set tail angle and length
        star.style.setProperty('--angle', `${angle}deg`);
        star.style.setProperty('--length', `${50 + Math.random() * 100}px`);

        // Animate
        star.style.animation = `shoot ${duration}ms linear ${delay}ms forwards`;

        container.appendChild(star);
    }
}

// Initialize
createStars();

// Create new stars every 3-8 seconds
setInterval(createStars, 1000 + Math.random() * 5000);


//   certification section 

const certifications = [
    {
        title: "Python for Data Science",
        issuer: "IBM",
        date: "May 2023",
        icon: "fab fa-python"
    }
];

// DOM elements
const certsGrid = document.getElementById('certificationsGrid');
const viewMoreCertsBtn = document.getElementById('view-more-certs');
let allCertificationsVisible = false;
const defaultVisibleCount = 3;

// Display Certifications
function displayCertifications() {
    // Get all certificate cards
    const allCerts = document.querySelectorAll('.certification-card');

    // Show/hide certificates based on state
    allCerts.forEach((cert, index) => {
        if (index < defaultVisibleCount) {
            // Always show the first 3 certificates
            cert.style.display = 'flex';
        } else {
            // Show additional certificates only if "View All" is active
            cert.style.display = allCertificationsVisible ? 'flex' : 'none';
        }
    });

    // Update button text
    viewMoreCertsBtn.textContent = allCertificationsVisible ? "View Less" : "View More";
}

// Add additional certificates
function addAdditionalCertificates() {
    // Check if additional certificates already exist
    const existingCerts = document.querySelectorAll('.certification-card');
    if (existingCerts.length > defaultVisibleCount) {
        return; // Additional certificates already added
    }

    // Add additional certificates
    certifications.forEach((cert, index) => {
        const certCard = document.createElement('div');
        certCard.className = 'certification-card';
        certCard.style.animationDelay = `${index * 0.1}s`;

        certCard.innerHTML = `
                    <div class="certification-image">
                        <i class="${cert.icon}"></i>
                    </div>
                    <div class="certification-info">
                        <h3>${cert.title}</h3>
                        <p>Issued by: ${cert.issuer}</p>
                        <p>Date: ${cert.date}</p>
                        <a href="#" class="btn btn-small">View Certificate</a>
                    </div>
                `;

        certsGrid.appendChild(certCard);
    });
}

// Toggle certifications view
viewMoreCertsBtn.addEventListener('click', () => {
    // Add additional certificates if not already added
    addAdditionalCertificates();

    // Toggle visibility state
    allCertificationsVisible = !allCertificationsVisible;

    // Update display
    displayCertifications();
});

// skill section 
const skillsData = [
    { name: "HTML5", icon: "fab fa-html5", category: "frontend" },
    { name: "CSS3", icon: "fab fa-css3-alt", category: "frontend" },
    { name: "JavaScript", icon: "fab fa-js", category: "frontend" },
    { name: "React", icon: "fab fa-react", category: "frontend" },
    { name: "Next.js", icon: "fas fa-code", category: "frontend" },
    { name: "Node.js", icon: "fab fa-node-js", category: "backend" },
    { name: "MongoDB", icon: "fas fa-database", category: "backend" },
    { name: "Java", icon: "fab fa-java", category: "backend" },
    { name: "Python", icon: "fab fa-python", category: "backend" },
    { name: "Figma", icon: "fab fa-figma", category: "design" },
    { name: "UI/UX", icon: "fas fa-paint-brush", category: "design" },
    { name: "Git", icon: "fab fa-git-alt", category: "tools" },
    { name: "Redux", icon: "fas fa-code-branch", category: "tools" },
    { name: "Sass", icon: "fab fa-sass", category: "tools" }
];

// Initialize Skills
function initSkills() {
    const skillsGrid = document.getElementById('skillsGrid');

    // Clear existing skills
    skillsGrid.innerHTML = '';

    // Add skills to grid
    skillsData.forEach(skill => {
        const skillCard = document.createElement('div');
        skillCard.className = `skill-card ${skill.category}`;
        skillCard.innerHTML = `
                    <div class="skill-icon">
                        <i class="${skill.icon}"></i>
                    </div>
                    <span class="skill-name">${skill.name}</span>
                `;
        skillsGrid.appendChild(skillCard);
    });

    // Set up filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Filter skills
            const filter = button.dataset.filter;
            const allSkills = document.querySelectorAll('.skill-card');

            allSkills.forEach(skill => {
                if (filter === 'all' || skill.classList.contains(filter)) {
                    skill.style.display = 'flex';
                    skill.style.animation = 'fadeIn 0.5s ease forwards';
                } else {
                    skill.style.display = 'none';
                }
            });
        });
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', initSkills);

function sendEmail() {
    let parms = {

    }
}


// GitHub Dashboard Functionality - SAFE (Serverless Backend)
document.addEventListener('DOMContentLoaded', function () {
    const githubSection = document.getElementById('github');
    if (!githubSection) return;

    // DOM Elements
    const fetchBtn = document.getElementById('fetch-github-btn');
    const statsContainer = document.getElementById('github-stats');
    const githubAvatar = document.getElementById('github-avatar');
    const githubName = document.getElementById('github-name');
    const githubBio = document.getElementById('github-bio');
    const githubUsername = document.getElementById('github-username');

    // Fetch GitHub data FROM NETLIFY FUNCTION
    async function fetchGitHubData() {
        try {
            setLoadingState(true);

            // 👇 SAFE call (NO TOKEN in frontend)
            const response = await fetch('/api/github');

            if (!response.ok) {
                throw new Error(`Server Error: ${response.status}`);
            }

            const userData = await response.json();

            // Update profile info
            updateProfileInfo(userData);

            // Render stats
            displayGitHubStats(userData);

            setLoadingState(false);
        } catch (error) {
            console.error('GitHub fetch failed:', error);
            showErrorState(error.message);
            setLoadingState(false);
        }
    }

    function updateProfileInfo(userData) {
        githubAvatar.src = userData.avatarUrl;
        githubName.textContent = userData.name || userData.login;
        githubBio.textContent =
            userData.bio || 'GitHub enthusiast passionate about coding';
        githubUsername.textContent = `@${userData.login}`;
    }

    function displayGitHubStats(userData) {
        const allStats = [
            { icon: 'fas fa-code-branch', number: userData.repositories.totalCount, label: 'Public Repos' },
            { icon: 'fas fa-users', number: userData.followers.totalCount, label: 'Followers' },
            { icon: 'fas fa-user-friends', number: userData.following.totalCount, label: 'Following' },
            { icon: 'fas fa-code', number: userData.contributionsCollection.contributionCalendar.totalContributions, label: 'Contributions' },
            { icon: 'fas fa-star', number: userData.starredRepositories.totalCount, label: 'Stars Given' },
            { icon: 'fas fa-trophy', number: userData.contributionsCollection.totalCommitContributions, label: 'Total Commits' }
        ];

        statsContainer.innerHTML = allStats.map(stat => `
            <div class="stat-card">
                <div class="stat-icon">
                    <i class="${stat.icon}"></i>
                </div>
                <div class="stat-number">${formatNumber(stat.number)}</div>
                <div class="stat-label">${stat.label}</div>
            </div>
        `).join('');
    }

    function setLoadingState(isLoading) {
        if (isLoading) {
            fetchBtn.disabled = true;
            fetchBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
        } else {
            fetchBtn.disabled = false;
            fetchBtn.innerHTML = '<i class="fas fa-sync-alt"></i> Refresh';
        }
    }

    function showErrorState(msg) {
        statsContainer.innerHTML = `
            <div class="error-state">
                <i class="fas fa-exclamation-triangle"></i>
                <p>Failed to load GitHub data</p>
                <small>${msg}</small>
            </div>
        `;
    }

    function formatNumber(num) {
        if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + 'M';
        if (num >= 1_000) return (num / 1_000).toFixed(1) + 'k';
        return num;
    }

    fetchBtn.addEventListener('click', fetchGitHubData);

    // Initial load
    fetchGitHubData();
});

document.getElementById("contact-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = Object.fromEntries(new FormData(e.target));

  const res = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData)
  });

  const result = await res.json();
  alert(result.success ? "Message sent!" : "Failed to send");
});