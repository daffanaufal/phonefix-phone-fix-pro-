# Technical Documentation: TypeScript, React, and Vite

## Table of Contents
1. [TypeScript in the Project](#typescript-in-the-project)
2. [React Implementation](#react-implementation)
3. [Vite Configuration and Usage](#vite-configuration-and-usage)
4. [Component Architecture](#component-architecture)
5. [State Management](#state-management)

## TypeScript in the Project

### TypeScript Configuration
The project uses TypeScript for type safety and better development experience. Here's how it's configured:

```typescript
// tsconfig.app.json
{
  "compilerOptions": {
    "target": "ES2020",          // Modern JavaScript features
    "lib": ["ES2020", "DOM"],    // Available APIs
    "jsx": "react-jsx",          // React JSX support
    "moduleResolution": "bundler",// Module resolution strategy
    "strict": true,              // Enable strict type checking
  }
}
```

### Type Definitions
We use TypeScript interfaces to define data structures:

```typescript
// Example of TypeScript interfaces
interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

interface GalleryItem {
  id: number;
  imageUrl: string;
  title: string;
}

interface Testimonial {
  id: number;
  name: string;
  content: string;
  rating: number;
  imageUrl: string;
}
```

### Component Type Definitions
React components are typed using TypeScript:

```typescript
// Function Component with TypeScript
import React from 'react';

interface HeaderProps {
  title?: string;           // Optional prop
  onMenuClick: () => void;  // Function prop
}

const Header: React.FC<HeaderProps> = ({ title = 'Default', onMenuClick }) => {
  return (
    <header onClick={onMenuClick}>
      <h1>{title}</h1>
    </header>
  );
};
```

## React Implementation

### Component Structure
React components in this project follow a functional approach with hooks:

```typescript
// Example of a React functional component with hooks
import React, { useState, useEffect } from 'react';

const Services: React.FC = () => {
  // State management using useState hook
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  // Side effects using useEffect hook
  useEffect(() => {
    document.title = selectedService 
      ? `${selectedService.title} - PhoneFixPro` 
      : 'PhoneFixPro';
  }, [selectedService]);

  return (
    <section id="services">
      {/* Component JSX */}
    </section>
  );
};
```

### React Hooks Usage

1. **useState**: For local state management
```typescript
const [count, setCount] = useState<number>(0);
const [user, setUser] = useState<User | null>(null);
```

2. **useEffect**: For side effects
```typescript
useEffect(() => {
  // Effect code
  return () => {
    // Cleanup code
  };
}, [dependencies]);
```

3. **Custom Hooks**: For reusable logic
```typescript
function useWindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return size;
}
```

## Vite Configuration and Usage

### Vite Setup
Vite is our build tool and development server. Here's how it's configured:

```typescript
// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
```

### Development Server
Vite provides a fast development server with Hot Module Replacement (HMR):
```bash
npm run dev  # Starts development server
```

### Build Process
Vite handles production builds:
```bash
npm run build  # Creates optimized production build
```

### Environment Variables
Vite supports environment variables out of the box:
```typescript
// .env
VITE_API_URL=https://api.example.com

// Usage in components
const apiUrl = import.meta.env.VITE_API_URL;
```

## Component Architecture

### Component Hierarchy
```
App
├── Header
├── Hero
├── Services
│   └── ServiceCard
├── Gallery
│   └── GalleryItem
├── Testimonials
│   └── TestimonialCard
├── Contact
│   └── Map
└── Footer
```

### Component Communication
1. **Props**: For parent-to-child communication
```typescript
// Parent component
const Parent = () => {
  const [data, setData] = useState<string>('');
  return <Child data={data} onUpdate={setData} />;
};

// Child component
interface ChildProps {
  data: string;
  onUpdate: (value: string) => void;
}

const Child: React.FC<ChildProps> = ({ data, onUpdate }) => {
  return <button onClick={() => onUpdate('new value')}>{data}</button>;
};
```

2. **Context**: For global state management
```typescript
// Create context
const ThemeContext = React.createContext<string>('light');

// Provider
const App = () => {
  return (
    <ThemeContext.Provider value="dark">
      <Components />
    </ThemeContext.Provider>
  );
};

// Consumer
const Component = () => {
  const theme = useContext(ThemeContext);
  return <div className={theme}>Content</div>;
};
```

## State Management

### Local State
Using useState for component-level state:
```typescript
const [isOpen, setIsOpen] = useState<boolean>(false);
const [count, setCount] = useState<number>(0);
```

### Derived State
Computing values from state:
```typescript
const [items, setItems] = useState<Item[]>([]);
const totalItems = useMemo(() => items.length, [items]);
const activeItems = useMemo(() => 
  items.filter(item => item.active), 
  [items]
);
```

### State Updates
Proper state update patterns:
```typescript
// Object state
const [user, setUser] = useState<User>({ name: '', age: 0 });
setUser(prev => ({ ...prev, name: 'John' }));

// Array state
const [list, setList] = useState<string[]>([]);
setList(prev => [...prev, 'new item']);
```

## Performance Optimization

### Memoization
Using React.memo and useMemo:
```typescript
// Component memoization
const MemoizedComponent = React.memo(({ prop }: Props) => {
  return <div>{prop}</div>;
});

// Value memoization
const memoizedValue = useMemo(() => 
  expensiveCalculation(prop), 
  [prop]
);
```

### Callback Memoization
Using useCallback for function props:
```typescript
const handleClick = useCallback(() => {
  console.log('clicked');
}, []);
```

### Code Splitting
Using lazy loading for components:
```typescript
const LazyComponent = React.lazy(() => 
  import('./components/LazyComponent')
);

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <LazyComponent />
    </Suspense>
  );
}
```