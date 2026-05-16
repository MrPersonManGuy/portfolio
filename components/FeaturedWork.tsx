import { allProjects } from '@/.contentlayer/generated'
import Link from 'next/link'

export default function FeaturedWork() {
  const featuredProjects = allProjects
    .filter((p) => p.featured)
    .sort((a, b) => new Date(b.date || 0).getTime() - new Date(a.date || 0).getTime())

  return (
    <div className="retro-box" style={{ marginTop: '64px', marginBottom:'32px', borderTop: '2px solid #f9c784' }}>
      <div className="retro-box-title retro-box-title-green" style={{ marginTop: '12px' }}>Featured work </div>
      <div style={{ padding: '8px' }}>
        {featuredProjects.length > 0 ? (
          featuredProjects.map((project) => (
            <div key={project.slug} style={{ border: '2px inset #aaa', background: '#f8f8ff', padding: '8px', marginBottom: '6px' }}>
              <div style={{ fontWeight: 'bold', fontSize: '0.8rem', marginBottom: '3px' }}>{project.title}</div>
              <p style={{ fontSize: '0.72rem', color: '#444', marginBottom: '5px', lineHeight: 1.5 }}>{project.description}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3px', marginBottom: '5px' }}>
                {project.technologies.split(',').map((t, i) => (
                  <span key={i} className="tech-tag">{t.trim()}</span>
                ))}
              </div>
              <div style={{ fontSize: '0.72rem', display: 'flex', gap: '8px' }}>
                {project.demoUrl && <a href={project.demoUrl}>demo</a>}
                {project.githubUrl && <a href={project.githubUrl}>github</a>}
                <Link href={`/projects/${project.slug}`}>details</Link>
              </div>
            </div>
          ))
        ) : (
          <p style={{ fontSize: '0.75rem', color: '#888', padding: '4px' }}>no featured projects yet.</p>
        )}
        <div style={{ textAlign: 'right', marginTop: '4px' }}>
          <Link href="/projects" style={{ fontSize: '0.72rem' }}>see all projects »</Link>
        </div>
      </div>
    </div>
  )
}
