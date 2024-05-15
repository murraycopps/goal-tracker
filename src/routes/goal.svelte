<script lang="ts">
	export let goal: Goal = { id: '', name: '', type: '', at: '', completed: false };
</script>

<div class="flex flex-col gap-4 bg-green-500 aspect-square p-4 rounded-lg flex-1 max-w-56">
	<h3 class="text-3xl">{goal.name}</h3>
    <p class="text-2xl"> At: {goal.at}</p>
    <p class="text-2xl"> Type: {goal.type}</p>
</div>
