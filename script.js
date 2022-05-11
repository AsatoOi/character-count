let myText = document.getElementById("my-text")
myText.addEventListener("input", () => {
  let count = myText.value.length;
  document.getElementById(
    "count-result"
  ).textContent = `文字数カウント: ${count}`;
});
