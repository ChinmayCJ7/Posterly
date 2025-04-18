import React, { useState } from 'react';
import axios from 'axios';

const PosterGenerator = () => {
  const [image, setImage] = useState(null);
  const [prompt, setPrompt] = useState('');
  const [generatedPoster, setGeneratedPoster] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => setImage(e.target.files[0]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setGeneratedPoster(null);

    const formData = new FormData();
    formData.append('image', image);
    formData.append('prompt', prompt);

    try {
      const response = await axios.post('http://localhost:5000/api/generate-poster', formData);
      setGeneratedPoster(response.data.generatedImageUrl);
    } catch (error) {
      alert('Failed to generate poster');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Create Your AI Poster</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="file" accept="image/*" onChange={handleImageChange} required />
        <input
          type="text"
          placeholder="Describe your poster idea"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="w-full px-3 py-2 border rounded"
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {loading ? 'Generating...' : 'Generate Poster'}
        </button>
      </form>

      {generatedPoster && (
        <div className="mt-6">
          <img src={generatedPoster} alt="Generated Poster" className="rounded shadow-md" />
          <a
            href={generatedPoster}
            download
            className="block mt-2 text-blue-600 hover:underline text-center"
          >
            Download Poster
          </a>
        </div>
      )}
    </div>
  );
};

export default PosterGenerator;
