const steps = document.querySelectorAll(".step");
const nextBtn = document.querySelector("#next");
const prevBtn = document.querySelector("#prev");
const progress = document.querySelector(".progress");
var currentStep = document.querySelectorAll(".step.active").length;
const updateSteps = () => {
  progress.style.width = `${(100 / 4) * (currentStep - 1)}%`;
  console.log(currentStep);
  steps.forEach((step, index) => {
    step.classList.remove("active");

    if (index < currentStep) {
      step.classList.add("active");
    }
  });
};
nextBtn.addEventListener("click", () => {
  if (currentStep < steps.length - 1) {
    currentStep++;
    currentStep > 1 ? (prevBtn.disabled = false) : "";
    updateSteps();
  } else {
    currentStep++;
    updateSteps();
    nextBtn.disabled = true;
    console.log("finished");
  }
});

prevBtn.addEventListener("click", () => {
  if (currentStep > 2) {
    currentStep--;
    updateSteps();
    currentStep < 5 ? (nextBtn.disabled = false) : "";
  } else {
    currentStep--;
    updateSteps();
    prevBtn.disabled = true;
    console.log("finished");
  }
});
