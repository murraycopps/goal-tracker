<script lang="ts">
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();

    function close() {
        dispatch("close");
    }

</script>

<div class="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center text-white">
	
	<form class="relative bg-base-400 p-8 text-2xl rounded-lg flex flex-col gap-2" method="POST">
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
			class="text-black rounded-lg p-1 mb-2"
			type="text"
			id="name"
			name="name"
			placeholder="4:00 mile"
			required
		/>

		<label for="at">At</label>
		<input
			class="text-black rounded-lg p-1 mb-2"
			placeholder="5:00 mile"
			type="text"
			id="at"
			name="at"
		/>

		<label for="type">Type</label>
		<select class="text-black rounded-lg p-1 mb-2" id="type" name="type" required>
			<option value="long">Long</option>
			<option value="short">Short</option>
			<option value="season">Season</option>
			<option value="recurring">Recurring</option>
		</select>

		<button type="submit" class="bg-green-500 rounded-lg p-2">Add Goal</button>
	</form>
</div>
