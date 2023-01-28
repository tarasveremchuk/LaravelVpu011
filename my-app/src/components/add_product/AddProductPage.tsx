import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate, useNavigation } from "react-router-dom";
import http from "../../http_common";
import { IAddProduct } from "../home/types";

const AddProductPage = () => {

    const [add, addProduct] = useState<IAddProduct>({
        name: "",
        detail: "",
    });

    const navigator = useNavigate();

    const onSubmit = (values: IAddProduct) => {
        // console.log(values);
        http.post("/api/products", values).then(resp => {
            // console.log(resp);
            navigator("/");
        });
    };

    const formik = useFormik({
        initialValues: add,
        onSubmit,
      });
{/*Форма для додавання продукта*/}
    return (
        <>
            <h1>Додати продукт</h1>
            <form onSubmit={formik.handleSubmit}>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Name</span>
                    </div>
                    <input type="text" id="name" name="name" value={formik.values.name} onChange={formik.handleChange} className="form-control" aria-label="With textarea" />
                </div>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Detail</span>
                    </div>
                    <input type="text" id="detail" name="detail" value={formik.values.detail} onChange={formik.handleChange} className="form-control" aria-label="With textarea" />
                </div>
                <button type="submit" className="btn btn-success">ADD</button>
            </form>

        </>
    );
};

export default AddProductPage;
