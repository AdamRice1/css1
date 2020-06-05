import React, { useState } from 'react';
import '../App.css';
import App from '../App.js';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import ProductList from './ProductList';
export default function Header() {
	const [value, setValue] = useState('');

	function search(input) {
		console.log(value);
	}

	return (
		<div>
			<Navbar id="navs" bg="primary" variant="dark">
				<Navbar.Brand href="#home">
					Catan's E-Commerce Shop
				</Navbar.Brand>
				<Nav className="mr-auto">
					<Nav.Link href="#home">Products</Nav.Link>
					<Nav.Link href="#features">Cart</Nav.Link>
					<Nav.Link href="#pricing">About</Nav.Link>
				</Nav>
				<Form
					inline
					onSubmit={e => {
						setValue(e.target.value);
						search(value);
						e.preventDefault();
					}}
				>
					<FormControl
						type="text"
						placeholder="Search"
						className="mr-sm-2"
						value={value}
						onChange={e => setValue(e.target.value)}
					/>
					<Button type="submit" variant="outline-light">
						Search
					</Button>
				</Form>
			</Navbar>
			<ProductList spit={value} />
		</div>
	);
}
