const screen = document.getElementById("calc-screen");

// Append value to the screen
function appendValue(value) {
  screen.value += value;
}

// Clear the screen
function clearScreen() {
  screen.value = " ";
}

// Backspace: Remove the last character
function backspace() {
  screen.value = screen.value.slice(0, -1); 
}

// Calculate the result
function calculateResult() {
  try {
    // If the input contains a %, replace it with a proper percentage calculation
    if (screen.value.includes('%')) {
      let values = screen.value.split('%');
      let percentage = parseFloat(values[0]) / 100 * parseFloat(values[1]);
      screen.value = percentage;
    } else {
      // Perform normal calculation
      screen.value = eval(screen.value);
    }
  } catch (error) {
    screen.value = "Error";
  }
}
