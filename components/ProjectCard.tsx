import Link from 'next/link'
import type { Project } from '@/.contentlayer/generated'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="border border-neutral-200 dark:border-neutral-800 rounded p-6 hover:bg-neutral-50 dark:hover:bg-neutral-900/50 transition-colors">
      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
      <p className="text-neutral-600 dark:text-neutral-400 mb-4">{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.split(',').map((tech, i) => (
          <span
            key={`${tech.trim()}-${i}`}
            className="text-xs px-3 py-1 bg-neutral-100 dark:bg-neutral-800 rounded text-neutral-700 dark:text-neutral-300 tracking-wide"
          >
            {tech.trim()}
          </span>
        ))}
      </div>

      <div className="flex gap-4 text-sm">
        {project.demoUrl && (
          <a href={project.demoUrl} className="underline hover:text-neutral-600 dark:hover:text-neutral-400">
            Demo
          </a>
        )}
        {project.githubUrl && (
          <a href={project.githubUrl} className="underline hover:text-neutral-600 dark:hover:text-neutral-400">
            GitHub
          </a>
        )}
        <Link href={`/projects/${project.slug}`} className="underline hover:text-neutral-600 dark:hover:text-neutral-400">
          Details
        </Link>
      </div>
    </div>
  )
}
