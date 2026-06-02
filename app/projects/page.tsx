import type { Metadata } from 'next';

import Cell from '@/components/Projects/Cell';
import PageWrapper from '@/components/Template/PageWrapper';
import data from '@/data/projects';
import { createPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Projects',
  description:
    'Professional, Personal and my student years projects from Muhammad Tayyab.',
  path: '/projects/',
});

export default function ProjectsPage() {
  const PersonalProjects = data.filter((p) => p.type == 1);
  const FreelanceProjects = data.filter((p) => p.type == 2);
  const featuredProjects = data.filter((p) => p.type == 3);
  const StudentProjects = data.filter((p) => p.type == 4);

  return (
    <PageWrapper>
      <section className="projects-page">
        <header className="projects-header">
          <h1 className="page-title">Projects</h1>
          <p className="page-subtitle">
            Professional, Personal and my student years projects
          </p>
        </header>

        {PersonalProjects.length > 0 && (
          <section className="projects-featured">
            <h2 className="projects-section-title">Personal Projects</h2>
            <div className="projects-grid">
              {PersonalProjects.map((project) => (
                <Cell data={project} key={project.title} />
              ))}
            </div>
          </section>
        )}

        {FreelanceProjects.length > 0 && (
          <section className="projects-other">
            <h2 className="projects-section-title">Freelance Projects</h2>
            <div className="projects-grid">
              {FreelanceProjects.map((project) => (
                <Cell data={project} key={project.title} />
              ))}
            </div>
          </section>
        )}

        {featuredProjects.length > 0 && (
          <section className="projects-other">
            <h2 className="projects-section-title">
              Professional Projects at Enterprises
            </h2>
            <div className="projects-grid projects-grid--featured">
              {featuredProjects.map((project) => (
                <Cell data={project} key={project.title} />
              ))}
            </div>
          </section>
        )}

        {StudentProjects.length > 0 && (
          <section className="projects-other">
            <h2 className="projects-section-title">Student Projects</h2>
            <div className="projects-grid">
              {StudentProjects.map((project) => (
                <Cell data={project} key={project.title} />
              ))}
            </div>
          </section>
        )}
      </section>
    </PageWrapper>
  );
}
