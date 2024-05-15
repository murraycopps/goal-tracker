<script lang="ts">
	import { createWeek } from './data';
    import Day from './day.svelte';

const week = createWeek(1)
	const options = ['week', 'month', 'all'];
	let index = 0;
	const uppercase = (str: string) => str[0].toUpperCase() + str.slice(1);
</script>

<main
	class="relative flex flex-col w-full min-h-screen gap-12 p-16 text-center text-white align-middle justify-top bg-base"
>
	<h1 class="text-5xl">Calender</h1>

	<div class="flex flex-row justify-center gap-4">
		{#each options as option, i}
			<button
				class="flex-1 p-4 text-3xl bg-green-500 rounded-full max-w-56"
				class:font-bold={i === index}
				on:click={() => (index = i)}
			>
				{uppercase(option)}
			</button>
		{/each}
	</div>

    <ul>
        {#each week.days as day}
            <Day {day}/>
        {/each}

    </ul>
</main>
