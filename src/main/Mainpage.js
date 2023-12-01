import React, {useState} from 'react';
import axios from "axios";
import ProductList from "./ProductList";
import "../css/Mainpage.css"

function Mainpage(props) {
    const [activeTab, setActiveTab] = useState('CU')
    const [product, setProduct] = useState(null)

    axios.get("http://localhost:4000/main/list").then(function (response) {
        setProduct(response.data);

    }).catch(function (e) {
        console.log(e)
    })

    const renderList = () => {
        switch (activeTab) {
            case 'CU':
                return <ProductList conv={activeTab}>CU 관련 리스트</ProductList>;
            case 'GS':
                return <ProductList conv={activeTab}>GS 관련 리스트</ProductList>;
            case 'Seven':
                return <ProductList conv={activeTab}>Seven 관련 리스트</ProductList>;
            default:
                return <ProductList conv={'CU'}>리스트 선택</ProductList>;
        }
    };

    return (
        <div className="container">
            <header>
                <h1>pyeonhi</h1>
            </header>
            <nav>
                <button onClick={() => setActiveTab('CU')}>CU</button>
                <button onClick={() => setActiveTab('GS')}>GS</button>
                <button onClick={() => setActiveTab('Seven')}>Seven</button>
            </nav>
            <main>
                {renderList()}
            </main>
        </div>
    )
}

export default Mainpage;