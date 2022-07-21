/* METODO SORT - MDN Web
Se funcaoDeComparacao(a, b) for menor que 0, ordena a para um índice anterior a b, i.e. A vem primeiro.

Se funcaoDeComparacao(a, b) retornar 0, deixa a e b inalterados em relação um ao outro, mas ordenado em relação a todos os outros elementos. Nota: O padrão ECMAscript não garante este comportamento, e, portanto, nem todos os navegadores (e.g. Versões do Mozilla anteriores a 2003) respeitarão isto.

Se funcaoDeComparacao(a, b) é maior que 0, ordena b para um índice anterior que a.

funcaoDeComparacao(a, b) sempre deve retornar o mesmo valor dado um par específico de elementos a e b como seus dois parametros. Se resultados inconsistentes são retornados, então a ordenação é indefinida.
*/

import TeamData from './TeamData';

const OrderTable = (teamA: TeamData, teamB: TeamData) => {
  // Padrão - organização por pontos
  const pointsDifference = teamB.totalPoints - teamA.totalPoints;
  if (pointsDifference !== 0) return pointsDifference;

  // 1º Total de Vitórias;
  const victoriesDifference = teamB.totalVictories - teamA.totalVictories;
  if (victoriesDifference !== 0) return victoriesDifference;

  // 2º Saldo de gols;
  const goalsBalanceDifference = teamB.goalsBalance - teamA.goalsBalance;
  if (goalsBalanceDifference !== 0) return goalsBalanceDifference;

  // 3º Gols a favor;
  const goalsFavorDifference = teamB.goalsFavor - teamA.goalsFavor;
  if (goalsFavorDifference !== 0) return goalsFavorDifference;

  // 4º Gols sofridos.
  const goalsOwnDifference = teamA.goalsOwn - teamB.goalsOwn;
  return goalsOwnDifference;
};

export default OrderTable;
