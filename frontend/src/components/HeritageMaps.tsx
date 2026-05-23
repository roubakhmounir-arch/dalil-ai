'use client';

import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, LayerGroup } from 'react-leaflet';
import L from 'leaflet';
import { motion } from 'framer-motion';
import { Droplet, MapPin } from 'lucide-react';
import axios from 'axios';

interface HeritageLocation {
  id: number;
  name: string;
  type: 'water_fountain' | 'medina_network' | 'historical_site';
  coordinates: [number, number];
  description: string;
  region: string;
}

/**
 * Heritage GIS Map Component
 * Displays Morocco's complete map with toggleable layers for heritage sites
 * Includes Seqqayas (water fountains) and medina water networks
 */
export default function HeritageMaps() {
  const [locations, setLocations] = useState<HeritageLocation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [filters, setFilters] = useState({
    water_fountain: true,
    medina_network: true,
    historical_site: true,
  });

  useEffect(() => {
    // Fetch heritage locations from backend
    const fetchLocations = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/heritage/sites`
        );
        setLocations(response.data.sites);
      } catch (err) {
        setError('Failed to load heritage sites');
        console.error(err);
        // Use mock data on error
        setLocations(getMockData());
      } finally {
        setLoading(false);
      }
    };

    fetchLocations();
  }, []);

  const getMockData = (): HeritageLocation[] => {
    return [
      {
        id: 1,
        name: 'Seqqaya of Fez',
        type: 'water_fountain',
        coordinates: [34.0637, -5.0088],
        description: 'Historic water fountain in the heart of Fez Medina',
        region: 'Fez',
      },
      {
        id: 2,
        name: 'Seqqaya of Marrakech',
        type: 'water_fountain',
        coordinates: [31.6295, -8.0088],
        description: 'Traditional water fountain in Marrakech Medina',
        region: 'Marrakech',
      },
      {
        id: 3,
        name: 'Medina Water Network - Essaouira',
        type: 'medina_network',
        coordinates: [31.5078, -9.7686],
        description: 'Historical water distribution system of Essaouira',
        region: 'Essaouira',
      },
      {
        id: 4,
        name: 'Seqqaya of Meknes',
        type: 'water_fountain',
        coordinates: [33.8869, -5.5553],
        description: 'Ancient water fountain in Meknes',
        region: 'Meknes',
      },
      {
        id: 5,
        name: 'Medina Water Network - Tangier',
        type: 'medina_network',
        coordinates: [35.7595, -5.8418],
        description: 'Complex water system of Tangier Medina',
        region: 'Tangier',
      },
    ];
  };

  // Create custom icons for different location types
  const getMarkerIcon = (type: string) => {
    const colors: { [key: string]: string } = {
      water_fountain: '#3EB489',
      medina_network: '#1A5F7A',
      historical_site: '#E2725B',
    };

    return L.divIcon({
      className: 'custom-marker',
      html: `
        <div style="
          background-color: ${colors[type]};
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 3px solid white;
          box-shadow: 0 2px 4px rgba(0,0,0,0.3);
        ">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
          </svg>
        </div>
      `,
      iconSize: [32, 32],
      iconAnchor: [16, 16],
      popupAnchor: [0, -16],
    });
  };

  const filteredLocations = locations.filter(
    (loc) => filters[loc.type]
  );

  if (loading) {
    return (
      <div className="zellige-bg-section min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-moroccan-primary mx-auto mb-4"></div>
          <p className="text-moroccan-primary font-semibold">Loading heritage sites...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="zellige-bg-section min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <h1 className="heading-decorative text-4xl md:text-5xl mb-2">
            Heritage GIS Map
          </h1>
          <p className="text-gray-600 mb-6">
            Explore Moroccan cultural heritage sites and historical water networks across all provinces.
          </p>

          {/* Filter Controls */}
          <div className="bg-white rounded-moorish-lg p-6 mb-6 card-moroccan">
            <h3 className="font-bold text-moroccan-primary mb-4">Filter Layers</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                {
                  key: 'water_fountain',
                  label: 'Water Fountains (Seqqayas)',
                  icon: Droplet,
                },
                {
                  key: 'medina_network',
                  label: 'Medina Water Networks',
                  icon: MapPin,
                },
                {
                  key: 'historical_site',
                  label: 'Historical Sites',
                  icon: MapPin,
                },
              ].map((filter) => (
                <label
                  key={filter.key}
                  className="flex items-center gap-3 cursor-pointer hover:bg-moroccan-background p-2 rounded-moorish-md transition"
                >
                  <input
                    type="checkbox"
                    checked={
                      filters[filter.key as keyof typeof filters]
                    }
                    onChange={(e) =>
                      setFilters((prev) => ({
                        ...prev,
                        [filter.key]: e.target.checked,
                      }))
                    }
                    className="w-4 h-4 cursor-pointer"
                  />
                  <span className="text-gray-700">{filter.label}</span>
                  <span className="text-xs text-gray-500 ml-auto">
                    (
                    {locations.filter((l) => l.type === filter.key).length}
                    )
                  </span>
                </label>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Showing {filteredLocations.length} of {locations.length} locations
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded-moorish-md mb-6"
            >
              {error}
            </motion.div>
          )}

          {/* Map */}
          <div className="rounded-moorish-lg overflow-hidden card-moroccan p-0 h-96 md:h-screen max-h-96 md:max-h-none">
            <MapContainer
              center={[31.7917, -7.0926]}
              zoom={6}
              style={{ width: '100%', height: '100%' }}
              className="rounded-moorish-lg"
            >
              {/* Base Map Layer */}
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; OpenStreetMap contributors'
              />

              {/* Heritage Locations */}
              <LayerGroup>
                {filteredLocations.map((location) => (
                  <Marker
                    key={location.id}
                    position={location.coordinates}
                    icon={getMarkerIcon(location.type)}
                  >
                    <Popup>
                      <div className="p-2">
                        <h4 className="font-bold text-moroccan-primary mb-1">
                          {location.name}
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          {location.description}
                        </p>
                        <p className="text-xs text-gray-500">
                          Region: {location.region}
                        </p>
                      </div>
                    </Popup>
                  </Marker>
                ))}
              </LayerGroup>
            </MapContainer>
          </div>

          {/* Legend */}
          <div className="mt-6 grid md:grid-cols-3 gap-4">
            {[
              {
                type: 'water_fountain',
                label: 'Water Fountains',
                color: '#3EB489',
                description: 'Traditional Seqqayas - historic water fountains',
              },
              {
                type: 'medina_network',
                label: 'Water Networks',
                color: '#1A5F7A',
                description: 'Historical medina water distribution systems',
              },
              {
                type: 'historical_site',
                label: 'Historical Sites',
                color: '#E2725B',
                description: 'Important cultural and heritage locations',
              },
            ].map((item) => (
              <div
                key={item.type}
                className="bg-white rounded-moorish-md p-4 border-l-4"
                style={{ borderLeftColor: item.color }}
              >
                <h4 className="font-bold text-gray-800 mb-2">{item.label}</h4>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
