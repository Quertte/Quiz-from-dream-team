const inputVal = document.querySelector('.allQuestion');
if (inputVal) {
  inputVal.addEventListener('submit', async (event) => {
    event.preventDefault();
    const nashOtvet = event.target.input.value;
    const otvetId = event.target.closest('.container').dataset.id;
    console.log(nashOtvet);
    const res = await fetch('/', {
      headers: { 'Content-Type': 'application/json' },
      method: 'post',
      body: JSON.stringify({
        answer: nashOtvet,
      }),
    });
    const data = await res.json();
    if (data.success) {
      alert('ТЫ КРАСАВЧИК');
    } else {
      alert('Попробуй снова');
    }
    // document.querySelector('.form').insertAdjacentHTML('afterend', data);
  });
}
