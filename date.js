document.addEventListener('DOMContentLoaded', () => {
    // Знайти всі кнопки на сторінці
    const buttons = document.querySelectorAll('button');

    // Знайти форму і додати обробник події submit
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Супер! До вечора)');
    });
});
