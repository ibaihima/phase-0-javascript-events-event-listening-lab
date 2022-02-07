// const input = document.getElementById('input');

// function clickAlert() {
//   alert('I was clicked!');
// }

// input.addEventListener('click', clickAlert);
const input = document.getElementById('input');
input.addEventListener('click', function() {
  alert('I was clicked!');
});

const a = document.getElementById("input") 

const addingEventListener = () => {
  return input.addEventListener("click", () => {
  alert("giggles")
})
}
