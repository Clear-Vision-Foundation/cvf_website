import Image from "next/image"

export default function TeamPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-[#f6f8f7] py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-custom-mediumBlue">Our Team</p>
            <h1 className="text-3xl font-bold tracking-tighter text-custom-darkBlue sm:text-4xl md:text-5xl">Meet the Board</h1>
            <p className="mt-4 text-gray-600 md:text-lg">
              ClearVision Foundation is guided by people who bring curiosity, expertise, and a shared commitment to making vision care more accessible.
            </p>
          </div>

          <div className="mt-12 space-y-8">
            <article className="grid overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 md:grid-cols-[minmax(260px,320px)_1fr]">
              <div className="relative min-h-[320px] md:min-h-full">
                <Image
                  src="/WhatsApp Image 2026-06-19 at 3.34.24 PM.jpeg"
                  alt="Bushra Afroze speaking at an event"
                  fill
                  sizes="(min-width: 768px) 320px, 100vw"
                  className="object-cover object-[58%_center]"
                />
              </div>
              <div className="p-6 md:p-10">
                <h2 className="text-2xl font-bold text-custom-darkBlue">Bushra Afroze</h2>
                <p className="mt-1 font-semibold text-custom-mediumBlue">Founder and Executive Director</p>
                <div className="mt-6 space-y-4 leading-7 text-gray-600">
                  <p>Bushra Afroze is a problem-solver and systems builder who believes that meaningful change begins with asking better questions and having the courage to build what does not yet exist.</p>
                  <p>At 14, she founded ClearVision Foundation, turning an idea into an organization that brings together people, partnerships, and systems around a problem she wanted to solve. She is driven by the process of taking a complex problem apart, finding what is missing, and building solutions that can continue to work long after the initial idea.</p>
                  <p>Bushra is a recipient of the Luena Foundation Changemaker Award and an LBF Fellow. Her work has also been showcased on national news.</p>
                </div>
              </div>
            </article>

            <div className="grid gap-8 md:grid-cols-3">
              <article className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/riyana image.jpg"
                    alt="Riyana Afroze"
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover object-center"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold text-custom-darkBlue">Riyana Afroze</h2>
                  <p className="mt-1 font-semibold text-custom-mediumBlue">Director of Technology</p>
                  <div className="mt-5 space-y-4 leading-7 text-gray-600">
                    <p>Riyana Afroze is a fourth-year Mechatronics Engineering student from Atlantic Canada with a passion for space systems engineering. Her journey into space began with MUNStar-1, a CubeSat set to launch under the Canadian Space Agency&apos;s CUBICS initiative in 2027. Through her work on the satellite&apos;s Attitude Determination and Control System (ADCS), she discovered her particular interest in spacecraft Guidance, Navigation and Control (GNC), which she hopes to specialise in.</p>
                    <p>Riyana founded Horizon Aerospace to channel her passion for aerospace engineering into ambitious, hands-on projects. Her team is working to build the first high-power rocket made in Newfoundland and Labrador to compete in Launch Canada, Canada&apos;s national premier rocketry competition. Through the project, she hopes to give herself and her peers the opportunity to tackle complex engineering concepts and turn them into flight-ready systems.</p>
                    <p>Riyana is also deeply involved in Canada&apos;s space ecosystem and serves on the Board of Directors of SEDS-Canada as Deputy Projects Chair. In this role, she helps oversee four national projects — CAN-RGX, CAN-SBX, YSpacE, and CCN — while also co-chairing wSEDS (Women of SEDS).</p>
                  </div>
                </div>
              </article>

              <article className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/bil.jpg"
                    alt="Bill Warlick"
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover object-center"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold text-custom-darkBlue">Bill Warlick</h2>
                  <p className="mt-1 font-semibold text-custom-mediumBlue">Board Member</p>
                  <div className="mt-5 space-y-4 leading-7 text-gray-600">
                    <p>Bill Warlick, MBA, MA, comes to ClearVision after a 30-year career in finance, economics and international trade. Bill most recently served as Group Credit Officer for Corporates at Fitch Ratings. In that role, he oversaw Fitch&apos;s analytical approach to the assignment of debt ratings for over 300 corporate issuers in the US, Canada and Latin America.</p>
                    <p>Previously, Bill led coverage of US transportation, gaming and lodging companies for Fitch. He spent parts of his early career at United Airlines (Financial Planning and Analysis) and at the US International Trade Commission, where he was an industry analyst. Bill holds an MBA degree in finance from the University of Chicago and an MA in international economics from Johns Hopkins University.</p>
                    <p>Bill is now retired and lives in Ojai, California with his wife Amy. They have two grown children who also live in California. In his spare time, Bill enjoys playing the mandolin and studying foreign languages, particularly Spanish.</p>
                  </div>
                </div>
              </article>

              <article className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/jessica.jpg"
                    alt="Dr. Jessica Broodryk"
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover object-center"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold text-custom-darkBlue">Dr. Jessica Broodryk</h2>
                  <p className="mt-1 font-semibold text-custom-mediumBlue">Board Member</p>
                  <div className="mt-5 space-y-4 leading-7 text-gray-600">
                    <p>Dr. Jessica Broodryk is an Assistant Clinical Professor at the University of Missouri-St. Louis (UMSL) College of Optometry. A proud alumna of UMSL, Dr. Broodryk further honed her expertise through the Ian L. Bailey Low Vision and Ocular Disease Residency at UC Berkeley School of Optometry. Her dedication to the field is exemplified by her fellowship with the American Academy of Optometry and her receipt of the William Feinbloom Low Vision Award.</p>
                    <p>With a passion for enhancing the quality of life for her patients, Dr. Broodryk specializes in managing both acute and chronic ocular diseases and provides comprehensive low vision rehabilitation for patients of all ages. Her clinical interests include low vision rehabilitation, ocular disease, dry eye management, and contact lenses.</p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
