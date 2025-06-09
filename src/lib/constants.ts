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
    href: "https://www.google.com/maps/place/Sector+76,+Noida,+Uttar+Pradesh/@28.5679743,77.3803072,17z/data=!3m1!4b1!4m6!3m5!1s0x390cef5e668f8297:0x5ec904a8d2d36b83!8m2!3d28.5682139!4d77.3834998!16s%2Fg%2F1tk6ywk7?entry=ttu&g_ep=EgoyMDI1MDYwNC4wIKXMDSoASAFQAw%3D%3D",
    color: "from-purple-500 to-purple-600",
  },
];

export const socialLinks = [
  {
    icon: "/icons/linkedin.png",
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/satyam-chaturvedi-031199",
    color: "hover:text-blue-600",
  },
  {
    icon: "/icons/github.png",
    name: "GitHub",
    href: "https://github.com/Satyam031199",
    color: "hover:text-gray-800",
  },
  {
    icon: "/icons/instagram.png",
    name: "Instagram",
    href: "https://www.instagram.com/satyam.xd",
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
