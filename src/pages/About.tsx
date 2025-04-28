// React import removed - not needed in modern React
// All icons removed as requested
import { Timeline } from '../components/ui/Timeline'; // Import the NEW component
import { ClickableFeatureSteps } from '../components/ui/ClickableFeatureSteps'; // Import the ClickableFeatureSteps component
import ClientLogos from '../components/ClientLogos'; // Import the ClientLogos component
import Team from '../components/Team'; // Import the Team component

function About() {
  // Process flowchart data
  const processFlowchartData = [
    {
      step: 'Step 1',
      title: 'Initial Enquiry',
      content: 'Customer initial contact with KeepMe Lifestyle',
      image: 'https://images.unsplash.com/photo-1556745753-b2904692b3cd?q=80&w=2070&auto=format&fit=crop'
    },
    {
      step: 'Step 2',
      title: 'Customer Service',
      content: 'KeepMe Staff organise meeting',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop'
    },
    {
      step: 'Step 3',
      title: 'Project Brief',
      content: 'Meeting completed outlining requirements and next steps',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop'
    },
    {
      step: 'Step 4',
      title: 'Sampling',
      content: 'Prototyping and product specifications agreed',
      image: 'https://images.unsplash.com/photo-1581092921461-7d65ca45393a?q=80&w=2070&auto=format&fit=crop'
    },
    {
      step: 'Step 5',
      title: 'Ordering',
      content: 'Purchase Order placement',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop'
    },
    {
      step: 'Step 6',
      title: 'Manufacture',
      content: 'Production commences',
      image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop'
    },
    {
      step: 'Step 7',
      title: 'Quality Control',
      content: 'QC organised to AQL Standards',
      image: 'https://images.unsplash.com/photo-1598257006458-087169a1f08d?q=80&w=2070&auto=format&fit=crop'
    },
    {
      step: 'Step 8',
      title: 'Shipping',
      content: 'Goods shipped to filling location for completion',
      image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop'
    },
    {
      step: 'Step 9',
      title: 'Filling and Assembly',
      content: 'Product filled and finished product assembled',
      image: 'https://images.unsplash.com/photo-1600267204091-5c1ab8b10c02?q=80&w=2070&auto=format&fit=crop'
    },
    {
      step: 'Step 10',
      title: 'Delivery',
      content: 'To agreed location',
      image: 'https://images.unsplash.com/photo-1621972660772-6a0427a5ec04?q=80&w=2070&auto=format&fit=crop'
    },
    {
      step: 'Step 11',
      title: 'Review',
      content: 'Project review with client',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop'
    },
  ];

  // Adapt timeline data for the new component structure
  // Updated timeline data with new content
  const timelineData = [
    {
      title: "2004",
      content: (
        <div>
          <h4 className="text-lg font-semibold text-brand-card dark:text-brand-card mb-2">Foundation of KeepMe</h4>
          <p className="text-gray-600 dark:text-neutral-300 text-sm md:text-base">
            KeepMe was established with a vision to provide high-quality products and creative solutions, backed by exceptional logistical support. From the very beginning, the business focused on delivering end-to-end services that exceeded customer expectations.
          </p>
        </div>
      ),
    },
    {
      title: "2005–2010",
      content: (
        <div>
          <h4 className="text-lg font-semibold text-brand-card dark:text-brand-card mb-2">Expanding Services</h4>
          <p className="text-gray-600 dark:text-neutral-300 text-sm md:text-base">
            During this period, KeepMe broadened its offering to include design, manufacturing and full delivery solutions. With a strong emphasis on creativity, technical excellence, and customer service, KeepMe built a solid foundation for future growth across a diverse range of industries.
          </p>
        </div>
      ),
    },
    {
      title: "2011",
      content: (
        <div>
          <h4 className="text-lg font-semibold text-brand-card dark:text-brand-card mb-2">Entering the Fragrance & Lifestyle Market</h4>
          <p className="text-gray-600 dark:text-neutral-300 text-sm md:text-base">
            Recognising the opportunity to innovate in new sectors, KeepMe moved into the fragrance and lifestyle market. The team began offering bespoke solutions across fragrance, skincare, beauty, cosmetics and wellness, helping brands create standout product experiences.
          </p>
        </div>
      ),
    },
    {
      title: "2015",
      content: (
        <div>
          <h4 className="text-lg font-semibold text-brand-card dark:text-brand-card mb-2">Launch of KeepMe Glass</h4>
          <p className="text-gray-600 dark:text-neutral-300 text-sm md:text-base">
            To further specialise in packaging, KeepMe established KeepMe Glass – a division dedicated to premium glass manufacturing for fragrance bottles, diffusers and candle jars. With a focus on quality, consistency and innovation, KeepMe Glass quickly became a trusted name in high-end packaging solutions.
          </p>
        </div>
      ),
    },
    {
      title: "2018",
      content: (
        <div>
          <h4 className="text-lg font-semibold text-brand-card dark:text-brand-card mb-2">Global Manufacturing Expansion</h4>
          <p className="text-gray-600 dark:text-neutral-300 text-sm md:text-base">
            KeepMe expanded its global footprint, establishing strategic manufacturing capabilities across the UK, Europe, China and India. This global presence enabled the business to offer scalable, cost-effective production while maintaining high quality and speed to market.
          </p>
        </div>
      ),
    },
    {
      title: "2020",
      content: (
        <div>
          <h4 className="text-lg font-semibold text-brand-card dark:text-brand-card mb-2">Commitment to Sustainability</h4>
          <p className="text-gray-600 dark:text-neutral-300 text-sm md:text-base">
            Sustainability became a core focus in 2020. KeepMe adopted environmentally responsible practices across its operations, including eco-friendly materials, reduced waste processes and more sustainable packaging options—helping clients meet their own green goals.
          </p>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <h4 className="text-lg font-semibold text-brand-card dark:text-brand-card mb-2">Launch of the Lifestyle Lookbook</h4>
          <p className="text-gray-600 dark:text-neutral-300 text-sm md:text-base">
            To inspire clients and showcase its full-service offering, KeepMe launched the Lifestyle Lookbook—a curated guide to its fragrance, skincare, wellness and packaging capabilities. This lookbook highlighted KeepMe’s creative direction, market insight, and bespoke product range.
          </p>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <h4 className="text-lg font-semibold text-brand-card dark:text-brand-card mb-2">Recognised as a Leading Private Label Partner</h4>
          <p className="text-gray-600 dark:text-neutral-300 text-sm md:text-base">
            KeepMe gained industry-wide recognition as a trusted private label manufacturer. With its unique blend of creative flair, technical expertise, and operational support, KeepMe offered clients a seamless route from concept to shelf.
          </p>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <h4 className="text-lg font-semibold text-brand-card dark:text-brand-card mb-2">Celebrating 20 Years of Innovation</h4>
          <p className="text-gray-600 dark:text-neutral-300 text-sm md:text-base">
            In 2024, KeepMe proudly celebrated two decades of excellence. From humble beginnings to becoming a globally recognised partner, the anniversary marked a milestone of growth, innovation and unwavering dedication to quality and client success.
          </p>
        </div>
      ),
    },
    {
      title: "Present", // Changed from 2025
      content: (
        <div>
          <h4 className="text-lg font-semibold text-brand-card dark:text-brand-card mb-2">KeepMe & KeepMe Glass: A Unified Force</h4>
          <p className="text-gray-600 dark:text-neutral-300 text-sm md:text-base">
            In 2025, KeepMe and KeepMe Glass brought their operations closer than ever before—uniting product development and packaging under one seamless offering. This reintegration created a powerful end-to-end partner for brands in the fragrance and lifestyle sector.
          </p>
          <p className="text-gray-600 dark:text-neutral-300 text-sm md:text-base mt-2">
            By combining bespoke product creation with premium packaging and global fulfilment, KeepMe now offers a single point of contact for brands seeking speed, consistency, and innovation. This strategic alignment enhances quality control, sustainability, and creative collaboration—ensuring that clients receive a truly connected, full-service experience from concept to delivery.
          </p>
        </div>
      ),
    },
  ];

  // Removed useState and handleTimelineClick
  return (
    <div>
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-brand-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
                About <span className="text-brand-card">KeepMe</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                At KeepMe, we blend artistry with precision to create exceptional fragrances that captivate the senses.
                We're dedicated to crafting perfumes that not only smell exquisite but also tell a unique story.
              </p>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-4">Our Mission</h3>
                <p className="text-gray-600">
                  To deliver flawless fragrances through expert craftsmanship, innovative techniques, and a deep
                  commitment to quality that exceeds our clients' expectations.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://cdn.sanity.io/images/tyzs5imn/production/00ead275773abba703c8272d4f0998e7a2292731-850x1085.webp"
                alt="KeepMe perfume bottles"
                className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-8 -left-8 bg-white rounded-xl p-6 shadow-lg">
                <div>
                  <p className="text-xl font-bold">Since 2004</p>
                  <p className="text-gray-600">Crafting Excellence</p>
                </div>
              </div>
              {/* New Stats Card: 5 Million Units */}
              <div className="absolute -bottom-8 -right-8 bg-white rounded-xl p-6 shadow-lg hidden md:block"> {/* Hide on small screens */}
                <div>
                  <p className="text-xl font-bold">5M+ Units</p>
                  <p className="text-gray-600">Produced Per Annum</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Focus Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-12 items-center">
             <div className="md:col-span-2">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
                Our <span className="text-brand-accent">Focus</span>
              </h2>
            </div>
            <div className="md:col-span-3 space-y-4">
              <p className="text-lg text-gray-600 leading-relaxed">
                Our focus is delivering high-quality ‘white label’ products and packaging solutions. We specialise in complex manufacturing and fulfilment projects for discerning customers.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Based in the UK, we are supported by regional offices in key global territories. Working directly with our factories, we can control and influence the manufacturing process, employees’ health and safety, and working conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-20 bg-brand-highlight/20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Our <span className="text-brand-accent">Process</span>
            </h2>
          </div>
          <ClickableFeatureSteps
            features={processFlowchartData}
            title=""
          />
        </div>
      </section>

      {/* Our Journey Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            {/* Updated Section Title */}
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Our <span className="text-brand-accent">Journey</span>
            </h2>
            <p className="text-lg text-gray-600">
              From foundation to a unified force in fragrance and lifestyle
            </p>
          </div>
          {/* Use the NEW Aceternity-style Timeline Component */}
          <Timeline data={timelineData} />
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-brand-highlight/20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Our <span className="text-brand-accent">Values</span>
            </h2>
            <p className="text-lg text-gray-600">
              The principles that guide our work and relationships
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Value 1: Passion */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow">

              <h3 className="text-xl font-bold mb-3">Passion</h3>
              <p className="text-gray-600">
                We are passionate perfectionists, truly motivated to create and deliver luxury products.
              </p>
            </div>

            {/* Value 2: Communication */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow">

              <h3 className="text-xl font-bold mb-3">Communication</h3>
              <p className="text-gray-600">
                Our confident and calm working environment translates to excellent customer communication and collaboration.
              </p>
            </div>

            {/* Value 3: Trust */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow">

              <h3 className="text-xl font-bold mb-3">Trust</h3>
              <p className="text-gray-600">
                Honesty and integrity are core values at KeepMe Lifestyle. Respect for colleagues, customers, and stakeholders is vital to establishing a healthy, productive workplace.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow">

              <h3 className="text-xl font-bold mb-3">Partnerships</h3>
              <p className="text-gray-600">
                We build lasting relationships based on trust, transparency, and mutual success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Clients Section (Using ClientLogos from Sanity) */}
      <ClientLogos
        useSanity={true}
        title={<h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">Our <span className="text-brand-accent">Clients</span></h2>}
        scrolling={true}
        backgroundColor="bg-white"
      />

      {/* Team Section (Using Team component from Sanity) */}
      <Team
        useSanity={true}
        title={<h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">Our <span className="text-brand-accent">Team</span></h2>}
        subtitle="Meet the experts behind our innovative solutions"
      />

      {/* Contact Section */}
      <section className="py-20 bg-brand-background">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Contact <span className="text-brand-accent">Us</span>
            </h2>
            <p className="text-lg text-gray-600">
              Get in touch to discuss your project requirements
            </p>
            <a href="/contact" className="inline-block mt-8 px-8 py-3 bg-brand-button text-white font-bold rounded-full hover:bg-brand-card transition-colors">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;