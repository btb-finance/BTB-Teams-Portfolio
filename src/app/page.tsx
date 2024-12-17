import TeamMemberCard from '../components/TeamMemberCard'
import { TeamMember } from '../types/TeamMember'

const teamMembers: TeamMember[] = [
  {
    id: "001-JohnDoe",
    name: "John Doe",
    role: "Frontend Developer at BTB Finance",
    bio: "Frontend Developer at BTB Finance with a passion for creating user-friendly interfaces and scalable web applications.",
    image: "https://api.dicebear.com/7.x/pixel-art/svg?seed=john",
    skills: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "Git",
      "Docker",
      "AWS"
    ],
    projects: [
      {
        name: "BTB Dashboard",
        description: [
          "Led the development of the main dashboard interface",
          "Implemented real-time data visualization"
        ],
        technologies: ["React", "TypeScript", "D3.js"]
      },
      {
        name: "Portfolio Analytics Tool",
        description: [
          "Created a tool for analyzing investment portfolios",
          "Integrated multiple data sources"
        ],
        technologies: ["Next.js", "Python", "PostgreSQL"]
      }
    ],
    contributions: [
      "Improved team documentation processes",
      "Mentored junior developers",
      "Led weekly technical discussions"
    ],
    contact: {
      github: "https://github.com/johndoe",
      linkedin: "https://linkedin.com/in/johndoe",
      email: "john.doe@example.com"
    }
  },
  {
    id: "002-JaneSmith",
    name: "Jane Smith",
    role: "Backend Developer at BTB Finance",
    bio: "Backend Developer at BTB Finance specializing in building robust and scalable server-side applications with a focus on performance optimization and system architecture.",
    image: "https://api.dicebear.com/7.x/pixel-art/svg?seed=jane",
    skills: [
      "Python",
      "Java",
      "Go",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "AWS",
      "GCP",
      "Docker",
      "Kubernetes",
      "Jenkins"
    ],
    projects: [
      {
        name: "Transaction Processing System",
        description: [
          "Designed and implemented high-throughput transaction processing pipeline",
          "Optimized database queries for 10x performance improvement"
        ],
        technologies: ["Go", "PostgreSQL", "Redis"]
      },
      {
        name: "API Gateway Service",
        description: [
          "Built centralized API gateway for microservices architecture",
          "Implemented rate limiting and authentication"
        ],
        technologies: ["Java Spring Boot", "MongoDB"]
      }
    ],
    contributions: [
      "Established backend coding standards",
      "Created comprehensive API documentation",
      "Led database optimization workshops"
    ],
    contact: {
      github: "https://github.com/janesmith",
      linkedin: "https://linkedin.com/in/janesmith",
      email: "jane.smith@example.com"
    }
  },
  {
    id: "003-AlexChen",
    name: "Alex Chen",
    role: "Full Stack Developer at BTB Finance",
    bio: "Full Stack Developer at BTB Finance with expertise in building end-to-end financial applications. Passionate about creating seamless user experiences while maintaining robust backend systems.",
    image: "https://api.dicebear.com/7.x/pixel-art/svg?seed=alex",
    skills: [
      "React",
      "Vue.js",
      "TypeScript",
      "Node.js",
      "Python",
      "GraphQL",
      "MySQL",
      "DynamoDB",
      "AWS",
      "Docker",
      "Jest",
      "Cypress"
    ],
    projects: [
      {
        name: "Investment Portfolio Manager",
        description: [
          "Developed full-stack solution for portfolio management",
          "Implemented real-time market data integration"
        ],
        technologies: ["React", "Node.js", "GraphQL", "DynamoDB"]
      },
      {
        name: "Trading Analytics Platform",
        description: [
          "Built interactive dashboard for trading insights",
          "Integrated machine learning models for trend analysis"
        ],
        technologies: ["Vue.js", "Python", "TensorFlow"]
      }
    ],
    contributions: [
      "Introduced GraphQL to the tech stack",
      "Created full-stack development guidelines",
      "Organized tech talks on emerging technologies"
    ],
    contact: {
      github: "https://github.com/alexchen",
      linkedin: "https://linkedin.com/in/alexchen",
      email: "alex.chen@example.com"
    }
  },
  {
    id: "004-SarahJohnson",
    name: "Sarah Johnson",
    role: "DevOps Engineer at BTB Finance",
    bio: "DevOps Engineer at BTB Finance focused on building and maintaining robust infrastructure and deployment pipelines. Passionate about automation and cloud-native technologies.",
    image: "https://api.dicebear.com/7.x/pixel-art/svg?seed=sarah",
    skills: [
      "Terraform",
      "CloudFormation",
      "Docker",
      "Kubernetes",
      "ECS",
      "Jenkins",
      "GitHub Actions",
      "GitLab CI",
      "Prometheus",
      "Grafana",
      "ELK Stack",
      "AWS",
      "Azure"
    ],
    projects: [
      {
        name: "Cloud Infrastructure Migration",
        description: [
          "Led migration of legacy systems to cloud infrastructure",
          "Implemented Infrastructure as Code practices"
        ],
        technologies: ["Terraform", "AWS", "Docker"]
      },
      {
        name: "Automated Deployment Pipeline",
        description: [
          "Built end-to-end CI/CD pipeline for microservices",
          "Reduced deployment time by 70%"
        ],
        technologies: ["Kubernetes", "Jenkins", "ArgoCD"]
      }
    ],
    contributions: [
      "Established DevOps best practices",
      "Created disaster recovery protocols",
      "Conducted workshops on cloud infrastructure"
    ],
    contact: {
      github: "https://github.com/sarahjohnson",
      linkedin: "https://linkedin.com/in/sarahjohnson",
      email: "sarah.johnson@example.com"
    }
  }
]

export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold text-white mb-4">
            BTB Teams Portfolio
          </h1>
          <p className="text-xl text-gray-300">
            Showcasing our amazing team members and their contributions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="card-container">
              <TeamMemberCard member={member} />
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
