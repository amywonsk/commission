


/* =========================
모달
========================= */

function openModal(image) {
    const modal = document.getElementById("myModal");
    const modalImage = document.getElementById("modalImg");
    const caption = document.getElementById("caption");

    modalImage.src = image.src.replace("_thumbnail", "");
    caption.textContent = image.alt;

    modal.style.display = "block";

    setTimeout(() => {
        modal.classList.add("show");
    }, 10);

    toggleSliderButtons(false);

    modal.onclick = event => {
        if (event.target === modal) {
            closeModal();
        }
    };
}

function closeModal() {
    const modal = document.getElementById("myModal");

    modal.classList.remove("show");

    setTimeout(() => {
        modal.style.display = "none";
    }, 300);

    toggleSliderButtons(true);
}

function toggleSliderButtons(show) {
    document.querySelectorAll(".prev, .next").forEach(button => {
        button.style.display = show ? "block" : "none";
    });
}

/* =========================
슬라이더
========================= */

const currentSlides = {};

function moveSlides(amount, sliderId) {
    const slider = document.getElementById(sliderId);
    const slides = slider.querySelector(".slides");
    const slideItems = slides.children;

    if (slideItems.length === 0) return;

    if (!(sliderId in currentSlides)) {
        currentSlides[sliderId] = 0;
    }

    currentSlides[sliderId] =
        (currentSlides[sliderId] + amount + slideItems.length) %
        slideItems.length;

    const slideWidth = slideItems[0].clientWidth;

    slides.style.transform =
        `translateX(-${currentSlides[sliderId] * slideWidth}px)`;
}

/* =========================
언어 전환
========================= */

const translations = {
    eng: {
        type1: {
            name: "a.k.a. character illustration",
            info: `
                ⊹ headshots to upper body - 22usd<br>
                ⊹ half body to full body - 33usd<br>
                 ⊹ background - 7usd<br>
                  <br>
                ⊹ deadline - 7 days<br>
                ⊹ slots - ✧✧✧<br>
                ⊹⊹ Note: The quality may not be very high, and it may not be exactly the same as the sample. Please refer to the examples below.<br>
            `,
            link1: "⭢ more of examples of this type",
            link2: "⭢ commission form (kor)",
            link3: "⭢ commission form (eng)"
        },

        type2: {
            name: "a.k.a. simple type",
            info: `
                ⊹ basic - 20usd<br>
                ⊹ pair - 35usd<br>
                ⊹ deadline - 48 hours<br>
                ⊹ slots - currently closed
            `,
            link: "⭢ more of examples of this type"
        }
    },

    kor: {
        type1: {
            name: "a.k.a. 캐릭터 타입",
            info: `
                ⊹ 두상~흉상 - 30,000원<br>
                ⊹ 반신~전신 - 40,000원<br>
                ⊹ 배경 - 10,000원<br>
                <br>
                ⊹ 마감기한 - 7일<br>
                ⊹ 슬롯 - ✧✧✧<br>
                ⊹⊹ 주의사항: 퀄리티 그렇게 높지 않음, 샘플하고 완전 동일 x 아래 참고 해 주세요<br>
            `,
            link1: "⭢ 해당 타입의 예시 더 보기",
            link2: "⭢ 커미션 신청서 (kor)",
            link3: "⭢ 커미션 신청서 (eng)"
        },
        type2: {
            name: "a.k.a. 심플 타입",
            info: `
                ⊹ 기본 - 30,000원<br>
                ⊹ 페어 - 50,000원<br>
                ⊹ 마감기한 - 48시간<br>
                ⊹ 슬롯 - 현재 마감
            `,
            link: "⭢ 해당 타입의 예시 더 보기"
        }
    }
};

function changeLanguage(language) {
    const languageData = translations[language];

    for (const type in languageData) {
        const data = languageData[type];

        for (const key in data) {
            const element = document.querySelector(
                `[data-lang="${type}-${key}"]`
            );

            if (!element) continue;

            if (key === "info") {
                element.innerHTML = data[key];
            } else {
                element.textContent = data[key];
            }
        }
    }
}


/* =========================
빠른 메뉴
========================= */

const menuLinks = document.querySelectorAll('.box-shortcut a[href^="#"]');

menuLinks.forEach(link => {
    link.addEventListener("click", event => {
        event.preventDefault();

        const target = document.querySelector(link.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});
