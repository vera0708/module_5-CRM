import { addGoodItem, addGoodPage } from "./data.js";
import calculateTotalSum from "./utilities.js";

export const formControl = (form, table, closeModal) => {
    const formSum = form.querySelector('.main-table__total-info__sum');
    const priceAddedGood = form.querySelector("input[name='price']");
    const countAddedGood = form.querySelector("input[name='count']");
    const discountAddedGood = form.querySelector("input[name='discount']");

    priceAddedGood.addEventListener('input', () => {
        sumGoodSum();
    });

    countAddedGood.addEventListener('blur', () => {
        sumGoodSum();
    });

    discountAddedGood.addEventListener('blur', () => {
        sumGoodSum();
    });

    const sumGoodSum = () => {
        if (countAddedGood.value === '' || priceAddedGood.value === '') {
            return;
        }
        let sum = priceAddedGood.value * countAddedGood.value;

        if (discountAddedGood !== '') {
            sum -= discountAddedGood.value;
        };

        formSum.textContent = sum.toLocaleString('ru');
        if (sum < 0 || sum === undefined) {
            alert('Проверьте введённые данные');
            return;
        }
        return formSum.textContent;
    };

    form.addEventListener('submit', e => {
        e.preventDefault();
        // Передаем данные из формы:
        const formData = new FormData(e.target);
        const newGood = Object.fromEntries(formData);
        addGoodPage(newGood, table);
        addGoodItem(newGood);
        calculateTotalSum();
        // Очищаем форму для следующего заполненияЖ
        form.reset();
        closeModal();
    });
};

export const modalControl = (btnOpenForm, overlay) => {
    const openModal = () => {
        overlay.classList.add('is-visible');
    }

    const closeModal = () => {
        overlay.classList.remove('is-visible');
    }

    btnOpenForm.addEventListener('click', () => {
        openModal();
    });

    overlay.addEventListener('click', (e) => {
        const target = e.target;
        if (target === overlay ||
            target.closest('.modal__close')) {
            closeModal();
        };
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape') {
            closeModal();
        };
    });

    const isChecked = () => {
        // console.log('isChecked');
        const agreed = document.getElementById('agree');
        const input = document.getElementById('discount');
        agreed.addEventListener('click', e => {
            if (!agreed.checked) {
                input.disabled = true;
                input.value = '';
            } else {
                input.disabled = false;
                input.focus();
            }
        });
    };
    isChecked();

    return {
        closeModal,
    }
};