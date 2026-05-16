import { allProjects } from '@/.contentlayer/generated'
import ProjectCard from '@/components/ProjectCard'

export const metadata = {
  title: 'Projects',
}

export default function ProjectsPage() {
  const projects = allProjects.sort((a, b) => new Date(b.date || 0).getTime() - new Date(a.date || 0).getTime())

  return (
    <div className="max-w-2xl">
      <h1 className="text-3xl font-bold mb-8">Projects</h1>
      <div className="space-y-4">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  )
}
