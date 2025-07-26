function Certificado(props) {
    const c = props.certificado;
    return(
        <div>
            <img src={`/certificates/${c.nome}`} alt="Erro: imagem não encontrada." />
        </div>
    );
}

export default Certificado;