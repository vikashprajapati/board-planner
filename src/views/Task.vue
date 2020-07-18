<template>
  <div class="task-view w-full">
    <div class="flex flex-col justify-center w-full px-2">
      <input
        class="font-semibold text-lg capitalize"
        :value="task.name"
        @change="updateTaskProperty($event, 'name')"
        @keyup.enter="updateTaskProperty($event, 'name')"
      />
      <textarea
        class="h-64 p-2 mt-2 w-full border rounded"
        :value="task.description"
        @change="updateTaskProperty($event, 'description')"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getTask"]),
    task() {
      return this.getTask(this.$route.params.id);
    }
  },
  methods: {
    updateTaskProperty(e, property) {
      this.$store.dispatch("updateTask", {
        key: property,
        task: this.task,
        value: e.target.value
      });
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped>
.task-view {
  @apply relative flex flex-row bg-white mx-4 m-32 mx-auto py-4 text-left rounded shadow;
  max-width: 700px;
}
textarea {
  resize: none;
}
</style>
