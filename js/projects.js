const projects = [
  {
    year: 2016,
    position: "GIS Staff",
    company: "PT Deira Sygisindo",
    title: "Base Map for Detailed Spatial Planning in South Sulawesi and West Sulawesi",
    locations: [
      { lat: -3.3419, lng: 119.1391 },   // Polewali Mandar
      { lat: -2.7293, lng: 118.9296 },   // Mamuju
      { lat: -5.6790, lng: 119.7480 },   // Jeneponto
    ],
    desc: "Conducting primary and secondary surveys and compiling, collecting, analyzing, and presenting base maps to support the preparation of Detailed Spatial Planning in three Planning Areas in South Sulawesi and West Sulawesi.",
    link: "./seemore/project1.html"
  },
  {
    year: 2017,
    position: "Project Staff/Supervisor",
    company: "PT Deira Sygisindo",
    title: "Supervision of Spatial Planning Maps in Indonesia",
    lat: -6.4854,
    lng: 106.8413,
    desc: "Accompanying and conducting technical inspections of spatial planning maps prepared by ministries/institutions and regional agencies through the activities of the National Geospatial Information Agency.",
    link: "https://www.ardamap.com"
  },
  {
    year: 2018,
    position: "Supervisor",
    company: "National Geospatial Information Agency",
    title: "Supervision of Spatial Planning Maps in Indonesia",
    lat: -6.4913,
    lng: 106.8495,
    desc: "Accompanying and conducting technical inspections of spatial planning maps prepared by ministries/institutions and regional agencies through the activities of the National Geospatial Information Agency.",
    link: "https://www.ardamap.com"

  },
  {
    year: 2019,
    position: "GIS Expert",
    company: "Department of Public Works, Housing, and Settlements of Malinau Regency, North Kalimantan",
    title: "Spatial Mapping and Analysis for Regional Planning in Malinau Regency",
    lat: 3.5523,
    lng: 116.6224,
    desc: "Compile, collect, analyze and present the maps needed in compiling the revised spatial planning plan for Malinau Regency.",
    link: "https://www.ardamap.com"

  },
  {
    year: 2019,
    position: "GIS Expert",
    company: "Department of Public Works, Housing, and Settlements of Malinau Regency, North Kalimantan",
    title: "Land Use Planning and Spatial Plan for Long Sule and Long Pipa Villages",
    lat: 1.3921,
    lng: 115.7089,
    desc: "Conducting data collection, compiling technical materials related to the implementation of increasing the role of the community in spatial planning, land use planning and spatial planning for Long Sule and Long Pipa Villages, Kayan Hilir District, Malinau Regency.",
    link: "https://www.ardamap.com"
  },
  {
    year: 2019,
    position: "Mapping Specialist",
    company: "Public Works and Public Housing Agency of Pulang Pisau Regency, Central Kalimantan",
    title: "Spatial Mapping and Analysis for Regional Planning in Pulang Pisau Regency",
    lat: -2.57586,
    lng: 114.2541,
    desc: "Compiling, analyzing, and presenting maps to support the preparation of the Spatial Plan for Pulang Pisau Regency, Central Kalimantan, culminating in a recommendation from the National Geospatial Information Agency.",
    link: "https://www.ardamap.com"
  },
  {
    year: 2019,
    position: "GIS Expert",
    company: "Regional Development Planning Agency of Kapuas Regency, Central Kalimantan",
    title: "Spatial Mapping and Analysis for Regional Planning in Kapuas Regency",
    lat: -3.0137,
    lng: 114.3856,
    desc: "Compiling, analyzing, and presenting maps to support the preparation of the Spatial Plan for Kapuas Regency, Central Kalimantan, culminating in a recommendation from the National Geospatial Information Agency.",
    link: "https://www.ardamap.com"
    },
  {
    year: 2020,
    position: "GIS Expert",
    company: "Public Works and Public Housing Agency of Siak Regency, Riau",
    title: "Spatial Mapping and Analysis for Regional Planning in Siak Regency",
    lat: 0.8029,
    lng: 102.0208,
    desc: "Compiling, analyzing, and presenting maps to support the preparation of the Spatial Plan for Siak Regency, Riau, culminating in a recommendation from the National Geospatial Information Agency.",
    link: "https://www.ardamap.com"
  },
  {
    year: 2020,
    position: "Mapping Consultant",
    company: "Regional Development Planning Agency of Rokan Hilir Regency, Riau",
    title: "Spatial Mapping and Analysis for Regional Planning in Rokan Hilir Regency",
    lat: 2.1095,
    lng: 100.8262,
    desc: "Compiling, collecting, analyzing and presenting maps needed in compiling the Spatial Plan for Rokan Hilir Regency, Riau, culminating in a recommendation from the National Geospatial Information Agency.",
    link: "https://www.ardamap.com"
  },
  {
    year: 2020,
    position: "GIS Assistant Expert",
    company: "PT Multimatra Rekapersada Konsultindo",
    title: "Study on Sustainable Food Crop Land Replacement in Cianjur Regency, West Java",
    lat: -6.8004,
    lng: 107.2246,
    desc: "Conduct primary and secondary surveys, as well as compile, collect, analyze and present maps required in the analysis of the case of sustainable food crop land conversion by PT. PYI in Cianjur Regency.",
    link: "https://www.ardamap.com"
  },
  {
    year: 2020,
    position: "GIS Expert",
    company: "Department of Public Works, Housing, and Settlements of Malinau Regency, North Kalimantan",
    title: "Spatial Mapping and Analysis for Detailed Spatial Planning in Malinau Regency",
    lat: 3.5557,
    lng: 116.6257,
    desc: "Conducting secondary surveys, as well as compiling, collecting, analyzing and presenting maps required in the preparation of the Detailed Spatial Plan for Malinau Regency, North Kalimantan, until it is ready to be published as a legal regulation.",
    link: "https://www.ardamap.com"
  },
  {
    year: 2021,
    position: "GIS Expert",
    company: "Department of Public Works, Housing, and Settlements of Malinau Regency, North Kalimantan",
    title: "Spatial Mapping and Analysis for Detailed Spatial Planning in Malinau Regency",
    lat: 3.5557,
    lng: 116.6257,
    desc: "Conducting secondary surveys, as well as compiling, collecting, analyzing and presenting maps required in the preparation of the Detailed Spatial Plan for Malinau Regency, North Kalimantan, until it is ready to be published as a legal regulation.",
    link: "https://www.ardamap.com"
  },
  {
    year: 2021,
    position: "GIS Expert",
    company: "PT Denaya Loka Konsultindo",
    title: "Spatial Mapping and Analysis for Detailed Spatial Planning in Gili Tramena Tourism Area",
    lat: -8.3530,
    lng: 116.0435,
    desc: "Conducting primary and secondary surveys, as well as compiling, collecting, analyzing and presenting maps required in the preparation of the Detailed Spatial Plan for Gili Tramena Tourism Area, North Lombok Regency, until it is ready to be published as a legal regulation.",
    link: "https://www.ardamap.com"
  },
  {
    year: 2022,
    position: "GIS Expert",
    company: "Public Works and Public Housing Agency of Merauke Regency, South Papua",
    title: "Spatial Mapping and Analysis for Detailed Spatial Planning in Merauke Regency",
    lat: -8.4851,
    lng: 140.3892,
    desc: "Compiling detailed base maps for the preparation of the Detailed Spatial Plan for Merauke, South Papua.",
    link: "https://www.ardamap.com"
  },
  {
    year: 2022,
    position: "GIS Operator",
    company: "Public Works and Public Housing Agency of Merauke Regency, South Papua",
    title: "Base Maps for RDTR WP Ulilin, South Papua",
    lat: -7.2478,
    lng: 140.7365,
    desc: "Creating detailed base maps for Detailed Spatial Planning of Ulilin District, South Papua.",
    link: "https://www.ardamap.com"
  },
  {
    year: 2022,
    position: "GIS Expert",
    company: "PT Viarchindo Inti Selaras",
    title: "Spatial Mapping and Analysis for Regional Planning for Kenderan Tourism and Agriculture Village, Bali",
    lat: -8.4531,
    lng: 115.2890,
    desc: "Conducting primary and secondary surveys, as well as compiling, collecting, analyzing and presenting maps required in the preparation of the control document for the land use in Kenderan Tourism and Agriculture Village, Kenderan, Tegallalang, Gianyar Regency.",
    link: "https://www.ardamap.com"
  },
  {
    year: 2022,
    position: "GIS Expert",
    company: "Public Works and Spatial Planning Agency of South Tangerang City",
    title: "Spatial Mapping and Analysis for Detailed Spatial Planning in South Tangerang City",
    lat: -6.2868,
    lng: 106.6887,
    desc: "Conducting primary and secondary surveys, as well as compiling, collecting, analyzing and presenting maps required in the preparation of the Detailed Spatial Plan for South Tangerang City, culminating in a recommendation from the National Geospatial Information Agency.",
    link: "https://www.ardamap.com"
  },
  {
    year: 2023,
    position: "GIS Expert Assistant",
    company: "PT Denaya Loka Konsultindo",
    title: "Spatial Mapping and Analysis for Detailed Spatial Planning in Likupang Tourism Area, North Sulawesi",
    lat: 1.8026,
    lng: 125.1197,
    desc: "Conducting primary and secondary surveys, as well as compiling, collecting, analyzing and presenting maps required in the preparation of the Detailed Spatial Plan for Likupang Tourism Area, North Minahasa Regency, until it is ready to be published as a legal regulation.",
    link: "https://www.ardamap.com"
  },
  {
    year: 2023,
    position: "GIS Expert",
    company: "PT Denaya Loka Konsultindo",
    title: "Spatial Mapping and Analysis for Detailed Spatial Planning in Kutorejo, East Java",
    lat: -7.5677,
    lng: 112.5109,
    desc: "Conducting primary and secondary surveys, as well as compiling, collecting, analyzing and presenting maps required in the preparation of the Detailed Spatial Plan for Kutorejo, Mojokerto Regency, until it is ready to be published as a legal regulation.",
    link: "https://www.ardamap.com"
  },
  {
    year: 2023,
    position: "GIS Specialist",
    company: "Department of Public Works, Housing, and Settlements of Malinau Regency, North Kalimantan",
    title: "Technical Support Staff for Experts in Malinau Spatial Planning Activities",
    lat: 3.5712,
    lng: 116.6054,
    desc: "Compiling, collecting, analyzing and presenting maps required for all spatial planning studies in Malinau Regency.",
    link: "https://www.ardamap.com"
  },
  {
    year: 2024,
    position: "GIS Specialist",
    company: "Department of Public Works, Housing, and Settlements of Malinau Regency, North Kalimantan",
    title: "Technical Support Staff for Experts in Malinau Spatial Planning Activities",
    lat: 3.5712,
    lng: 116.6054,
    desc: "Compiling, collecting, analyzing and presenting maps required for all spatial planning studies in Malinau Regency.",
    link: "https://www.ardamap.com"
  },
  {
    year: 2024,
    position: "GIS Expert",
    company: "PT Pangrancana Spasialindo Pratama",
    title: "Base Map for Detailed Spatial Planning in Rajeg District, Banten",
    lat: -6.1257,
    lng: 106.5269,
    desc: "Creating detailed base maps for Detailed Spatial Planning in Rajeg District, Banten.",
    link: "https://www.ardamap.com"
  },
  {
    year: 2024,
    position: "GIS Expert",
    company: "PT Wahana Reka Tekindo",
    title: "Spatial Information System for RIMBA (Riau, Jambi and West Sumatera) Conservation Area Monitoring",
    locations: [
      { lat: 0.5175, lng: 101.4469 },   // Riau
      { lat: -1.5045, lng: 103.5834 },   // Jambi
      { lat: -0.9376, lng: 100.3608 },   // Sumbar
    ],
    desc: "Performing compilation and organization of all spatial data and assisting IT experts in developing the RIMBA information system, particularly in the field of geospatial information systems.",
    link: "https://www.ardamap.com"
  },
  {
    year: 2025,
    position: "GIS Expert",
    company: "Department of Public Works and Spatial Planning of Public Housing and Residential Areas, Kubu Raya Regency, West Kalimantan",
    title: "Spatial Mapping and Analysis for Detailed Spatial Planning in Kubu Raya Regency",
    lat: -0.1283,
    lng: 109.3920,
    desc: "Conducting primary and secondary surveys, as well as compiling, collecting, analyzing and presenting maps required in the preparation of the Detailed Spatial Plan for Kubu Raya Regency, West Kalimantan, until it is ready to be published as a legal regulation.",
    link: "https://www.ardamap.com"
  },
  {
    year: 2025,
    position: "GIS Expert",
    company: "Department of Public Works and Public Housing of Bengkalis Regency, Riau",
    title: "Spatial Mapping and Analysis for Detailed Spatial Planning in Bengkalis Regency",
    lat: 1.4839,
    lng: 102.1312,
    desc: "Conducting primary and secondary surveys, as well as compiling, collecting, analyzing and presenting maps required in the preparation of the Detailed Spatial Plan in Bengkalis Regency, Riau.",
    link: "https://www.ardamap.com"
  },
  {
    year: 2025,
    position: "GIS Expert",
    company: "Department of Public Works, Housing, and Settlements of Malinau Regency, North Kalimantan",
    title: "Spatial Mapping and Analysis for Detailed Spatial Planning in Malinau Regency",
    lat: 3.5538 ,
    lng: 116.6243,
    desc: "Conducting primary and secondary surveys, as well as compiling, collecting, analyzing and presenting maps required in the preparation of the Detailed Spatial Plan for Malinau Regency, North Kalimantan, until it is ready to be published as a legal regulation.",
  },
  {
    year: 2025,
    position: "GIS Specialist",
    company: "Department of Public Works, Housing, and Settlements of Malinau Regency, North Kalimantan",
    title: "Integrating Mentarang Spatial Planning Data into OSS-RBA System",
    lat: 3.5289,
    lng: 116.5007,
    desc: "Creating and integrating spatial data for Mentarang District into the One Single Submission - Risk Based Approach (OSS-RBA) system to support business licensing processes in Malinau Regency.",
  },
  {
    year: 2025,
    position: "Spatial Data Specialist",
    company: "PT Denaya Loka Konsultindo",
    title: "Compilation and Organization of Spatial Data for National Land Asset Database Development",
    locations: [
      { lat: 0.7564, lng: 100.8728 },   // Riau
      { lat: -3.8581, lng: 102.3147 },   // Bengkulu
      { lat: -0.7839, lng: 100.2986 },   // Sumbar
      { lat: 0.5399, lng: 121.4723 },   // Gorontalo
      { lat: -8.1254, lng: 114.6176 },   // Bali
      { lat: -4.93091, lng: 119.6804 },   // Sulsel
    ],
    desc: "Performing compilation, organization and present of all spatial data into map layout and assisting GIS experts in developing National Land Asset databases in 6 Province (Riau, West Sumatera, Bengkulu, Bali, Gorontalo, South Sulawesi).",
    link: "https://www.ardamap.com"
  },
];