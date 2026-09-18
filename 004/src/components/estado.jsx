function Estado({ nome, sigla, regiao }) {
    return (
        <div className="estado">
            <span>{sigla}</span>
            <h2>{nome}</h2>
            <p>Região: {regiao}</p>
        </div>
    );
}

export default Estado;