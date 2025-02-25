// Initialize AOS (Animate on Scroll)
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    mirror: false
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
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

// Package hover effects
document.querySelectorAll('.package-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = this.classList.contains('featured') 
            ? 'scale(1.05) translateY(-10px)' 
            : 'translateY(-10px)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = this.classList.contains('featured')
            ? 'scale(1.05)'
            : 'translateY(0)';
    });
});

// Form validation and submission
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('#contact-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add your form submission logic here
            console.log('Form submitted');
        });
    }
});

// Intersection Observer for counter animation
const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

document.querySelectorAll('.counter').forEach(counter => {
    observer.observe(counter);
});

// ROI Calculator
function calculateROI() {
    const tasksPerDay = parseFloat(document.getElementById('tasks-per-day').value);
    const timePerTask = parseFloat(document.getElementById('time-per-task').value);
    const hourlyWage = parseFloat(document.getElementById('hourly-wage').value);
    const workingDays = parseFloat(document.getElementById('working-days').value);

    // Calculate monthly time saved (in hours)
    const minutesPerDay = tasksPerDay * timePerTask;
    const hoursPerDay = minutesPerDay / 60;
    const monthlyHoursSaved = hoursPerDay * workingDays;

    // Calculate monthly money saved
    const monthlySavings = monthlyHoursSaved * hourlyWage;

    // Show results
    document.getElementById('time-saved').textContent = `${monthlyHoursSaved.toFixed(1)} hours`;
    document.getElementById('money-saved').textContent = `$${monthlySavings.toFixed(2)}`;
    
    // Show results container with animation
    const resultsDiv = document.getElementById('roi-result');
    resultsDiv.style.display = 'block';
    resultsDiv.style.opacity = '0';
    setTimeout(() => {
        resultsDiv.style.transition = 'opacity 0.5s ease';
        resultsDiv.style.opacity = '1';
    }, 50);
}
