import romania from "@/assets/country-romania.jpg";
import croatia from "@/assets/country-croatia.jpg";
import bulgaria from "@/assets/country-bulgaria.jpg";
import albania from "@/assets/country-albania.jpg";
import serbia from "@/assets/country-serbia.jpg";
import moldova from "@/assets/country-moldova.jpg";
import catOperators from "@/assets/cat-operators.jpg";
import catConstruction from "@/assets/cat-construction.jpg";
import catManufacturing from "@/assets/cat-manufacturing.jpg";
import catLogistics from "@/assets/cat-logistics.jpg";
import catHospitality from "@/assets/cat-hospitality.jpg";
import catCleaning from "@/assets/cat-cleaning.jpg";
import catTrades from "@/assets/cat-trades.jpg";
import catOther from "@/assets/cat-other.jpg";

export const WHATSAPP_HREF = "https://wa.me/919878603703";

export type CountryId = "romania" | "croatia" | "bulgaria" | "albania" | "serbia" | "moldova";

export const countries: { id: CountryId; name: string; image: string; alt: string; text: string }[] = [
  { id: "romania", name: "Romania", image: romania, alt: "Palace of the Parliament in Bucharest, Romania, at sunset", text: "Opportunities may arise across construction, manufacturing, logistics and skilled trade roles." },
  { id: "croatia", name: "Croatia", image: croatia, alt: "Historic coastal old town in Croatia beside the Adriatic Sea", text: "Roles may include construction, hospitality and other skilled or semi-skilled positions." },
  { id: "bulgaria", name: "Bulgaria", image: bulgaria, alt: "Alexander Nevsky Cathedral in Sofia, Bulgaria", text: "Openings may be available in construction, manufacturing and industrial operations." },
  { id: "albania", name: "Albania", image: albania, alt: "Hillside old town and castle in Berat, Albania", text: "Possible roles across construction, infrastructure and operator manpower." },
  { id: "serbia", name: "Serbia", image: serbia, alt: "Belgrade Fortress above the river confluence in Serbia", text: "Positions may cover construction, logistics and industrial work." },
  { id: "moldova", name: "Moldova", image: moldova, alt: "Nativity Cathedral and park in Chișinău, Moldova", text: "Opportunities may include construction, manufacturing and related skilled roles." },
];

export type CategoryIcon = "operators" | "construction" | "manufacturing" | "logistics" | "hospitality" | "cleaning" | "trades" | "other";

export const categories: { id: CategoryIcon; name: string; image: string; alt: string; text: string }[] = [
  { id: "operators", name: "Operators", image: catOperators, alt: "Machine operator at the controls of an excavator", text: "Machine, equipment and plant operators for industrial and site work." },
  { id: "construction", name: "Construction", image: catConstruction, alt: "Construction workers on scaffolding at a building site", text: "Skilled and semi-skilled workers for building and infrastructure projects." },
  { id: "manufacturing", name: "Manufacturing", image: catManufacturing, alt: "Technician working on a factory assembly line", text: "Production, assembly and line workers for manufacturing facilities." },
  { id: "logistics", name: "Logistics & Warehouse", image: catLogistics, alt: "Forklift moving goods through a warehouse", text: "Warehouse, packing, loading and forklift roles in supply operations." },
  { id: "hospitality", name: "Hospitality", image: catHospitality, alt: "Housekeeper preparing a hotel room", text: "Housekeeping, kitchen and service staff for hotels and restaurants." },
  { id: "cleaning", name: "Cleaning & Maintenance", image: catCleaning, alt: "Maintenance worker cleaning a commercial building lobby", text: "Facility cleaning and general maintenance for commercial premises." },
  { id: "trades", name: "Skilled Trades", image: catTrades, alt: "Welder working on steel with sparks", text: "Welders, fabricators, carpenters, masons and similar tradespeople." },
  { id: "other", name: "Other Skilled Roles", image: catOther, alt: "Electrician testing an electrical control panel", text: "Electricians, plumbers and other roles matched to employer needs." },
];
