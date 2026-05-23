'use client';

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Upload, Loader } from 'lucide-react';
import axios from 'axios';

interface ScannerResult {
  style: string;
  confidence: number;
  geometric_patterns: string[];
  region: string;
  description?: string;
}

/**
 * Zellige AI Scanner Component
 * Allows users to upload mosaic images and get AI-powered analysis
 */
export default function ZelligeScanner() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ScannerResult | null>(null);
  const [error, setError] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setError('');
      
      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setError('Please select an image first');
      return;
    }

    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('image', selectedFile);

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/scanner/analyze`,
        formData,
        {
          headers: { 'Content-Type': 'multipart/form-data' },
        }
      );

      setResult(response.data);
      setError('');
    } catch (err) {
      setError('Failed to analyze image. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const resetScanner = () => {
    setSelectedFile(null);
    setPreview('');
    setResult(null);
    setError('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="zellige-bg-section min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <h1 className="heading-decorative text-4xl md:text-5xl mb-4 text-center">
            Zellige AI Scanner
          </h1>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Upload an image of a Moroccan mosaic and discover its style, geometric patterns, and regional origin.
          </p>

          {!result ? (
            /* Upload Section */
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="card-moroccan mb-8"
            >
              <div className="text-center">
                {/* File Upload Area */}
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="border-2 border-dashed border-moroccan-primary rounded-moorish-lg p-12 cursor-pointer hover:bg-moroccan-background/50 transition"
                >
                  <Upload className="w-12 h-12 mx-auto mb-4 text-moroccan-primary" />
                  <p className="text-lg font-semibold text-moroccan-primary mb-2">
                    Click to upload or drag and drop
                  </p>
                  <p className="text-gray-500">PNG, JPG, GIF up to 10MB</p>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleFileSelect}
                    className="hidden"
                  />
                </div>

                {/* Preview */}
                {preview && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-8"
                  >
                    <p className="text-gray-600 mb-4">Preview:</p>
                    <img
                      src={preview}
                      alt="Preview"
                      className="w-full max-h-96 object-cover rounded-moorish-lg"
                    />
                  </motion.div>
                )}

                {/* Error Message */}
                {error && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-moorish-md"
                  >
                    {error}
                  </motion.div>
                )}

                {/* Action Buttons */}
                {preview && (
                  <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleUpload}
                      disabled={loading}
                      className="btn-moroccan px-8 py-3 flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      {loading && <Loader className="w-4 h-4 animate-spin" />}
                      {loading ? 'Analyzing...' : 'Analyze Image'}
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={resetScanner}
                      className="px-8 py-3 border-2 border-moroccan-primary text-moroccan-primary rounded-moorish-md hover:bg-moroccan-background transition"
                    >
                      Reset
                    </motion.button>
                  </div>
                )}
              </div>
            </motion.div>
          ) : (
            /* Results Section */
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-8"
            >
              <div className="card-moroccan">
                <div className="mb-6">
                  {preview && (
                    <img
                      src={preview}
                      alt="Analyzed"
                      className="w-full h-64 object-cover rounded-moorish-lg mb-6"
                    />
                  )}
                  
                  {/* Main Results */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-xl font-bold text-moroccan-primary mb-2">
                        Mosaic Style
                      </h3>
                      <p className="text-3xl font-bold text-moroccan-secondary">
                        {result.style}
                      </p>
                      <p className="text-gray-600 mt-2">
                        {result.region && `Region: ${result.region}`}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-moroccan-primary mb-2">
                        Confidence Score
                      </h3>
                      <div className="flex items-center gap-4">
                        <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${result.confidence * 100}%` }}
                            transition={{ duration: 1 }}
                            className="h-full bg-gradient-moroccan"
                          />
                        </div>
                        <span className="text-2xl font-bold text-moroccan-primary">
                          {Math.round(result.confidence * 100)}%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Geometric Patterns */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h3 className="text-xl font-bold text-moroccan-primary mb-4">
                    Geometric Patterns Detected
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {result.geometric_patterns.map((pattern, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="px-4 py-2 bg-moroccan-background border border-moroccan-primary text-moroccan-primary rounded-moorish-md font-semibold"
                      >
                        {pattern}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Description */}
                {result.description && (
                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <h3 className="text-xl font-bold text-moroccan-primary mb-4">
                      Description
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {result.description}
                    </p>
                  </div>
                )}
              </div>

              {/* Reset Button */}
              <div className="text-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={resetScanner}
                  className="btn-moroccan px-8 py-3"
                >
                  Analyze Another Image
                </motion.button>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
