let textInput = document.getElementById("text-input");
let charCount = document.getElementById("char-count");
const MAX = 50;


textInput.addEventListener('input', () => {
  if (textInput.value.length > MAX) {
    textInput.value = textInput.value.slice(0, MAX);
  }

  const len = textInput.value.length;
  charCount.textContent = `Character Count: ${textInput.value.length}/50`;

  charCount.style.color = len >= MAX ? 'red' : 'white'
});


textInput.addEventListener('keydown', (e) => {

    const controlKeys = new Set([
      'Backspace','Delete','ArrowLeft','ArrowRight','ArrowUp','ArrowDown','Home','End','Tab'
    ]);
    if (controlKeys.has(e.key) || e.ctrlKey || e.metaKey) return;

    const selectionLen = textInput.selectionEnd - textInput.selectionStart;
    const currentLen = textInput.value.length - selectionLen;

    if(currentLen >= MAX){
        charCount.
        e.preventDefault();
    }

    

})

