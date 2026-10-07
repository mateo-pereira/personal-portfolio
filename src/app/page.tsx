import {Hero} from '@/components/hero'
import {TileGrid} from '@/components/tile-grid'
import {getSiteSettings} from '@/lib/get-content'

export default async function Home() {
  const settings = await getSiteSettings()

  return (
    <main className="flex-1">
      <Hero settings={settings} />
      <TileGrid githubUrl={settings.githubUrl} />
    </main>
  )
}
