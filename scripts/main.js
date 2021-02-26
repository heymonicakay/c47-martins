// The main.js file contains
import { FishListHTML } from "./FishList.js"
import { getFish } from "./FishData.js"

const allFish = getFish();

FishListHTML(allFish)

