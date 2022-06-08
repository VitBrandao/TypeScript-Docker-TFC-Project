import Team from '../database/models/team';

class TeamsServices {
  public getAll = async () => {
    const findTeams = await Team.findAll();
    return findTeams;
  };
}

export default TeamsServices;
