const splitting = () => {
  let total = parseInt(document.querySelector('.total').value);
  let people = parseInt(document.querySelector('.people').value);
    const result = total / people;
    document.querySelector('.perPerson').innerHTML = result.toFixed(2);
 
}
const splitBtn = document.querySelector('.splitBtn')
splitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  splitting();
})

