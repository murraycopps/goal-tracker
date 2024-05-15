<script lang="ts">
	import Addgoal from "./addgoal.svelte";
import Goal from "./goal.svelte";

    export let data: {goals: string} = {goals: "[]"};
 let goals: Goal[] = JSON.parse(data.goals || "[]");

 let open = false;
 let showAll = false;
</script>

<main class="w-full min-h-screen text-white p-8 flex flex-col justify-top align-middle text-center gap-4 bg-base relative">
	<h1 class="text-5xl">Goals</h1>
	
	<ul class="flex flex-row gap-4">
      
		{#each goals as goal}
			<Goal {goal}/>
		{/each}
	</ul>

    <div class="absolute right-4 bottom-4">
        <button class="bg-green-500 p-4 rounded-full" on:click={() => open = true}>
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
            </svg>
        </button>
    </div>

    {#if open}
            <Addgoal on:close={() => open = false}/>
    {/if}
        
</main>

