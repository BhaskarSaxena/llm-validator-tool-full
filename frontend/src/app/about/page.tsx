'use client';

import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            About LLM Validator
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're building the future of AI testing and validation, helping developers create more reliable 
            and trustworthy LLM applications.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                Large Language Models are transforming how we build applications, but testing and validating 
                these systems remains a significant challenge. Traditional testing approaches fall short when 
                dealing with the subjective and complex nature of AI-generated content.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                LLM Validator was created to bridge this gap, providing developers with the tools they need to 
                systematically evaluate, monitor, and improve their LLM applications.
              </p>
              <p className="text-lg text-gray-600">
                Our platform combines cutting-edge AI research with practical engineering solutions to make 
                LLM testing accessible, reliable, and scalable.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-blue-100 p-8 rounded-2xl">
              <div className="text-center">
                <div className="text-6xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Quality First</h3>
                <p className="text-gray-600">
                  We believe that reliable AI systems are built on rigorous testing and continuous validation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
            What Makes Us Different
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Comprehensive Testing</h3>
              <p className="text-gray-600">
                Our multi-agent system evaluates your LLM applications across multiple dimensions including 
                accuracy, bias, toxicity, and compliance.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Real-time Monitoring</h3>
              <p className="text-gray-600">
                Monitor your LLM applications in production with real-time alerts and detailed analytics 
                to catch issues before they impact users.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Easy Integration</h3>
              <p className="text-gray-600">
                Simple APIs and SDKs make it easy to integrate LLM Validator into your existing 
                development workflow and CI/CD pipeline.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Built on Proven Technology</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              LLM Validator is built on top of industry-leading open source testing frameworks, 
              trusted by thousands of companies worldwide.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Open Source Foundation</h3>
              <p className="text-lg text-gray-600 mb-6">
                Our core technology is based on the leading ML open source testing package, used by 1000+ 
                companies and integrated into 300+ open source projects.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Battle-tested in production environments</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Continuously updated with latest research</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Backed by active community support</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-600 to-blue-600 p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-4">Multi-Agent Architecture</h3>
              <p className="mb-6">
                Our advanced multi-agent system uses specialized AI agents for different aspects of validation:
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span>Search Agent - Information retrieval</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span>Validation Agent - Quality assessment</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span>Monitor Agent - Performance tracking</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span>Execution Agent - Workflow orchestration</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Team</h2>
          <p className="text-lg text-gray-600 mb-12">
            We're a team of AI researchers, software engineers, and product experts passionate about 
            making AI systems more reliable and trustworthy.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-20 h-20 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">👨‍💻</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">AI Research Team</h3>
              <p className="text-gray-600">
                PhD researchers specializing in NLP, machine learning, and AI safety.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-20 h-20 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">⚙️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Engineering Team</h3>
              <p className="text-gray-600">
                Experienced software engineers building scalable and reliable systems.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-20 h-20 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Product Team</h3>
              <p className="text-gray-600">
                Product experts focused on creating intuitive and powerful user experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Join the growing community of developers building better AI applications with LLM Validator.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/tool" className="bg-white text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
              Try Our Tool
            </Link>
            <Link href="/contact" className="border border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

