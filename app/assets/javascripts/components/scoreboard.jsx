
var ScoreBoard = React.createClass({
	propTypes: {
		players: React.PropTypes.arrayOf(React.PropTypes.shape({
			name: React.PropTypes.string.isRequired,
			description: React.PropTypes.string,
			score: React.PropTypes.shape({
				id: React.PropTypes.number.isRequired,
				count: React.PropTypes.number.isRequired
			})
		}))
	},

	getInitialState: function(){
		return {
			players: this.props.players
		}
	},

	onScoreChange: function(delta, index){
		var score = this.props.players[index].score
		var scoreUrl = '/scores/' + score.id.toString();
		score.count += delta
		$.ajax({
			url:scoreUrl,
			type:'PUT',
			data:{score},
			context: this,
			success: function(response) {
				this.setState({players: this.props.players})
			},
			error: function(){
				console.log("There has been a major error")
			}
		})

	},

	render: function(){
		return(
			<div>
				<Header title="SCOREBOARD"/>
				<div>
					{this.props.players.map(function(player, index){
						return <Player
										key={player.id}
										name={player.name}
										description={player.description}
										score={player.score.count}
										onScoreChange={function(delta){
											this.onScoreChange(delta, index)
										}.bind(this)} />
					}.bind(this))}
				</div>
			</div>
		)
	}
})

function Header(props){
	return(
		<div>
			{props.title}
		</div>
	)
}

Header.propTypes = {
	title: React.PropTypes.string.isRequired
}

function Player(props){
	return (
		<div>
			<h4>
			{props.name}
			<Counter score={props.score} onChange={props.onScoreChange} />
			</h4>
			<div>{props.description}</div>
		</div>
	)
}

Player.propTypes = {
	name: React.PropTypes.string.isRequired,
	description: React.PropTypes.string.isRequired,
	score: React.PropTypes.number.isRequired,
	onScoreChange: React.PropTypes.func.isRequired
}

function Counter(props){

	return (
		<span>
		<button onClick={function(){props.onChange(1)}}>+</button>
		 {props.score}
		<button onClick={function(){props.onChange(-1)}}>-</button>
		</span>
	)
}

Counter.propTypes = {
	score: React.PropTypes.number.isRequired,
	onChange: React.PropTypes.func.isRequired
}
























//
//
//
//
//
//
//
//
//
//
//
// var nextId = 4
// var ScoreBoard = React.createClass({
// 	propTypes: {
// 		players: React.PropTypes.arrayOf(React.PropTypes.shape({
// 			name: React.PropTypes.string.isRequired,
// 			score: React.PropTypes.number.isRequired,
// 		}))
// 	},
//
// 	getInitialState: function(){
// 		return {
// 			players: this.props.players
// 		}
// 	},
//
// 	onScoreChange: function(index, delta){
// 		this.state.players[index].score += delta
// 		this.setState(this.state)
// 	},
//
// 	addToPlayers: function(playerName){
// 		var player = {
// 			name: playerName,
// 			score: 0,
// 			id: nextId,
// 		}
// 		nextId += 1
// 		this.state.players.push(player)
// 		this.setState(this.state);
// 	},
//
// 	render: function(){
// 		return(
// 			<div>
// 				<div>
// 					<Header title="ScoreBoard" players={this.state.players}/>
// 				</div>
// 				<div>
// 					{ this.state.players.map(function(player, index){
// 							return <Player
// 											onScoreChange={function(delta){this.onScoreChange(index, delta)}.bind(this)}
// 											name={player.name}
// 											score={player.score}
// 											key={player.id} />
// 					}.bind(this)) }
// 				</div>
// 				<AddPlayerForm onAdd={this.addToPlayers}/>
// 			</div>
// 		)
// 	}
// })
//
// var AddPlayerForm = React.createClass({
// 	propTypes: {
// 		onAdd: React.PropTypes.func.isRequired,
// 	},
//
// 	getInitialState: function(){
// 		return {
// 			name: ''
// 		}
// 	},
//
// 	onNameChange: function(e){
// 		this.setState({ name: e.target.value })
// 	},
//
// 	onSubmit: function(e){
// 		e.preventDefault();
// 		this.props.onAdd(this.state.name);
// 		this.setState({name: ""});
// 	},
//
// 	render: function(){
// 		return (
// 			<div>
// 				<form onSubmit={this.onSubmit}>
// 					<input type="text" value={this.state.name} onChange={this.onNameChange} />
// 					<input type="submit" />
// 				</form>
// 			</div>
// 		)
// 	}
// })
//
// function Player(props){
// 	return(
// 		<div>
// 			<h2>{props.name}: <Counter onChange={props.onScoreChange} score={props.score}/></h2>
// 		</div>
// 	)
// }
//
// Player.propTypes = {
// 	name: React.PropTypes.string.isRequired,
// 	score: React.PropTypes.number.isRequired,
// 	onScoreChange: React.PropTypes.func.isRequired,
// }
//
// function Counter(props){
// 	return (
// 		<span>
// 			<button onClick={function(){props.onChange(1)}}>+</button>
// 			{props.score}
// 			<button onClick={function(){props.onChange(-1)}}>-</button>
// 		</span>
// 	)
// }
//
// Counter.propTypes = {
// 	score: React.PropTypes.number.isRequired,
// 	onChange: React.PropTypes.func.isRequired
// }
//
//
// function Header(props){
// 	var totalPlayers = props.players.length
// 	var totalPoints = props.players.reduce(function(total, player){
// 		return total += player.score
// 	}, 0)
//
// 	return (
// 		<div>
// 			<div>
// 				<h1>{props.title}</h1>
// 			</div>
// 			<div>
// 				<h3> Total Players: {totalPlayers} - Total Points: {totalPoints} </h3>
// 			</div>
// 		</div>
// 	)
// }
//
// Header.propTypes = {
// 	title: React.PropTypes.string.isRequired,
// 	players: React.PropTypes.array.isRequired,
// }
