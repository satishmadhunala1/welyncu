import React, { useState, useEffect } from 'react';
import { StarIcon, CalendarIcon, UserIcon, ChevronLeftIcon, ArrowPathIcon } from './Icons';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const FeedbackPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [evaluationData, setEvaluationData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // In your FeedbackPage component
useEffect(() => {
  const fetchInterviewData = async () => {
    try {
      const response = await axios.get(`https://sw-ai-m50t.onrender.com/api/interviews/${id}`);
      const interview = response.data;
      
      // Use the actual feedback data, not a transformation
      setEvaluationData({
        overallImpression: interview.overallImpression || 0,
        maxScore: interview.maxScore || 100,
        date: new Date(interview.createdAt).toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'short', 
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        }),
        title: `${interview.role} Interview`,
        summary: interview.summary,
        sections: interview.sections || [],
        resources: interview.resources || [],
        overallFeedback: interview.overallFeedback,
        verdict: interview.verdict
      });
    } catch (err) {
      console.error('Error fetching interview data:', err);
      setError('Failed to load feedback. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  fetchInterviewData();
}, [id]);



  const getScoreColor = (score, maxScore) => {
    const percentage = (score / maxScore) * 100;
    if (percentage >= 70) return 'text-accent';
    if (percentage >= 40) return 'text-warning';
    return 'text-danger';
  };

  const getVerdictStatus = (score, maxScore) => {
    const percentage = (score / maxScore) * 100;
    if (percentage >= 70) return { text: 'Recommended', color: 'text-accent' };
    if (percentage >= 40) return { text: 'Consider', color: 'text-warning' };
    return { text: 'Not Recommended', color: 'text-danger' };
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading feedback...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 flex items-center justify-center">
        <div className="text-danger text-xl">{error}</div>
      </div>
    );
  }

  const verdict = getVerdictStatus(evaluationData.overallImpression, evaluationData.maxScore);

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Feedback on the Interview —
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-dark-200 mb-8">
            {evaluationData.title}
          </h2>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
            <div className="flex items-center gap-2 text-dark-300">
              <StarIcon className="w-5 h-5 text-warning" />
              <span className="text-lg">Overall Impression:</span>
              <span className={`text-2xl font-bold ${getScoreColor(evaluationData.overallImpression, evaluationData.maxScore)}`}>
                {evaluationData.overallImpression}/{evaluationData.maxScore}
              </span>
            </div>
            
            <div className="flex items-center gap-2 text-dark-300">
              <CalendarIcon className="w-5 h-5 text-primary" />
              <span className="text-lg">{evaluationData.date}</span>
            </div>

            <div className="flex items-center gap-2 text-dark-300">
              <UserIcon className="w-5 h-5 text-primary" />
              <span className="text-lg">{evaluationData.role || 'Technical Role'}</span>
            </div>
          </div>

          <p className="text-dark-300 max-w-3xl mx-auto leading-relaxed">
            {evaluationData.summary || 'Detailed feedback analysis based on your interview performance.'}
          </p>
        </div>

        {/* Evaluation Breakdown */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-8">Breakdown of Evaluation:</h3>
          
          <div className="space-y-8">
            {evaluationData.sections.map((section, index) => (
              <div key={index} className="bg-dark-800/50 backdrop-blur-sm border border-dark-700 rounded-xl p-6 hover:bg-dark-800/70 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-semibold text-white">
                    {index + 1}. {section.title}
                  </h4>
                  <span className={`text-xl font-bold ${getScoreColor(section.score, section.maxScore)}`}>
                    ({section.score}/{section.maxScore})
                  </span>
                </div>
                
                <ul className="space-y-3">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3 text-dark-200">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Resources Section */}
        {evaluationData.resources && evaluationData.resources.length > 0 && (
          <div className="bg-dark-800/50 backdrop-blur-sm border border-dark-700 rounded-xl p-8 mb-12">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Recommended Resources:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                {evaluationData.resources.map((resource, index) => (
                  <a 
                    key={index}
                    href={resource.url || '#'} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block p-4 bg-dark-700 hover:bg-dark-600 rounded-lg transition-colors duration-300"
                  >
                    <h4 className="text-white font-semibold">{resource.title || `Resource ${index + 1}`}</h4>
                    <p className="text-dark-300 text-sm mt-2">{resource.description || 'Click to learn more'}</p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Final Verdict */}
        <div className="bg-dark-800/50 backdrop-blur-sm border border-dark-700 rounded-xl p-8 mb-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Final Verdict:</h3>
            <div className={`text-4xl font-bold mb-6 ${verdict.color}`}>
              {verdict.text}
            </div>
            <p className="text-dark-300 max-w-2xl mx-auto leading-relaxed">
              {evaluationData.overallFeedback || 'Comprehensive evaluation based on your interview performance.'}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button 
            onClick={() => navigate('/history')}
            className="flex items-center justify-center gap-2 px-8 py-4 bg-dark-700 hover:bg-dark-600 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <ChevronLeftIcon className="w-5 h-5" />
            Back to dashboard
          </button>
          
          <button 
            onClick={() => navigate('/')}
            className="flex items-center justify-center gap-2 px-8 py-4 bg-green-700 hover:bg-green-600 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <ArrowPathIcon className="w-5 h-5" />
            Retake interview
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeedbackPage;