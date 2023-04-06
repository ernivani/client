
import styled from 'styled-components';

const HomeContainer = styled.div`
	background-color: lightblue;
	width: 100%;
	height: 100%;
	text-align: center;
	overflow: hidden scroll;

`;

const HomeTitle = styled.h1`
	font-size: 2rem;
	color: #000;
	font-weight: 11200;
	color: red;
`;

const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 20px;
	color: #000;
	overflow:hidden;
	text-overflow:ellipsis;
	background: rgba(100,149,237,0.5);
	text-align: center;
`;

const HomeImage = styled.img`
	width: 50%;
	height: 50%;
	border-radius: 50%;
	border: 1px solid #000;
	box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
`;

const Text = styled.p`
	font-size: 1.5rem;
	font-weight: 500;
	ligne-height: 1.5;
	background: yellow;
`;

const Link = styled.a`
	color: #fff;
	font-size: 1.5rem;
	font-weight: 500;
	text-decoration: none;
	&:hover {
		color: #fff;
		text-decoration: underline;
	}
`;

const Footer = styled.footer`
	background: #000;
	color: #fff;
	padding: 10px;
`;





function Home() {
	
	return (
		<HomeContainer>
			<HomeTitle>VISITER PARIS EN BATEAU</HomeTitle>
			<Content>
				<HomeImage src="https://www.marina-de-paris.com/wp-content/uploads/2019/07/img.jpg" alt="Paris en bateau" />
				<Text>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit aliquid eligendi veritatis esse laudantium. Enim, id eos sed maxime eligendi expedita in explicabo aperiam dolores iure recusandae omnis porro corporis?
				</Text>	
				<Text>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia beatae fugit assumenda, dolorum quasi dolor iure consectetur iusto ducimus dolore cumque tenetur similique incidunt ipsa laborum ab tempora ex maiores!
				</Text>
				<ol style = {{listStyleType: "none" , color: "#fff"}}>
					<h2>
						Monuments et places de Paris
					</h2>
					<li>
						<Link href="https://www.paris-arc-de-triomphe.fr/" target="_blank">1 - Arc de Triomphe</Link>
					</li>
					<li>
						<Link href="http://www.leconcorde.fr/" target="_blank">2 - Concorde</Link>
					</li>
					<li>
						<Link href="https://www.toureiffel.paris/fr" target="_blank">3 - Tour Eiffel</Link>
					</li>
					<li>
						<Link href="https://parisladefense.com/fr/" target="_blank">4 - La défense</Link>
					</li>
					<li>
						<Link href="https://www.louvre.fr/" target="_blank">5 - Musée du Louvre</Link>
					</li>
				</ol>
				<ul style = {{listStyleType: "none" , color: "#fff"}}>
					<h2>
						Station de métro
					</h2>
					<li>
						<Link href="https://www.ratp.fr/" target="_blank">1 - RATP</Link>
					</li>
					<li>
						<Link href="https://www.transilien.com/" target="_blank">2 - Transilien</Link>
					</li>
					<li>
						<Link href="https://www.iledefrance-mobilites.fr/" target="_blank">3 - Ile de France Mobilités</Link>
					</li>
				</ul>
				<table style={{ border: "1px solid black", width: "75vw", textAlign: "center"}}>
					<tr>
						<th>Nom</th>
						<th>Prénom</th>
						<th>Age</th>
					</tr>
					<tr>
						<td>Thomas</td>
						<td>Lindeker</td>
						<td>18</td>
					</tr>
					<tr>
						<td>Alex</td>
						<td>Delapierre</td>
						<td>20</td>
					</tr>
					<tr>
						<td>Julien</td>
						<td>Courtier</td>
						<td>15</td>
					</tr>
				</table>
			</Content>
			<Footer>
				<Link href="./to" target="_blank">Parisinfo</Link>
			</Footer>
		</HomeContainer>


	)
}

export default Home