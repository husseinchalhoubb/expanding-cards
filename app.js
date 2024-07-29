const panels = document.querySelectorAll(".panel");

// higher-order method: forEach
panels.forEach((panel) => {
  panel.addEventListener(
    "click",
    // option 1: using arrow function
    () => {
      // remove active class from all panels before adding it to the new clicked one
      panels.forEach((panel) => panel.classList.remove("active"));

      panel.classList.add("active");
    }
  );
});

// option 2 using normal function
function eachPanel(panel) {
  console.log(panel);
}
