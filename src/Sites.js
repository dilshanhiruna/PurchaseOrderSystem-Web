import React, { useState, useEffect } from 'react';
import {
	MDBContainer,
	MDBRow,
	MDBCol,
	MDBInput,
	MDBBtn,
	MDBTypography,
	MDBTable,
	MDBTableHead,
	MDBTableBody,
	MDBIcon,
} from 'mdb-react-ui-kit';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core';
import {
	addSiteInitiate,
	deleteSiteInitiate,
	getSiteInitiate,
	getSitesInitiate,
	updateSiteInitiate,
} from './sitesDB/actions';
import './Suppliers.css';

//Define the initial states
const initialState = {
	name: '',
	location: '',
	budget: '',
	limit: '',
};

//variables for styling
const useStyles = makeStyles((theme) => ({
	root: {
		marginTop: 70,
		margin: 'auto',
		padding: '15px',
		maxWidth: '500px',
		alignContent: 'center',
		'& > *': {
			margin: theme.spacing(1),
			width: '45ch',
		},
	},
}));

const Sites = () => {
	//definig all react hooks
	const classes = useStyles();
	const [state, setState] = useState(initialState);
	const [editMode, setEditMode] = useState(false);
	const [userId, setUserId] = useState(null);
	const [errorMessage, setErrorMessage] = useState(null);
	const { name, location, budget, limit } = state;
	const dispatch = useDispatch();
	const { sites, site } = useSelector((state) => state.data);

	//calling get all sites function using useEffect hook
	useEffect(() => {
		dispatch(getSitesInitiate());
	}, []);

	//calling get one site function using useEffect hook
	useEffect(() => {
		if (site) {
			setState({ ...site });
		}
	}, [site]);

	//calling delete function
	const deleteSite = (id) => {
		if (window.confirm('Are you sure that you want to delete the Site?')) {
			dispatch(deleteSiteInitiate(id));
		}
	};

	//calling edit function
	const editSite = (id) => {
		setEditMode(true);
		setUserId(id);
		dispatch(getSiteInitiate(id));
	};

	//on form value change
	const handleInputChange = (e) => {
		let { name, value } = e.target;
		setState({ ...state, [name]: value });
	};

	//on form submit
	const handleSubmit = (e) => {
		e.preventDefault();

		//Validations
		if (!name || !location || !budget || !limit) {
			setErrorMessage('Fields cannot be empty!');
		} else {
			//If the user is not in the edit mode
			if (!editMode) {
				dispatch(addSiteInitiate(state));

				//To clear the input fields after inserting the record to the table (after submitting the form)
				setState({ name: '', location: '' });

				//If all the input fields contain values
				setErrorMessage('');
			} else {
				dispatch(updateSiteInitiate(userId, state));
				setUserId(null);
				setEditMode(false);

				//To clear the input fields after updating the details
				setState({ name: '', location: '' });

				//If all the input fields contain values
				setErrorMessage('');
			}
		}
	};

	return (
		<MDBContainer fluid>
			<div className="header-suppliers">
				<div>Sites</div>
			</div>
			{/* creating a table of sites */}
			<MDBRow>
				<MDBCol md="8">
					<MDBTable style={{ marginTop: '100px' }} bordered>
						<MDBTableHead dark>
							<tr>
								<th scope="col">ID</th>
								<th scope="col">Name</th>
								<th scope="col">Location</th>
								<th scope="col">Budget</th>
								<th scope="col">Limit</th>
								<th scope="col">Actions</th>
							</tr>
						</MDBTableHead>
						{sites &&
							sites.map((item, index) => (
								<MDBTableBody key={index}>
									<tr>
										<th scope="row">{index + 1}</th>
										<td>{item.name}</td>
										<td>{item.location}</td>
										<td>{item.budget}</td>
										<td>{item.limit}</td>

										<td>
											<MDBBtn
												className="m-1"
												tag="a"
												color="none"
												style={{ color: '#55acee' }}
												onClick={() => editSite(item.id)}
											>
												<MDBIcon fas icon="pen" size="lg" />
											</MDBBtn>
											<MDBBtn
												className="m-1"
												tag="a"
												color="none"
												style={{ color: '#dd4b39' }}
												onClick={() => deleteSite(item.id)}
											>
												<MDBIcon fas icon="trash" size="lg" />
											</MDBBtn>
										</td>
									</tr>
								</MDBTableBody>
							))}
					</MDBTable>
				</MDBCol>

				{/* form to add/edit sites */}
				<MDBCol md="4">
					<form onSubmit={handleSubmit} className={classes.root}>
						<MDBTypography className="text-start" variant="h5">
							{!editMode ? 'Add Site' : 'Update Site'}
						</MDBTypography>
						{errorMessage && <h6 style={{ color: 'red' }}>{errorMessage}</h6>}
						<MDBInput
							label="Name"
							value={name || ''}
							name="name"
							type="text"
							onChange={handleInputChange}
						/>
						<br />
						<MDBInput
							label="Location"
							value={location || ''}
							name="location"
							type="text"
							onChange={handleInputChange}
						/>
						<br />
						<MDBInput
							label="Budget"
							value={budget || ''}
							name="budget"
							type="number"
							onChange={handleInputChange}
						/>
						<br />
						<MDBInput
							label="Limit"
							value={limit || ''}
							name="limit"
							type="number"
							onChange={handleInputChange}
						/>
						<br />
						<MDBBtn
							style={{ width: '100px' }}
							color={!editMode ? 'success' : 'warning'}
							type="submit"
						>
							{!editMode ? 'Submit' : 'Update'}
						</MDBBtn>
					</form>
				</MDBCol>
			</MDBRow>
		</MDBContainer>
	);
};

export default Sites;
