import { useState } from 'react';
import FormProduct from './FormProduct';

const FormContainer = () => {
    const [imgFile, setImgFile] = useState(null);
    const [dataForm, setDataForm] = useState({
        name: '',
        price: '',
        stock: '',
        description: '',
    });

    const handleChange = (e) => {
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value
        });
    }

    const handleSend = async (e) => {
        e.preventDefault();
        const apiKey = "879c6e1e06e97c4e34130a5286cbcf51";
        const formData = new FormData();
        formData.append("file", imgFile);

        const response = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
            method: "POST",
            body: formData,
        });

        const imgbbData = await response.json();
        const imgUrl = imgbbData.data.url;

        const productComplete = { ...dataForm, imgUrl: imgUrl };
        console.log("Producto listo para enviar:", productComplete);

        
    };

    const handleChangeFile = (e) => {
        setImgFile(e.target.files[0]);
    };

    return (
        <FormProduct
            dataForm={dataForm}
            handleChange={handleChange}
            handleSend={handleSend}
            handleChangeFile={handleChangeFile}
        />
    );
};

export default FormContainer;