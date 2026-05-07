import { Sparkles } from 'lucide-react'
import React from 'react'

export default function ListEmpty({ title, subtitle }: { title: string, subtitle?: string }) {
  return (
    <div className='flex flex-col items-center justify-center gap-6 py-24'>
      <div className='relative'>
        <div className='w-16 h-16 rounded-full border border-primary/30 flex items-center justify-center'>
          <Sparkles className='w-7 h-7 text-primary/60' />
        </div>
        <span className='absolute -top-1 -right-1 text-gold text-xs'>✦</span>
      </div>
      <div className='text-center'>
        <p className='font-cinzel text-sm tracking-widest uppercase text-muted-foreground mb-2'>No {title} found</p>
        {subtitle && <p className='text-sm text-muted-foreground/70'>{subtitle}</p>}
      </div>
    </div>
  )
}
