
        // Page navigation functionality
        document.addEventListener('DOMContentLoaded', function() {
            // Get all pages
            const pages = document.querySelectorAll('.page, .category-page');
            const homePage = document.getElementById('home');
            
            // Function to show a page
            function showPage(pageId) {
                // Hide all pages
                pages.forEach(page => {
                    page.classList.remove('active');
                });
                
                // Show the requested page
                const page = document.getElementById(pageId);
                if (page) {
                    page.classList.add('active');
                }
                
                // Scroll to top
                window.scrollTo(0, 0);
            }
            
            // Set up navigation links
            document.querySelectorAll('nav a, .footer-links a, .back-to-home, .btn, .category-card a').forEach(link => {
                link.addEventListener('click', function(e) {
                    const href = this.getAttribute('href');
                    
                    // Check if it's an anchor link
                    if (href.startsWith('#')) {
                        e.preventDefault();
                        const pageId = href.substring(1);
                        
                        // If it's a category page link
                        if (['kitchen', 'laundry', 'climate', 'entertainment'].includes(pageId)) {
                            showPage(pageId);
                        } 
                        // If it's a section on the home page
                        else if (['home', 'products', 'categories', 'testimonials', 'contact'].includes(pageId)) {
                            showPage('home');
                            // Scroll to section
                            setTimeout(() => {
                                const element = document.getElementById(pageId);
                                if (element) {
                                    element.scrollIntoView({ behavior: 'smooth' });
                                }
                            }, 100);
                        }
                    }
                });
            });
            
            // Handle home logo click
            document.getElementById('home-link').addEventListener('click', function(e) {
                e.preventDefault();
                showPage('home');
            });
            
            // Handle browser back/forward buttons
            window.addEventListener('popstate', function() {
                const hash = window.location.hash.substring(1);
                if (hash) {
                    showPage(hash);
                } else {
                    showPage('home');
                }
            });
            
            // Set initial page based on URL hash
            const initialPage = window.location.hash.substring(1) || 'home';
            showPage(initialPage);
        });
    