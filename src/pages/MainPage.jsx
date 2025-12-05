import React, { useState } from "react";
import { BOOKS } from "../data/mockBooks";

export default function MainPage() {
  // البيانات
  const [books] = useState(BOOKS);

  // متغيرات التحكم
  const [search, setSearch] = useState("");
  const [genreFilter, setGenreFilter] = useState("All");
  const [sortBy, setSortBy] = useState("year-desc");

  // استخراج أنواع الكتب
  const genres = ["All"];
  books.forEach(book => {
    if (!genres.includes(book.genre)) {
      genres.push(book.genre);
    }
  });

  // تصفية البيانات حسب البحث والنوع
  let displayed = books.filter(book => {
    if (search.trim() !== "") {
      const q = search.toLowerCase();
      const matches =
        book.title.toLowerCase().includes(q) ||
        book.author.toLowerCase().includes(q) ||
        String(book.year).includes(q);
      if (!matches) return false;
    }

    // فلترة النوع
    if (genreFilter !== "All" && book.genre !== genreFilter) {
      return false;
    }

    return true;
  });

  // ترتيب البيانات حسب اختيار المستخدم
  if (sortBy === "year-desc") {
    displayed.sort((a, b) => b.year - a.year);
  } else if (sortBy === "year-asc") {
    displayed.sort((a, b) => a.year - b.year);
  } else if (sortBy === "title-asc") {
    displayed.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortBy === "title-desc") {
    displayed.sort((a, b) => b.title.localeCompare(a.title));
  }

  return (
    <div className="page main-page">
      <h1>Books Catalogue</h1>

      <section className="controls">
        <input
          className="search"
          placeholder="Search by title, author or year..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={genreFilter}
          onChange={(e) => setGenreFilter(e.target.value)}
          className="select"
        >
          {genres.map(g => (
            <option key={g} value={g}>{g}</option>
          ))}
        </select>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="select"
        >
          <option value="year-desc">Newest → Oldest</option>
          <option value="year-asc">Oldest → Newest</option>
          <option value="title-asc">Title A → Z</option>
          <option value="title-desc">Title Z → A</option>
        </select>
      </section>

      <section className="list">
        {displayed.length === 0 ? (
          <p className="muted">No books match your criteria.</p>
        ) : (
          <div className="grid">
            {displayed.map(book => (
              <article key={book.id} className="card">
                <h3 className="book-title">{book.title}</h3>
                <p className="meta">
                  {book.author} • {book.genre} • {book.year}
                </p>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
