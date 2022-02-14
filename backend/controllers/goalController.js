const asyncHandler = require('express-async-handler');

//@desc get goals
//@route GET /api/goals
//@access private

const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'GET goals' });
});

//@desc post goal
//@route POST /api/goals
//@access private

const setGoal = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400);
        throw new Error('Please add some text');
    }
    console.log(req.body.text);

    res.status(200).json({ message: 'SET goal' });
});

//@desc update goals
//@route PUT /api/goals/:id
//@access private

const updateGoal = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `UPDATE goal ${req.params.id}` });
});

//@desc get goals
//@route GET /api/goals
//@access private

const deleteGoal = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `DELETE goal ${req.params.id}` });
});

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal,
};
