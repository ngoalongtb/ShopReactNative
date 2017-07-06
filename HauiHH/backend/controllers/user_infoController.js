var user_infoModel = require('../models/user_infoModel.js');

/**
 * user_infoController.js
 *
 * @description :: Server-side logic for managing user_infos.
 */
module.exports = {

    /**
     * user_infoController.list()
     */
    list: function (req, res) {
        user_infoModel.find(function (err, user_infos) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting user_info.',
                    error: err
                });
            }
            return res.json(user_infos);
        });
    },

    /**
     * user_infoController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        user_infoModel.findOne({_id: id}, function (err, user_info) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting user_info.',
                    error: err
                });
            }
            if (!user_info) {
                return res.status(404).json({
                    message: 'No such user_info'
                });
            }
            return res.json(user_info);
        });
    },
    /**
     * user_infoController.getByUserId()
     */
    getByUserId: function (req, res) {
        var id = req.params.id;
        user_infoModel.findOne({user_id: id})
        .populate('user_id')
        .exec(function (err, user_info) {
            if (err) {
                return res.status(500).json({
                    status:'error',
                    message: 'Error when getting user_info.',
                    error: err
                });
            }
            if (!user_info) {
                return res.status(404).json({
                    status:'failed',
                    message: 'No such user_info'
                });
            }
            return res.json({
                status:'success',
                user_info
            });
        })
        ;
    },

    /**
     * user_infoController.create()
     */
    create: function (req, res) {
        var user_info = new user_infoModel({
			user_id : req.body.user_id,
			sdt : req.body.sdt,
			skill : req.body.skill,
			star : req.body.star,
			rank : req.body.rank,
			time : req.body.time,
			type : req.body.type

        });

        user_info.save(function (err, user_info) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating user_info',
                    error: err
                });
            }
            return res.status(201).json(user_info);
        });
    },

    /**
     * user_infoController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        user_infoModel.findOne({_id: id}, function (err, user_info) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting user_info',
                    error: err
                });
            }
            if (!user_info) {
                return res.status(404).json({
                    message: 'No such user_info'
                });
            }

            user_info.user_id = req.body.user_id ? req.body.user_id : user_info.user_id;
			user_info.sdt = req.body.sdt ? req.body.sdt : user_info.sdt;
			user_info.skill = req.body.skill ? req.body.skill : user_info.skill;
			user_info.star = req.body.star ? req.body.star : user_info.star;
			user_info.rank = req.body.rank ? req.body.rank : user_info.rank;
			user_info.time = req.body.time ? req.body.time : user_info.time;
			user_info.type = req.body.type ? req.body.type : user_info.type;
			
            user_info.save(function (err, user_info) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating user_info.',
                        error: err
                    });
                }

                return res.json(user_info);
            });
        });
    },

    /**
     * user_infoController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        user_infoModel.findByIdAndRemove(id, function (err, user_info) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the user_info.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
