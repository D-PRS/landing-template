import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'

export default function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative overflow-x-hidden">
      <div className="fixed inset-0 -z-10" style={{ background: 'linear-gradient(160deg, #0d0620 0%, #0a0416 40%, #050210 100%)' }} />
      <div className="fixed top-0 right-0 w-[700px] h-[700px] rounded-full blur-3xl -z-10 pointer-events-none opacity-10"
        style={{ background: 'radial-gradient(circle, #0848aa, transparent 70%)' }} />
      <div className="fixed bottom-1/3 left-0 w-[500px] h-[500px] rounded-full blur-3xl -z-10 pointer-events-none opacity-8"
        style={{ background: 'radial-gradient(circle, #05dde1, transparent 70%)' }} />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
