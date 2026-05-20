const FormProduct = ({ dataForm, handleChange, handleSend, handleChangeFile }) => {
    return (
        <form onSubmit={handleSend}>
            <input
                name="nombre"
                value={dataForm.nombre}
                onChange={handleChange}
            />
            <input
                type="file"
                accept="image/*"
                onChange={handleChangeFile}
            />
            <button type="submit">Guardar</button>
        </form>
    );
}

export default FormProduct;