import { useState } from 'react';

export interface UserCoordinates {
  lat: number;
  lng: number;
}

// Haversine formula to compute distance in kilometers
export function calculateDistanceKm(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371; // Earth radius in km
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return Math.round(R * c * 10) / 10;
}

export function useUserLocation() {
  const [coords, setCoords] = useState<UserCoordinates | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const requestLocation = () => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser');
      return;
    }

    setLoading(true);
    setError(null);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCoords({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
        setLoading(false);
      },
      (err) => {
        // If user denies or fails, default coordinates to Dadar / Central Mumbai for demonstration
        setError(err.message);
        setLoading(false);
        // Default to Central Mumbai so user still experiences the sorting feature
        setCoords({ lat: 19.0178, lng: 72.8478 });
      },
      { timeout: 8000 }
    );
  };

  return {
    coords,
    loading,
    error,
    requestLocation,
    calculateDistance: (targetLat: number, targetLng: number) => {
      if (!coords) return null;
      return calculateDistanceKm(coords.lat, coords.lng, targetLat, targetLng);
    }
  };
}
