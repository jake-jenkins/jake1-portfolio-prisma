import ProjectCard from "./ProjectCard";

export default function ProjectGrid({projects}:{projects: any}) {
    return (
        <div
        className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 my-8"
      >
        {projects.map((project: any) => (
            <ProjectCard key={project.slug} project={project} />
        ))}
        </div>
    )
}