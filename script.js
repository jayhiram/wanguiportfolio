
        // Mobile menu toggle functionality
        const hamburger = document.getElementById('hamburger');
        const mobileMenu = document.getElementById('mobile-menu');
        const menuOpen = document.getElementById('menu-open');
        const menuClose = document.getElementById('menu-close');
        const body = document.body;

        hamburger.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            
            if (mobileMenu.classList.contains('active')) {
                menuOpen.style.display = 'none';
                menuClose.style.display = 'block';
                // Prevent body scroll when menu is open
                body.style.overflow = 'hidden';
            } else {
                menuOpen.style.display = 'block';
                menuClose.style.display = 'none';
                body.style.overflow = 'auto';
            }
        });

        // Close mobile menu when clicking on a link
        const mobileNavLinks = document.querySelectorAll('.mobile-nav-links a');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                menuOpen.style.display = 'block';
                menuClose.style.display = 'none';
                body.style.overflow = 'auto';
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!hamburger.contains(event.target) && !mobileMenu.contains(event.target)) {
                if (mobileMenu.classList.contains('active')) {
                    mobileMenu.classList.remove('active');
                    menuOpen.style.display = 'block';
                    menuClose.style.display = 'none';
                    body.style.overflow = 'auto';
                }
            }
        });

        // Add scrolled class to navbar for backdrop blur effect
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Active navigation highlighting based on scroll position
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-links a, .mobile-nav-links a');

        window.addEventListener('scroll', () => {
            let currentSection = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop - 200;
                const sectionHeight = section.offsetHeight;
                
                if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                    currentSection = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${currentSection}`) {
                    link.classList.add('active');
                }
            });
        });

        // Handle window resize
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                // Close mobile menu on larger screens
                mobileMenu.classList.remove('active');
                menuOpen.style.display = 'block';
                menuClose.style.display = 'none';
                body.style.overflow = 'auto';
            }
        });

        // Prevent menu from staying open when orientation changes
        window.addEventListener('orientationchange', function() {
            setTimeout(() => {
                if (mobileMenu.classList.contains('active')) {
                    mobileMenu.classList.remove('active');
                    menuOpen.style.display = 'block';
                    menuClose.style.display = 'none';
                    body.style.overflow = 'auto';
                }
            }, 100);
        });
