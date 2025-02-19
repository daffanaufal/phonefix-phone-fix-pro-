export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export const services: Service[] = [
  {
    id: 1,
    title: "Screen Repair",
    description: "Professional screen replacement service for all phone models",
    icon: "smartphone"
  },
  {
    id: 2,
    title: "Battery Replacement",
    description: "Quality battery replacement to extend your phone's life",
    icon: "battery-charging"
  },
  {
    id: 3,
    title: "Water Damage Repair",
    description: "Expert water damage treatment and repair",
    icon: "droplets"
  },
  {
    id: 4,
    title: "Software Issues",
    description: "Resolution of all software-related problems",
    icon: "settings"
  }
];