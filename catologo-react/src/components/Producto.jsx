
export default function Producto({ imagen, nombre, precio }) {

    return (

        <article className="producto">

            <img src={imagen} alt="Producto" />
            <h2>{nombre}</h2>
            <p>Producto para catálogo de belleza.</p>
            <strong>$18.000</strong>

        </article>

    );

}


