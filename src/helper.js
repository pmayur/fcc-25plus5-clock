export const increment = (length) => {
    if (length < 60) return length + 1;

    return length;
};

export const decrement = (length) => {
    if (length > 1) return length - 1;

    return length;
};
