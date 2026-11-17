import { useState } from "react";
import BookCard from "./components/BookCard";

function App() {
  const [books, setBooks] = useState([
    { id: 1, titre: "Une si longue lettre", auteur: "Mariama Bâ", isAvailable: true },
    { id: 2, titre: "Le Devoir de violence", auteur: "Yambo Ouologuem", isAvailable: false },
    { id: 3, titre: "L'Aventure ambiguë", auteur: "Cheikh Hamidou Kane", isAvailable: false },
    { id: 4, titre: "Les Bouts de bois de Dieu", auteur: "Ousmane Sembène", isAvailable: true },
  ]);

  const [titre, setTitre] = useState("");
  const [auteur, setAuteur] = useState("");

  const onClickEmprunt = (bookId) => {
    setBooks((booksActuels) =>
      booksActuels.map((book) =>
        book.id === bookId ? { ...book, isAvailable: !book.isAvailable } : book
      )
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (titre.trim() === "" || auteur.trim() === "") {
      return;
    }

    const nouveauLivre = {
      id: Date.now(),
      titre: titre.trim(),
      auteur: auteur.trim(),
      isAvailable: true,
    };

    setBooks((booksActuels) => [...booksActuels, nouveauLivre]);
    setTitre("");
    setAuteur("");
  };

  const nombreDisponibles = books.filter((book) => book.isAvailable).length;

  return (
    <div>
      <h1>
        Livres disponibles : {nombreDisponibles} / {books.length}
      </h1>

      <form onSubmit={handleSubmit} style={{ margin: "10px" }}>
        <input
          type="text"
          placeholder="Titre"
          value={titre}
          onChange={(e) => setTitre(e.target.value)}
        />
        <input
          type="text"
          placeholder="Auteur"
          value={auteur}
          onChange={(e) => setAuteur(e.target.value)}
        />
        <button type="submit">Ajouter</button>
      </form>

      {books.map((book) => (
        <BookCard
          key={book.id}
          id={book.id}
          titre={book.titre}
          auteur={book.auteur}
          isAvailable={book.isAvailable}
          onClickEmprunt={onClickEmprunt}
        />
      ))}
    </div>
  );
}

export default App; 