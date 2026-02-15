// Utility functions for 3D terrain generation

/**
 * Simple noise function for terrain elevation
 * Based on the simplex noise algorithm
 */
export function generateTerrainNoise(x, y, scale = 0.1, amplitude = 1) {
  // Simple pseudo-random noise generator
  const noise = (x, y) => {
    const n = Math.sin(x * 12.9898 + y * 78.233) * 43758.5453;
    return n - Math.floor(n);
  };
  
  const scaledX = x * scale;
  const scaledY = y * scale;
  
  // Combine multiple octaves for more natural terrain
  let value = 0;
  let maxValue = 0;
  let frequency = 1;
  let localAmplitude = amplitude;
  
  for (let i = 0; i < 4; i++) {
    value += noise(scaledX * frequency, scaledY * frequency) * localAmplitude;
    maxValue += localAmplitude;
    localAmplitude *= 0.5;
    frequency *= 2;
  }
  
  return value / maxValue;
}

/**
 * Color interpolation for terrain
 */
export function getTerrainColor(elevation) {
  // Low elevation: coast/ocean (blue)
  if (elevation < 0.3) {
    return [0.1, 0.4, 0.8];
  }
  // Medium elevation: savannah (yellow/brown)
  else if (elevation < 0.6) {
    return [0.83, 0.65, 0.45];
  }
  // High elevation: highlands (green)
  else {
    return [0.18, 0.49, 0.20];
  }
}

/**
 * Kenya approximate shape coordinates (simplified bounding box)
 */
export const kenyaBounds = {
  minLat: -4.68,
  maxLat: 5.05,
  minLng: 33.91,
  maxLng: 41.91
};

/**
 * Convert lat/lng to 3D coordinates
 */
export function latLngToXYZ(lat, lng, scale = 10) {
  const { minLat, maxLat, minLng, maxLng } = kenyaBounds;
  
  // Normalize to -1 to 1 range
  const x = ((lng - minLng) / (maxLng - minLng) - 0.5) * scale;
  const z = -((lat - minLat) / (maxLat - minLat) - 0.5) * scale;
  
  return { x, z };
}

/**
 * Generate random float within range
 */
export function randomRange(min, max) {
  return Math.random() * (max - min) + min;
}
