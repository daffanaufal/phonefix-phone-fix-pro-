export interface Testimonial {
  id: number;
  name: string;
  content: string;
  rating: number;
  imageUrl: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Billie Joe",
    content: "Excellent service! Fixed my iPhone screen in just 30 minutes.",
    rating: 5,
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    name: "Will Smith",
    content: "Very professional and affordable. Highly recommended!",
    rating: 5,
    imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    name: "Mike Shinoda",
    content: "Great experience! They fixed my water-damaged phone perfectly.",
    rating: 5,
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  }
];