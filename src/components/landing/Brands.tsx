import React from "react";

const brands = [
  "Audi", "BMW", "Chevrolet", "Citroën", "Fiat", "Ford", "Honda", "Hyundai", "Jeep", 
  "Kia", "Mercedes", "Nissan", "Peugeot", "Renault", "Suzuki", "Toyota", "VW", "Alfa Romeo"
];

export const Brands = () => {
  return (
    <section id="marcas" style={{ backgroundColor: '#111', padding: '80px 0', borderTop: '1px solid #333', borderBottom: '1px solid #333' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', textAlign: 'center' }}>
        
        <div style={{ marginBottom: '50px' }}>
          <p style={{ color: '#f97316', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '14px', marginBottom: '10px' }}>
            Compatibilidad total
          </p>
          <h2 style={{ color: 'white', fontSize: '36px', fontWeight: 'bold', margin: '0 0 20px 0' }}>
            Trabajamos con todas las marcas
          </h2>
          <p style={{ color: '#999', fontSize: '16px' }}>
            Reset de airbag y reparación de módulos disponibles para más de 25 marcas.
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', 
          gap: '15px',
          justifyContent: 'center' 
        }}>
          {brands.map((b) => (
            <div 
              key={b} 
              style={{ 
                backgroundColor: '#f97316', 
                color: 'black', 
                fontWeight: 'bold', 
                padding: '12px 5px', 
                borderRadius: '12px', 
                fontSize: '11px', 
                textTransform: 'uppercase',
                textAlign: 'center',
                boxShadow: '0 4px 6px rgba(0,0,0,0.3)'
              }}
            >
              {b}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
