import Script from "next/script"

export default function DonatePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-custom-darkBlue to-custom-mediumBlue py-16 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Donate Today</h1>
              <p className="mx-auto max-w-[700px] text-gray-100 md:text-xl">
                Your donation isn't just about restoring sight—it's about restoring hope. Even the smallest contribution
                can help someone see a brighter future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-8">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Support Our Mission</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-lg">
                Your generous donation helps fund our initiatives to provide accessible eye care to underserved
                communities and advance our research in adaptive lens technology.
              </p>
            </div>
            
            {/* MyGivingCircle Donation Button */}
            <div className="flex justify-center">
              <Script src="https://mygivingcircle.org/embed.js" type="module" />
              <iframe
                className="mgc-embed"
                data-charity-id="68577d542973498de0bbbb6f"
                data-text="Donate Now"
                data-text-size="16"
                data-text-color="#000000"
                data-bg-color="#FFCC00"
                data-border-radius="24"
                data-width="200"
                data-height="45"
                data-icon="none"
                data-page="donate"
                data-embed="button"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
