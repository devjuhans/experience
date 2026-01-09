// Preparing Years
const years = window.years;

// Create Layers
const yearLayers = {
    "All Projects": L.layerGroup()
};

projects.forEach(project => {

    const points = project.locations
        ? project.locations
        : (project.lat && project.lng
            ? [{ lat: project.lat, lng: project.lng }]
            : []);

    if (!points.length) return;

    yearLayers[project.year] ??= L.layerGroup();

    points.forEach(loc => {
        const marker = L.marker(
            [loc.lat, loc.lng],
            { icon: getIcon() }
        ).bindPopup(createProjectPopup(project));

        // ⚠️ NO addTo(map)
        yearLayers[project.year].addLayer(marker);
        yearLayers["All Projects"].addLayer(marker);
    });
});

// UI Elements
const slider = document.getElementById("yearSlider");
const pills  = document.getElementById("yearPills");

slider.min = 0;
slider.max = years.length - 1;
slider.value = 0;

// Year Buttons
years.forEach((year, index) => {
    const pill = document.createElement("div");
    pill.className = "year-pill";
    pill.innerText = year;

    pill.onclick = () => {
        slider.value = index;
        updateTimeline(slider.value);
    };

    pills.appendChild(pill);
});

// Core Function
function updateTimeline(sliderIndex) {

    const yearIndex = sliderIndex;
    const year = years[yearIndex];

    // Update Active Button
    document.querySelectorAll(".year-pill").forEach((p, i) => {
        p.classList.toggle("active", i === yearIndex);
    });

    // Remove All Layers
    Object.values(yearLayers).forEach(layer => {
        if (map.hasLayer(layer)) {
            map.removeLayer(layer);
        }
    });

    // Add Selected Layer
    const activeLayer = yearLayers[year];
    activeLayer.addTo(map);

    // zoom only if marker exists
    if (activeLayer.getLayers().length > 0) {
        map.fitBounds(activeLayer.getBounds(), {
            padding: [40, 40],
            maxZoom: 9
        });
    }
}

// Events
slider.addEventListener("input", e => {
    updateTimeline(e.target.value);
});

document.getElementById("yearControl").addEventListener("wheel", e => {
    e.preventDefault();

    let v = Number(slider.value) + (e.deltaY > 0 ? -1 : 1);
    v = Math.max(slider.min, Math.min(slider.max, v));

    slider.value = v;
    updateTimeline(v);
});

// Initialize
updateTimeline(slider.value);


