// "use client";

// import { useState } from "react";

// const products = [
//   {
//     id: 1,
//     title: "Modern Chair",
//     category: "Furniture",
//     price: 240,
//     emoji: "🪑",
//   },
//   {
//     id: 2,
//     title: "Smart Watch",
//     category: "Technology",
//     price: 380,
//     emoji: "⌚",
//   },
//   {
//     id: 3,
//     title: "Golden Lamp",
//     category: "Decor",
//     price: 120,
//     emoji: "💡",
//   },
//   {
//     id: 4,
//     title: "Headphones",
//     category: "Technology",
//     price: 190,
//     emoji: "🎧",
//   },
//   {
//     id: 5,
//     title: "Blue Sofa",
//     category: "Furniture",
//     price: 850,
//     emoji: "🛋️",
//   },
//   {
//     id: 6,
//     title: "Table Clock",
//     category: "Decor",
//     price: 90,
//     emoji: "⏰",
//   },
// ];

// export default function Home() {
//   const [search, setSearch] = useState("");
//   const [category, setCategory] = useState("All");
//   const [likes, setLikes] = useState<number[]>([]);
//   const [cart, setCart] = useState(0);

//   const filteredProducts = products.filter((product) => {
//     const matchesSearch = product.title
//       .toLowerCase()
//       .includes(search.toLowerCase());

//     const matchesCategory =
//       category === "All" || product.category === category;

//     return matchesSearch && matchesCategory;
//   });

//   const toggleLike = (id: number) => {
//     if (likes.includes(id)) {
//       setLikes(likes.filter((item) => item !== id));
//     } else {
//       setLikes([...likes, id]);
//     }
//   };

//   return (
//     <main
//       style={{
//         minHeight: "100vh",
//         background: "linear-gradient(135deg, #06152e, #0d2c5c)",
//         color: "white",
//         fontFamily: "Arial, sans-serif",
//         padding: "40px",
//       }}
//     >
//       <header
//         style={{
//           maxWidth: "1100px",
//           margin: "0 auto 50px",
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//         }}
//       >
//         <h2
//           style={{
//             margin: 0,
//             color: "#f4c95d",
//             fontSize: "28px",
//           }}
//         >
//           GoldStore
//         </h2>

//         <div
//           style={{
//             background: "#f4c95d",
//             color: "#06152e",
//             padding: "10px 18px",
//             borderRadius: "12px",
//             fontWeight: "bold",
//           }}
//         >
//           Cart: {cart}
//         </div>
//       </header>

//       <section
//         style={{
//           maxWidth: "1100px",
//           margin: "0 auto 40px",
//           textAlign: "center",
//         }}
//       >
//         <p
//           style={{
//             color: "#f4c95d",
//             fontWeight: "bold",
//             marginBottom: "10px",
//           }}
//         >
//           NEW COLLECTION
//         </p>

//         <h1
//           style={{
//             fontSize: "52px",
//             margin: "0 0 15px",
//           }}
//         >
//           Find something
//           <span style={{ color: "#f4c95d" }}> special.</span>
//         </h1>

//         <p
//           style={{
//             color: "#b9c9e3",
//             fontSize: "18px",
//             marginBottom: "35px",
//           }}
//         >
//           Explore our simple collection of modern products.
//         </p>

//         <input
//           type="text"
//           placeholder="Search products..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           style={{
//             width: "100%",
//             maxWidth: "500px",
//             padding: "16px 20px",
//             borderRadius: "14px",
//             border: "1px solid #35517c",
//             background: "#102b52",
//             color: "white",
//             outline: "none",
//             fontSize: "16px",
//           }}
//         />
//       </section>

//       <div
//         style={{
//           maxWidth: "1100px",
//           margin: "0 auto 30px",
//           display: "flex",
//           gap: "10px",
//           justifyContent: "center",
//           flexWrap: "wrap",
//         }}
//       >
//         {["All", "Furniture", "Technology", "Decor"].map((item) => (
//           <button
//             key={item}
//             onClick={() => setCategory(item)}
//             style={{
//               padding: "10px 18px",
//               borderRadius: "20px",
//               border: "none",
//               cursor: "pointer",
//               fontWeight: "bold",
//               background: category === item ? "#f4c95d" : "#163763",
//               color: category === item ? "#06152e" : "white",
//             }}
//           >
//             {item}
//           </button>
//         ))}
//       </div>

