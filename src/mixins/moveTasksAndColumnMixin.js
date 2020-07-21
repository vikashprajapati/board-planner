export default {
    props: {
        column: {
            type: Object,
            required: true
        },
        board: {
            type: Object,
            required: true
        },
        columnIndex: {
            type: Number,
            required: true
        }
    },
    methods: {
        moveTaskOrColumn(event, toTasks, toColumnIndex, taskIndex) {
            const type = event.dataTransfer.getData("type");
            if (type === "task") {
                this.moveTask(
                    event,
                    toTasks,
                    taskIndex !== undefined ? taskIndex : toTasks.length
                );
            } else {
                this.moveColumn(event, toColumnIndex);
            }
        },
        moveColumn(event, toColumnIndex) {
            const fromColumnIndex = event.dataTransfer.getData("column-index");
            this.$store.dispatch("moveColumn", {
                fromColumn: fromColumnIndex,
                toColumn: toColumnIndex
            });
        },
        moveTask(event, toTasks, toTaskIndex) {
            const fromColumnIndex = event.dataTransfer.getData("column-index");
            const fromTasks = this.board.columns[fromColumnIndex].tasks;
            const fromTaskIndex = event.dataTransfer.getData("task-index");

            this.$store.dispatch("moveTask", {
                fromTasks,
                fromTaskIndex,
                toTasks,
                toTaskIndex
            });
        }
    }
};
