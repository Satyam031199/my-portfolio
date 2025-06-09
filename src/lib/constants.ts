import { Mail, MapPin, Phone } from "lucide-react";

export const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: "/icons/react.png" },
      { name: "TypeScript", icon: "/icons/typescript.png" },
      { name: "Tailwind CSS", icon: "/icons/tailwindcss.png" },
      { name: "Next.js", icon: "/icons/nextjs.png" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: "/icons/nodejs.png" },
      { name: "Express.js", icon: "/icons/express.png" },
      { name: "MongoDB", icon: "/icons/mongodb.png" },
      { name: "PostgreSQL", icon: "/icons/postgresql.png" },
    ],
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Git & GitHub", icon: "/icons/github.png" },
      { name: "Docker", icon: "/icons/docker.png" },
      { name: "AWS", icon: "/icons/aws.png" },
      { name: "Kubernetes", icon: "/icons/k8s.png" },
      { name: "Terraform", icon: "/icons/terraform.png" },
      { name: "Jenkins", icon: "/icons/jenkins.png" },
    ],
  },
];

export const currentlyLearning = [
  { name: "GraphQL", classNames: "bg-[#DF34A6]", icon: "/icons/graphql.png" },
  {
    name: "Prometheus",
    classNames: "bg-[#E64A19]",
    icon: "/icons/prometheus.png",
  },
  { name: "Ansible", classNames: "bg-black", icon: "/icons/ansible.png" },
];

export const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    value: "satyamchaturvedi71@gmail.com",
    href: "mailto:satyamchaturvedi71@gmail.com",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+91 6393014394",
    href: "tel:+15551234567",
    color: "from-green-500 to-green-600",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Noida, India",
    href: "#",
    color: "from-purple-500 to-purple-600",
  },
];

export const socialLinks = [
  {
    icon: "/icons/linkedin.png",
    name: "LinkedIn",
    href: "#",
    color: "hover:text-blue-600",
  },
  {
    icon: "/icons/github.png",
    name: "GitHub",
    href: "#",
    color: "hover:text-gray-800",
  },
  {
    icon: "/icons/instagram.png",
    name: "Instagram",
    href: "#",
    color: "hover:text-blue-500",
  },
];

export const navItems = [
  { id: 1, title: 'Home', href: '/'},
  { id: 2, title: 'About', href: '/about'},
  { id: 3, title: 'Projects', href: '/projects'},
  { id: 4, title: 'Skills', href: '/skills'},
  { id: 5, title: 'Contact', href: '/contact'},
];
