import { useState } from 'react';

function DevelopmentProcess() {
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
          {subHeadingText && <h4 className="text-md font-normal text-brand-mauve mb-1">{subHeadingText}</h4>}
          {currentListItems.length > 0 && (
            <ul className="list-none pl-0 text-gray-700 space-y-1">
              {currentListItems.map((item, itemIdx) => (
                <li key={itemIdx} className="flex">
                  <span className="text-brand-mauve mr-2">•</span>
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

  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-brand-peach to-brand-pink-light min-h-screen">
      <div className="container mx-auto px-6">
        <div className="mb-8">
          <a href="/tools" className="inline-flex items-center px-5 py-2 bg-brand-mauve text-white rounded-full hover:bg-brand-rose transition-colors">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            Back to Tools
          </a>
        </div>
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-plum mb-6">
            <span className="text-brand-rose">Development Process</span>
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
        </div>
      </div>
    </section>
  );
}

export default DevelopmentProcess;
