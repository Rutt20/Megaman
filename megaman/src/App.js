import { Routes, Route } from 'react-router-dom';
import { HomePage } from './components/Homepage/Homepage';
import { NavigationBar } from './components/NavigationBar/NavigationBar';
import { Bosses } from './components/Bosses/Bosses';
import { BossesItemDetails } from './components/BossesItemDetails/BossesItemDetails';
import { NotFound } from './components/NotFound/NotFound';
import Container from "./components/Container";

function App() {
	return (
		<div className="App">
			<NavigationBar />
			<Container>
				<Routes>
					<Route exact path={'/'} element={<HomePage />}/>
					<Route exact path={'/bosses'} element={<Bosses />}/>
					<Route exact path={'/bosses/:bossId'} element={<BossesItemDetails />}/>
					<Route path={'*'} element={<NotFound />}/>
				</Routes>
			</Container>
		</div>
	);
}

export default App;