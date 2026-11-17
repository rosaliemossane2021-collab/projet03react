export default function BookCard({ id, titre, auteur, isAvailable, onClickEmprunt }) {
  return (
    <div
      style={{
        border: "2px solid grey",
        borderRadius: "10px",
        margin: "10px",
        padding: "10px",
      }}
    >
      <h2>{titre}</h2>
      <p>Auteur : {auteur}</p>
      <p>
        Statut :{" "}
        <strong style={{ color: isAvailable ? "green" : "red" }}>
          {isAvailable ? "Disponible" : "Emprunté"}
        </strong>
      </p>
      <button type="button" onClick={() => onClickEmprunt(id)}>
        {isAvailable ? "Emprunter" : "Rendre"}
      </button>
    </div>
  );
}