class TeamData {
  id: number;
  teamName: string;

  constructor(id: number, teamName: string) {
    this.id = id;
    this.teamName = teamName;
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

  public calcPointsAndEfficiency = () => {
    // Pontos
    this.totalPoints = this.totalDraws + (this.totalVictories * 3);

    // %
    // eslint-disable-next-line no-mixed-operators
    this.efficiency = this.totalPoints / (this.totalGames * 3) * 100;
  };

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

    // Lint - pontos e % de aproveitamento calculados em nova função
    this.calcPointsAndEfficiency();
  };
}

export default TeamData;
