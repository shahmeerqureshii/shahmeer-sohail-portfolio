import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, ExternalLink, Eye, X } from 'lucide-react';
import { Project, ProjectDiscipline } from '../types/portfolio';
import { PROJECTS, PERSONAL_INFO } from '../data/portfolioData';

export const ProjectGallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | ProjectDiscipline>('all');
  const [showAllWork, setShowAllWork] = useState(false);
  const [quickPreviewProject, setQuickPreviewProject] = useState<Project | null>(null);

  // Dynamic counts based on the PROJECTS array length
  const totalProjectsCount = useMemo(() => PROJECTS.length, []);
  const frontendCount = useMemo(() => PROJECTS.filter((p) => p.discipline === 'frontend').length, []);
  const graphicDesignCount = useMemo(() => PROJECTS.filter((p) => p.discipline === 'graphic-design').length, []);

  // 3 Curated Design Projects and 3 Curated Front-End Web Projects
  const featuredDesignProjects = useMemo(
    () => PROJECTS.filter((p) => p.discipline === 'graphic-design' && p.featured),
    []
  );

  const featuredFrontendProjects = useMemo(
    () => PROJECTS.filter((p) => p.discipline === 'frontend' && p.featured),
    []
  );

  const filteredProjects = useMemo(() => {
    if (activeTab === 'all') return PROJECTS;
    return PROJECTS.filter((project) => project.discipline === activeTab);
  }, [activeTab]);

  // Bespoke visual preview container for projects
  const renderProjectVisual = (project: Project) => {
    const customImg = project.imageSrc || project.coverImage;
    if (customImg) {
      return (
        <div className="w-full h-full relative overflow-hidden bg-neutral-950 flex items-center justify-center">
          <img
            src={customImg}
            alt={project.title}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      );
    }

    return (
      <div className="w-full h-full bg-neutral-950 p-6 flex items-center justify-center">
        <span className="text-neutral-500 font-mono text-xs">{project.title}</span>
      </div>
    );
  };

  const renderProjectCard = (project: Project) => (
    <motion.div
      key={project.id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      onClick={() => {
        // Only trigger card click on mobile/tablet screens (window width under 768px, which is Tailwind's 'md' breakpoint)
        if (window.innerWidth < 768) {
          setQuickPreviewProject(project);
        }
      }}
      className="group flex flex-col bg-[#0e0e11] border border-neutral-800/90 rounded-2xl overflow-hidden hover:border-neutral-700 transition-all duration-300 cursor-pointer md:cursor-default"
    >
      {/* Visual Showcase Card */}
      <div 
        className="h-64 w-full relative overflow-hidden border-b border-neutral-800/80"
        onClick={(e) => {
          // On desktop, allow clicking the image to open preview as well if desired, or let the button handle it
          if (window.innerWidth < 768) {
            e.stopPropagation();
            setQuickPreviewProject(project);
          }
        }}
      >
        {renderProjectVisual(project)}

        {/* Hover Action Overlay - hidden or non-interactive on mobile */}
        <div className="absolute inset-0 bg-black/60 opacity-0 md:group-hover:opacity-100 backdrop-blur-[2px] transition-opacity duration-200 flex items-center justify-center gap-3 p-4 pointer-events-none md:pointer-events-auto">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setQuickPreviewProject(project);
            }}
            className="px-4 py-2 rounded-lg bg-white text-black text-xs font-medium flex items-center gap-1.5 hover:bg-neutral-200 transition-colors shadow-lg cursor-pointer pointer-events-auto"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Quick Preview</span>
          </button>
        </div>
      </div>

      {/* Card Meta Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between text-xs text-neutral-400 mb-2 font-mono">
            <span className="text-emerald-400/90 font-medium">
              {project.discipline === 'frontend' ? 'Front-End Web' : project.categoryLabel}
            </span>
          </div>

          <h3
            className="text-lg font-semibold text-white group-hover:text-neutral-100 transition-colors mb-2"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {project.title}
          </h3>

          <p className="text-xs text-neutral-400 leading-relaxed line-clamp-2 mb-4">
            {project.summary}
          </p>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="projects" className="border-t border-neutral-800/80 py-24 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div>
            <p className="text-xs text-neutral-400 tracking-wider uppercase mb-2 font-mono">
              {!showAllWork ? 'Curated Selection' : `Complete Archive · ${totalProjectsCount} Completed Deliverables`}
            </p>
            <h2
              className="text-3xl sm:text-4xl font-semibold tracking-tight text-white"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {!showAllWork ? 'My Portfolio' : 'All Projects & Case Studies'}
            </h2>
          </div>
        </motion.div>

        {!showAllWork ? (
          <div className="space-y-16">
            {/* Graphic Design Projects */}
            <div>
              <div className="flex items-center justify-between mb-8 pb-3 border-b border-neutral-800">
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <h3
                    className="text-xl font-semibold text-white tracking-tight"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    Graphic Design & Brand Identity
                  </h3>
                </div>
                {/* Hidden on mobile, visible from md breakpoint up */}
                <button
                  type="button"
                  onClick={() => {
                    setActiveTab('graphic-design');
                    setShowAllWork(true);
                  }}
                  className="hidden md:flex text-xs text-neutral-400 hover:text-white font-mono items-center gap-1 transition-colors cursor-pointer"
                >
                  <span>View all</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredDesignProjects.map(renderProjectCard)}
              </div>
            </div>

            {/* Front-End Web Projects */}
            <div>
              <div className="flex items-center justify-between mb-8 pb-3 border-b border-neutral-800">
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  <h3
                    className="text-xl font-semibold text-white tracking-tight"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    Front-End Web Development
                  </h3>
                </div>
                {/* Hidden on mobile, visible from md breakpoint up */}
                <button
                  type="button"
                  onClick={() => {
                    setActiveTab('frontend');
                    setShowAllWork(true);
                  }}
                  className="hidden md:flex text-xs text-neutral-400 hover:text-white font-mono items-center gap-1 transition-colors cursor-pointer"
                >
                  <span>View all</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredFrontendProjects.map(renderProjectCard)}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="pt-10 border-t border-neutral-850 flex flex-col items-center justify-center text-center"
            >
              <button
                type="button"
                onClick={() => {
                  setShowAllWork(true);
                  setActiveTab('all');
                }}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-all shadow-xl hover:shadow-2xl cursor-pointer group"
              >
                <span>View All Projects</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </motion.div>
          </div>
        ) : (
          <div>
            <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-4 border-b border-neutral-800">
              <div className="flex flex-wrap items-center gap-2">
                {/* All Work Button */}
                <button
                  type="button"
                  onClick={() => setActiveTab('all')}
                  className={`text-xs px-4 py-2.5 rounded-lg font-medium transition-colors cursor-pointer flex items-center gap-2 ${
                    activeTab === 'all'
                      ? 'bg-white text-black font-semibold shadow-sm'
                      : 'bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800 border border-neutral-800'
                  }`}
                >
                  <span>All Work</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded font-mono ${activeTab === 'all' ? 'bg-black/10 text-black' : 'bg-neutral-800 text-neutral-300'}`}>
                    {totalProjectsCount}
                  </span>
                </button>

                {/* Front-End Button */}
                <button
                  type="button"
                  onClick={() => setActiveTab('frontend')}
                  className={`text-xs px-4 py-2.5 rounded-lg font-medium transition-colors cursor-pointer flex items-center gap-2 ${
                    activeTab === 'frontend'
                      ? 'bg-white text-black font-semibold shadow-sm'
                      : 'bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800 border border-neutral-800'
                  }`}
                >
                  <span>Front-End Web Development</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded font-mono ${activeTab === 'frontend' ? 'bg-black/10 text-black' : 'bg-neutral-800 text-neutral-300'}`}>
                    {frontendCount}
                  </span>
                </button>

                {/* Graphic Design Button */}
                <button
                  type="button"
                  onClick={() => setActiveTab('graphic-design')}
                  className={`text-xs px-4 py-2.5 rounded-lg font-medium transition-colors cursor-pointer flex items-center gap-2 ${
                    activeTab === 'graphic-design'
                      ? 'bg-white text-black font-semibold shadow-sm'
                      : 'bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800 border border-neutral-800'
                  }`}
                >
                  <span>Graphic Design</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded font-mono ${activeTab === 'graphic-design' ? 'bg-black/10 text-black' : 'bg-neutral-800 text-neutral-300'}`}>
                    {graphicDesignCount}
                  </span>
                </button>
              </div>

              <button
                type="button"
                onClick={() => {
                  setShowAllWork(false);
                  const el = document.getElementById('projects');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-xs text-neutral-400 hover:text-white font-mono flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-neutral-900 border border-neutral-800 hover:bg-neutral-850 transition-colors cursor-pointer"
              >
                <span>← Back to Curated (6 Projects)</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map(renderProjectCard)}
            </div>
          </div>
        )}

      </div>

      {/* Quick Preview Lightbox Modal */}
      {quickPreviewProject && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setQuickPreviewProject(null)}
        >
          <div
            className="relative max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-2xl border border-neutral-800 bg-[#0e0e11] shadow-2xl p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top-Right Close Button */}
            <button
              type="button"
              onClick={() => setQuickPreviewProject(null)}
              className="absolute top-6 right-6 p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white transition-colors cursor-pointer z-10"
              aria-label="Close Preview"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Modal Header */}
            <div className="mb-6 pr-10">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-2">
                <span>·</span>
                <span>{quickPreviewProject.categoryLabel}</span>
              </div>
              <h3
                className="text-2xl sm:text-3xl font-semibold text-white tracking-tight"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {quickPreviewProject.title}
              </h3>
              <p className="text-sm text-neutral-300 mt-2 leading-relaxed">
                {quickPreviewProject.subtitle}
              </p>
            </div>

            {/* Visual Box */}
            <div className="h-64 sm:h-80 w-full rounded-xl overflow-hidden border border-neutral-800 mb-6">
              {renderProjectVisual(quickPreviewProject)}
            </div>

            {/* External Links / Actions Footer */}
            <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-3 pt-2 w-full">
              <div className="flex flex-wrap items-center justify-center gap-3 w-full sm:w-auto">
                {quickPreviewProject.discipline !== 'graphic-design' && (
                  <a
                    href={quickPreviewProject.githubUrl || PERSONAL_INFO.socials.github || 'https://github.com/shahmeerqurshii'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-white text-black text-xs font-medium flex items-center justify-center gap-2 hover:bg-neutral-200 transition-colors cursor-pointer"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Repository on GitHub</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
                {quickPreviewProject.liveUrl && (
                  <a
                    href={quickPreviewProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-neutral-900 border border-neutral-700 text-neutral-300 text-xs font-medium flex items-center justify-center gap-1.5 hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Live Preview</span>
                  </a>
                )}
              </div>

              <button
                type="button"
                onClick={() => setQuickPreviewProject(null)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:bg-neutral-800 text-xs font-medium transition-colors cursor-pointer text-center"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};