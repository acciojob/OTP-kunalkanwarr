document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('.code');

    inputs.forEach((input, index) => {
        input.addEventListener('input', (e) => {
            if (e.target.value.length === 1) {
                if (index < inputs.length - 1) {
                    inputs[index + 1].focus();
                }
            }
        });

        input.addEventListener('keydown', (e) => {
            if (e.key === 'Backspace') {
                if (input.value.length === 0 && index > 0) {
                    inputs[index - 1].focus();
                }
            }
        });

        input.addEventListener('focus', (e) => {
            if (e.target.value === '0') {
                e.target.value = '';
                input.select();
            }
        });

        input.addEventListener('blur', (e) => {
            if (e.target.value === '') {
                e.target.value = '0';
            }
        });
    });

    // Initialize focus on the first input
    inputs[0].focus();
});
