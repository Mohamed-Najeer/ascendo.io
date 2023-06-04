import React from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';

const WorldMap = () => {
  // Sample data with country-color mappings
  const countryColors = {
    USA: '#FF0000',
    CAN: '#00FF00',
    BRA: '#0000FF',
    // Add more country-color mappings here
  };

  return (
    <div>
      <ComposableMap projection="geoMercator">
        <Geographies geography="https://cdn.jsdelivr.net/npm/world-atlas@2/land-110m.json">
          {({ geographies }) =>
            geographies.map((geo) => {
              const {  ISO_A2 } = geo.properties;
              const countryColor = countryColors[ISO_A2];

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={countryColor || '#EAEAEC'}
                  stroke="#D6D6DA"
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
};

export default WorldMap;
