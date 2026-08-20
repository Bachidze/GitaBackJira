"use client";

import { useState } from "react";

const products = [
  {
    id: 1,
    title: "Modern Chair",
    category: "Furniture",
    price: 240,
    emoji: "🪑",
  },
  {
    id: 2,
    title: "Smart Watch",
    category: "Technology",
    price: 380,
    emoji: "⌚",
  },
  {
    id: 3,
    title: "Golden Lamp",
    category: "Decor",
    price: 120,
    emoji: "💡",
  },
  {
    id: 4,
    title: "Headphones",
    category: "Technology",
    price: 190,
    emoji: "🎧",
  },
  {
    id: 5,
    title: "Blue Sofa",
    category: "Furniture",
    price: 850,
    emoji: "🛋️",
  },
  {
    id: 6,
    title: "Table Clock",
    category: "Decor",
    price: 90,
    emoji: "⏰",
  },
];

export default function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [likes, setLikes] = useState<number[]>([]);
  const [cart, setCart] = useState(0);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  const toggleLike = (id: number) => {
    if (likes.includes(id)) {
      setLikes(likes.filter((item) => item !== id));
    } else {
      setLikes([...likes, id]);
    }
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #06152e, #0d2c5c)",
        color: "white",
        fontFamily: "Arial, sans-serif",
        padding: "40px",
      }}
    >
      <header
        style={{
          maxWidth: "1100px",
          margin: "0 auto 50px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2
          style={{
            margin: 0,
            color: "#f4c95d",
            fontSize: "28px",
          }}
        >
          GoldStore
        </h2>

        <div
          style={{
            background: "#f4c95d",
            color: "#06152e",
            padding: "10px 18px",
            borderRadius: "12px",
            fontWeight: "bold",
          }}
        >
          Cart: {cart}
        </div>
      </header>

      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto 40px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: "#f4c95d",
            fontWeight: "bold",
            marginBottom: "10px",
          }}
        >
          NEW COLLECTION
        </p>

        <h1
          style={{
            fontSize: "52px",
            margin: "0 0 15px",
          }}
        >
          Find something
          <span style={{ color: "#f4c95d" }}> special.</span>
        </h1>

        <p
          style={{
            color: "#b9c9e3",
            fontSize: "18px",
            marginBottom: "35px",
          }}
        >
          Explore our simple collection of modern products.
        </p>

        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: "100%",
            maxWidth: "500px",
            padding: "16px 20px",
            borderRadius: "14px",
            border: "1px solid #35517c",
            background: "#102b52",
            color: "white",
            outline: "none",
            fontSize: "16px",
          }}
        />
      </section>

      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto 30px",
          display: "flex",
          gap: "10px",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {["All", "Furniture", "Technology", "Decor"].map((item) => (
          <button
            key={item}
            onClick={() => setCategory(item)}
            style={{
              padding: "10px 18px",
              borderRadius: "20px",
              border: "none",
              cursor: "pointer",
              fontWeight: "bold",
              background: category === item ? "#f4c95d" : "#163763",
              color: category === item ? "#06152e" : "white",
            }}
          >
            {item}
          </button>
        ))}
      </div>

      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            style={{
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "22px",
              padding: "25px",
            }}
          >
            <div
              style={{
                height: "180px",
                background: "#102b52",
                borderRadius: "18px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "75px",
                marginBottom: "20px",
              }}
            >
              {product.emoji}
            </div>

            <p
              style={{
                color: "#f4c95d",
                fontSize: "13px",
                fontWeight: "bold",
              }}
            >
              {product.category}
            </p>

            <h3
              style={{
                fontSize: "22px",
                margin: "5px 0 10px",
              }}
            >
              {product.title}
            </h3>

            <h2
              style={{
                color: "#f4c95d",
                marginBottom: "20px",
              }}
            >
              ${product.price}
            </h2>

            <div
              style={{
                display: "flex",
                gap: "10px",
              }}
            >
              <button
                onClick={() => setCart(cart + 1)}
                style={{
                  flex: 1,
                  border: "none",
                  padding: "12px",
                  borderRadius: "12px",
                  background: "#f4c95d",
                  color: "#06152e",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                Add to Cart
              </button>

              <button
                onClick={() => toggleLike(product.id)}
                style={{
                  width: "45px",
                  border: "1px solid #35517c",
                  borderRadius: "12px",
                  background: "#102b52",
                  color: likes.includes(product.id) ? "#f4c95d" : "white",
                  cursor: "pointer",
                  fontSize: "20px",
                }}
              >
                {likes.includes(product.id) ? "♥" : "♡"}
              </button>
            </div>
          </div>
        ))}
      </section>

      {filteredProducts.length === 0 && (
        <p
          style={{
            textAlign: "center",
            marginTop: "50px",
            color: "#b9c9e3",
          }}
        >
          Product not found.
        </p>
      )}
    </main>
  );
}