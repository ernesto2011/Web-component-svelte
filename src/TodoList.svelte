<svelte:options customElement="todo-list" />
<script>
    export let name = 'Task Manager'; 
    
    let task = '';
    let tasks = [];
    
    function addTask() {
      if (task.trim() !== '') {
        tasks = [...tasks, task];
        task = '';
      }
    }
    
    function removeTask(index) {
      tasks = tasks.filter((_, i) => i !== index);
    }
  </script>
 
  
  <div class="max-w-md mx-auto mt-10 p-4 bg-white rounded-lg shadow-md">
    <h1 class="text-2xl font-bold mb-4">{name}</h1>
  
    <div class="flex mb-4">
      <input
        class="w-full p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-0 focus:ring-none"
        type="text"
        bind:value={task}
        placeholder="Agregar nueva tarea"
      />
      <button
        class="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600"
        on:click={addTask}
      >
        Agregar
      </button>
    </div>
  
    <ul>
      {#each tasks as task, index}
        <li class="flex justify-between items-center p-2 mb-2 bg-gray-100 rounded-md">
          <span>{task}</span>
          <button
            class="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600"
            on:click={() => removeTask(index)}
          >
            Eliminar
          </button>
        </li>
      {/each}
    </ul>
  </div>

  <style>
    @import 'tailwindcss/base';
    @import 'tailwindcss/components';
    @import 'tailwindcss/utilities';
  </style>
  