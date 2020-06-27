import React from 'react';

import Appbar from './components/Appbar/Appbar';
import Hero from './components/Hero/Hero';
import Symptomps from './components/Symptomps/Symptomps';
import Prevention from './components/Preventives/Preventives';
import Diagnosis from './components/Diagnosis/Diagnosis';
import Footer from './components/Footer/Footer';
import { Cards, Chart, CountryPicker } from './components';

import styles from './App.module.css';
import { fetchData } from './api';


class App extends React.Component {
	state = {
		data: {},
		country: '',
	}

	async componentDidMount() {
		const fetchedData = await fetchData();

		this.setState({ data: fetchedData });
	}

	handleCountryChange = async (country) => {
		const fetchedData = await fetchData(country);

		this.setState({ data: fetchedData, country: country });
	}

	render() {
		const { data, country } = this.state;

		return (
			<div id="home">
				<div>
					<Appbar />
				</div>
				<div>
					<Hero />
				</div>
				<div className={styles.containers} id="summary">
					<Cards data={data} />
					<CountryPicker handleCountryChange={this.handleCountryChange} />
					<Chart data={data} country={country} />
				</div>
				<div id="symptomps">
					<Symptomps />
				</div>
				<div id="prevention">
					<Prevention />
				</div>
				<div id="diagnosis">
					<Diagnosis />
				</div>
				<div id="footer">
					<Footer />
				</div>
			</div>
		)
	}
}

export default App;