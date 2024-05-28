const startButton = document.getElementById("startButton");
const startSection = document.getElementById("startSection");
const analysisSection = document.getElementById("analysisSection");
const resultsSection = document.getElementById("resultsSection");
const resultsList = document.getElementById("resultsList");

startButton.addEventListener("click", () => {
  console.log("Button clicked!");

  // Hide the start section
  startSection.style.display = "none";

  // Show the analysis section
  analysisSection.style.display = "block";

  // Wait for 5 seconds before showing the results
  setTimeout(() => {
    // Hide the analysis section
    analysisSection.style.display = "none";

    // Show the results section
    resultsSection.style.display = "block";

    // Generate random blood test results
    const results = [
      `Red Blood Cells: ${getRandomValue(3.5, 5.5)} million/μL`,
      `White Blood Cells: ${getRandomValue(4000, 10000)}/μL`,
      `Hemoglobin: ${getRandomValue(11, 16)} g/dL`,
      `Platelets: ${getRandomValue(150000, 400000)}/μL`,
      `Glucose: ${getRandomValue(70, 120)} mg/dL`,
      `Cholesterol: ${getRandomValue(120, 240)} mg/dL`,
      // Add more results as needed
    ];

    // Shuffle the results array
    for (let i = results.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [results[i], results[j]] = [results[j], results[i]];
    }

    // Display the randomized results
    results.forEach((result) => {
      const li = document.createElement("li");
      li.textContent = result;
      resultsList.appendChild(li);
    });
  }, 5000); // Wait for 5 seconds (5000 milliseconds)
});

// Helper function to generate a random value within a range
function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}