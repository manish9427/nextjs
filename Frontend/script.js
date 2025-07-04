  document.getElementById("parent").addEventListener("click", () => {
    console.log("Parent clicked");
  });

  document.getElementById("child").addEventListener("click", (e) => {
    e.stopPropagation();
    console.log("Child clicked")});