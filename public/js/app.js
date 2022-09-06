const information = document.querySelector('.information');
const openInformation = document.querySelector('.open');
const bg = document.querySelector('.bg');

const closeInformation = document.querySelector('#close');


openInformation.addEventListener('click', e => {
    information.style.transform = 'translateX(0)';
    information.style.borderRadius = '0';
    bg.style.display = "block"
})


bg.addEventListener('click', e => {
    information.style.transform = 'translateX(-100%)';
    information.style.borderRadius = '0 50% 50% 0';
    setTimeout(() => {
        bg.style.display = "none"
    }, 300)
})

closeInformation.addEventListener('click', e => {
    information.style.transform = 'translateX(-100%)';
    information.style.borderRadius = '0 50% 50% 0';
    setTimeout(() => {
        bg.style.display = "none"
    }, 300)
})




