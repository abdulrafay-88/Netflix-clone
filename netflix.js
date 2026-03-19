document.addEventListener("DOMContentLoaded", () => {
  const faqs = document.querySelectorAll(".faq");

  faqs.forEach(faq => {
    const question = faq.querySelector(".faq-question");
    const answer = faq.querySelector(".faq-answer");
    const icon = faq.querySelector(".icon");

    question.addEventListener("click", () => {
      answer.classList.toggle("show");

      if (answer.classList.contains("show")) {
        answer.style.display = "block";
        icon.textContent = "×";
      } else {
        answer.style.display = "none";
        icon.textContent = "+";
      }
    });
  });
});

