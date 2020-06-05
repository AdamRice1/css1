import React, { useState } from 'react';
import '../App.css';
import App from '../App.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from './Header';
import Cart from './Cart';
import products from '../products.json';
import Table from 'react-bootstrap/Table';
export default function ProductList() {
	// const [items] = useState({
	// 	productName: '',
	// 	SerialNumber: '',
	// 	Price: '',
	// 	Manufacturer: '',
	// 	Tag: ''
	// });
	//console.log(products[0].productName);
	return (
		<Container id="mainList">
			<Row></Row>
			<Row>
				<Table striped bordered hover>
					<thead>
						<tr>
							<th>Product Number</th>
							<th>Product Name</th>
							<th>Price</th>
							<th>Manufacturer</th>
							<th>Category</th>
							<th>Amount Left In Stock</th>
							<th>Add To Cart</th>
						</tr>
					</thead>
					<tbody>
						{products.map(item => (
							<tr>
								<td>{item.serialNumber}</td>
								<td>{item.productName}</td>
								<td>{item.price}</td>
								<td>{item.manufacturer}</td>
								<td>{item.tag}</td>
								<td>{item.total}</td>
								<td>####</td>
							</tr>
						))}
					</tbody>
				</Table>
			</Row>
		</Container>
	);
}
