module.exports.createTodo = async (event) => {
    const body = JSON.parse(event.body);
    return body.todo;
};