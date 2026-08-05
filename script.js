console.log("Obour One Started");

/* ===== MOBILE MENU TOGGLE ===== */
document.addEventListener('DOMContentLoaded', function () {
    var toggle = document.getElementById('menuToggle');
    var nav = document.getElementById('mainNav');

    if (toggle && nav) {
        toggle.addEventListener('click', function () {
            nav.classList.toggle('nav-open');
        });

        nav.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                nav.classList.remove('nav-open');
            });
        });
    }
});

/* ===== BACK TO TOP BUTTON ===== */
const backToTop = document.getElementById("backToTop");

if (backToTop) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }
    });

    backToTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

/* ===== COPY ARTICLE LINK ===== */
document.addEventListener('DOMContentLoaded', function () {
    var copyBtn = document.querySelector('.share-copy');
    if (copyBtn) {
        copyBtn.addEventListener('click', function (e) {
            e.preventDefault();
            navigator.clipboard.writeText(window.location.href).then(function () {
                copyBtn.textContent = '✅';
                setTimeout(function () {
                    copyBtn.textContent = '🔗';
                }, 1500);
            });
        });
    }
});
console.log("Supabase Ready:", supabase);

async function testConnection() {
  const { data, error } = await supabase
    .from("news")
    .select("*");

  console.log("Data:", data);
  console.log("Error:", error);
}

testConnection();