//       <section
//         style={{
//           maxWidth: "1100px",
//           margin: "0 auto",
//           display: "grid",
//           gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
//           gap: "20px",
//         }}
//       >
//         {filteredProducts.map((product) => (
//           <div
//             key={product.id}
//             style={{
//               background: "rgba(255,255,255,0.07)",
//               border: "1px solid rgba(255,255,255,0.1)",
//               borderRadius: "22px",
//               padding: "25px",
//             }}
//           >
//             <div
//               style={{
//                 height: "180px",
//                 background: "#102b52",
//                 borderRadius: "18px",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 fontSize: "75px",
//                 marginBottom: "20px",
//               }}
//             >
//               {product.emoji}
//             </div>

//             <p
//               style={{
//                 color: "#f4c95d",
//                 fontSize: "13px",
//                 fontWeight: "bold",
//               }}
//             >
//               {product.category}
//             </p>

//             <h3
//               style={{
//                 fontSize: "22px",
//                 margin: "5px 0 10px",
//               }}
//             >
//               {product.title}
//             </h3>

//             <h2
//               style={{
//                 color: "#f4c95d",
//                 marginBottom: "20px",
//               }}
//             >
//               ${product.price}
//             </h2>

//             <div
//               style={{
//                 display: "flex",
//                 gap: "10px",
//               }}
//             >
//               <button
//                 onClick={() => setCart(cart + 1)}
//                 style={{
//                   flex: 1,
//                   border: "none",
//                   padding: "12px",
//                   borderRadius: "12px",
//                   background: "#f4c95d",
//                   color: "#06152e",
//                   fontWeight: "bold",
//                   cursor: "pointer",
//                 }}
//               >
//                 Add to Cart
//               </button>

//               <button
//                 onClick={() => toggleLike(product.id)}
//                 style={{
//                   width: "45px",
//                   border: "1px solid #35517c",
//                   borderRadius: "12px",
//                   background: "#102b52",
//                   color: likes.includes(product.id) ? "#f4c95d" : "white",
//                   cursor: "pointer",
//                   fontSize: "20px",
//                 }}
//               >
//                 {likes.includes(product.id) ? "♥" : "♡"}
//               </button>
//             </div>
//           </div>
//         ))}
//       </section>

//       {filteredProducts.length === 0 && (
//         <p
//           style={{
//             textAlign: "center",
//             marginTop: "50px",
//             color: "#b9c9e3",
//           }}
//         >
//           Product not found.
//         </p>
//       )}
//     </main>
//   );
// }

"use client";

import { useState } from "react";

const products = [
  {
    id: 1,
    title: "Modern Chair",
    category: "Furniture",
    price: 240,
    emoji: "🪑",
    color: "#E8DDD0",
  },
  {
    id: 2,
    title: "Smart Watch",
    category: "Technology",
    price: 380,
    emoji: "⌚",
    color: "#D9DEE3",
  },
  {
    id: 3,
    title: "Golden Lamp",
    category: "Decor",
    price: 120,
    emoji: "💡",
    color: "#F1E2BC",
  },
  {
    id: 4,
    title: "Headphones",
    category: "Technology",
    price: 190,
    emoji: "🎧",
    color: "#D8DDD5",
  },
  {
    id: 5,
    title: "Blue Sofa",
    category: "Furniture",
    price: 850,
    emoji: "🛋️",
    color: "#CBD7DD",
  },
  {
    id: 6,
    title: "Table Clock",
    category: "Decor",
    price: 90,
    emoji: "⏰",
    color: "#E6D8D1",
  },
];

const categories = ["All", "Furniture", "Technology", "Decor"];

