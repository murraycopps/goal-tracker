<script lang="ts">
	import Add from "./add.svelte";
import Goal from "./goal.svelte";

    export let data: {goals: string} = {goals: "[]"};
 let goals: Goal[] = JSON.parse(data.goals || "[]");

 let open = false;
 const options = [ "all", "uncompleted", "completed" ];
 let index = 1;
 const uppercase = (str: string) => str[0].toUpperCase() + str.slice(1);
</script>

<main class="relative flex flex-col w-full min-h-screen gap-12 p-16 text-center text-white align-middle justify-top bg-base">
	<h1 class="text-5xl">Goals</h1>

    <div class="flex flex-row justify-center gap-4">
        {#each options as option, i}
            <button class="flex-1 p-4 text-3xl bg-green-500 rounded-full max-w-56" class:font-bold={i === index} on:click={() => index = i}>
                {uppercase(option)}
            </button>
        {/each}
    
	</div>
	<ul class="flex flex-row flex-wrap gap-4 justify-evenly">
      
		{#each goals.filter(goal => index === 0 ? true : index === 1 ? !goal.completed : goal.completed) as goal}
			<Goal {goal}/>
		{/each}
	</ul>

    <div class="absolute right-4 bottom-4">
        <button class="p-4 bg-green-500 rounded-full" on:click={() => open = true}>
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
            </svg>
        </button>
    </div>

    {#if open}
            <Add on:close={() => open = false}/>
    {/if}
        
</main>

