'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { GraduationCap, TrendingUp, Briefcase, Trophy, Award } from 'lucide-react'

const SCREEN_W = 270
const SCREEN_H = Math.round(SCREEN_W * 1920 / 1080)

const POPUPS = [
  {
    Icon: GraduationCap,
    iconColorClass: 'text-secondary',
    iconBgClass: 'bg-secondary/20',
    titre: 'Certificat obtenu !',
    sous: 'Algorithme LinkedIn',
    pos: 'top-[4%] left-[2%]',
    delay: 0.8,
    float: { y: [0, -10, 0] as number[], duration: 3.2 },
    purple: false,
  },
  {
    Icon: TrendingUp,
    iconColorClass: '',
    iconBgClass: '',
    iconColorStyle: { color: '#a855f7' },
    iconBgStyle: { backgroundColor: 'rgba(168,85,247,0.22)' },
    titre: '+4 500% de reach',
    sous: 'En 6 semaines',
    pos: 'top-[28%] right-0',
    delay: 1.1,
    float: { y: [0, 9, 0] as number[], duration: 2.7 },
    purple: true,
  },
  {
    Icon: Briefcase,
    iconColorClass: 'text-secondary',
    iconBgClass: 'bg-secondary/20',
    titre: '3 RDV qualifiés',
    sous: 'En une semaine',
    pos: 'top-[56%] left-0',
    delay: 1.4,
    float: { y: [0, -11, 0] as number[], duration: 4.0 },
    purple: false,
  },
  {
    Icon: Trophy,
    iconColorClass: 'text-secondary',
    iconBgClass: 'bg-secondary/20',
    titre: '+25 ventes en 4j',
    sous: 'Social selling',
    pos: 'bottom-[6%] right-[4%]',
    delay: 1.7,
    float: { y: [0, 8, 0] as number[], duration: 3.6 },
    purple: false,
  },
  {
    Icon: Award,
    iconColorClass: 'text-secondary',
    iconBgClass: 'bg-secondary/20',
    titre: 'CDI décroché',
    sous: 'En 3 mois',
    pos: 'top-[2%] right-[2%]',
    delay: 2.0,
    float: { y: [0, -8, 0] as number[], duration: 2.5 },
    purple: false,
  },
]

export default function HomepageHeroVisual() {
  return (
    <div className="flex justify-center items-center" style={{ minHeight: 640 }}>
      <div className="relative" style={{ width: 580, height: 640 }}>

        {/* Glow */}
        <div
          className="absolute pointer-events-none rounded-full"
          style={{
            width: 320, height: 560,
            top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'radial-gradient(ellipse, rgba(5,221,225,0.18) 0%, transparent 70%)',
            filter: 'blur(32px)',
          }}
        />

        {/* Phone centered */}
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            style={{ rotate: '4deg' }}
          >
            <div
              className="relative rounded-[42px] shadow-2xl border-[3px]"
              style={{
                padding: 11,
                background: 'linear-gradient(160deg, #001a4d 0%, #000d26 100%)',
                borderColor: 'rgba(255,255,255,0.14)',
                boxShadow: '0 40px 90px rgba(0,0,0,0.7), 0 0 60px rgba(5,221,225,0.08)',
              }}
            >
              {/* Notch */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-5 rounded-full z-10"
                style={{ background: '#000d26' }} />
              {/* Side buttons */}
              <div className="absolute -right-[3px] top-16 w-[3px] h-9 rounded-r-sm"
                style={{ background: 'rgba(255,255,255,0.15)' }} />
              <div className="absolute -left-[3px] top-12 w-[3px] h-7 rounded-l-sm"
                style={{ background: 'rgba(255,255,255,0.15)' }} />
              <div className="absolute -left-[3px] top-24 w-[3px] h-7 rounded-l-sm"
                style={{ background: 'rgba(255,255,255,0.15)' }} />
              {/* Screen */}
              <div className="overflow-hidden rounded-[32px]"
                style={{ width: SCREEN_W, height: SCREEN_H }}>
                <Image
                  src="/linkedin-profile.jpg"
                  alt="Profil LinkedIn"
                  width={SCREEN_W}
                  height={SCREEN_H}
                  className="w-full h-full object-cover object-top"
                  unoptimized
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Popups */}
        {POPUPS.map((popup, i) => {
          const { Icon } = popup
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1, y: popup.float.y }}
              transition={{
                opacity: { delay: popup.delay, duration: 0.4 },
                scale: { delay: popup.delay, duration: 0.5, type: 'spring', stiffness: 180 },
                y: { delay: popup.delay + 0.5, duration: popup.float.duration, repeat: Infinity, ease: 'easeInOut' },
              }}
              className={`absolute ${popup.pos} backdrop-blur-md border rounded-2xl px-4 py-3 flex items-center gap-3 z-20 whitespace-nowrap`}
              style={{
                backgroundColor: '#0d1e47',
                borderColor: popup.purple ? 'rgba(168,85,247,0.25)' : 'rgba(255,255,255,0.10)',
                boxShadow: popup.purple
                  ? '0 0 30px rgba(168,85,247,0.25)'
                  : '0 10px 40px rgba(0,0,0,0.5)',
              }}
            >
              <div
                className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${popup.iconBgClass}`}
                style={'iconBgStyle' in popup ? popup.iconBgStyle : undefined}
              >
                <Icon
                  className={`w-5 h-5 ${popup.iconColorClass}`}
                  style={'iconColorStyle' in popup ? popup.iconColorStyle : undefined}
                />
              </div>
              <div>
                <p className="text-white font-bold text-sm leading-tight">{popup.titre}</p>
                <p className="text-white/55 text-xs mt-0.5">{popup.sous}</p>
              </div>
            </motion.div>
          )
        })}

      </div>
    </div>
  )
}
