import React, {useState} from 'react';
import axios from "axios";

function Mainpage(props) {
    const [conv, setConv] = useState(0)
    const [product, setProduct] = useState(null)

    function getProduct() {
        axios.get("http://localhost:4000/list").then(function (response) {
            setProduct(response.data);

        }).catch(function (e) {
            console.log(e)
        })
    }

    if (product == null)
        return (
            <div>
                <button onClick={getProduct}>전송</button>
            </div>
        )
    else
        return (
            <div>
                <button onClick={getProduct}>전송</button>
                <div>{product[0].id}</div>
                <div>{product[0].image}</div>
                <img src={product[0].image}></img>
                <div>{product[0].event}</div>
                <div>{product[0].price}</div>
            </div>
        );
}

export default Mainpage;