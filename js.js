let shape = document.getElementById("shape");
        let shapeText = document.getElementById("shapeText");
        let r = document.getElementById("R");
        let g = document.getElementById("G");
        let b = document.getElementById("B");
        let order = document.getElementById("order");
        let color = document.getElementById("color");
        let forms = document.getElementById("forms");
        function zamow() {
            if (forms.elements['shape'].value == "1") {
                shapeText.innerText = "Zamówiłeś żelka: Miś";
            } else if (forms.elements['shape'].value == "2") {
                shapeText.innerText = "Zamówiłeś żelka: żabka"
            } else if (forms.elements['shape'].value == "3") {
                shapeText.innerText = "Zamówiłeś żelka: serce"
            } else {
                shapeText.innerText = "Zamówiłeś żelka: inny"
            }
            console.log(forms.elements['shape'].value);
        }
       order.addEventListener(onclick, zamow());