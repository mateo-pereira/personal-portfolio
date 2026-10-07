import type {Metadata} from 'next'

import {getSiteSettings} from '@/lib/get-content'

export const metadata: Metadata = {
  title: 'Resume — Mateo Pereira',
}

const LOCAL_RESUME = '/MateoPereira_Resume.pdf'

export default async function ResumePage() {
  const settings = await getSiteSettings()
  const resumeUrl = settings.resumeUrl ?? LOCAL_RESUME

  return (
    <main className="flex-1">
      <header className="mx-auto flex w-full max-w-3xl flex-col items-start gap-3 px-6 py-16">
        <p className="text-xs font-semibold tracking-[0.3em] text-foreground/60 uppercase">Resume</p>
        <h1 className="text-4xl font-bold tracking-tight">{settings.name}</h1>
        <a
          href={resumeUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-2 border border-white/30 px-6 py-2 text-xs font-semibold tracking-[0.2em] uppercase transition hover:border-white hover:bg-white/5"
        >
          Download PDF
        </a>
      </header>

      <div className="px-6 pb-20">
        {/* Embed the PDF itself so it renders exactly as designed */}
        <object
          data={`${resumeUrl}#toolbar=0&navpanes=0&view=FitH`}
          type="application/pdf"
          aria-label={`${settings.name} resume`}
          className="mx-auto block aspect-[8.5/11] w-full max-w-4xl rounded-sm bg-white shadow-2xl"
        >
          <p className="p-6 text-sm">
            Your browser can&apos;t display PDFs inline.{' '}
            <a href={resumeUrl} target="_blank" rel="noreferrer" className="underline">
              Open the resume
            </a>
            .
          </p>
        </object>
      </div>
    </main>
  )
}
