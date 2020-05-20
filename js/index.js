const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });
}

const dropdownPlansDesk = () => {
    const plans = document.querySelector('.plans-link');
    const plansDropDesk = document.querySelector('.dropdown-plans');

    plans.addEventListener('click', () => {
        plansDropDesk.classList.toggle('dropdown-plans-active');
    });
}

const dropdownTrainingsDesk = () => {
    const trainings = document.querySelector('.trainings-link');
    const trainingsDropDesk = document.querySelector('.dropdown-training');

    trainings.addEventListener('click', () => {
        trainingsDropDesk.classList.toggle('dropdown-training-active');
    });
}

const dropdownNutritionsDesk = () => {
    const nutrition = document.querySelector('.nutrition-link');
    const nutritionsDropDesk = document.querySelector('.dropdown-nutrition');

    nutrition.addEventListener('click', () => {
        nutritionsDropDesk.classList.toggle('dropdown-nutrition-active');
    });
}

const index = () => {
    navSlide();
    dropdownPlansDesk();
    dropdownTrainingsDesk();
    dropdownNutritionsDesk();
}

index();