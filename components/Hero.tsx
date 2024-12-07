import Image from 'next/image'

export default function Hero() {
  return (
    <div className="relative h-screen">
      <Image
        src="/hero.jpg"
        alt="Hero background"
        fill
        priority
        className="object-cover"
      />
    </div>
  )
}
