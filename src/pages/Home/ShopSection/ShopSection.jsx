import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Dropdown, Form, Row } from 'react-bootstrap';
import { products } from '../../Shop/shopData';

const ShopSection = () => {
    const [displayProducts, setDisplayProducts] = useState([]);
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [allBg, setAllBg] = useState("");
    const [latestBg, setLatestBg] = useState("");
    const [allColor, setAllColor] = useState(null);
    const [latestColor, setLatestColor] = useState(false);
    useEffect(() => {
        setDisplayProducts(products)
        setSelectedProducts(products)
    }, [])

    const handleShowAll = () => {
        setSelectedProducts(displayProducts);
        setAllBg("black");
        setLatestBg("")
        setAllColor(true);
        setLatestColor(false)
    }
    const handleLatest = () => {
        setAllColor(false);
        setLatestBg("black");
        setAllBg("")
        setLatestColor(true);
        setSelectedProducts(displayProducts)
    }

    return (
        <div>
            <div className='bg py-5'>
                <Container className='d-flex flex-wrap justify-content-center align-items-center'>
                    <span className='d-flex justify-content-around filter'>
                        <p style={{ backgroundColor: `${allBg}`, color: `${allColor ? "white" : "black"}` }} onClick={handleShowAll} className='mx-2 fs-5 a p-hover'>All Products</p>
                        <p style={{ backgroundColor: `${latestBg}`, color: `${latestColor ? "white" : "black"}` }} onClick={handleLatest} className='mx-2 fs-5 a p-hover'>Latest Products</p>
                    </span>
                </Container>
            </div>
            <Container className='py-5'>
                <div className='products'>
                    {
                        selectedProducts?.map(pd => <div key={pd.id} className="p-2 shadow pd">
                            <img src={pd.img} alt={pd.title} className="img-fluid" />
                            <span className='text-start d-block mt-4'>
                                <h4>{pd.title}</h4>
                                <h5 className='py-3'><b>Price:</b> ${pd.price}({pd.amount})</h5>
                                <Button className='enroll-btn btn-lg w-100'>Add to cart</Button>
                            </span>
                        </div>)
                    }
                </div>
            </Container>
        </div >
    );
};

export default ShopSection;