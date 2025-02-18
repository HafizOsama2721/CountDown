const endDate = '21 March 2025 11:59:59 PM';

document.getElementById('end-date').innerText = endDate;

const inputs = document.querySelectorAll('input');
// console.log(inputs)

const clock = () => {
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now) / 1000;
    // console.log(diff);
    
    if (diff < 0) return;

    inputs[0].value = Math.floor(diff / 3600 / 24);
    inputs[1].value = Math.floor(diff / 3600) % 24;
    inputs[2].value = Math.floor(diff / 60) % 60;
    inputs[3].value = Math.floor(diff) % 60;
}

clock();

setInterval(() => {
    clock();
}, 1000);

