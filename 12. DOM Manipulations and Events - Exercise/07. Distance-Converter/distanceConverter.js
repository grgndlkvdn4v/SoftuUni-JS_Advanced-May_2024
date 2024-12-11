function attachEventsListeners() {
    let inputField = document.getElementById('inputDistance');
    let inputUnits = document.getElementById('inputUnits');
    let outputField = document.getElementById('outputDistance');
    let outputUnits = document.getElementById('outputUnits');

    let convertButton = document.getElementById('convert');
    convertButton.addEventListener('click', convert);

    const distanceObj = {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254
    }

    
    function convert(event) {
        let inputDistance = Number(inputField.value);
        let inputUnit = inputUnits.value;
        let outputUnit = outputUnits.value;
        
        let inputInMeters = inputDistance * distanceObj[inputUnit]
        let output = inputInMeters / distanceObj[outputUnit]
    
        outputField.value = output
    }

}