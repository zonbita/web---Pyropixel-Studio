export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-12 px-6">
      <div className="w-full mx-auto">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-6">FOLLOW US</h3>
          <div className="flex justify-center gap-6 mb-8">
            {/* Social media links can be added here */}
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-sm opacity-70">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <span className="hidden md:inline">•</span>
          <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
        </div>
        
        <div className="text-center mt-8 text-sm opacity-50">
          ©{new Date().getFullYear()} Pyropixel Studio. All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}

