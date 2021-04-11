export const getComments = (id) => {
    const comments = localStorage.getItem(`ytx-comments-${id}`) || "[]";

    return JSON.parse(comments);
};

export const addComment = (id, comment) => {
    const comments = getComments(id);

    comments.push(comment);

    localStorage.setItem(`ytx-comments-${id}`, JSON.stringify(comments));
};

export const removeComment = (id, index) => {
    const comments = getComments(id);

    comments.splice(index, 1);

    localStorage.setItem(`ytx-comments-${id}`, JSON.stringify(comments));
};
