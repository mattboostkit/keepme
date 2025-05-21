import { useState } from 'react'; // Added for managing active step
// React import removed - not needed in modern React
// All icons removed as requested
import { Timeline } from '../components/ui/Timeline'; // Import the NEW component
// ClickableFeatureSteps import removed as it's no longer used
import ClientLogos from '../components/ClientLogos'; // Import the ClientLogos component
import Team from '../components/Team'; // Import the Team component

function About() {
  const [activeIndex, setActiveIndex] = useState(0); // First item open by default

  // Helper function to render content
  const renderProcessStepContent = (content: string) => {
    const sections = content.split('\n\n'); // Split by double newline for distinct parts
    return sections.map((section, idx) => {
      const lines = section.split('\n').map(line => line.trim()).filter(line => line); // Trim and filter empty lines
      if (lines.length === 0) return null;

      let subHeadingText = "";
      let currentListItems = [];

      if (!lines[0].startsWith('- ')) {
        subHeadingText = lines[0].replace(':', '');
        currentListItems = lines.slice(1);
      } else {
        currentListItems = lines;
      }

      return (
        <div key={idx} className="mb-3 last:mb-0 text-sm">
          {subHeadingText && <h4 className="text-md font-semibold text-brand-mauve mb-1">{subHeadingText}</h4>} {/* Using brand-mauve */}
          {currentListItems.length > 0 && (
            <ul className="list-none pl-0 text-gray-700 space-y-1">
              {currentListItems.map((item, itemIdx) => (
                <li key={itemIdx} className="flex">
                  <span className="text-brand-mauve mr-2">•</span> {/* Using brand-mauve */}
                  <span>{item.startsWith('- ') ? item.substring(2).trim() : item.trim()}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      );
    });
  };

  // Process flowchart data - Updated for accordion style
  const processFlowchartData = [
    {
      title: '1. Project Brief',
      content: `Client Brief:\n- Fragrance type & market positioning (luxury, masstige, mass)\n- Target audience\n- Volume and quantities\n- Launch date/timeline\n\nComponent Design:\n- Bottle/Vessel\n- Pump\n- Collar\n- Cap/Closure\n- Preferred Decoration`
    },
    {
      title: '2. Concept & Feasibility',
      content: `Design Inspiration & Moodboard: Develop initial ideas and aesthetic direction.\nStock vs. Custom Mould:\n- Stock mould options that fit the design vision, MOQ, and timeline.\n- Evaluate the need for a custom mould\nCompatibility between components\nTechnical constraints\nManufacturing capabilities\nBudget implications`
    },
    {
      title: '3. Component Selection & Mould Decision',
      content: `Stock Mould Route:\n- Select components from existing mould library.\n- Share 3D visuals, material options, and finish samples.\n- Move to prototyping (if needed).\n\nCustom Mould Route:\n- Design custom CADs based on approved concept.\n- Review in 3D rendering or printed prototype.\n- Engineering team finalizes the design for tooling.\n- Obtain tooling cost estimate and timeline.`
    },
    {
      title: '4. Sampling',
      content: `Stock Mould:\n- Provide clear stock samples.\n- Produce samples in selected materials/finishes.\n- Decoration applied.\n\nCustom Mould:\n- Create technical drawing for approval\n- Provide CNC sample (3D print, resin sample)\n- Review and approval before mould is opened\n\nReview:\n- Aesthetics\n- Functionality (e.g. pump compatibility, leak test)\n- Fit & feel\n- Branding/decoration`
    },
    {
      title: '5. Tooling (If Custom Mould)',
      content: `Tool Manufacturing:\n- Tooling lead time (typically 4 to 6 weeks)\n- Sample for review and revision.\n- Final approval for production.`
    },
    {
      title: '6. Decoration & Branding Development',
      content: `Finalise decoration processes:\n- Silk-screen printing\n- Hot stamping\n- Custom pantone matching\n- Foiling\n- Etching or engraving.\n- Debossing or embossing.\n- Electroplating`
    },
    {
      title: '7. Testing & Compliance',
      content: `Component testing:\n- Compatibility with fragrance formula`
    },
    {
      title: '8. Final Approval & Production',
      content: `Final sign-off from client.\nProduction planning based on MOQ and lead time.\nSchedule and execute mass production:\n- Component-only delivery\n- Or full assembly with fragrance filling (if applicable)`
    },
    {
      title: '9. Quality Control & Delivery',
      content: `Production QC.\nVisual inspection, fit tests, functional testing.\nLogistics & delivery planning:\n- Bulk delivery\n- Filling & Assembly`
    },
    {
      title: '10. Post-Launch Support',
      content: `Reorder management (stock or forecast-based)\nFuture product development`
    }
  ];

  // Adapt timeline data for the new component structure
  // Updated timeline data with new content
  const timelineData = [
    {
      title: "2004",
      content: (
        <div>
          <h4 className="text-lg font-semibold text-brand-rose dark:text-brand-rose mb-2">Foundation of KeepMe</h4>
          <p className="text-brand-mauve dark:text-neutral-300 text-base leading-relaxed">
            KeepMe was established with a vision to provide high-quality products and creative solutions, backed by exceptional logistical support. From the very beginning, the business focused on delivering end-to-end services that exceeded customer expectations.
          </p>
        </div>
      ),
    },
    {
      title: "2005–2010",
      content: (
        <div>
          <h4 className="text-lg font-semibold text-brand-rose dark:text-brand-rose mb-2">Expanding Services</h4>
          <p className="text-brand-mauve dark:text-neutral-300 text-base leading-relaxed">
            During this period, KeepMe broadened its offering to include design, manufacturing and full delivery solutions. With a strong emphasis on creativity, technical excellence, and customer service, KeepMe built a solid foundation for future growth across a diverse range of industries.
          </p>
        </div>
      ),
    },
    {
      title: "2011",
      content: (
        <div>
          <h4 className="text-lg font-semibold text-brand-rose dark:text-brand-rose mb-2">Entering the Fragrance & Lifestyle Market</h4>
          <p className="text-brand-mauve dark:text-neutral-300 text-base leading-relaxed">
            Recognising the opportunity to innovate in new sectors, KeepMe moved into the fragrance and lifestyle market. The team began offering bespoke solutions across fragrance, skincare, beauty, cosmetics and wellness, helping brands create standout product experiences.
          </p>
        </div>
      ),
    },
    {
      title: "2015",
      content: (
        <div>
          <h4 className="text-lg font-semibold text-brand-rose dark:text-brand-rose mb-2">Launch of KeepMe Glass</h4>
          <p className="text-brand-mauve dark:text-neutral-300 text-base leading-relaxed">
            To further specialise in packaging, KeepMe established KeepMe Glass – a division dedicated to premium glass manufacturing for fragrance bottles, diffusers and candle jars. With a focus on quality, consistency and innovation, KeepMe Glass quickly became a trusted name in high-end packaging solutions.
          </p>
        </div>
      ),
    },
    {
      title: "2018",
      content: (
        <div>
          <h4 className="text-lg font-semibold text-brand-rose dark:text-brand-rose mb-2">Global Manufacturing Expansion</h4>
          <p className="text-brand-mauve dark:text-neutral-300 text-base leading-relaxed">
            KeepMe expanded its global footprint, establishing strategic manufacturing capabilities across the UK, Europe, China and India. This global presence enabled the business to offer scalable, cost-effective production while maintaining high quality and speed to market.
          </p>
        </div>
      ),
    },
    {
      title: "2020",
      content: (
        <div>
          <h4 className="text-lg font-semibold text-brand-rose dark:text-brand-rose mb-2">Commitment to Sustainability</h4>
          <p className="text-brand-mauve dark:text-neutral-300 text-base leading-relaxed">
            Sustainability became a core focus in 2020. KeepMe adopted environmentally responsible practices across its operations, including eco-friendly materials, reduced waste processes and more sustainable packaging options—helping clients meet their own green goals.
          </p>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <h4 className="text-lg font-semibold text-brand-rose dark:text-brand-rose mb-2">Launch of the Lifestyle Lookbook</h4>
          <p className="text-brand-mauve dark:text-neutral-300 text-base leading-relaxed">
            To inspire clients and showcase its full-service offering, KeepMe launched the Lifestyle Lookbook—a curated guide to its fragrance, skincare, wellness and packaging capabilities. This lookbook highlighted KeepMe’s creative direction, market insight, and bespoke product range.
          </p>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <h4 className="text-lg font-semibold text-brand-rose dark:text-brand-rose mb-2">Recognised as a Leading Private Label Partner</h4>
          <p className="text-brand-mauve dark:text-neutral-300 text-base leading-relaxed">
            KeepMe gained industry-wide recognition as a trusted private label manufacturer. With its unique blend of creative flair, technical expertise, and operational support, KeepMe offered clients a seamless route from concept to shelf.
          </p>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <h4 className="text-lg font-semibold text-brand-rose dark:text-brand-rose mb-2">Celebrating 20 Years of Innovation</h4>
          <p className="text-brand-mauve dark:text-neutral-300 text-base leading-relaxed">
            In 2024, KeepMe proudly celebrated two decades of excellence. From humble beginnings to becoming a globally recognised partner, the anniversary marked a milestone of growth, innovation and unwavering dedication to quality and client success.
          </p>
        </div>
      ),
    },
    {
      title: "Present", // Changed from 2025
      content: (
        <div>
          <h4 className="text-lg font-semibold text-brand-rose dark:text-brand-rose mb-2">KeepMe & KeepMe Glass: A Unified Force</h4>
          <p className="text-brand-mauve dark:text-neutral-300 text-base leading-relaxed">
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
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-plum mb-6">
                About <span className="text-brand-rose">KeepMe</span>
              </h1>
              <p className="text-lg text-brand-mauve leading-relaxed mb-12">
                At KeepMe, we specialise in the creation, manufacture, and delivery of premium fragrance, home, and lifestyle products. Proudly based in the UK, we are a family-run business with over 20 years of industry experience. We work closely with brands, license holders, distributors, and retailers to bring their visions to life — from initial concept through to final product delivery. Whether you need individual components or a retail-ready product, KeepMe is the trusted partner to support your project at every stage.
              </p>
              <p className="text-lg text-brand-mauve leading-relaxed mb-8">
                Our dedicated team combines creativity, technical expertise, and quality. We’re all about turning big ideas into beautiful, high-quality products — and making the whole process feel easy and collaborative.
              </p>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-plum mb-6">Our <span className="text-brand-rose">Ethos</span> Is Simple</h2>
                <p className="text-lg text-brand-mauve leading-relaxed">
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
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-plum mb-6">Our <span className="text-brand-rose">Focus</span></h2>
            </div>
            <div className="md:col-span-3 space-y-4">
              <p className="text-lg text-brand-mauve leading-relaxed">
                Delivering high-quality product and packaging solutions. We specialise in complex manufacturing projects for our customers.
              </p>
              <p className="text-lg text-brand-mauve leading-relaxed">
                Based in the UK, we are supported by regional offices in key global territories. Working directly with our factories, we can control and influence the manufacturing process, employees’ health and safety, and working conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Development Process Section - New Layout & Colors */}
      <section className="py-12 md:py-20 bg-white"> {/* Main section background to white */}
        <div className="container mx-auto px-6">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-plum mb-6">Our <span className="text-brand-rose">Development Process</span></h2>
          </div>

          <div className="space-y-3 max-w-3xl mx-auto">
            {processFlowchartData.map((step, index) => (
              <div key={index} className="rounded-lg shadow-md overflow-hidden bg-white">
                <button
                  onClick={() => setActiveIndex(activeIndex === index ? -1 : index)}
                  className={`w-full flex justify-between items-center p-4 md:p-5 text-left transition-colors duration-200 ${activeIndex === index ? 'bg-brand-mauve text-white' : 'bg-brand-peach hover:bg-brand-pink-light text-brand-plum'}`}
                >
                  <h3 className={`text-lg md:text-xl font-semibold ${activeIndex === index ? 'text-white' : 'text-brand-plum'}`}>{step.title}</h3>
                  <span className={`transform transition-transform duration-300 text-2xl ${activeIndex === index ? 'rotate-180' : ''}`}>
                    {activeIndex === index ? '▴' : '▾'}
                  </span>
                </button>
                {activeIndex === index && (
                  <div className="p-4 md:p-6 border-t border-brand-peach bg-white"> {/* Content area bg-white, border brand-peach */}
                    {renderProcessStepContent(step.content)}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            {/* Updated Section Title */}
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-plum mb-6">Our <span className="text-brand-rose">Journey</span></h2>
            <p className="text-lg text-brand-mauve leading-relaxed">
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
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-plum mb-6">Our <span className="text-brand-rose">Values</span></h2>
            <p className="text-lg text-brand-mauve leading-relaxed">
              The principles that guide our work and relationships
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Value 1: Passion */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow">

              <h3 className="text-xl font-bold mb-3">Passion</h3>
              <p className="text-lg text-brand-mauve leading-relaxed">
                We are passionate perfectionists, truly motivated to create and deliver luxury products.
              </p>
            </div>

            {/* Value 2: Communication */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow">

              <h3 className="text-xl font-bold mb-3">Communication</h3>
              <p className="text-lg text-brand-mauve leading-relaxed">
                Our confident and calm working environment translates to excellent customer communication and collaboration.
              </p>
            </div>

            {/* Value 3: Trust */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow">

              <h3 className="text-xl font-bold mb-3">Trust</h3>
              <p className="text-lg text-brand-mauve leading-relaxed">
                Honesty and integrity are core values at KeepMe Lifestyle. Respect for colleagues, customers, and stakeholders is vital to establishing a healthy, productive workplace.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow">

              <h3 className="text-xl font-bold mb-3">Partnerships</h3>
              <p className="text-lg text-brand-mauve leading-relaxed">
                We build lasting relationships based on trust, transparency, and mutual success.
              </p>
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

      {/* Team Section (Using Team component from Sanity) */}
      <Team
        useSanity={true}
        title={<h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-plum mb-6 text-center">Meet the <span className="text-brand-rose">Team</span></h2>}
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
            <a href="/contact" className="inline-block mt-8 px-8 py-3 bg-brand-mauve text-white font-bold rounded-full hover:bg-brand-rose transition-colors">
              Contact Us
            </a>
            <p className="text-md text-gray-500 mt-4">Our interactive contact form will be available here soon. In the meantime, please use the button above to navigate to our full contact page.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;