(()=>{
    const selectItems = document.querySelector('#selectItems');
    selectItems.innerHTML = 0;
    const amount = document.querySelector('#amount');
    let sum = 0;
    amount.innerHTML = sum;
    const qty__item = document.getElementsByClassName('qty__item');
    const product_box = document.getElementsByClassName('product-box__meta');
    const product_box_btn = document.getElementsByClassName('product-box__btn');
        for (let i = 0; i < product_box.length; i++) {
            product_box[i].addEventListener('click', e=>{
                let target = e.target;
                if (target && target.classList.contains('product-box__btn')) {
                    let showItems = +selectItems.innerHTML;
                    let data = +qty__item[i].value;
                    data >= 0 ? selectItems.innerHTML = data + showItems : selectItems.innerHTML = 0;
                    let val = product_box[i].innerText;
                    if (data < 0) {
                        sum = 0;
                        amount.innerHTML = 0;
                    } else {
                        val = +/\d+/.exec(val);
                        sum += (val * data);
                        amount.innerHTML = sum;
                    }
                }
            }
            );
        }

    const box_item = document.getElementsByClassName("product-box__item");
    box_item[0].title = 'Завтрак';
    box_item[1].title = 'Завтрак';
    box_item[2].title = 'Завтрак';
    box_item[4].title = 'Завтрак';

    box_item[5].title = 'Первые блюда';
    box_item[6].title = 'Первые блюда';
    box_item[7].title = 'Первые блюда';
    box_item[8].title = 'Первые блюда';

    box_item[3].title = 'Гарниры';
    box_item[9].title = 'Гарниры';
    box_item[10].title = 'Гарниры';
    box_item[11].title = 'Гарниры';

        const select_items_el = document.querySelector('.select-control');
        const select_items_el_val = document.querySelectorAll('.select-control')[1];
        const items_el = document.querySelector('.products-box');
        const items = items_el.getElementsByClassName('product-box__item');
        select_items_el.oninput = function() {
            for (let i = 0; i < items.length; i++) {
                if (items[i].classList.contains(this.value) && items[i].classList.contains(select_items_el_val.value)) {
                    items[i].style.display = 'block';
                } else {
                    items[i].style.display = 'none';
                }
            }
        }
        select_items_el_val.oninput = function() {
            for (let i = 0; i < items.length; i++) {
                if (items[i].classList.contains(this.value) && items[i].classList.contains(select_items_el.value)) {
                    items[i].style.display = 'block';
                } else {
                    items[i].style.display = 'none';
                }
            }
        }
    // ============================================================== create pop up
    const but = document.querySelector('.btn-check');
    but.addEventListener('click', (e)=>{

        if (amount.innerHTML == 0) {
            alert(" Ваша корзина еще пуста. \n\ Пожалуйста выберите что то!!")
            return false;
        } else {
            let modal = document.createElement('div');
            modal.className = "modal";
            document.querySelector('body').appendChild(modal);

            modal.addEventListener('click', (e)=>{
                e.stopPropagation();
                modal.style.display = 'none';
            }
            )

            let modal_content = document.createElement('div');
            modal_content.addEventListener('click', function(e) {
                e.stopPropagation();
            });
            modal_content.className = "modal-content";
            modal.appendChild(modal_content);

            let form = document.createElement('form');
            form.id = 'form';
            modal_content.appendChild(form);

            let box_male = document.createElement('div');
            box_male.id = 'box_male';
            form.appendChild(box_male);

            let label = document.createElement('label');
            label.setAttribute('for', 'male');
            label.innerHTML = "Your Email :";
            box_male.appendChild(label);

            let male = document.createElement('input');
            male.id = 'male';
            male.setAttribute('type', 'email');
            male.setAttribute('placeholder', '. . .');
            box_male.appendChild(male);

            let send = document.createElement('div');
            send.id = 'box_send';
            form.appendChild(send);

            let submit = document.createElement('button');
            submit.id = 'submit';
            submit.setAttribute('type', 'submit');
            submit.innerText = 'Submit';
            send.appendChild(submit);

            submit.addEventListener('click', (e)=>{
                if (!male.value) {
                    e.preventDefault();
                    alert('Поле пустое!  \n\Пожалуйста попробуйте ещё раз!');
                    return false;
                } else
                    true;
            }
            );
        }
    }
    )
}
)();
