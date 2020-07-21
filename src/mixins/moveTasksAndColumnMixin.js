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
        moveTaskOrColumn(transferData) {
            if (transferData.type === "task") {
                this.moveTask(transferData);
            } else {
                this.moveColumn(transferData);
            }
        },
        moveColumn({ fromColumnIndex }) {
            this.$store.dispatch("moveColumn", {
                fromColumn: fromColumnIndex,
                toColumn: this.columnIndex
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
