import TeamMemberCard from '@/components/TeamMemberCard'
import { TeamMember } from '@/types/TeamMember'

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
