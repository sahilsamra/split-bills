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

document.querySelector('.resetBtn').addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('form').reset();
  document.querySelector('.perPerson').innerHTML = "0"
})