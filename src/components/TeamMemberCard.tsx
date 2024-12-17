import { TeamMember } from '@/types/TeamMember'
import Image from 'next/image'
import Link from 'next/link'

interface TeamMemberCardProps {
  member: TeamMember
}

export default function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      <div className="relative h-48">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6 bg-gradient-to-br from-gray-50 to-gray-100">
        <h2 className="text-2xl font-bold mb-2 text-gray-800">
          {member.name}
        </h2>
        <p className="text-gray-600 text-lg mb-2 font-medium">
          {member.role}
        </p>
        <p className="text-gray-700 mb-4">
          {member.bio}
        </p>

        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2 text-gray-800">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {member.skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2 text-gray-800">Projects</h3>
          {member.projects.map((project) => (
            <div key={project.name} className="mb-3">
              <h4 className="font-medium text-gray-800">{project.name}</h4>
              <ul className="list-disc list-inside text-sm text-gray-600">
                {project.description.map((desc, index) => (
                  <li key={index}>{desc}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-1 mt-1">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 bg-gray-200 text-gray-700 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2 text-gray-800">Contributions</h3>
          <ul className="list-disc list-inside text-sm text-gray-600">
            {member.contributions.map((contribution, index) => (
              <li key={index}>{contribution}</li>
            ))}
          </ul>
        </div>

        <div className="pt-4 border-t border-gray-200">
          <h3 className="text-lg font-semibold mb-2 text-gray-800">Contact</h3>
          <div className="flex flex-wrap gap-3">
            {member.contact.github && (
              <Link
                href={member.contact.github}
                target="_blank"
                className="text-blue-600 hover:text-blue-800"
              >
                GitHub
              </Link>
            )}
            {member.contact.linkedin && (
              <Link
                href={member.contact.linkedin}
                target="_blank"
                className="text-blue-600 hover:text-blue-800"
              >
                LinkedIn
              </Link>
            )}
            <Link
              href={`mailto:${member.contact.email}`}
              className="text-blue-600 hover:text-blue-800"
            >
              Email
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
