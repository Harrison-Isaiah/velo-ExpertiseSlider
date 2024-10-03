import Image from 'next/image'

export default function VirtualDesign() {
  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* Background with wavy lines */}
      <div className="absolute inset-0 opacity-50">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Wavy background"
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex items-center justify-between h-full px-8 py-12">
        {/* Left side content */}
        <div className="w-1/2 text-white space-y-6">
          <h2 className="text-2xl font-light tracking-wider">D E S I G N &nbsp; Y O U</h2>
          <h1 className="text-6xl font-bold">
            FEEL <span className="text-[#5eead4]">VIRTUALLY</span>
          </h1>
          <p className="text-sm max-w-md opacity-80">
            Lorem Ipsum is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem
            Ipsum Has Been The Industry&apos;s Standard Dummy Text Ever Since The 1500s,
          </p>
          <ul className="flex space-x-6 text-sm">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-[#5eead4] rounded-full mr-2"></span>
              Inspire
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-[#5eead4] rounded-full mr-2"></span>
              Create
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-[#5eead4] rounded-full mr-2"></span>
              Engage
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-[#5eead4] rounded-full mr-2"></span>
              Transform
            </li>
          </ul>
        </div>

        {/* Right side image */}
        <div className="w-1/2 relative h-full">
          <Image
            src="/placeholder.svg?height=800&width=600"
            alt="Person wearing VR headset"
            fill
            style={{ objectFit: 'contain', objectPosition: 'right center' }}
          />
        </div>
      </div>
    </div>
  )
}
