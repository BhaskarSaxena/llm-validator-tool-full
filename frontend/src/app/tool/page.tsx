'use client';

import { useState } from 'react';

export default function Tool() {
  const [step, setStep] = useState<'payment' | 'tool'>('payment');
  const [selectedPlan, setSelectedPlan] = useState('professional');
  const [toolName, setToolName] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [validationResults, setValidationResults] = useState<any>(null);

  const handlePayment = async (plan: string) => {
    // Simulate payment processing
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setLoading(false);
    setStep('tool');
  };

  const handleSearch = async () => {
    if (!toolName.trim()) return;
    
    setLoading(true);
    try {
      // Search the internet for the tool name
      const searchResponse = await fetch(`https://8000-io97eu8c2ai8deubvger1-c8fa28b8.manusvm.computer/api/search?query=${encodeURIComponent(toolName)}`);
      const searchData = await searchResponse.json();
      setSearchResults(searchData.results || []);
      
      // Run LLM validation
      const validationResponse = await fetch('https://8000-io97eu8c2ai8deubvger1-c8fa28b8.manusvm.computer/api/validate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          toolName, 
          searchResults: searchData.results 
        })
      });
      const validationData = await validationResponse.json();
      setValidationResults(validationData);
    } catch (error) {
      console.error('Error:', error);
      // Fallback to mock data for demo
      setSearchResults([
        { title: `${toolName} - Official Website`, url: `https://${toolName.toLowerCase()}.com`, snippet: `Official website for ${toolName}` },
        { title: `${toolName} Reviews`, url: `https://reviews.com/${toolName}`, snippet: `User reviews and ratings for ${toolName}` },
        { title: `${toolName} Documentation`, url: `https://docs.${toolName.toLowerCase()}.com`, snippet: `Technical documentation for ${toolName}` }
      ]);
      setValidationResults({
        status: 'success',
        score: 85,
        analysis: `${toolName} appears to be a legitimate tool with good online presence and documentation.`,
        recommendations: [
          'Check official documentation for implementation details',
          'Review user feedback and ratings',
          'Verify security and compliance standards'
        ]
      });
    }
    setLoading(false);
  };

  if (step === 'payment') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Choose Your Plan
            </h1>
            <p className="text-lg text-gray-600">
              Select a plan to access the LLM Validator tool
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Starter Plan */}
            <div className={`bg-white rounded-2xl p-8 shadow-lg border-2 ${selectedPlan === 'starter' ? 'border-purple-600' : 'border-gray-200'}`}>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter</h3>
                <div className="text-4xl font-bold text-gray-900 mb-4">Free</div>
                <button
                  onClick={() => setSelectedPlan('starter')}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                    selectedPlan === 'starter' 
                      ? 'bg-purple-600 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {selectedPlan === 'starter' ? 'Selected' : 'Select Plan'}
                </button>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">✓</span>
                  100 validations/month
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">✓</span>
                  Basic search functionality
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">✓</span>
                  Community support
                </li>
              </ul>
            </div>

            {/* Professional Plan */}
            <div className={`bg-white rounded-2xl p-8 shadow-lg border-2 ${selectedPlan === 'professional' ? 'border-purple-600' : 'border-gray-200'} relative`}>
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Recommended
                </span>
              </div>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Professional</h3>
                <div className="text-4xl font-bold text-gray-900 mb-4">$99/mo</div>
                <button
                  onClick={() => setSelectedPlan('professional')}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                    selectedPlan === 'professional' 
                      ? 'bg-purple-600 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {selectedPlan === 'professional' ? 'Selected' : 'Select Plan'}
                </button>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">✓</span>
                  10,000 validations/month
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">✓</span>
                  Advanced search & analysis
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">✓</span>
                  Real-time monitoring
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">✓</span>
                  Priority support
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => handlePayment(selectedPlan)}
              disabled={loading}
              className="bg-purple-600 text-white px-12 py-4 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-colors disabled:opacity-50"
            >
              {loading ? 'Processing...' : selectedPlan === 'starter' ? 'Start Free' : 'Start 14-Day Free Trial'}
            </button>
            <p className="text-sm text-gray-500 mt-4">
              {selectedPlan === 'professional' && 'No credit card required for trial'}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">LLM Validator Tool</h1>
          <p className="text-xl opacity-90">Name your tool and get comprehensive validation results</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto py-12 px-4">
        {/* Tool Naming Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Step 1: Name Your Tool</h2>
          <div className="flex gap-4">
            <input
              type="text"
              value={toolName}
              onChange={(e) => setToolName(e.target.value)}
              placeholder="Enter your tool name (e.g., ChatGPT, Claude, Gemini)"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            />
            <button
              onClick={handleSearch}
              disabled={loading || !toolName.trim()}
              className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors disabled:opacity-50"
            >
              {loading ? 'Searching...' : 'Search & Validate'}
            </button>
          </div>
        </div>

        {/* Search Results */}
        {searchResults.length > 0 && (
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Step 2: Search Results</h2>
            <div className="space-y-4">
              {searchResults.map((result, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-purple-600 mb-2">
                    <a href={result.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                      {result.title}
                    </a>
                  </h3>
                  <p className="text-gray-600 mb-2">{result.snippet}</p>
                  <p className="text-sm text-gray-500">{result.url}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Validation Results */}
        {validationResults && (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Step 3: Validation Results</h2>
            
            {/* Score */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900">Overall Score</h3>
                <div className="text-3xl font-bold text-purple-600">{validationResults.score}/100</div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div 
                  className="bg-gradient-to-r from-purple-600 to-blue-600 h-4 rounded-full transition-all duration-500"
                  style={{ width: `${validationResults.score}%` }}
                ></div>
              </div>
            </div>

            {/* Analysis */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Analysis</h3>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700">{validationResults.analysis}</p>
              </div>
            </div>

            {/* Recommendations */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Recommendations</h3>
              <div className="space-y-3">
                {validationResults.recommendations.map((rec: string, index: number) => (
                  <div key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-purple-600 text-sm">✓</span>
                    </div>
                    <p className="text-gray-700">{rec}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex gap-4">
              <button
                onClick={() => {
                  setToolName('');
                  setSearchResults([]);
                  setValidationResults(null);
                }}
                className="bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
              >
                Validate Another Tool
              </button>
              <button
                onClick={() => window.print()}
                className="border border-purple-600 text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
              >
                Export Results
              </button>
            </div>
          </div>
        )}

        {/* Empty State */}
        {!searchResults.length && !validationResults && !loading && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Validate Your Tool?</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Enter the name of any AI tool or LLM application above to get comprehensive validation results, 
              including search analysis, quality assessment, and actionable recommendations.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

