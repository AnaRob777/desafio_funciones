let color1 = ''
let color2 = '' 

document.addEventListener('keydown', function (event) {
    const keyColor = document.getElementById('key');
    if (event.key === 'a') {
        color = 'pink'
    } else if (event.key === 's') {
        color = 'orange'
    } else if (event.key === 'd') {
        color1 = 'skyblue'
    }
    keyColor.style.backgroundColor = color1
});

document.addEventListener('keydown', function (event) {
    if (event.key === 'q') {
        color2 = 'purple'
    } else if (event.key === 'w') {
        color2 = 'grey'
    } else if (event.key === 'e') {
        color2 = 'saddlebrown'
    }

    if (color2) {
        let caja2 = document.getElementById("div2")
        if (!caja2) { 
            const html = `
                <div
                    id="div2"
                    style="
                        background-color: white;
                        width: 200px;
                        height: 200px;
                        border: solid black 1px;
                    "
                ></div>`;
            document.body.insertAdjacentHTML("beforeend", html)
            caja2 = document.getElementById("div2")
        }
        caja2.style.backgroundColor = color2
    }
})