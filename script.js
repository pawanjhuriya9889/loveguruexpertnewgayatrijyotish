const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = canvas.offsetHeight;
}
resize();
window.addEventListener("resize", resize);

const stars = Array.from({ length: 150 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.5 + 0.5,
    o: Math.random()
}));

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    stars.forEach(s => {
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${s.o})`;
        ctx.fill();

        s.y += 0.15;
        if (s.y > canvas.height) s.y = 0;
    });

    requestAnimationFrame(animate);
}

animate();


const cursor = document.querySelector(".custom-cursor");
const ring = document.querySelector(".cursor-ring");

document.addEventListener("mousemove", e => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

    ring.style.left = e.clientX + "px";
    ring.style.top = e.clientY + "px";
});

const clickables = document.querySelectorAll(
    "a, button, .profile img"
);

clickables.forEach(el => {
    el.addEventListener("mouseenter", () => {
        ring.style.transform = "translate(-50%, -50%) scale(0.6)";
    });

    el.addEventListener("mouseleave", () => {
        ring.style.transform = "translate(-50%, -50%) scale(1)";
    });
});


window.addEventListener("load", () => {
    document.querySelector(".subtitle").classList.add("hero-animate");
    document.querySelector(".hero-content h1").classList.add("hero-animate");
    document.querySelector(".hero-btn").classList.add("hero-animate");
});



/* ===== SCROLL REVEAL ===== */
const revealSections = document.querySelectorAll(".reveal-section");

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    {
        threshold: 0.15
    }
);

revealSections.forEach(section => {
    observer.observe(section);
});


const orbits = document.querySelectorAll('.orbit');

orbits.forEach((orbit, index) => {
    orbit.animate(
        [{ transform: 'rotate(0deg)' }, { transform: 'rotate(360deg)' }],
        {
            duration: 30000 + index * 10000,
            iterations: Infinity,
            easing: 'linear'
        }
    );
});


// subtle floating effect
const cards = document.querySelectorAll('.zodiac-card');

cards.forEach((card, i) => {
    card.animate(
        [
            { transform: 'translateY(0px)' },
            { transform: 'translateY(-10px)' },
            { transform: 'translateY(0px)' }
        ],
        {
            duration: 4000 + i * 200,
            iterations: Infinity,
            easing: 'ease-in-out'
        }
    );
});

