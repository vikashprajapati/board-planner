export function uuid() {
    return Math.random()
        .toString(16)
        .slice(2);
}

export function saveStatePlugin(store) {
    store.subscribe(() => {
        localStorage.setItem("board", JSON.stringify(store.board));
    });
}
