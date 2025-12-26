// // src/constants/portfolioInfo.js

// export const portfolioData = [
//   {
//     id: 1,
//     name: "APEX BUSINESS HOTEL",
//     category: "Hospitality & Tourism",
//     description:
//       "Luxury business hotel with integrated fine dining and in-house cinema facilities.",
//     image:
//       "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
//     tags: ["Luxury", "5-Star", "Business", "Fine Dining"],
//     location: "Kathmandu, Nepal",
//     clients: "500+ Corporate",
//     awards: "12 Awards",
//   },
//   {
//     id: 2,
//     name: "FISHTAIL DREAM PARK",
//     category: "Entertainment & Leisure",
//     description:
//       "Premium amusement park offering unique themed experiences and eco-friendly attractions.",
//     image:
//       "https://images.unsplash.com/photo-1534008897995-27a23e859048?auto=format&fit=crop&w=1200&q=80",
//     tags: ["Amusement", "Family", "Eco-Friendly", "Entertainment"],
//     location: "Pokhara, Nepal",
//     clients: "1M+ Visitors",
//     awards: "8 Awards",
//   },
//   {
//     id: 3,
//     name: "GOLDEN HARVEST RESORTS",
//     category: "Hospitality & Tourism",
//     description:
//       "Chain of boutique resorts offering authentic cultural experiences with modern luxury.",
//     image:
//       "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
//     tags: ["Boutique", "Cultural", "Luxury", "Sustainable"],
//     location: "Multiple Locations",
//     clients: "15+ Properties",
//     awards: "10 Awards",
//   },
//   {
//     id: 4,
//     name: "URBAN TECH HUB",
//     category: "Technology & Innovation",
//     description:
//       "State-of-the-art co-working and innovation space for tech startups and entrepreneurs.",
//     image:
//       "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
//     tags: ["Tech", "Startup", "Innovation", "Co-working"],
//     location: "Kathmandu Valley",
//     clients: "100+ Startups",
//     awards: "Top Tech Hub",
//   },
//   {
//     id: 5,
//     name: "ELITE FINANCIAL GROUP",
//     category: "Finance & Banking",
//     description:
//       "Premier financial services firm specializing in wealth management and investment banking.",
//     image:
//       "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80",
//     tags: ["Finance", "Wealth", "Investment"],
//     location: "Global",
//     clients: "5000+ Clients",
//     awards: "15+ Awards",
//   },
//   {
//     id: 6,
//     name: "ROYAL HERITAGE MUSEUM",
//     category: "Cultural & Education",
//     description:
//       "Modern museum preserving cultural heritage with interactive digital exhibitions.",
//     image:
//       "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
//     tags: ["Cultural", "Education", "Museum"],
//     location: "Bhaktapur, Nepal",
//     clients: "500K+ Visitors",
//     awards: "7 Awards",
//   },
// ];



// src/constants/portfolioInfo.js

import himRiverImage from "../assets/portfolioImages/himRiver.png"
import hulasInfraImage from "../assets/portfolioImages/hulasInfra.jpg"
import hulasIronImage from "../assets/portfolioImages/hulasIron.jpg"
import hydroEmpireImage from "../assets/portfolioImages/hydroEmpire.jpg"
import mahaShaktiCementImage from "../assets/portfolioImages/mahaShaktiCement.jpg"
import sparkHydroImage from "../assets/portfolioImages/sparkHydro.jpg"
// src/constants/portfolioInfo.js
import phuwa from "../assets/logos/puwa.webp"

export const portfolioData = [
  {
    id: 1,
    name: "Puwa Khola Hydropower",
    category: "Hydropower Project",
    description:
      "Puwa Khola-1 Hydropower is a run-of-river hydroelectric project in Ilam District, Nepal, with an installed capacity of 4 MW. It generates clean energy by harnessing the flow of the Puwa River and contributes electricity to the national grid. The project is developed and operated by Puwa Khola-1 Hydropower Pvt. Ltd. and aims to promote sustainable renewable energy solutions in Nepal.",
    image:phuwa,
    tags: ["Hydropower", "Renewable Energy"],
    location: "Ilam District, Nepal",
    clients: "",
    awards: "",
    logo: "",
  },
  {
    id: 2,
    name: "Mahashakti Cement Limited",
    category: "Cement Industry",
    description:
      "Mahashakti Cement Limited is a Nepalese cement manufacturer producing OPC and PPC cement for construction and infrastructure. The company has applied for an IPO to raise capital and expand its operations, providing essential materials for Nepal’s growing construction market.",
    image: mahaShaktiCementImage,
    tags: ["Cement", "Industrial", "Infrastructure"],
    location: "Nepal",
    clients: "",
    awards: "",
    logo: mahaShaktiCementImage,
  },
  {
    id: 3,
    name: "Him River Power Limited",
    category: "Hydropower Project",
    description:
      "Him River Power Limited (HRPL) was established in 2010 to focus on hydropower development and energy generation projects. The company has worked on projects such as the Liping Khola Hydropower Project (~16.26 MW) and continues to promote sustainable energy solutions in Nepal.",
    image: himRiverImage,
    tags: ["Hydropower", "Energy", "Sustainable Energy"],
    location: "Nepal",
    clients: "",
    awards: "",
    logo: himRiverImage,
  },
  {
    id: 4,
    name: "Spark Hydroelectric Company Ltd.",
    category: "Hydropower Project",
    description:
      "Spark Hydroelectric Company Ltd., established in 1999, is a developer of hydropower projects in Nepal. It is currently developing the Tamor-Mewa Hydroelectric Project (TMHEP) with 128 MW capacity, contributing significantly to clean energy generation for Nepal’s national grid.",
    image: sparkHydroImage,
    tags: ["Hydropower", "Energy", "Investment"],
    location: "Nepal",
    clients: "",
    awards: "",
    logo: sparkHydroImage,
  },
  {
    id: 5,
    name: "Hydro Empire Pvt. Ltd.",
    category: "Hydropower Project",
    description:
      "Hydro Empire Pvt. Ltd. is a hydropower developer associated with large-scale projects like the Upper Myagdi Hydropower Project (~37 MW). The company focuses on expanding renewable energy infrastructure and supporting Nepal’s sustainable energy goals.",
    image: hydroEmpireImage,
    tags: ["Hydropower", "Energy", "Stakeholder"],
    location: "Nepal",
    clients: "",
    awards: "",
    logo: hydroEmpireImage,
  },
  {
    id: 6,
    name: "Hulas Infra",
    category: "Infrastructure & Steel Solutions",
    description:
      "Hulas Infra specializes in Pre-Engineered Buildings (PEB), transmission line towers, hydropower infrastructure, solar EPC solutions, and custom steel structures. The company is a trusted partner for industrial and commercial projects across Nepal, delivering durable infrastructure solutions.",
    image: hulasInfraImage,
    tags: ["Infrastructure", "Steel", "Engineering"],
    location: "Nepal",
    clients: "",
    awards: "",
    logo: hulasInfraImage,
  },
  {
    id: 7,
    name: "Hulas Iron Industries",
    category: "Steel Manufacturer",
    description:
      "Hulas Iron Industries is a leading steel manufacturer in Nepal, producing structural steel, rebars, black and stainless pipes, and other construction materials. With ISO-certified processes and decades of experience, it supports domestic construction and infrastructure projects with high-quality steel products.",
    image: hulasIronImage,
    tags: ["Steel", "Manufacturing", "Construction"],
    location: "Nepal",
    clients: "",
    awards: "",
    logo: hulasIronImage,
  },
];
