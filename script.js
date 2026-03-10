// Scroll Reveal Animation
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

window.addEventListener("scroll", reveal);

// Initial call
reveal();

// Navbar Scroll Effect
window.addEventListener("scroll", () => {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
        navbar.style.background = "rgba(9, 9, 11, 0.95)";
        navbar.style.height = "70px";
    } else {
        navbar.style.background = "rgba(9, 9, 11, 0.8)";
        navbar.style.height = "80px";
    }
});

// Counter Animation
const counters = document.querySelectorAll('.counter');
const speed = 200;

const startCounters = () => {
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const inc = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    });
};

// Start counters when visible
const statsSection = document.querySelector('.stats');
const options = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            startCounters();
            observer.unobserve(entry.target);
        }
    });
}, options);

observer.observe(statsSection);

// Mobile Menu Logic (Placeholder)
document.getElementById('mobile-toggle').addEventListener('click', () => {
    alert('Mobile menu navigation coming soon!');
});
