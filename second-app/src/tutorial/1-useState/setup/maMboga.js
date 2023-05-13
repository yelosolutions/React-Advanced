import React from "react";
import { data } from "../../../data"
//Mama Mboga Home Page

const HomePage = () => {
    
    //const [product, setProduct] = useState()

    return <>
    <aside>
        <ul>
            <li>What</li>
            <li>Where</li>
        </ul>
    </aside>
    <main>
    <Product/>
    </main>
    </>
};

const Product = () => {

    return (
    <article>
        
        <img src={data[1].img} alt="" />
        <h5>{data[1].id}</h5>
        <h4>{data[1].name}</h4>
        <button type="button" className="btn">Add to Cart</button>    
    </article>)

}

export default HomePage;
