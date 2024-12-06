function attachGradientEvents() {
    let gradientBoxElement = document.getElementById('gradient');
    let resultElement = document.getElementById('result');

    gradientBoxElement.addEventListener('mousemove', calculatePersantage);

    
    function calculatePersantage(event) {
        const currMouseXPosition = event.offsetX;
        const currElementTotalWidth = event.currentTarget.offsetWidth;
        const persantageXPosition = (currMouseXPosition / currElementTotalWidth) * 100

        resultElement.textContent = Math.round(persantageXPosition) + '%';
    }
    
}