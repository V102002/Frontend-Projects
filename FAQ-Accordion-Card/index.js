const accordians = document.querySelectorAll(".accordian");
const woman=document.querySelector('#woman');
const shadow=document.querySelector('.shadow');
accordians.forEach(accordian => {
    const icon = accordian.querySelector(".arrow");
    const answer = accordian.querySelector(".answer");
    const question = accordian.querySelector(".q");

    icon.addEventListener("click", () => {
        // Collapse all other accordions
        accordians.forEach(otherAccordion => {
            if (otherAccordion !== accordian) {
                const otherIcon = otherAccordion.querySelector(".arrow");
                const otherAnswer = otherAccordion.querySelector(".answer");
                const otherQuestion = otherAccordion.querySelector(".q");

                otherIcon.classList.remove("rotate");
                otherAnswer.classList.remove("active");
                otherQuestion.classList.remove("bold");
            }
        });

        // Toggle current accordion
        icon.classList.toggle("rotate");
        answer.classList.toggle("active");
        question.classList.toggle("bold");
    });
});
function changeBackground() {
    if (window.innerWidth <= 460) {
        woman.src = './images/illustration-woman-online-mobile.svg';
        // shadow.src='./images/bg-pattern-mobile.svg';
    } else {
        woman.src = './images/illustration-woman-online-desktop.svg';
        shadow.src='./images/bg-pattern-desktop.svg';
    }

}
// Call changeBackground on window load and resize
window.addEventListener('load', changeBackground);
window.addEventListener('resize', changeBackground);