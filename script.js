const numCount = document.querySelectorAll(".counter")

numCount.forEach(counter => {
    counter.innerText = '0'

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target')
        const c = +counter.innerText


        const increament = target / 150


        if (c < target) {
            counter.innerText = `${Math.ceil(c + increament)}`
            setTimeout(updateCounter, 1)
        } else {
            counter.innerHTML = target
        }
    }

    updateCounter();
})