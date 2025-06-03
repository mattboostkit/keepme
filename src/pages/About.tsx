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
      let currentListItems: string[] = [];

      if (!lines[0].startsWith('- ')) {
        subHeadingText = lines[0].replace(':', '');
        currentListItems = lines.slice(1);
      } else {
        currentListItems = lines;
      }

      return (
        <div key={idx} className="mb-3 last:mb-0 text-sm">
          {subHeadingText && <h4 className="text-md font-normal text-brand-mauve mb-1">{subHeadingText}</h4>} {/* Using brand-mauve */}
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
          <h4 className="text-lg font-normal text-brand-rose dark:text-brand-rose mb-2">Where it all Began</h4>
          <p className="text-brand-mauve dark:text-neutral-300 text-base leading-relaxed">
            Kevin and Steve Anderson opened the doors to what would become a trusted name in Branded Merchandise. Operating from our London office with a vision to support brands and distributors, KeepMe Promotions was founded. Utilising a network of newly established suppliers, the foundation was simple but powerful: strong relationships, reliable service, and a deep understanding of how merchandise could elevate brand presence.
          </p>
        </div>
      ),
    },
    {
      title: "2005-2008",
      content: (
        <div>
          <h4 className="text-lg font-normal text-brand-rose dark:text-brand-rose mb-2">Integration and Expansion</h4>
          <p className="text-brand-mauve dark:text-neutral-300 text-base leading-relaxed">
            This period marked a defining time as KeepMe. We integrated our businesses with our Shenzhen Operation, and we’re proud to say: we still enjoy this relationship today. Here we laid the foundations for a robust, ethical supply chain, with audited factories and fully transparent practices.
          </p>
        </div>
      ),
    },
    {
      title: "2009–2010",
      content: (
        <div>
          <h4 className="text-lg font-normal text-brand-rose dark:text-brand-rose mb-2">Enhancing our Services</h4>
          <p className="text-brand-mauve dark:text-neutral-300 text-base leading-relaxed">
            KeepMe broaden our offering to include design, manufacturing and full service solutions. With a strong emphasis on creativity, technical excellence, and customer service, KeepMe built a solid foundation for future growth across a diverse range of industries. New team members supported our growing client demands in sales, logistics, and account management.
          </p>
        </div>
      ),
    },
    {
      title: "2011",
      content: (
        <div>
          <h4 className="text-lg font-normal text-brand-rose dark:text-brand-rose mb-2">Entering the Fragrance &amp; Lifestyle Market</h4>
          <p className="text-brand-mauve dark:text-neutral-300 text-base leading-relaxed">
            Recognising the opportunity to innovate in new sectors, KeepMe moved into the fragrance and lifestyle market. The team began offering bespoke solutions across fragrance, skincare, beauty, cosmetics and wellness, helping brands create standout product experiences.
          </p>
        </div>
      ),
    },
    {
      title: "2011-2018",
      content: (
        <div>
          <h4 className="text-lg font-normal text-brand-rose dark:text-brand-rose mb-2">Global Manufacturing Expansion</h4>
          <p className="text-brand-mauve dark:text-neutral-300 text-base leading-relaxed">
            KeepMe expanded its global footprint, establishing strategic manufacturing capabilities across the UK, Europe and China. This global presence enabled the business to offer scalable, cost-effective production while maintaining high quality and speed to market.
          </p>
        </div>
      ),
    },
    {
      title: "2020",
      content: (
        <div>
          <h4 className="text-lg font-normal text-brand-rose dark:text-brand-rose mb-2">Launch of the Lifestyle Lookbook</h4>
          <p className="text-brand-mauve dark:text-neutral-300 text-base leading-relaxed">
            To inspire clients and showcase its full-service offering, KeepMe launched the Lifestyle Lookbook—a curated guide to its fragrance, skincare, wellness and packaging capabilities. This lookbook highlighted KeepMe’s creative direction, market insight, and bespoke product range.
          </p>
        </div>
      ),
    },
    {
      title: "2021",
      content: (
        <div>
          <h4 className="text-lg font-normal text-brand-rose dark:text-brand-rose mb-2">Commitment to Sustainability</h4>
          <p className="text-brand-mauve dark:text-neutral-300 text-base leading-relaxed">
            Sustainability became a core focus. KeepMe Lifestyle adopted environmentally responsible practices across its operations, including eco-friendly materials, reduced waste processes and more sustainable packaging options—helping clients meet their own green goals.
          </p>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <h4 className="text-lg font-normal text-brand-rose dark:text-brand-rose mb-2">Launch of KeepMe Glass</h4>
          <p className="text-brand-mauve dark:text-neutral-300 text-base leading-relaxed">
            To further specialise in packaging, KeepMe established KeepMe Glass – a division dedicated to premium glass manufacturing for fragrance bottles, diffusers and candle jars. With a focus on quality, consistency and innovation, KeepMe Glass quickly became a trusted name in high-end packaging solutions.
          </p>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <h4 className="text-lg font-normal text-brand-rose dark:text-brand-rose mb-2">Celebrating 20 Years of Innovation</h4>
          <p className="text-brand-mauve dark:text-neutral-300 text-base leading-relaxed">
            In 2024, KeepMe proudly celebrated two decades of excellence. From humble beginnings to becoming a globally recognised partner, the anniversary marked a milestone of growth, innovation and unwavering dedication to quality and client success, offering clients a seamless route from concept to shelf.
          </p>
        </div>
      ),
    },
    {
      title: "Present",
      content: (
        <div>
          <h4 className="text-lg font-normal text-brand-rose dark:text-brand-rose mb-2">KeepMe Lifestyle &amp; KeepMe Glass: A Unified Force</h4>
          <p className="text-brand-mauve dark:text-neutral-300 text-base leading-relaxed">
            In 2025, KeepMe and KeepMe Glass brought their operations closer than ever before—uniting product development and packaging under one seamless offering. This reintegration created a powerful end-to-end partner for brands in the fragrance and lifestyle sector.
          </p>
          <p className="text-brand-mauve dark:text-neutral-300 text-base leading-relaxed mt-2">
            By combining bespoke product creation with premium packaging and global fulfilment, KeepMe now offers a single point of contact for brands seeking speed, consistency, and innovation. This strategic alignment enhances quality control, sustainability, and creative collaboration—ensuring that clients receive a truly connected, full-service experience from concept to delivery.
          </p>
          <ul className="list-disc pl-5 mt-2 text-brand-mauve dark:text-neutral-300 text-base leading-relaxed">
            <li>Established a reliable global supplier network, focusing on quality, integrity, and sustainability.</li>
            <li>Built internal processes to support seamless integration, improved lead times, and consistent product quality.</li>
          </ul>
        </div>
      ),
    },
  ];

  // Removed useState and handleTimelineClick
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
                  className={`w-full flex justify-between items-center p-4 md:p-5 text-left transition-colors duration-200 ${activeIndex === index ? 'bg-brand-mauve text-white' : 'bg-brand-peach hover:bg-brand-mauve text-brand-plum'}`}
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

      {/* Interactive Development Process Section - Enhanced Version */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-brand-peach to-brand-pink-light">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-plum mb-6">
              Our <span className="text-brand-rose">Development Process</span> - Interactive Experience
            </h2>
            <p className="text-lg text-brand-mauve max-w-2xl mx-auto">
              Experience our comprehensive development journey through an interactive timeline. Click on each step to explore the details.
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-rose via-brand-mauve to-brand-plum"></div>
            
            {processFlowchartData.map((step, index) => (
              <div key={index} className={`relative mb-8 ${index % 2 === 0 ? 'md:text-right md:pr-1/2' : 'md:text-left md:pl-1/2'}`}>
                {/* Timeline Dot */}
                <div className={`absolute w-6 h-6 bg-white border-4 border-brand-rose rounded-full z-10 ${index % 2 === 0 ? 'left-5 md:left-auto md:right-1/2 md:transform md:translate-x-3' : 'left-5 md:left-1/2 md:transform md:-translate-x-3'}`}></div>
                
                {/* Content Card */}
                <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                  <div className="group cursor-pointer" onClick={() => setActiveIndex(activeIndex === index ? -1 : index)}>
                    <div className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${activeIndex === index ? 'ring-4 ring-brand-rose ring-opacity-50 scale-105' : ''}`}>
                      {/* Card Header */}
                      <div className="p-6 border-b border-gray-100">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="text-xl font-bold text-brand-plum group-hover:text-brand-rose transition-colors duration-200">
                              {step.title}
                            </h3>
                            <div className="flex items-center mt-2">
                              <div className="w-8 h-1 bg-gradient-to-r from-brand-rose to-brand-mauve rounded-full"></div>
                              <span className="ml-2 text-sm text-gray-500">Step {index + 1} of {processFlowchartData.length}</span>
                            </div>
                          </div>
                          <div className={`w-10 h-10 rounded-full bg-gradient-to-r from-brand-rose to-brand-mauve flex items-center justify-center text-white font-bold transform transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : 'group-hover:rotate-45'}`}>
                            {activeIndex === index ? '−' : '+'}
                          </div>
                        </div>
                      </div>
                      
                      {/* Expandable Content */}
                      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeIndex === index ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                        <div className="p-6 bg-gradient-to-br from-white to-gray-50">
                          <div className="prose prose-sm max-w-none">
                            {renderProcessStepContent(step.content)}
                          </div>
                          
                          {/* Progress Indicator */}
                          <div className="mt-6 flex items-center">
                            <div className="flex-1 bg-gray-200 rounded-full h-2">
                              <div 
                                className="bg-gradient-to-r from-brand-rose to-brand-mauve h-2 rounded-full transition-all duration-1000"
                                style={{width: `${((index + 1) / processFlowchartData.length) * 100}%`}}
                              ></div>
                            </div>
                            <span className="ml-3 text-sm text-gray-600 font-medium">
                              {Math.round(((index + 1) / processFlowchartData.length) * 100)}% Complete
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Completion Badge */}
            <div className="relative text-center mt-12">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-brand-rose to-brand-mauve text-white font-bold rounded-full shadow-lg relative z-10">
                <div className="w-6 h-6 mr-3 flex items-center justify-center">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                Project Complete - Ready for Launch
              </div>
            </div>
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
              How KeepMe Lifestyle established itself as a key supplier in the fragrance and lifestyle sector
            </p>
          </div>
          {/* Use the NEW Aceternity-style Timeline Component */}
          <Timeline data={timelineData} />
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-brand-pink-light">
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