export const ulArray = () => {
    let body = document.querySelector('body')
    
    let btn = document.createElement('button')

    body.appendChild(btn)

    btn.textContent = 'Click to see'

    btn.addEventListener('click', () => {
        let array = fetch('./JSON/array.json')
    let response = array.then((response) => response.json())
    response.then((json) => {
        let ul = document.createElement('ul')
        for (let child of json) {

            let name = child.name
            let age = child.age
            let consoles = child.consoles
            let games = child.games

            let li = document.createElement('li')
            let li2 = document.createElement('li')
            let li3 = document.createElement('li')
            let li4 = document.createElement('li')

            body.appendChild(ul)
            ul.appendChild(li)
            ul.appendChild(li2)
            ul.appendChild(li3)
            ul.appendChild(li4)

            li.textContent = "name: " + name
            li2.textContent = "age: " + age
            li3.textContent = "consoles: " + consoles
            li4.textContent = "games: " + games
            
        }
    })
    })
    
}

ulArray()