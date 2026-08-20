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
        background: "#f5f3ee",
        color: "#181818",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      {/* NAVBAR */}
      <header
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "28px 32px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "30px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "45px",
          }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: "25px",
              fontWeight: 800,
              letterSpacing: "-1px",
            }}
          >
            NØRDIK
          </h2>

          <nav
            style={{
              display: "flex",
              gap: "28px",
              fontSize: "14px",
              color: "#656565",
            }}
          >
            <span>Shop</span>
            <span>Collections</span>
            <span>About</span>
          </nav>
        </div>

        <button
          style={{
            border: "none",
            background: "#181818",
            color: "white",
            borderRadius: "50px",
            padding: "12px 20px",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Bag · {cart}
        </button>
      </header>

      {/* HERO */}
      <section
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "70px 32px 90px",
          display: "grid",
          gridTemplateColumns: "1.3fr 0.7fr",
          alignItems: "end",
          gap: "50px",
        }}
      >
        <div>
          <p
            style={{
              margin: "0 0 20px",
              textTransform: "uppercase",
              letterSpacing: "2px",
              fontWeight: 700,
              fontSize: "12px",
              color: "#e15d35",
            }}
          >
            Curated objects · 2026
          </p>

          <h1
            style={{
              margin: 0,
              maxWidth: "780px",
              fontSize: "clamp(55px, 7vw, 100px)",
              lineHeight: "0.95",
              letterSpacing: "-5px",
              fontWeight: 500,
            }}
          >
            Objects worth
            <br />
            <span
              style={{
                fontStyle: "italic",
                color: "#e15d35",
              }}
            >
              keeping.
            </span>
          </h1>
        </div>

        <div>
          <p
            style={{
              fontSize: "17px",
              lineHeight: "1.7",
              color: "#696969",
              maxWidth: "370px",
              margin: "0 0 28px",
            }}
          >
            Thoughtful furniture, technology and everyday objects selected for
            modern spaces.
          </p>

          <div
            style={{
              position: "relative",
            }}
          >
            <span
              style={{
                position: "absolute",
                top: "50%",
                left: "18px",
                transform: "translateY(-50%)",
                color: "#777",
              }}
            >
              ⌕
            </span>

            <input
              type="text"
              placeholder="Search the collection"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                width: "100%",
                boxSizing: "border-box",
                padding: "16px 20px 16px 48px",
                border: "1px solid #d5d1c9",
                borderRadius: "100px",
                outline: "none",
                background: "transparent",
                color: "#181818",
                fontSize: "15px",
              }}
            />
          </div>
        </div>
      </section>

      {/* FILTER BAR */}
      <section
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 32px 35px",
        }}
      >
        <div
          style={{
            borderTop: "1px solid #d8d5cf",
            paddingTop: "28px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "8px",
              flexWrap: "wrap",
            }}
          >
            {categories.map((item) => (
              <button
                key={item}
                onClick={() => setCategory(item)}
                style={{
                  border:
                    category === item
                      ? "1px solid #181818"
                      : "1px solid #d3d0ca",
                  padding: "11px 18px",
                  borderRadius: "100px",
                  cursor: "pointer",
                  fontWeight: 500,
                  fontSize: "14px",
                  background: category === item ? "#181818" : "transparent",
                  color: category === item ? "#fff" : "#555",
                }}
              >
                {item}
              </button>
            ))}
          </div>

          <span
            style={{
              color: "#7d7d7d",
              fontSize: "14px",
            }}
          >
            {filteredProducts.length} products
          </span>
        </div>
      </section>

      {/* PRODUCTS */}
      <section
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 32px 100px",
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
          gap: "20px",
        }}
      >
        {filteredProducts.map((product) => {
          const liked = likes.includes(product.id);

          return (
            <article
              key={product.id}
              style={{
                background: "#fff",
                borderRadius: "4px",
                overflow: "hidden",
                position: "relative",
              }}
            >
              {/* PRODUCT IMAGE */}
              <div
                style={{
                  height: "340px",
                  background: product.color,
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontSize: "105px",
                    filter: "drop-shadow(0 25px 18px rgba(0,0,0,.10))",
                  }}
                >
                  {product.emoji}
                </span>

                <button
                  onClick={() => toggleLike(product.id)}
                  aria-label="Add product to favorites"
                  style={{
                    position: "absolute",
                    right: "16px",
                    top: "16px",
                    width: "42px",
                    height: "42px",
                    borderRadius: "50%",
                    border: "none",
                    background: "rgba(255,255,255,.85)",
                    fontSize: "22px",
                    cursor: "pointer",
                    color: liked ? "#e15d35" : "#181818",
                  }}
                >
                  {liked ? "♥" : "♡"}
                </button>

                <span
                  style={{
                    position: "absolute",
                    left: "16px",
                    top: "16px",
                    background: "rgba(255,255,255,.85)",
                    borderRadius: "100px",
                    padding: "8px 12px",
                    fontSize: "11px",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                  }}
                >
                  {product.category}
                </span>
              </div>

              {/* DETAILS */}
              <div
                style={{
                  padding: "20px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "20px",
                    alignItems: "flex-start",
                  }}
                >
                  <div>
                    <h3
                      style={{
                        margin: "0 0 7px",
                        fontSize: "18px",
                        fontWeight: 600,
                      }}
                    >
                      {product.title}
                    </h3>

                    <p
                      style={{
                        margin: 0,
                        color: "#8a8a8a",
                        fontSize: "13px",
                      }}
                    >
                      Designed for everyday living
                    </p>
                  </div>

                  <strong
                    style={{
                      fontSize: "17px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    ${product.price}
                  </strong>
                </div>

                <button
                  onClick={() => setCart((prev) => prev + 1)}
                  style={{
                    marginTop: "22px",
                    width: "100%",
                    padding: "14px",
                    border: "1px solid #181818",
                    background: "transparent",
                    color: "#181818",
                    cursor: "pointer",
                    fontWeight: 600,
                    fontSize: "14px",
                  }}
                >
                  Add to bag
                </button>
              </div>
            </article>
          );
        })}
      </section>

      {filteredProducts.length === 0 && (
        <div
          style={{
            textAlign: "center",
            padding: "60px 20px 120px",
          }}
        >
          <p
            style={{
              fontSize: "42px",
              margin: "0 0 10px",
            }}
          >
            ☹
          </p>

          <h2
            style={{
              margin: "0 0 8px",
            }}
          >
            Nothing here
          </h2>

          <p
            style={{
              color: "#777",
            }}
          >
            Try another search or category.
          </p>
        </div>
      )}
    </main>
  );
}
