import React, { useState } from 'react';

const TechDemo = () => {
    const [text, setText] = useState('Type some text here to analyze using Java...');
    const [result, setResult] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const runJavaAnalysis = async () => {
        setLoading(true);
        setError('');
        setResult(null);

        try {
            // Adjust port if backend is on a different port, usually 5000 or 3000
            const response = await fetch('http://localhost:5000/api/analyze-text/java', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ text })
            });

            const data = await response.json();
            
            if (response.ok) {
                setResult(data);
            } else {
                setError(data.message || 'Failed to analyze text');
            }
        } catch (err) {
            setError('Backend server might be down or not responding.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md border border-orange-200 mt-10">
            <h1 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-orange-500 pb-2">MasterG Core Technologies Demo</h1>
            
            <div className="mb-8 p-4 bg-orange-50 rounded-lg">
                <h2 className="text-xl font-semibold text-orange-800 mb-2">1. Java Integration</h2>
                <p className="text-gray-600 mb-4">
                    The text below will be sent to the Node.js backend, which invokes a compiled Java program (<code className="bg-gray-100 px-1 py-0.5 rounded">TextAnalyzer.class</code>) to perform calculation.
                </p>
                
                <textarea 
                    value={text} 
                    onChange={(e) => setText(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded mb-4 h-32 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                />
                
                <button 
                    onClick={runJavaAnalysis}
                    disabled={loading}
                    className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded transition-colors disabled:opacity-50"
                >
                    {loading ? 'Analyzing via Java...' : 'Run Java Analysis'}
                </button>

                {error && (
                    <div className="mt-4 p-3 bg-red-100 text-red-800 rounded border border-red-200">
                        <strong>Error:</strong> {error}
                        <br/>
                        <small className="text-red-600 mt-1 block">(Make sure Java is installed and javac has compiled the file in java-tools)</small>
                    </div>
                )}

                {result && (
                    <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded">
                        <h3 className="font-bold text-green-800 mb-2">Java Result:</h3>
                        <ul className="list-disc list-inside text-green-700">
                            <li>Character Count: <strong>{result.charCount}</strong></li>
                            <li>Word Count: <strong>{result.wordCount}</strong></li>
                            <li>Sentence Count: <strong>{result.sentenceCount}</strong></li>
                        </ul>
                    </div>
                )}
            </div>

            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">2. HTML, CSS, and PHP Module</h2>
                <p className="text-gray-600 mb-4">
                    We maintain a standalone PHP fallback system that uses raw HTML for structure and vanilla CSS for styling (located in <code>php-backend/contact.php</code>).
                </p>
                <div className="bg-white p-4 rounded border border-gray-300 text-center">
                    <p className="mb-4 text-gray-700">Since PHP requires a server, we've mirrored the HTML/CSS portion directly into this frontend demo so you can view it seamlessly:</p>
                    <a 
                        href="/contact.html" 
                        target="_blank" 
                        rel="noreferrer"
                        className="inline-block border-2 border-orange-500 text-orange-600 hover:bg-orange-50 font-bold py-2 px-6 rounded transition-colors"
                    >
                        Open UI Demo
                    </a>
                </div>
            </div>
        </div>
    );
};

export default TechDemo;
