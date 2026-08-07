console.log("Obour One Started");

/* ===== MOBILE MENU TOGGLE ===== */
document.addEventListener("DOMContentLoaded", function () {

    var toggle = document.getElementById("menuToggle");
    var nav = document.getElementById("mainNav");

    if (toggle && nav) {

        toggle.addEventListener("click", function () {
            nav.classList.toggle("nav-open");
        });

        nav.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                nav.classList.remove("nav-open");
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
document.addEventListener("DOMContentLoaded", function () {

    var copyBtn = document.querySelector(".share-copy");

    if (copyBtn) {

        copyBtn.addEventListener("click", function (e) {

            e.preventDefault();

            navigator.clipboard.writeText(window.location.href).then(function () {

                copyBtn.textContent = "✅";

                setTimeout(function () {
                    copyBtn.textContent = "🔗";
                }, 1500);

            });

        });

    }

});

/* ===== LOAD NEWS FROM SUPABASE ===== */

async function loadNews() {

    console.log("loadNews started");

    const newsContainer = document.getElementById("newsContainer");

    if (!newsContainer) {
        console.log("newsContainer not found");
        return;
    }

    const { data, error } = await window.obourSupabase
        .from("news")
        .select("*");

    console.log("DATA =", data);
    console.log("ERROR =", error);

    if (error) {
        console.log("News Error:", error);
        return;
    }

    if (!data || data.length === 0) {
        console.log("No news found");
        return;
    }

    newsContainer.innerHTML = "";

    data.forEach(news => {

        newsContainer.innerHTML += `
            <div class="news-card">

                <img src="${news.image_url || 'https://picsum.photos/400/250'}" alt="${news.title}" loading="lazy">

                <h3>${news.title}</h3>

                <p>${news.summary || ""}</p>

                <a href="pages/news.html">اقرأ المزيد →</a>

            </div>
        `;

    });

    console.log("News loaded successfully");

}

loadNews();

console.log("loadNews finished");

