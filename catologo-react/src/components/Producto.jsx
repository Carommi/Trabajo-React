export default function Producto({ imagen, nombre, precio }) {
    return (
        <article className="producto">
            <div className="imagen-producto">
                <img src={imagen} alt={nombre} />
            </div>

            <div className="info-producto">
                <h2>{nombre}</h2>

                <p>Producto para catálogo de belleza.</p>

                <strong>
                    ${precio.toLocaleString("es-CO")}
                </strong>

                <button>Agregar al carrito</button>
            </div>
        </article>
    );
}

