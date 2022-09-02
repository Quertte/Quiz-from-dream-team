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
        theme_id: otvetId,
      }),
    });
    const data = await res.text();
    document.querySelector('.form').insertAdjacentHTML('beforeend', data)
  });
}
