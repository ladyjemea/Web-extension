const markup = `<input type="text" id="ppms-barcode-reader" placeholder="Barcode values...">`;
document.body.insertAdjacentHTML('beforeend', markup);

const input = document.querySelector('#ppms-barcode-reader');
input.focus();

input.addEventListener('input', () => {
    for (const tr of document.querySelectorAll("#services tbody>tr")) {
        let td = tr.firstElementChild;
        if(td) {
            let text = td.innerText.replace(/\D/g, '');
            if(text === input.value) {
                let quantity = tr.querySelector(".order-input input[type='text']");
                if(quantity) {
                    quantity.value = parseInt(quantity.value) + 1;
                    quantity.dispatchEvent(new Event('change'));
                }
            }
        }
    }
    setTimeout(() => input.value = '', 500);
});