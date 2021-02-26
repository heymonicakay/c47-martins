import { FishHTML } from "./Fish.js";

const fishSection = document.querySelector(".fishList")

export const FishListHTML = (arrayOfFish) => {

    let html = ``

    for (const fishObj of arrayOfFish) {
        const fish = FishHTML(fishObj)
        html += fish
    }

    fishSection.innerHTML = html

}