export default function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [likes, setLikes] = useState<number[]>([]);
  const [cart, setCart] = useState(0);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory = category === "All" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  const toggleLike = (id: number) => {
    setLikes((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f6f4ef",
        color: "#1d1d1f",
        fontFamily: "Arial, sans-serif",
        paddingBottom: "60px",
      }}
    >
      {/* NAVBAR */}
      <header
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "28px 30px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "30px",
        }}
      >
        <div>
          <h2
            style={{
              margin: 0,
              fontSize: "26px",
              letterSpacing: "-1px",
            }}
          >
            nova.
          </h2>

          <span
            style={{
              color: "#888",
              fontSize: "12px",
            }}
          >
            modern collection
          </span>
        </div>

        <button
          style={{
            border: "none",
            background: "#1d1d1f",
            color: "white",
            padding: "12px 20px",
            borderRadius: "30px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Cart · {cart}
        </button>
      </header>

      <section
        style={{
          maxWidth: "1140px",
          margin: "20px auto 50px",
          padding: "60px",
          borderRadius: "35px",
          background: "#dfe8d6",
        }}
      >
        <p
          style={{
            fontSize: "13px",
            fontWeight: "bold",
            letterSpacing: "2px",
            color: "#67745e",
          }}
        >
          DISCOVER THE COLLECTION
        </p>

        <h1
          style={{
            fontSize: "64px",
            maxWidth: "700px",
            margin: "15px 0",
            lineHeight: "1",
            letterSpacing: "-3px",
          }}
        >
          Simple products for
          <span
            style={{
              color: "#67745e",
            }}
          >
            {" "}
            modern life.
          </span>
        </h1>

        <button
          style={{
            color: "#5f6659",
            fontSize: "18px",
            maxWidth: "500px",
            lineHeight: "1.6",
          }}
        >
          Explore furniture, technology and decor designed for everyday life.
        </p>
      </section>

      <section
        style={{
          maxWidth: "1140px",
          margin: "0 auto",
          padding: "0 20px",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "15px",
            justifyContent: "space-between",
            marginBottom: "35px",
            flexWrap: "wrap",
          }}
        >
          <input
            type="text"
            placeholder="Search something..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              minWidth: "280px",
              flex: 1,
              padding: "16px 20px",
              borderRadius: "30px",
              border: "1px solid #ddd",
              background: "white",
              outline: "none",
              fontSize: "15px",
            }}
          />

          <div
            style={{
              display: "flex",
              gap: "8px",
              flexWrap: "wrap",
            }}
          >
            {["All", "Furniture", "Technology", "Decor"].map((item) => (
              <button
                key={item}
                onClick={() => setCategory(item)}
                style={{
                  border: "none",
                  padding: "12px 18px",
                  borderRadius: "30px",
                  cursor: "pointer",
                  background:
                    category === item ? "#1d1d1f" : "#e8e5df",
                  color:
                    category === item ? "white" : "#555",
                }}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "22px",
          }}
        >
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              style={{
                background: "white",
                borderRadius: "28px",
                padding: "16px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
              }}
            >
              <div
                style={{
                  height: "220px",
                  borderRadius: "22px",
                  background: "#f0eee9",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "90px",
                  position: "relative",
                }}
              >
                {product.emoji}

                <button
                  onClick={() => toggleLike(product.id)}
                  style={{
                    position: "absolute",
                    right: "15px",
                    top: "15px",
                    width: "42px",
                    height: "42px",
                    borderRadius: "50%",
                    border: "none",
                    background: "white",
                    cursor: "pointer",
                    fontSize: "21px",
                    color: likes.includes(product.id)
                      ? "#e75c5c"
                      : "#777",
                  }}
                >
                  {likes.includes(product.id) ? "♥" : "♡"}
                </button>
              </div>

              <div
                style={{
                  padding: "18px 8px 8px",
                }}
              >
                <span
                  style={{
                    color: "#9a9a9a",
                    fontSize: "12px",
                    textTransform: "uppercase",
                  }}
                >
                  {product.category}
                </span>

                <h3
                  style={{
                    fontSize: "21px",
                    margin: "7px 0 12px",
                  }}
                >
                  {product.title}
                </h3>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <strong
                    style={{
                      fontSize: "20px",
                    }}
                  >
                    ${product.price}
                  </strong>

                  <button
                    onClick={() => setCart(cart + 1)}
                    style={{
                      border: "none",
                      background: "#dfe8d6",
                      color: "#313a2b",
                      padding: "11px 18px",
                      borderRadius: "25px",
                      fontWeight: "bold",
                      cursor: "pointer",
                    }}
                  >
                    Add +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div
            style={{
              textAlign: "center",
              padding: "70px",
              color: "#888",
            }}
          >
            <h2>Nothing found 🤷</h2>
            <p>Try another product or category.</p>
          </div>
        )}
      </section>
    </main>
  );
}
