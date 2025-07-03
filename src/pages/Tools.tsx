import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FlaskConical, Settings, Calculator } from 'lucide-react';
import { fetchSanityData } from '../lib/sanityUtils';
import { urlFor } from '../lib/sanity';

// Types
interface SanityImageReference {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  alt?: string;
}

interface ToolsPageData {
  heroTitle: string;
  heroDescription: string;
  heroImage?: SanityImageReference;
  whyToolsTitle: string;
  whyToolsDescription: string;
  toolSuiteTitle: string;
  seoTitle?: string;
  seoDescription?: string;
}

interface Tool {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  description: string;
  icon: string;
  linkText: string;
  displayOrder: number;
  isActive: boolean;
}

// Icon mapping
const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  'FlaskConical': FlaskConical,
  'Settings': Settings,
};

function Tools() { // Renamed from ToolsLanding
  const [pageData, setPageData] = useState<ToolsPageData | null>(null);
  const [tools, setTools] = useState<Tool[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch Tools Page data
        const pageResult = await fetchSanityData<ToolsPageData>(
          '*[_type == "toolsPage"][0]'
        );
        setPageData(pageResult);
        
        // Fetch Tools
        const toolsResult = await fetchSanityData<Tool[]>(
          '*[_type == "tool" && isActive == true] | order(displayOrder asc)'
        );
        setTools(toolsResult);
        
      } catch (error) {
        console.error('Error fetching tools page data:', error);
      } finally {
        // Loading complete
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-brand-peach">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-sans font-semibold text-brand-plum mb-6">
                {pageData?.heroTitle?.split(' ').slice(0, -1).join(' ') || 'Our'} <span className="text-brand-rose">{pageData?.heroTitle?.split(' ').slice(-1).join(' ') || 'Tools'}</span>
              </h1>
              <p className="text-lg text-brand-mauve leading-relaxed mb-12">
                {pageData?.heroDescription || 'Discover a suite of digital tools designed to streamline your fragrance and packaging journey. From calculators to interactive guides, each tool is crafted to empower you at every stage of the process.'}
              </p>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-plum mb-6">
                  {pageData?.whyToolsTitle?.split(' ').slice(0, -1).join(' ') || 'Why'} <span className="text-brand-rose">{pageData?.whyToolsTitle?.split(' ').slice(-1).join(' ') || 'Tools?'}</span>
                </h2>
                <p className="text-lg text-brand-mauve leading-relaxed">
                  {pageData?.whyToolsDescription || 'We believe in making complex processes simple and accessible. Our tools are designed to give you clarity, confidence, and control—whether you\'re formulating a fragrance, designing packaging, or planning logistics.'}
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src={pageData?.heroImage?.asset ? urlFor(pageData.heroImage).width(800).height(500).fit('crop').format('webp').url() : "https://cdn.sanity.io/images/tyzs5imn/production/4aeefbbef8dae3dd080f930c8af649be6f7dac45-1600x1066.webp"}
                alt={pageData?.heroImage?.alt || "Tools and resources"}
                className="rounded-2xl shadow-xl w-full h-[300px] md:h-[500px] object-cover"
              />
              {/* Optional: Overlay card or badge can go here */}
            </div>
          </div>
        </div>
      </section>

      {/* Tool Links Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-plum mb-4">
              {pageData?.toolSuiteTitle?.split('Tools').length > 1 ? (
                <>
                  {pageData.toolSuiteTitle.split('Tools')[0]}<span className="text-brand-rose">Tools{pageData.toolSuiteTitle.split('Tools')[1]}</span>
                </>
              ) : (
                <>A Growing Suite of <span className="text-brand-rose">Tools for Every Stage</span></>
              )}
            </h2>
          </div>
          {/* Tool Cards */}
          <div className="flex flex-col md:flex-row justify-center gap-8 mb-16">
            {tools.length > 0 ? (
              tools.map((tool) => {
                const IconComponent = iconMap[tool.icon] || FlaskConical;
                return (
                  <div key={tool._id} className="max-w-md w-full">
                    <Link to={`/tools/${tool.slug.current}`} className="block bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow group">
                      <div className="bg-brand-pink-light p-4 rounded-xl inline-block mb-6 group-hover:bg-brand-mauve transition-colors">
                        <IconComponent className="h-8 w-8 text-brand-rose group-hover:text-brand-plum transition-colors" />
                      </div>
                      <h3 className="text-xl font-semibold text-brand-plum mb-3">{tool.title}</h3>
                      <p className="text-base text-brand-mauve leading-relaxed mb-4">
                        {tool.description}
                      </p>
                      <span className="text-brand-rose font-medium flex items-center">
                        {tool.linkText}
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                      </span>
                    </Link>
                  </div>
                );
              })
            ) : (
              // Fallback content
              <>
                {/* Fragrance Calculator Card */}
                <div className="max-w-md w-full">
                  <Link to="/tools/fragrance-calculator" className="block bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow group">
                    <div className="bg-brand-pink-light p-4 rounded-xl inline-block mb-6 group-hover:bg-brand-mauve transition-colors">
                      <FlaskConical className="h-8 w-8 text-brand-rose group-hover:text-brand-plum transition-colors" />
                    </div>
                    <h3 className="text-xl font-semibold text-brand-plum mb-3">Fragrance Calculator</h3>
                    <p className="text-base text-brand-mauve leading-relaxed mb-4">
                      Experiment with fragrance notes and concentrations to refine your formulations.
                    </p>
                    <span className="text-brand-rose font-medium flex items-center">
                      Go to Calculator
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </span>
                  </Link>
                </div>
                {/* Inclusion Rates Calculator Card */}
                <div className="max-w-md w-full">
                  <Link to="/tools/inclusion-rates" className="block bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow group">
                    <div className="bg-brand-pink-light p-4 rounded-xl inline-block mb-6 group-hover:bg-brand-mauve transition-colors">
                      <Calculator className="h-8 w-8 text-brand-rose group-hover:text-brand-plum transition-colors" />
                    </div>
                    <h3 className="text-xl font-semibold text-brand-plum mb-3">Inclusion Rates Guide</h3>
                    <p className="text-base text-brand-mauve leading-relaxed mb-4">
                      Calculate optimal fragrance oil amounts for different product types using industry standards.
                    </p>
                    <span className="text-brand-rose font-medium flex items-center">
                      Calculate Rates
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </span>
                  </Link>
                </div>
                {/* Our Development Process Card */}
                <div className="max-w-md w-full">
                  <Link to="/tools/development-process" className="block bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow group">
                    <div className="bg-brand-pink-light p-4 rounded-xl inline-block mb-6 group-hover:bg-brand-mauve transition-colors">
                      {/* Settings Lucide icon for process */}
                      <Settings className="h-8 w-8 text-brand-rose group-hover:text-brand-plum transition-colors" />
                    </div>
                    <h3 className="text-xl font-semibold text-brand-plum mb-3">Development Process</h3>
                    <p className="text-base text-brand-mauve leading-relaxed mb-4">
                      See how we bring your ideas to life, from concept to completion.
                    </p>
                    <span className="text-brand-rose font-medium flex items-center">
                      Explore Process
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </span>
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Tools; // Renamed from ToolsLanding