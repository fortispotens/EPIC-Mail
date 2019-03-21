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
      return res.status(400).send({ message: 'There are no groups available' });
    }
    return res.status(200).send({
      status: res.statusCode,
      message: 'Fetched All groups successfully',
      groups
    });
  }

  static getSpecificGroup(req, res) {
    const specificGroup = GroupModel.oneGroup(Number(req.params.id));
    if (!specificGroup) {
      return res.status(404).json({ message: 'Sorry, group not found' });
    }
    return res.status(200).send({
      status: res.statusCode,
      message: 'Fetched Group successfully',
      specificGroup
    });
  }

  static patchGroupName(req, res) {
    const editGroupName = GroupModel.oneGroup(Number(req.params.id));
    if (!editGroupName) {
      return res.status(400).send({ message: 'Group not available' });
    }

    editGroupName.name = req.body.name;

    return res.status(200).send({
      status: res.statusCode,
      message: 'Group name successfully edited',
      editGroupName
    });
  }

  static deleteSpecificGroup(req, res) {
    const group = GroupModel.oneGroup(Number(req.params.id));
    if (!group) {
      res.status(404).json({ message: 'Group is not found' });
    }
    GroupModel.deleteOneGroup(Number(req.params.id));
    res.status(204).send({
      status: res.statusCode,
      message: 'Group successfully deleted'
    });
  }
}

export default GroupController;
