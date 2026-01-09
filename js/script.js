//Initialize Map
const map = L.map("map").setView([-1, 117.0], 5);
const initialView = { center: [-1, 117.0], zoom: 5 };

// Create yearLayers
const yearLayers = { "All Projects": L.layerGroup() };

// Icon for markers
function getIcon() {
    return L.icon({
        iconUrl: './img/location_pin.svg',
        iconSize: [40, 40],
        iconAnchor: [20, 40],
        popupAnchor: [0, -40]
    });
}


//Tiles Layer
const osmLayer = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; OpenStreetMap &copy; CARTO'
}).addTo(map);

const esriLayer = L.tileLayer(
    "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    { attribution: "Tiles © Esri — Source: Esri, Maxar, Earthstar Geographics, and the GIS User Community",
    maxZoom: 20,
    }
)

//Basemap Thumbnail
const osmThumb = document.getElementById("osmThumb");
const esriThumb = document.getElementById("esriThumb");

function setActive(el) {
    document.querySelectorAll(".basemap-thumb").forEach(t => t.classList.remove("active"));
    el.classList.add("active");
    }


// Activate Default Basemap
setActive(osmThumb);

osmThumb.addEventListener("click", () => {
    if (map.hasLayer(esriLayer)) map.removeLayer(esriLayer);
    osmLayer.addTo(map);
    setActive(osmThumb);
});

esriThumb.addEventListener("click", () => {
    if (map.hasLayer(osmLayer)) map.removeLayer(osmLayer);
    esriLayer.addTo(map);
    setActive(esriThumb);
});



//Icon Marker
function getIcon() {
    return L.icon({
        iconUrl: './img/location_pin.svg',  // path ke SVG
        iconSize: [40, 40],                 // ukuran icon
        iconAnchor: [16, 32],               // titik bawah icon
        popupAnchor: [0, -32]               // posisi popup
    });
}


//Fungsi Tabel Popup
function createProjectPopup(project) {
    return `
        <table class="table table-sm table-bordered mb-2">
            <tr>
                <th>Year</th>
                <td>${project.year}</td>
            </tr>
            <tr>
                <th>Position</th>
                <td>${project.position}</td>
            </tr>
            <tr>
                <th>Institution</th>
                <td>${project.company}</td>
            </tr>
            <tr>
                <th>Project</th>
                <td>${project.title}</td>
            </tr>
        </table>
        <div class="normal text-muted justified">
            ${project.desc}
        </div>
  `
}


//Render Marker dari Array
projects.forEach(project => {

    const year = project.year;

    if (!yearLayers[year]) {
        yearLayers[year] = L.layerGroup();
    }

    // Banyak lokasi
    if (Array.isArray(project.locations)) {

        project.locations.forEach(loc => {
            const marker = L.marker([loc.lat, loc.lng], { icon: getIcon() }).bindPopup(createProjectPopup(project));

            yearLayers[year].addLayer(marker);
            yearLayers["All Projects"].addLayer(marker);
        });

    }
    // Satu lokasi
    else if (project.lat && project.lng) {

        const marker = L.marker([project.lat, project.lng], { icon: getIcon() }).bindPopup(createProjectPopup(project));

        yearLayers[year].addLayer(marker);
        yearLayers["All Projects"].addLayer(marker);
    }
});

// Build years array from projects
const years = ["All Projects", ...[...new Set(projects.map(p => p.year))].sort((a, b) => b - a)];

// Ensure yearLayers has all years
for (const year of years.slice(1)) {
    if (!yearLayers[year]) {
        yearLayers[year] = L.layerGroup();
    }
}

// Make years global for timeline.js
window.years = years;

// Add all projects to map
yearLayers["All Projects"].addTo(map);

// Create year pills
const pills = document.getElementById('yearPills');
years.forEach((year, index) => {
    const pill = document.createElement('div');
    pill.className = 'year-pill';
    pill.innerText = year;
    pill.onclick = () => {
        // Remove all layers
        Object.values(yearLayers).forEach(layer => {
            if (map.hasLayer(layer)) map.removeLayer(layer);
        });
        // Add selected year's layer
        if (yearLayers[year]) {
            yearLayers[year].addTo(map);
        }
        // Update active pill
        document.querySelectorAll('.year-pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
    };
    pills.appendChild(pill);
});

// Set "All Projects" as active initially
document.querySelector('.year-pill').classList.add('active');

// Add scroll to change year
let currentIndex = 0;
const yearControl = document.getElementById('yearControl');
yearControl.addEventListener('wheel', (e) => {
    e.preventDefault();
    if (e.deltaY > 0) {
        currentIndex = Math.min(currentIndex + 1, years.length - 1);
    } else {
        currentIndex = Math.max(currentIndex - 1, 0);
    }
    const pills = document.querySelectorAll('.year-pill');
    pills[currentIndex].click();
});

// Bootstrap Tooltip initialization
document.addEventListener('DOMContentLoaded', () => {

    document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(el => {

        const tooltip = new bootstrap.Tooltip(el, {
            placement: 'top',
            container: 'body',
            fallbackPlacements: [],
            popperConfig: {
                modifiers: [
                    {
                        name: 'preventOverflow',
                        options: {
                            boundary: 'viewport'
                        }
                    }
                ]
            }
        });

        // Auto-show only once on load
        if (el.querySelector('.bi-person-bounding-box')) {
            setTimeout(() => {
                tooltip.show();
                setTimeout(() => tooltip.hide(), 4000);
            }, 700);
        }
    });

});




