"use strict";
const hTitle = document.querySelector('.content__title');
const dialogs = document.querySelector('.content__dialog');
const titleOne = document.querySelector('.content__company-title');
const inputField = document.querySelector('.content__name');
const clue = document.querySelector('.content__clue');
const send = document.querySelector('.content__send');
const btnRun = document.querySelector('.content__btn-run');
//=========== FOR MODAL ===============
function openModal() {
    if (dialogs) {
        dialogs.showModal();
    }
}
function getCompanyName() {
    if (!send || !inputField || !clue || !hTitle || !dialogs) {
        return;
    }
    console.log('Мы тут');
    send.addEventListener('click', () => {
        const companyName = inputField.value;
        if (companyName.trim() === '') {
            clue.textContent = 'Пустота это красиво, но нам нужно хоть что-то';
            return;
        }
        hTitle.textContent = `Привет, ${companyName}! Кажется, мы созданы друг для друга 👀`;
        document.querySelector('#company').value = companyName;
        dialogs.close();
        console.log(dialogs.open);
    });
}
openModal();
getCompanyName();
//========== SPARK EFFECT=============
function glitterEffect() {
    if (!send || !inputField || !clue || !hTitle || !dialogs) {
        return;
    }
    console.log('Мы тут');
    send.addEventListener('click', () => {
        confetti({
            particleCount: 800,
            spread: 360,
            startVelocity: 30,
            gravity: 0.7,
            colors: ['#f2d995', '#d6ad55', '#fff2c2'],
            shapes: ['circle'],
            scalar: 0.3
        });
    });
}
;
glitterEffect();
function runawayButton() {
    const area = document.querySelector('.content__tap');
    if (!area)
        return;
    let runC = 0;
    btnRun.addEventListener('mouseenter', () => {
        runC++;
        if (runC >= 5) {
            btnRun.textContent = "Попался! Это я тебе!";
            return;
        }
        if (runC === 1) {
            btnRun.textContent = "Не догонишь, маггл!";
        }
        else if (runC === 2) {
            btnRun.textContent = "Акцио… ой, не сработало!";
        }
        else if (runC === 3) {
            btnRun.textContent = "Быстрее Нимбуса 2000!";
        }
        else if (runC === 4) {
            btnRun.textContent = "Ловец из тебя так себе…";
        }
        const maxX = area.clientWidth - btnRun.offsetWidth;
        const maxY = area.clientHeight - btnRun.offsetHeight;
        const randomX = Math.floor(Math.random() * (maxX + 1));
        const randomY = Math.floor(Math.random() * (maxY + 1));
        btnRun.style.left = `${randomX}px`;
        btnRun.style.top = `${randomY}px`;
    });
    btnRun.addEventListener('click', () => {
        if (runC >= 5) {
            document.querySelector('#offer').scrollIntoView({
                behavior: 'smooth'
            });
            document.querySelector('.content__offer-title').textContent = 'Аван... Offer!';
        }
        ;
    });
}
;
runawayButton();
//# sourceMappingURL=main.js.map