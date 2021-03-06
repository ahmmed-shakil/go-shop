import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Dropdown, Form, Row } from 'react-bootstrap';
import { categories } from '../Home/Categories/categoryData';
import Announcement from '../shared/Announcement/Announcement';
import NavSection from '../shared/NavSection/NavSection';
import { products } from './shopData';

const Shop = () => {
    const [displayProducts, setDisplayProducts] = useState([]);
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [allBg, setAllBg] = useState("");
    const [latestBg, setLatestBg] = useState("");
    const [allColor, setAllColor] = useState(null);
    const [latestColor, setLatestColor] = useState(false);
    const [category, setCategory] = useState("");
    useEffect(() => {
        setDisplayProducts(products)
        setSelectedProducts(products)
    }, [])
    const [header, setHeader] = useState("")
    const handleChange = (e) => {
        setCategory(e.target.value);
        const filteredProducts = displayProducts.filter(pd => pd.category === e.target.value);
        setSelectedProducts(filteredProducts);
    }
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
            <NavSection />
            <Announcement />
            <div className='bg py-5'>
                <Container className='d-flex flex-wrap justify-content-between align-items-center'>
                    <span className='d-flex justify-content-around filter'>
                        <p style={{ backgroundColor: `${allBg}`, color: `${allColor ? "white" : "black"}` }} onClick={handleShowAll} className='mx-2 fs-5 a p-hover'>All Products</p>
                        <p style={{ backgroundColor: `${latestBg}`, color: `${latestColor ? "white" : "black"}` }} onClick={handleLatest} className='mx-2 fs-5 a p-hover'>Latest Products</p>
                    </span>
                    <span className='d-block'>
                        <p className='fs-5 p-0 m-0'>Filter by categories:</p>
                        <Form.Select onChange={(e) => handleChange(e)} style={{ backgroundColor: "hotPink", color: "white" }}>
                            <option className='bg-light text-dark p-2'>Select Category</option>
                            {
                                categories.map(ct => <option className='bg-light text-dark p-2' key={ct.id} vlaue={ct.id}>
                                    {ct.title}
                                </option>)
                            }
                        </Form.Select>
                        <br />
                    </span>
                </Container>
            </div>
            <Container className='py-5'>
                <h3>{header}</h3>
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

export default Shop;