<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	function close() {
		dispatch('close');
	}
</script>

<div class="absolute inset-0 z-50 flex items-center justify-center text-white bg-black bg-opacity-50">
	<form class="relative flex flex-col gap-2 p-8 text-2xl rounded-lg bg-base-400" method="POST">
		<select class="absolute hidden -z-50" id="submitType" name="submitType">
			<option value="add"></option>
		</select>
		<button type="button" on:click={close} class="absolute right-4 top-4">
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
				>
				</path>
			</svg>
		</button>
		<label for="goal">Goal</label>
		<input
			class="p-1 mb-2 text-black rounded-lg"
			type="text"
			id="goal"
			name="goal"
			placeholder="4:00 mile"
			required
		/>

		<label for="at">At</label>
		<input
			class="p-1 mb-2 text-black rounded-lg"
			placeholder="5:00 mile"
			type="text"
			id="at"
			name="at"
		/>

		<label for="type">Type</label>
		<select class="p-1 mb-2 text-black rounded-lg" id="type" name="type" required>
			<option value="long">Long</option>
			<option value="short">Short</option>
			<option value="season">Season</option>
			<option value="recurring">Recurring</option>
		</select>

		<button type="submit" class="p-2 bg-green-500 rounded-lg">Add Goal</button>
	</form>
</div>
