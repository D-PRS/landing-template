import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'

export default function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative overflow-x-hidden">
      <div className="fixed inset-0 -z-10" style={{ background: 'linear-gradient(160deg, #000d26 0%, #001340 40%, #002060 100%)' }} />
      <div className="fixed top-0 right-0 w-[700px] h-[700px] rounded-full blur-3xl -z-10 pointer-events-none opacity-12"
        style={{ background: 'radial-gradient(circle, #0a3a8a, transparent 70%)' }} />
      <div className="fixed bottom-1/3 left-0 w-[500px] h-[500px] rounded-full blur-3xl -z-10 pointer-events-none opacity-8"
        style={{ background: 'radial-gradient(circle, #05dde1, transparent 70%)' }} />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
