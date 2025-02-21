document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('.code');
    
    inputs.forEach((input, index) => {
        input.addEventListener('input', (e) => {
            if (e.target.value.length === 1 && index < inputs.length - 1) {
                inputs[index + 1].focus();
            }
        });

        input.addEventListener('keydown', (e) => {
            if (e.key === 'Backspace' && index > 0) {
                if(input.value.length === 0) {
                  inputs[index - 1].focus();
                }
            }
             if (e.target.value === '0') {
                e.target.value = '';
            }
        });

        input.addEventListener('focus', (e) => {
            if (e.target.value === '0') {
                e.target.value = '';
            }
        });

         input.addEventListener('blur', (e) => {
            if (e.target.value === '') {
                e.target.value = '0';
            }
        });
    });
});
