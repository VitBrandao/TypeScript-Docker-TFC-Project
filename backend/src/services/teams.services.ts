import Team from '../database/models/team';

class TeamsServices {
  public getAll = async () => {
    const findTeams = await Team.findAll();
    return findTeams;
  };

  public getById = async (id: string) => {
    const findTeam = await Team.findByPk(id);
    return findTeam;
  };
}

export default TeamsServices;
