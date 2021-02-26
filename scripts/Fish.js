export const FishHTML = (fishObj) => {
    const html = `
        <article class="fish-card">
            <div><img class="fish-image" src="images/${fishObj.image}" /></div>
            <h3 class="fish-name">${fishObj.name}</h3>
            <ul>
                <li class="fish-details">Harvest Location: ${fishObj.harvestLocation}</li>
                <li class="fish-details">Species: ${fishObj.species}</li>
                <li class="fish-details">Length: ${fishObj.inches}''</li>
                <li class="fish-details">Favorite Food: ${fishObj.diet}</li>
            </ul>
        </article>
    `;
    return html
}