const User = require('../models/User')
class UserController {

    list(req, res, next) {
        User.find({})
            .then(users => {
                res.json(users)
            })
            .catch(next);
    }

    get(req, res, next) {
        const userId = req.params.id; // Lấy giá trị của tham số id từ URL

        User.findById(userId)
            .then(user => {
                if (!user) {
                    return res.status(404).json({ message: 'User not found' });
                }
                res.json(user);
            })
            .catch(next);
    }

    create(req, res, next) {
        const userData = req.body; // Lấy dữ liệu người dùng từ body của request

        console.log(req.body)

        User.create(userData)
            .then(user => {
                res.status(201).json(user); // Trả về thông tin người dùng đã được tạo với mã trạng thái 201 (Created)
            })
            .catch(next);
    }

    update(req, res, next) {
        const userId = req.params.id; // Lấy giá trị của tham số id từ URL
        const userData = req.body; // Lấy dữ liệu người dùng từ body của request

        User.findByIdAndUpdate(userId, userData, { new: true })
            .then(updatedUser => {
                if (!updatedUser) {
                    return res.status(404).json({ message: 'User not found' });
                }
                res.json(updatedUser); // Trả về thông tin người dùng đã được cập nhật
            })
            .catch(next);
    }

    delete(req, res, next) {
        const userId = req.params.id; // Lấy giá trị của tham số id từ URL

        User.findByIdAndDelete(userId)
            .then(deletedUser => {
                if (!deletedUser) {
                    return res.status(404).json({ message: 'User not found' });
                }
                res.json({ message: 'User deleted successfully' }); // Trả về thông báo xác nhận người dùng đã được xóa
            })
            .catch(next);
    }
}

module.exports = new UserController();