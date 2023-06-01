// import React from 'react'

export default function Habilidades({habilidad, detalle,porcentaje}){

  const format = habilidad.toLowerCase();
  return (
    <div className="col inf der">
            <h3>{habilidad}</h3>
            <p>
                {detalle}
            </p>
            <div className="container-skill">
                <div className="fill-skill" id={format}>
                {porcentaje}%
                </div>
            </div>
    </div>
  )
}
