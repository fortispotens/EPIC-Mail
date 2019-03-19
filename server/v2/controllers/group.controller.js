import GroupModel from '../models/group.model';


class GroupController {
  static createNewGroup(req, res) {
    if (!req.body.name || !req.body.role) {
      return res.status(400).send({ message: 'Please provide information for group name and role' });
    }
    const createdGroup = GroupModel.newGroup(req.body);
    return res.status(201).send({
      status: res.statusCode,
      message: 'Group created successfully',
      createdGroup
    });
  }

  static fetchAllGroups(req, res) {
    const groups = GroupModel.allGroups();
    if (groups.length === 0 || !groups) {
      return res.status(400).send({ message: 'There are no groups' });
    }
    return res.status(200).send({
      status: res.statusCode,
      message: 'Fetched All groups successfully',
      groups
    });
  }
}

export default GroupController;
