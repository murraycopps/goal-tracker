<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	function close() {
		dispatch('close');
	}
	export let goal: Goal = { id: 0, name: '', type: '', at: '', completed: false };
    let at = goal.at;
    let name = goal.name;
</script>

<div class="absolute inset-0 z-50 flex items-center justify-center text-white bg-black bg-opacity-50">
	<div class="relative flex flex-col gap-8 p-8 text-2xl rounded-lg bg-base-400">
        <h2 class="text-3xl">Edit Goal</h2>
		<button class="absolute right-4 top-4" type="button" on:click={close}>
			<svg
				class="w-8 h-8"
				fill="none"
				stroke="white"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M6 18L18 6M6 6l12 12"
				></path>
			</svg>
		</button>
		<!-- button to completee, button to delete -->
		<div class="flex flex-row justify-evenly">
            {#if !goal.completed}
            <form method="post">
				<select class="absolute hidden -z-50" id="submitType" name="submitType">
					<option value="complete"></option>
				</select>
				<select class="absolute hidden -z-50" id="id" name="id">
					<option value={goal.id}></option>
				</select>
				<button type="submit" class="p-2 bg-green-500 rounded-lg">Complete</button>
			</form>
            {:else}
            <form method="post">
                <select class="absolute hidden -z-50" id="submitType" name="submitType">
                    <option value="uncomplete"></option>
                </select>
                <select class="absolute hidden -z-50" id="id" name="id">
                    <option value={goal.id}></option>
                </select>
                <button type="submit" class="p-2 bg-green-500 rounded-lg">Uncomplete</button>
            </form>
            {/if}
			<form method="post">
				<select class="absolute hidden -z-50" id="submitType" name="submitType">
					<option value="delete"></option>
				</select>
				<select class="absolute hidden -z-50" id="id" name="id">
					<option value={goal.id}></option>
				</select>
				<button type="submit" class="p-2 bg-green-500 rounded-lg">Delete</button>
			</form>
		</div>
		<form class="flex flex-col gap-2 p-8 text-2xl rounded-lg" method="post">
			<select class="absolute hidden -z-50" id="id" name="id">
				<option value={goal.id}></option>
			</select>
			<select class="absolute hidden -z-50" id="submitType" name="submitType">
				<option value="edit"></option>
			</select>

			<label for="goal">Goal</label>
			<input
				class="p-1 mb-2 text-black rounded-lg"
				type="text"
				id="goal"
				name="goal"
				placeholder="4:00 mile"
				required
				value={goal.goal}
			/>

			<label for="at">At</label>
			<input
				class="p-1 mb-2 text-black rounded-lg"
				placeholder="5:00 mile"
				type="text"
				id="at"
				name="at"
				value={goal.at}
			/>

			<button class="p-2 bg-green-500 rounded-lg">Edit Goal</button>
		</form>
	</div>
</div>
