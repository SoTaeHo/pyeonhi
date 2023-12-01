import React, {useState} from 'react';
import axios from "axios";

function ProductList(props) {
    const [product, setProduct] = useState(props.conv)

    axios.get("http://localhost:4000/main/list/").then(function (response) {
        setProduct(response.data);

    }).catch(function (e) {
        console.log(e)
    })
    return (
        <div>{props.conv}</div>
    );
}

export default ProductList;