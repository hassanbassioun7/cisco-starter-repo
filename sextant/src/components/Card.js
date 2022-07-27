import './Card.css';

function Card({name, children}) {
  return (
    <div className="card">
      <h2 className="card-name">{name}</h2>
      <div className="card-content">
        {children}
      </div>
    </div>
  )
}

export default Card