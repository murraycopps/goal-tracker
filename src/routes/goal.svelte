<script lang="ts">
	import Edit from './edit.svelte';
	export let goal: Goal = { id: 0, goal: '', type: '', at: '', completed: false };
	let open = false;
	let positionsY = Array.from(
		{ length: 7 },
		() => Math.floor(Math.random() * -10 - 5).toString() + '%'
	);
	let positionsX = Array.from({ length: 7 }, () => Math.floor(Math.random() * 90).toString() + '%');
</script>

<div
	class="relative flex flex-col w-56 gap-4 p-8 text-center bg-green-500 rounded-lg align-center aspect-square"
	on:click={() => (open = true)}
	role="button"
	tabindex="0"
	on:keydown={(e) => e.key === 'Enter' && (open = true)}
	style={positionsX.map((x, i) => `--positionX${i + 1}: ${x};`).join(' ') +
		' ' +
		positionsY.map((y, i) => `--positionY${i + 1}: ${y};`).join(' ')}
>
	<h3 class="z-10 text-3xl">{goal.goal}</h3>
	<p class="z-10 text-2xl text-center">At: {goal.at}</p>
	<p class="z-10 text-2xl">Type: {goal.type}</p>
	{#if goal.completed}
		<span id="s1" class="absolute text-5xl scale-y-125">✧</span>
		<span id="s2" class="absolute text-4xl scale-y-125">✧</span>
		<span id="s3" class="absolute text-4xl scale-y-125">✧</span>
		<span id="s4" class="absolute text-6xl scale-y-125">✧</span>
		<span id="s5" class="absolute text-4xl scale-y-125">✧</span>
		<span id="s6" class="absolute text-5xl scale-y-125">✧</span>
		<span id="s7" class="absolute text-4xl scale-y-125">✧</span>
	{/if}
</div>

{#if open}
	<Edit on:close={() => (open = false)} {goal} />
{/if}

<style>
	#s1 {
		top: var(--positionY1);
		left: var(--positionX1);
	}
	#s2 {
		top: var(--positionY2);
		left: var(--positionX2);
	}
	#s3 {
		top: var(--positionY3);
		right: var(--positionX3);
	}
	#s4 {
		top: var(--positionY4);
		right: var(--positionX4);
	}
	#s5 {
		bottom: calc(var(--positionY5) + 10%);
		left: var(--positionX5);
	}
	#s6 {
		bottom: calc(var(--positionY6) + 10%);
		right: var(--positionX6);
	}
	#s7 {
		bottom: calc(var(--positionY7) + 10%);
		right: var(--positionX7);
	}
</style>
