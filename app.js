const locationInput = document.getElementById("locationInput");
const addLocationButton = document.getElementById("addLocationButton");
const locationList = document.getElementById("locationList");

const locations = [];

addLocationButton.addEventListener("click", () => {
    const newLocation = locationInput.value.trim();

    if (newLocation) {
        locations.push(newLocation);
        locationList.innerHTML = "";

        for (const location of locations) {
            const listItem = document.createElement("li");
            listItem.textContent = location;
            locationList.appendChild(listItem);
        }

        locationInput.value = "";
    }
});
