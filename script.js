window.addEventListener('DOMContentLoaded', function() {

const result = document.querySelector('.calculating__result span');
let sex = 'female',
        height, weight, age,
        ratio = 1.375;
function calcTotal() {
    if (!sex || !height || !weight || !age || !ratio) {
        result.textContent = '___';
        return;
    }

    if (sex === 'female') {
        result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);
    } else {
        result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);
    }
}
calcTotal()

function getStatic(parentSelector, activeClass) {
    const elements = document.querySelectorAll(`${parentSelector} div`)
    document.querySelector(parentSelector).addEventListener('click', (e) => {
        if(e.target.getAttribute('data-ratio')) {
            ratio = +e.target.getAttribute('data-ratio');
        } else {
            sex = e.target.getAttribute('id') ;

        }
        console.log(ratio, sex);
        elements.forEach(elem => {
            elem.classList.remove(activeClass);
        })
        e.target.classList.add(activeClass);
    })

}
getStatic('#gender', 'calculating__choose-item_active')
getStatic('.calculating__choose_big', 'calculating__choose-item_active')
})