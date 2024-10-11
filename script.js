
document.addEventListener('DOMContentLoaded', () => {
    const skills = document.querySelectorAll('.skills');
    skills.forEach(skill => {
        const value = skill.getAttribute('value');
        skill.style.width = value + '%';
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const navItems = document.querySelectorAll(".nav-item");

    navItems.forEach((item) => {
        item.addEventListener("click", function () {
            navItems.forEach((navItem) => navItem.classList.remove("active"));
            this.classList.add("active");
        });
    });
});
const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('#navbarSupportedContent li a')

window.addEventListener('scroll', () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    })
    current = "#" + current
    navLi.forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute("href") === current) {
            a.classList.add('active')
        }
    })
})

document.addEventListener('DOMContentLoaded', (event) => {
    const section1 = document.getElementById('section01');
    const section2 = document.getElementById('section02');


    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5 // Adjust as needed to trigger when 50% of the section is visible
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.id === 'section01' || entry.target.id === 'section02') {
                    section1.classList.add('transparent-bg');
                    section1.classList.remove('white-bg');

                } else {
                    section1.classList.add('white-bg');
                    section1.classList.remove('transparent-bg');


                }
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(section1);
    observer.observe(section2);

    // Optional: Observe additional sections if needed
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });
});
