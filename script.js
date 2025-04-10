document.addEventListener("DOMContentLoaded", () => {
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      const targetElement = document.querySelector(targetId)

      window.scrollTo({
        top: targetElement.offsetTop - 70,
        behavior: "smooth",
      })
    })
  })

  // Add animation to skills on scroll
  const skillsSection = document.querySelector("#skills")
  const skills = document.querySelectorAll(".skill")

  window.addEventListener("scroll", () => {
    const sectionPosition = skillsSection.getBoundingClientRect().top
    const screenPosition = window.innerHeight / 1.3

    if (sectionPosition < screenPosition) {
      skills.forEach((skill, index) => {
        setTimeout(() => {
          skill.style.opacity = 1
          skill.style.transform = "translateY(0)"
        }, 100 * index)
      })
    }
  })

  // Initialize skills with opacity 0
  skills.forEach((skill) => {
    skill.style.opacity = 0
    skill.style.transform = "translateY(20px)"
    skill.style.transition = "all 0.5s ease"
  })
})
