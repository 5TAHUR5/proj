let count_choice = 0
let chance = 0
let skip = 0
let first = 0

const count_choice_el = document.getElementById("count_choice")
const chance_el = document.getElementById("chance")
const skip_el = document.getElementById("skip")
const first_el = document.getElementById("first")

const loader_el = document.getElementById("loader")
const form_el = document.getElementById("form")
const result_el = document.getElementById("result")

document.getElementById("sub").onclick = () =>{
    count_choice = count_choice_el.value

    form_el.classList.add("hide")
    loader_el.classList.remove("hide")

    let S = 0
    let t = 0
    while (S < 1) {
        S = S + 1/count_choice
        first = count_choice
        count_choice = count_choice - 1
    }
    skip = count_choice
    chance = first / count_choice

    chance_el.innerText = chance
    skip_el.innerText = skip
    first_el.innerText = first

    loader_el.classList.add("hide")
    result_el.classList.remove("hide")
}

document.getElementById("back").onclick = () => {
    count_choice_el.value = 1
    form_el.classList.remove("hide")
    result_el.classList.add("hide")

}
