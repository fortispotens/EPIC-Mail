import GroupModel from '../models/group.model';
import MessageModel from '../models/message.model';

import connectDB from '../../connectDB';


class GroupController {
  static createNewGroup(req, res) {
    const {
      name
      // groupOwnerId,
    } = req.body;


    const query = `INSERT INTO groups (name)
                    VALUES('${name}') returning * `;
    return connectDB.query(query)
      .then((result) => {
        if (result.rowCount >= 1) {
          return res.status(200).send({ status: 200, message: 'Group created successfully', data: result.rows[0] });
        }

        return res.status(500).send({ staus: 500, message: 'The group could not be created' });
      })
      .catch((error) => {
        if (error.detail === `Key (name)=(${name}) already exists.`) {
          return res.status(400).send({ status: 'error', message: 'Group already exist' });
        }
        return res.status(500).send({ status: 500, message: 'Error creating group' });
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

  static creatNewGroupUser(req, res) {
    if (!req.body.role) {
      return res.status(400).send({ message: 'Please provide information for group user role' });
    }
    const createdGroupUser = GroupModel.newGroupUser(req.body);
    return res.status(201).send({
      status: res.statusCode,
      message: 'Group created successfully',
      createdGroupUser
    });
  }

  static sendNewMessage(req, res) {
    if (!req.body.subject) {
      return res.status(400).json({ message: 'Please provide a subject' });
    }
    if (!req.body.message) {
      return res.status(400).json({ message: 'Please provide message body' });
    }
    const createdMessage = MessageModel.createNewMessage(req.body);
    return res.status(201).json({
      status: res.statusCode,
      message: 'Message created successfully',
      createdMessage
    });
  }

  static fetchAllGroupUsers(req, res) {
    const fetchedAllGroupUsers = GroupModel.allGroupUsers();
    if (fetchedAllGroupUsers.length === 0 || !fetchedAllGroupUsers) {
      return res.status(400).send({ message: 'There are no groups users available' });
    }
    return res.status(200).send({
      status: res.statusCode,
      message: 'Fetched All groups users successfully',
      fetchedAllGroupUsers
    });
  }

  static deleteSpecificGroupUser(req, res) {
    const groupUser = GroupModel.oneGroupUser(Number(req.params.id));
    if (!groupUser) {
      res.status(404).json({ message: 'Group user not found' });
    }
    GroupModel.deleteOneGroupUser(Number(req.params.id));
    res.status(204).send({
      status: res.statusCode,
      message: 'Group user successfully deleted'
    });
  }
}

export default GroupController;
