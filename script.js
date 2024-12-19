//your JS code here. If required.
// Get all input elements with class "code"
const inputs = document.querySelectorAll('.code');

// Function to move focus to the next input when a key is pressed
inputs.forEach((input, index) => {
    input.addEventListener('input', (e) => {
        if (e.target.value !== "") {
            // Move focus to the next input if current input is filled
            if (index < inputs.length - 1) {
                inputs[index + 1].focus();
            }
        }
    });

    // Add event listener to handle backspace functionality
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace' && index > 0 && input.value === "") {
            // Move focus to the previous input when backspace is pressed and the input is empty
            inputs[index - 1].focus();
        }
    });
});
