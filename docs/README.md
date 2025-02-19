# Phone Repair Service Website Documentation

## Table of Contents
1. [Project Overview](#project-overview)
2. [Tech Stack](#tech-stack)
3. [Project Structure](#project-structure)
4. [Components](#components)
5. [Styling Guide](#styling-guide)
6. [Data Management](#data-management)
7. [Installation & Setup](#installation--setup)

## Project Overview

This is a modern, responsive website for a phone repair service business. The website includes:
- Navigation header with WhatsApp integration
- Hero section with call-to-action
- Services showcase
- Work gallery
- Customer testimonials
- Contact information with interactive map
- Footer with navigation

## Tech Stack

- **React** (v18.3.1) - Frontend library
- **TypeScript** - Type safety and better developer experience
- **Tailwind CSS** (v3.4.1) - Utility-first CSS framework
- **Lucide React** - Modern icon library
- **React Leaflet** - Interactive maps
- **Vite** - Build tool and development server

## Project Structure

```
src/
├── components/         # React components
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── Gallery.tsx
│   ├── Testimonials.tsx
│   ├── Contact.tsx
│   ├── Map.tsx
│   └── Footer.tsx
├── data/              # Data files
│   ├── services.ts
│   ├── gallery.ts
│   └── testimonials.ts
├── App.tsx            # Main application component
├── main.tsx          # Application entry point
└── index.css         # Global styles
```

## Components

### Header Component
```tsx
// Header.tsx
import React from 'react';
import { Smartphone, Phone } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Smartphone className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-800">PhoneFixPro</span>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="text-gray-600 hover:text-blue-600">Services</a>
            <a href="#gallery" className="text-gray-600 hover:text-blue-600">Gallery</a>
            <a href="#testimonials" className="text-gray-600 hover:text-blue-600">Testimonials</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
          </nav>
          
          {/* WhatsApp Button */}
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
          >
            <Phone className="h-5 w-5" />
            <span>Contact Us</span>
          </a>
        </div>
      </div>
    </header>
  );
};
```

### Styling Guide

#### Tailwind CSS Classes Explained

1. Layout Classes:
   - `container` - Container with max-width
   - `px-4` - Horizontal padding
   - `py-4` - Vertical padding
   - `space-x-4` - Horizontal spacing between elements
   - `space-y-4` - Vertical spacing between elements

2. Flexbox:
   - `flex` - Display flex
   - `items-center` - Align items vertically
   - `justify-between` - Space between items
   - `flex-col` - Column direction
   - `md:flex-row` - Row direction on medium screens

3. Grid:
   - `grid` - Display grid
   - `grid-cols-1` - One column
   - `md:grid-cols-2` - Two columns on medium screens
   - `lg:grid-cols-3` - Three columns on large screens
   - `gap-8` - Gap between grid items

4. Colors:
   - `text-blue-600` - Blue text
   - `bg-white` - White background
   - `hover:bg-blue-600` - Blue background on hover
   - `text-gray-600` - Gray text

5. Typography:
   - `text-2xl` - Font size
   - `font-bold` - Bold text
   - `text-center` - Center text

6. Effects:
   - `shadow-md` - Medium shadow
   - `rounded-lg` - Large border radius
   - `hover:shadow-xl` - Larger shadow on hover
   - `transition-all` - Smooth transitions

## Data Management

### Services Data Structure
```typescript
// services.ts
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
  // ... more services
];
```

### Gallery Data Structure
```typescript
// gallery.ts
export interface GalleryItem {
  id: number;
  imageUrl: string;
  title: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    imageUrl: "https://images.unsplash.com/...",
    title: "Phone Screen Repair"
  },
  // ... more gallery items
];
```

## Installation & Setup

1. Dependencies Installation:
```json
{
  "dependencies": {
    "lucide-react": "^0.344.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-leaflet": "^4.2.1",
    "leaflet": "^1.9.4"
  },
  "devDependencies": {
    "tailwindcss": "^3.4.1",
    "typescript": "^5.5.3",
    // ... other dev dependencies
  }
}
```

2. Tailwind Configuration:
```js
// tailwind.config.js
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

3. Map Integration:
```typescript
// Map.tsx
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map: React.FC = () => {
  const position: [number, number] = [-6.2088, 106.8456];
  
  return (
    <MapContainer center={position} zoom={13} style={{ height: '100%', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      />
      <Marker position={position}>
        <Popup>PhoneFixPro</Popup>
      </Marker>
    </MapContainer>
  );
};
```

## Best Practices

1. Component Organization:
   - Keep components small and focused
   - Use TypeScript interfaces for props
   - Separate data from components

2. Responsive Design:
   - Mobile-first approach
   - Use Tailwind's responsive prefixes
   - Test on multiple screen sizes

3. Performance:
   - Lazy load images
   - Use proper image sizes
   - Minimize bundle size

4. Accessibility:
   - Use semantic HTML
   - Include proper ARIA labels
   - Ensure keyboard navigation

5. Code Style:
   - Consistent naming conventions
   - Clear component structure
   - Proper TypeScript typing