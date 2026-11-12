
export type Guide = {
  slug: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  featured: boolean;
  icon: string;
};

export const guides: Guide[] = [
  {
    slug: "how-to-choose-a-keyboard-for-programming",
    title: "How to Choose a Keyboard for Programming",
    description:
      "Understand keyboard layouts, mechanical switches, ergonomics and connectivity before choosing your next keyboard.",
    category: "Keyboards",
    readTime: "6 min read",
    featured: true,
    icon: "⌨️",
  },
];
