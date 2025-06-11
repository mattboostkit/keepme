import ClientLogos from '../components/ClientLogos';
import Team from '../components/Team';
import { useSEO } from '../hooks/useSEO';
import { useJsonLd } from '../hooks/useJsonLd';

function About() {
  useSEO({
    title: 'About Us | KeepMe - UK Fragrance Manufacturing Experts',
    description: 'Learn about KeepMe, a family-run UK fragrance manufacturer with 20+ years of experience creating premium perfume, home, and lifestyle products for luxury brands.',
    canonical: window.location.href,
  });
  useJsonLd('about-breadcrumb', {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://keepme.co.uk/' },
      { '@type': 'ListItem', position: 2, name: 'About' }
    ]
  });

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-brand-peach">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-sans font-semibold text-brand-plum mb-6">
                About <span className="text-brand-rose">KeepMe</span>
              </h1>
              <p className="text-lg text-brand-mauve leading-relaxed mb-12">
                We specialise in the creation, manufacture, and delivery of premium fragrance, home, and lifestyle products. Based in the UK, we are a family-run business with over 20 years of industry experience. We work closely with brands, license holders, distributors, and retailers to bring their visions to life — from initial concept through to final product delivery. Whether you need individual components or a retail-ready product, KeepMe is the trusted partner to support your project at every stage.
              </p>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-plum mb-6">Our <span className="text-brand-rose">Mission</span></h2>
                <p className="text-lg text-brand-mauve leading-relaxed">
                  We’re all about turning big ideas into high-quality products — and making the whole process feel easy and collaborative.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://cdn.sanity.io/images/tyzs5imn/production/4aeefbbef8dae3dd080f930c8af649be6f7dac45-1600x1066.webp"
                alt="KeepMe perfume bottles"
                className="rounded-2xl shadow-xl w-full h-[300px] md:h-[500px] object-cover"
              />
              <div className="absolute -bottom-8 -left-8 bg-white rounded-xl p-6 shadow-lg">
                <div>
                  <p className="text-xl font-semibold">Since 2004</p>
                  <p className="text-gray-600">Crafting Excellence</p>
                </div>
              </div>
              {/* New Stats Card: 5 Million Units */}
              <div className="absolute -bottom-8 -right-8 bg-white rounded-xl p-6 shadow-lg hidden md:block"> {/* Hide on small screens */}
                <div>
                  <p className="text-xl font-semibold">5M+ Units</p>
                  <p className="text-gray-600">Produced Per Annum</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Our Values Section - moved up */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-plum mb-6">Our <span className="text-brand-rose">Values</span></h2>
            <p className="text-lg text-brand-mauve leading-relaxed">
              The principles that guide our work and relationships
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Value 1: Passion */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-3">Passion</h3>
              <p className="text-lg text-brand-mauve leading-relaxed">
                We are passionate about everything we do. Driven by creativity, integrity, and excellence. We create and deliver exceptional products that exceed expectations and make a meaningful impact.
              </p>
            </div>
            {/* Value 2: Service */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-3">Service</h3>
              <p className="text-lg text-brand-mauve leading-relaxed">
                We believe great service starts with a calm, confident team. By creating a positive space to work, we make collaboration easy and communication effortless, so every customer feels supported and inspired.
              </p>
            </div>
            {/* Value 3: Partnership */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-3">Partnership</h3>
              <p className="text-lg text-brand-mauve leading-relaxed">
                Honesty and integrity shape everything we do. We build trust through mutual respect within the team, with customers and partners. Real collaboration happens when everyone feels valued, heard, and empowered to contribute.
              </p>
            </div>
            {/* Value 4: Quality */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-3">Quality</h3>
              <p className="text-lg text-brand-mauve leading-relaxed">
                Quality means more than great products, it’s about building lasting relationships rooted in trust, transparency, and shared success. We take pride in every detail, knowing that doing things right creates results people believe in.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Our Journey Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-plum mb-6">Our <span className="text-brand-rose">Journey</span></h2>
            <p className="text-lg text-brand-mauve leading-relaxed">How KeepMe Lifestyle established itself as a key supplier in the fragrance and lifestyle sector</p>
          </div>
          <div className="w-full bg-white dark:bg-[#f4cfd9]/10 font-sans md:px-10">
            <div className="relative max-w-7xl mx-auto pb-20">
              {/* Timeline Start */}
              {/* 2004 */}
              <div className="flex justify-start pt-10 md:pt-20 md:gap-10">
                <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                  <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                    <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2"></div>
                  </div>
                  <h3 className="hidden md:block text-xl md:text-3xl lg:text-5xl font-bold font-serif md:pl-20 transition-colors duration-300 text-brand-mauve dark:text-brand-mauve">2004</h3>
                </div>
                <div className="relative pl-20 pr-4 md:pl-4 w-full">
                  <h3 className="md:hidden block text-2xl mb-4 text-left font-bold font-serif transition-colors duration-300 text-brand-mauve dark:text-brand-mauve">2004</h3>
                  <div>
                    <h4 className="text-lg font-normal text-brand-rose dark:text-brand-rose mb-2">Where it all Began</h4>
                    <p className="text-brand-mauve dark:text-neutral-300 text-base leading-relaxed">Kevin and Steve Anderson opened the doors to what would become a trusted name in Branded Merchandise. Operating from our London office with a vision to support brands and distributors, KeepMe Promotions was founded. Utilising a network of newly established suppliers, the foundation was simple but powerful: strong relationships, reliable service, and a deep understanding of how merchandise could elevate brand presence.</p>
                  </div>
                </div>
              </div>
              {/* 2005-2008 */}
              <div className="flex justify-start pt-10 md:pt-20 md:gap-10">
                <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                  <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                    <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2"></div>
                  </div>
                  <h3 className="hidden md:block text-xl md:text-3xl lg:text-5xl font-bold font-serif md:pl-20 transition-colors duration-300 text-brand-mauve/50 dark:text-brand-mauve/50">2005-2008</h3>
                </div>
                <div className="relative pl-20 pr-4 md:pl-4 w-full">
                  <h3 className="md:hidden block text-2xl mb-4 text-left font-bold font-serif transition-colors duration-300 text-brand-mauve/50 dark:text-brand-mauve/50">2005-2008</h3>
                  <div>
                    <h4 className="text-lg font-normal text-brand-rose dark:text-brand-rose mb-2">Integration and Expansion</h4>
                    <p className="text-brand-mauve dark:text-neutral-300 text-base leading-relaxed">This period marked a defining time as KeepMe. We integrated our businesses with our Shenzhen Operation, and we’re proud to say: we still enjoy this relationship today. Here we laid the foundations for a robust, ethical supply chain, with audited factories and fully transparent practices.</p>
                  </div>
                </div>
              </div>
              {/* 2009–2010 */}
              <div className="flex justify-start pt-10 md:pt-20 md:gap-10">
                <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                  <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                    <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2"></div>
                  </div>
                  <h3 className="hidden md:block text-xl md:text-3xl lg:text-5xl font-bold font-serif md:pl-20 transition-colors duration-300 text-brand-mauve/50 dark:text-brand-mauve/50">2009–2010</h3>
                </div>
                <div className="relative pl-20 pr-4 md:pl-4 w-full">
                  <h3 className="md:hidden block text-2xl mb-4 text-left font-bold font-serif transition-colors duration-300 text-brand-mauve/50 dark:text-brand-mauve/50">2009–2010</h3>
                  <div>
                    <h4 className="text-lg font-normal text-brand-rose dark:text-brand-rose mb-2">Enhancing our Services</h4>
                    <p className="text-brand-mauve dark:text-neutral-300 text-base leading-relaxed">KeepMe broaden our offering to include design, manufacturing and full service solutions. With a strong emphasis on creativity, technical excellence, and customer service, KeepMe built a solid foundation for future growth across a diverse range of industries. New team members supported our growing client demands in sales, logistics, and account management.</p>
                  </div>
                </div>
              </div>
              {/* 2011 */}
              <div className="flex justify-start pt-10 md:pt-20 md:gap-10">
                <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                  <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                    <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2"></div>
                  </div>
                  <h3 className="hidden md:block text-xl md:text-3xl lg:text-5xl font-bold font-serif md:pl-20 transition-colors duration-300 text-brand-mauve/50 dark:text-brand-mauve/50">2011</h3>
                </div>
                <div className="relative pl-20 pr-4 md:pl-4 w-full">
                  <h3 className="md:hidden block text-2xl mb-4 text-left font-bold font-serif transition-colors duration-300 text-brand-mauve/50 dark:text-brand-mauve/50">2011</h3>
                  <div>
                    <h4 className="text-lg font-normal text-brand-rose dark:text-brand-rose mb-2">Entering the Fragrance &amp; Lifestyle Market</h4>
                    <p className="text-brand-mauve dark:text-neutral-300 text-base leading-relaxed">Recognising the opportunity to innovate in new sectors, KeepMe moved into the fragrance and lifestyle market. The team began offering bespoke solutions across fragrance, skincare, beauty, cosmetics and wellness, helping brands create standout product experiences.</p>
                  </div>
                </div>
              </div>
              {/* 2011-2018 */}
              <div className="flex justify-start pt-10 md:pt-20 md:gap-10">
                <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                  <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                    <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2"></div>
                  </div>
                  <h3 className="hidden md:block text-xl md:text-3xl lg:text-5xl font-bold font-serif md:pl-20 transition-colors duration-300 text-brand-mauve/50 dark:text-brand-mauve/50">2011-2018</h3>
                </div>
                <div className="relative pl-20 pr-4 md:pl-4 w-full">
                  <h3 className="md:hidden block text-2xl mb-4 text-left font-bold font-serif transition-colors duration-300 text-brand-mauve/50 dark:text-brand-mauve/50">2011-2018</h3>
                  <div>
                    <h4 className="text-lg font-normal text-brand-rose dark:text-brand-rose mb-2">Global Manufacturing Expansion</h4>
                    <p className="text-brand-mauve dark:text-neutral-300 text-base leading-relaxed">KeepMe expanded its global footprint, establishing strategic manufacturing capabilities across the UK, Europe and China. This global presence enabled the business to offer scalable, cost-effective production while maintaining high quality and speed to market.</p>
                  </div>
                </div>
              </div>
              {/* 2020 */}
              <div className="flex justify-start pt-10 md:pt-20 md:gap-10">
                <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                  <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                    <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2"></div>
                  </div>
                  <h3 className="hidden md:block text-xl md:text-3xl lg:text-5xl font-bold font-serif md:pl-20 transition-colors duration-300 text-brand-mauve/50 dark:text-brand-mauve/50">2020</h3>
                </div>
                <div className="relative pl-20 pr-4 md:pl-4 w-full">
                  <h3 className="md:hidden block text-2xl mb-4 text-left font-bold font-serif transition-colors duration-300 text-brand-mauve/50 dark:text-brand-mauve/50">2020</h3>
                  <div>
                    <h4 className="text-lg font-normal text-brand-rose dark:text-brand-rose mb-2">Launch of the Lifestyle Lookbook</h4>
                    <p className="text-brand-mauve dark:text-neutral-300 text-base leading-relaxed">To inspire clients and showcase its full-service offering, KeepMe launched the Lifestyle Lookbook—a curated guide to its fragrance, skincare, wellness and packaging capabilities. This lookbook highlighted KeepMe’s creative direction, market insight, and bespoke product range.</p>
                  </div>
                </div>
              </div>
              {/* 2021 */}
              <div className="flex justify-start pt-10 md:pt-20 md:gap-10">
                <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                  <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                    <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2"></div>
                  </div>
                  <h3 className="hidden md:block text-xl md:text-3xl lg:text-5xl font-bold font-serif md:pl-20 transition-colors duration-300 text-brand-mauve/50 dark:text-brand-mauve/50">2021</h3>
                </div>
                <div className="relative pl-20 pr-4 md:pl-4 w-full">
                  <h3 className="md:hidden block text-2xl mb-4 text-left font-bold font-serif transition-colors duration-300 text-brand-mauve/50 dark:text-brand-mauve/50">2021</h3>
                  <div>
                    <h4 className="text-lg font-normal text-brand-rose dark:text-brand-rose mb-2">Commitment to Sustainability</h4>
                    <p className="text-brand-mauve dark:text-neutral-300 text-base leading-relaxed">Sustainability became a core focus. KeepMe Lifestyle adopted environmentally responsible practices across its operations, including eco-friendly materials, reduced waste processes and more sustainable packaging options—helping clients meet their own green goals.</p>
                  </div>
                </div>
              </div>
              {/* 2023 */}
              <div className="flex justify-start pt-10 md:pt-20 md:gap-10">
                <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                  <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                    <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2"></div>
                  </div>
                  <h3 className="hidden md:block text-xl md:text-3xl lg:text-5xl font-bold font-serif md:pl-20 transition-colors duration-300 text-brand-mauve/50 dark:text-brand-mauve/50">2023</h3>
                </div>
                <div className="relative pl-20 pr-4 md:pl-4 w-full">
                  <h3 className="md:hidden block text-2xl mb-4 text-left font-bold font-serif transition-colors duration-300 text-brand-mauve/50 dark:text-brand-mauve/50">2023</h3>
                  <div>
                    <h4 className="text-lg font-normal text-brand-rose dark:text-brand-rose mb-2">Launch of KeepMe Glass</h4>
                    <p className="text-brand-mauve dark:text-neutral-300 text-base leading-relaxed">To further specialise in packaging, KeepMe established KeepMe Glass – a division dedicated to premium glass manufacturing for fragrance bottles, diffusers and candle jars. With a focus on quality, consistency and innovation, KeepMe Glass quickly became a trusted name in high-end packaging solutions.</p>
                  </div>
                </div>
              </div>
              {/* 2024 */}
              <div className="flex justify-start pt-10 md:pt-20 md:gap-10">
                <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                  <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                    <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2"></div>
                  </div>
                  <h3 className="hidden md:block text-xl md:text-3xl lg:text-5xl font-bold font-serif md:pl-20 transition-colors duration-300 text-brand-mauve/50 dark:text-brand-mauve/50">2024</h3>
                </div>
                <div className="relative pl-20 pr-4 md:pl-4 w-full">
                  <h3 className="md:hidden block text-2xl mb-4 text-left font-bold font-serif transition-colors duration-300 text-brand-mauve/50 dark:text-brand-mauve/50">2024</h3>
                  <div>
                    <h4 className="text-lg font-normal text-brand-rose dark:text-brand-rose mb-2">Celebrating 20 Years of Innovation</h4>
                    <p className="text-brand-mauve dark:text-neutral-300 text-base leading-relaxed">In 2024, KeepMe proudly celebrated two decades of excellence. From humble beginnings to becoming a globally recognised partner, the anniversary marked a milestone of growth, innovation and unwavering dedication to quality and client success, offering clients a seamless route from concept to shelf.</p>
                  </div>
                </div>
              </div>
              {/* Present */}
              <div className="flex justify-start pt-10 md:pt-20 md:gap-10">
                <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                  <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                    <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2"></div>
                  </div>
                  <h3 className="hidden md:block text-xl md:text-3xl lg:text-5xl font-bold font-serif md:pl-20 transition-colors duration-300 text-brand-mauve/50 dark:text-brand-mauve/50">Present</h3>
                </div>
                <div className="relative pl-20 pr-4 md:pl-4 w-full">
                  <h3 className="md:hidden block text-2xl mb-4 text-left font-bold font-serif transition-colors duration-300 text-brand-mauve/50 dark:text-brand-mauve/50">Present</h3>
                  <div>
                    <h4 className="text-lg font-normal text-brand-rose dark:text-brand-rose mb-2">KeepMe Lifestyle &amp; KeepMe Glass: A Unified Force</h4>
                    <p className="text-brand-mauve dark:text-neutral-300 text-base leading-relaxed">In 2025, KeepMe and KeepMe Glass brought their operations closer than ever before—uniting product development and packaging under one seamless offering. This reintegration created a powerful end-to-end partner for brands in the fragrance and lifestyle sector.</p>
                    <p className="text-brand-mauve dark:text-neutral-300 text-base leading-relaxed mt-2">By combining bespoke product creation with premium packaging and global fulfilment, KeepMe now offers a single point of contact for brands seeking speed, consistency, and innovation. This strategic alignment enhances quality control, sustainability, and creative collaboration—ensuring that clients receive a truly connected, full-service experience from concept to delivery.</p>
                    <ul className="list-disc pl-5 mt-2 text-brand-mauve dark:text-neutral-300 text-base leading-relaxed">
                      <li>Established a reliable global supplier network, focusing on quality, integrity, and sustainability.</li>
                      <li>Built internal processes to support seamless integration, improved lead times, and consistent product quality.</li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Timeline End */}
              <div className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] " style={{height: "2348px"}}>
                <div className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-brand-mauve via-brand-mauve to-transparent from-[0%] via-[10%] rounded-full" style={{height: "0px", opacity: 0}}></div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Our Clients Section (Using ClientLogos from Sanity) */}
      <ClientLogos
        useSanity={true}
        title={<h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-plum mb-6 text-center">Our <span className="text-brand-rose">Clients</span></h2>}
        scrolling={true}
        backgroundColor="bg-white"
      />

      {/* Team Section (Using Team component from Sanity) - Temporarily Hidden */}
      <div className="hidden">
        <Team
        useSanity={true}
        title={<h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-plum mb-6 text-center">Meet the <span className="text-brand-rose">Team</span></h2>}
        subtitle="Meet the experts behind our innovative solutions"
        />
      </div>

      {/* Glass Manufacturer Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image Column */}
            <div className="relative">
              <img
                src="https://cdn.sanity.io/images/tyzs5imn/production/d1b61dc82170aa5a21ee677f8ce6423223fad74f-603x664.webp"
                alt="KeepMe Glass perfume bottle"
                className="rounded-lg shadow-xl w-full max-w-md mx-auto md:mx-0"
              />
            </div>
            {/* Text Content Column */}
            <div className="text-left">
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-brand-plum mb-6">
                Glass Manufacturer for the Fragrance and Lifestyle sector
              </h3>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                At KeepMe Glass, we specialise in designing and manufacturing premium quality glass bottles and components for the fragrance, beauty, and lifestyle industries.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                We offer a full design and decoration service for customers looking for a high-end, bespoke finish, and a catalogue of hundreds of stock bottles, with short lead times with low MOQs and short lead times for those looking for a faster turnaround.
              </p>
              <a
                href="https://keepmeglass.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-brand-mauve text-white font-bold rounded-full hover:bg-brand-rose hover:text-white transition-colors"
              >
                Visit KeepMe Glass
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* End Glass Manufacturer Section */}

      {/* Contact Section */}
      <section className="py-20 bg-brand-pink-light">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Contact <span className="text-brand-mauve">Us</span>
            </h2>
            <p className="text-lg text-gray-600">Get in touch to discuss your project requirements</p>
            <a href="/contact" className="inline-block mt-8 px-8 py-3 bg-brand-mauve text-white font-bold rounded-full hover:bg-brand-rose transition-colors">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;