import {EducationList} from '@/components/education-list'
import {ExperienceList} from '@/components/experience-list'
import {Footer} from '@/components/footer'
import {Hero} from '@/components/hero'
import {Nav} from '@/components/nav'
import {ProjectList} from '@/components/project-list'
import {Section} from '@/components/section'
import {SkillGroups} from '@/components/skill-groups'
import {getEducation, getExperience, getProjects, getSiteSettings, getSkillGroups} from '@/lib/get-content'

export default async function Home() {
  const [settings, experience, projects, skillGroups, education] = await Promise.all([
    getSiteSettings(),
    getExperience(),
    getProjects(),
    getSkillGroups(),
    getEducation(),
  ])

  return (
    <div className="flex flex-1 flex-col">
      <Nav name={settings.name} />
      <main className="flex-1">
        <Hero settings={settings} />
        <Section id="experience" title="Experience">
          <ExperienceList items={experience} />
        </Section>
        <Section id="projects" title="Projects">
          <ProjectList items={projects} />
        </Section>
        <Section id="skills" title="Skills">
          <SkillGroups groups={skillGroups} />
        </Section>
        <Section id="education" title="Education">
          <EducationList items={education} />
        </Section>
      </main>
      <Footer settings={settings} />
    </div>
  )
}
