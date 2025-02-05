document.addEventListener("DOMContentLoaded", function () {
  const root = document.getElementById("root");
  const thankYouPage = document.getElementById("thankYouPage");
  const form = document.getElementById("diagnosisForm");
  const diagnosisResult = document.getElementById("diagnosisResult");

  // Ensure only the form is visible at start
  root.classList.remove("hidden");
  thankYouPage.classList.add("hidden");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page reload

    const age = parseInt(document.getElementById("age").value);
    const social = parseInt(document.getElementById("social").value);
    const communication = parseInt(document.getElementById("communication").value);
    const behavior = parseInt(document.getElementById("behavior").value);
    const sensory = parseInt(document.getElementById("sensory").value);
    const focus = parseInt(document.getElementById("focus").value); // Correct field name

    // Calculate total score
    const totalScore = social + communication + behavior + sensory + focus;
    let resultText;

    if (totalScore >= 40) {
      resultText = "High likelihood of autism spectrum traits. Please consult a specialist.";
    } else if (totalScore >= 25) {
      resultText = "Moderate likelihood. Consider discussing with a professional.";
    } else {
      resultText = "Low likelihood. However, if concerns persist, seek professional advice.";
    }

    // Update result text
    diagnosisResult.textContent = resultText;

    // Hide form and show thank you page
    root.classList.add("hidden");
    thankYouPage.classList.remove("hidden");
  });

  // Restart form function
  window.restartForm = function () {
    form.reset();
    root.classList.remove("hidden");
    thankYouPage.classList.add("hidden");
  };
});
