const carouselItems = document.querySelectorAll(".carousel-item")
const faqQuestions = document.querySelectorAll("#faq > article")
const carouselDots = document.querySelector(".carousel-dots")
const totalItems = carouselItems.length
let currentIndex = 0

for (let i = 0; i < totalItems; i++) {
    const dot = document.createElement("div")
    dot.classList.add("dot")
    if (i === 0) {
        dot.classList.add("active")
    }
    dot.addEventListener("click", function () {
        showSlide(i)
    })
    carouselDots.appendChild(dot)
}

document.querySelector(".prev").addEventListener("click", function () {
    showSlide(currentIndex - 1)
})

document.querySelector(".next").addEventListener("click", function () {
    showSlide(currentIndex + 1)
})

const showSlide = index => {
    if (index < 0) {
        index = totalItems - 1
    } else if (index >= totalItems) {
        index = 0
    }

    const carouselInner = document.querySelector(".carousel-inner")
    const slideWidth = carouselItems[0].clientWidth

    carouselInner.style.transform = `translateX(${-slideWidth * index}px)`
    currentIndex = index

    const dots = document.querySelectorAll(".dot")
    dots.forEach((dot, idx) => {
        if (idx === currentIndex) {
            dot.classList.add("active")
        } else {
            dot.classList.remove("active")
        }
    })
}

faqQuestions.forEach(question => {
    question.querySelector("h3").addEventListener("click", e => {
        let paragraphTag = question.querySelector("p")
        if (paragraphTag.style.display === "") {
            paragraphTag.style.display = "block"
            question.querySelector("i").style.rotate = "-180deg"
        } else {
            paragraphTag.style.display = ""
            question.querySelector("i").style.rotate = "0deg"
        }
    })
})

const hamburgerBtn = document.getElementById("hamburger")
const navLinks = document.getElementById("nav-links")
const navItems = navLinks.querySelectorAll("li a")

hamburgerBtn.addEventListener("click", () => {
    navLinks.classList.toggle("nav-links-opened")
    hamburgerBtn.classList.toggle("ham-active")
})

navItems.forEach(item => {
    item.addEventListener("click", () => {
        navLinks.classList.remove("nav-links-opened")
        hamburgerBtn.classList.remove("ham-active")
    })
})
