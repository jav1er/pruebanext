import { useEffect, useState } from "react"
import Card from "../Card/Card"

export default function ContentMain() {
  const [products, setProducts] = useState([])
  const [filter, setFilter] = useState("")

  const getProducts = async () => {
    await fetch(
      `https://5eed24da4cbc340016330f0d.mockapi.io/api/articles?filter=${filter}`
    )
      .then((response) => response.json())
      .then((response) => setProducts(response))
      .catch((error) => error)
  }

  const handleFilter = (filter) => {
    setFilter(filter)
  }

  useEffect(() => {
    getProducts()
  }, [filter])

  return (
    <section className="contentMain">
      <div className="container">
        <div>
          <h2 className="title">Nuestros Artículos </h2>
        </div>

        <div className="C">
          <aside>
            <ul>
              <li
                className={`listItem ${
                  filter === '' ? 'listItemActive' : null
                }`}
                onClick={() => handleFilter("")}
              >
                Todos
              </li>
              <li
                className={`listItem ${
                  filter === 'Productos' ? 'listItemActive' : null
                }`}
                onClick={() => handleFilter("Productos")}
              >
                Productos
              </li>
              <li
                className={`listItem ${
                  filter === 'Recetas' ? 'listItemActive' : null
                }`}
                onClick={() => handleFilter("Recetas")}
              >
                Recetas
              </li>
              <li
                className={`listItem ${
                  filter === 'Consejos' ? 'listItemActive' : null
                }`}
                onClick={() => handleFilter("Consejos")}
              >
                Consejos
              </li>
            </ul>
          </aside>

          <div className="b">
            <ol>
              {products?.map((product) => (
                <li key={product.id}>
                  <Card product={product} />
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
