export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  image: string
  skills: string[]
  projects: Project[]
  contributions: string[]
  contact: {
    github?: string
    linkedin?: string
    email: string
  }
}

export interface Project {
  name: string
  description: string[]
  technologies: string[]
}
