    // Mobile Navigation Toggle
            const hamburger = document.getElementById('hamburger');
            const navLinks = document.getElementById('navLinks');

            hamburger.addEventListener('click', () => {
                navLinks.classList.toggle('active');
                hamburger.classList.toggle('active');
            });

            // Close mobile menu when clicking a link
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.addEventListener('click', () => {
                    navLinks.classList.remove('active');
                    hamburger.classList.remove('active');
                });
            });

            // Sticky Header
            const header = document.getElementById('header');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 100) {
                    header.classList.add('header-scrolled');
                } else {
                    header.classList.remove('header-scrolled');
                }
            });

            // Back to Top Button
            const backToTop = document.getElementById('backToTop');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 300) {
                    backToTop.classList.add('active');
                } else {
                    backToTop.classList.remove('active');
                }
            });

            // Smooth Scrolling for Anchor Links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    document.querySelector(this.getAttribute('href')).scrollIntoView({
                        behavior: 'smooth'
                    });
                });
            });

            // Scroll Reveal Animation
            const fadeElements = document.querySelectorAll('.fade-in');
            const fadeObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            }, {
                threshold: 0.1
            });

            fadeElements.forEach(element => {
                fadeObserver.observe(element);
            });

            // Form Submission
            const contactForm = document.getElementById('contactForm');
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                alert('Thank you for your message! I will get back to you soon.');
                contactForm.reset();
            });

            // Dark Mode Toggle
            const themeToggle = document.getElementById('themeToggle');
            themeToggle.addEventListener('click', () => {
                document.body.classList.toggle('dark-mode');
                const icon = themeToggle.querySelector('i');
                if (document.body.classList.contains('dark-mode')) {
                    icon.classList.remove('fa-moon');
                    icon.classList.add('fa-sun');
                    localStorage.setItem('theme', 'dark');
                } else {
                    icon.classList.remove('fa-sun');
                    icon.classList.add('fa-moon');
                    localStorage.setItem('theme', 'light');
                }
            });

            // Check for saved theme preference
            if (localStorage.getItem('theme') === 'dark') {
                document.body.classList.add('dark-mode');
                const icon = themeToggle.querySelector('i');
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
            }

            // Animate Skill Bars on Scroll
            const skillBars = document.querySelectorAll('.skill-progress');
            const skillsObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const width = entry.target.style.width;
                        entry.target.style.width = '0';
                        setTimeout(() => {
                            entry.target.style.width = width;
                        }, 100);
                    }
                });
            }, {
                threshold: 0.5
            });

            skillBars.forEach(bar => {
                skillsObserver.observe(bar);
            });

            // Print Button Functionality
            const printButton = document.createElement('button');
            printButton.className = 'btn';
            printButton.textContent = 'Print Resume';
            printButton.style.position = 'fixed';
            printButton.style.bottom = '100px';
            printButton.style.right = '30px';
            printButton.style.zIndex = '999';
            printButton.addEventListener('click', () => {
                window.print();
            });
            document.body.appendChild(printButton);

            // Project Filtering Functionality
            const projectFilter = document.createElement('div');
            projectFilter.className = 'project-filter';
            projectFilter.style.textAlign = 'center';
            projectFilter.style.marginBottom = '30px';
            projectFilter.innerHTML = `
                <button class="btn filter-btn active" data-filter="all">All</button>
                <button class="btn filter-btn" data-filter="web">Web Development</button>
                <button class="btn filter-btn" data-filter="electronics">Electronics</button>
            `;
            document.querySelector('#projects .container').insertBefore(projectFilter, document.querySelector('.projects-grid'));

            const filterButtons = document.querySelectorAll('.filter-btn');
            const projectCards = document.querySelectorAll('.project-card');

            filterButtons.forEach(button => {
                button.addEventListener('click', () => {
                    // Update active button
                    filterButtons.forEach(btn => btn.classList.remove('active'));
                    button.classList.add('active');

                    const filter = button.getAttribute('data-filter');

                    // Filter projects
                    projectCards.forEach(card => {
                        const tags = card.querySelectorAll('.project-tag');
                        let hasTag = false;
                    
                        if (filter === 'all') {
                            card.style.display = 'block';
                            return;
                        }

                        tags.forEach(tag => {
                            if (tag.textContent.toLowerCase().includes(filter)) {
                                hasTag = true;
                            }
                        });

                        if (hasTag) {
                            card.style.display = 'block';
                        } else {
                            card.style.display = 'none';
                        }
                    });
                });
            });

            // Current Year Update
            document.querySelector('.copyright p').textContent = `© ${new Date().getFullYear()} Amit Padhy. All Rights Reserved.`;

            // Interactive Elements
            document.querySelectorAll('.service-card, .project-card, .education-card').forEach(card => {
                card.addEventListener('mouseenter', () => {
                    card.style.transform = 'translateY(-10px)';
                    card.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.2)';
                });
                card.addEventListener('mouseleave', () => {
                    card.style.transform = '';
                    card.style.boxShadow = '';
                });
            });

            // Dynamic Skill Update (for demonstration)
            setTimeout(() => {
                document.querySelectorAll('.skill-progress').forEach(progress => {
                    const currentWidth = parseInt(progress.style.width);
                    progress.style.width = '0';
                    setTimeout(() => {
                        progress.style.width = `${currentWidth}%`;
                    }, 100);
                });
            }, 1500);