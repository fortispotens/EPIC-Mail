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
}

export default GroupController;
