class TeamData {
  id: number;
  name: string;

  constructor(id: number, teamName: string) {
    this.id = id;
    this.name = teamName;
  }

  // Todos os campos do leaderboard iniciam zerados
  totalPoints = 0;
  totalGames = 0;
  totalVictories = 0;
  totalDraws = 0;
  totalLosses = 0;
  goalsFavor = 0;
  goalsOwn = 0;
  goalsBalance = 0;
  efficiency = 0;

  public addNewGame = (goalsPro: number, goalsOwn: number) => {
    // Gols pró, gols contra e saldo de gols
    this.goalsFavor += goalsPro;
    this.goalsOwn += goalsOwn;
    this.goalsBalance = this.goalsFavor - this.goalsBalance;

    // Partidas jogadas
    this.totalGames += 1;

    // V, E e D
    if (goalsPro > goalsOwn) this.totalVictories += 1;
    if (goalsPro < goalsOwn) this.totalLosses += 1;
    if (goalsPro === goalsOwn) this.totalDraws += 1;

    // Pontos
    this.totalPoints = this.totalDraws + (this.totalVictories * 3);

    // %
    // eslint-disable-next-line no-mixed-operators
    this.efficiency = Number(((this.totalPoints / (this.totalGames * 3) * 100).toFixed(2)));
  };
}

export default TeamData;
