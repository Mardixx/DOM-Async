const Name = () => {
    let input = document.createElement('input')
    input.classList = 'input'
    let btn = document.createElement('button')
    let body = document.querySelector('body')
    let select = document.querySelector('#select')
    btn.textContent = 'Click to search'
    body.appendChild(input)
    body.appendChild(btn)
/*     select.addEventListener('change', () => {
        let selectedOption = select.options[select.selectedIndex];
        let selectedOptionId = selectedOption.id;
                if (selectedOptionId == 'BE') {
                     let option = selectedOptionId
                } else if (selectedOptionId == 'US') {
                     let option = 'US'
                }
    }) */

    btn.addEventListener("click", () => {
        let inputText = input.value
        let selectedOption = select.options[select.selectedIndex];
        let selectedOptionId = selectedOption.id;
        let search = (inputText, selectedOptionId) => fetch('https://api.agify.io?name=' + inputText + '&country_id=' + selectedOptionId);
        let div = document.createElement('div')
        body.appendChild(div)
        div.textContent = localStorage.getItem('settings')
        search(inputText, selectedOptionId)
            .then((response) => response.json())
            .then((json) => {
                localStorage.setItem('settings', ["Name: " + json.name, "Age: " + json.age, "Count: " + json.count, "Country: " + json.country_id])
        })
        input.value = ''
    })
}
Name()