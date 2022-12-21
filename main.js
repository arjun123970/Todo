window.addEventListener('load', () => {
	const form = document.querySelector('#new-task-form');
	const input = document.querySelector('#new-task-input');
	const list_el = document.querySelector('#tasks');
	console.log(localStorage);
  
	let items = { ...localStorage };
  
	const task = document.getElementById('tasks');
	for (let key in items) {
	  const task_el = document.createElement('div');
	  task_el.classList.add('task');
  
	  const task_content_el = document.createElement('div');
	  task_content_el.classList.add('content');
	  task_el.appendChild(task_content_el);
  
	  const task_input_el = document.createElement('input');
	  task_input_el.classList.add('text');
	  task_input_el.type = 'text';
	  const obj = JSON.parse(localStorage.getItem(key));
	  task_input_el.value = obj.task;
	  if (obj.completed) task_input_el.style = 'text-decoration: line-through';
	  task_input_el.setAttribute('readonly', 'readonly');
  
	  console.log(task_input_el.value);
  
	  task_content_el.appendChild(task_input_el);
	  const task_actions_el = document.createElement('string');
	  task_actions_el.classList.add('actions');
  
	  const task_edit_el = document.createElement('button');
	  task_edit_el.classList.add('edit');
	  task_edit_el.innerText = 'Edit';
  
	  const task_delete_el = document.createElement('button');
	  task_delete_el.classList.add('delete');
	  task_delete_el.innerText = 'Delete';
  
	  const task_Complete_el = document.createElement('button');
	  task_Complete_el.classList.add('Complete');
	  task_Complete_el.innerText = 'Complete';
  
	  task_actions_el.appendChild(task_edit_el);
	  task_actions_el.appendChild(task_delete_el);
	  task_actions_el.appendChild(task_Complete_el);
  
	  task_el.appendChild(task_actions_el);
  
	  list_el.appendChild(task_el);
  
	  input.value = '';
  
	  task_edit_el.addEventListener('click', (e) => {
		if (task_edit_el.innerText.toLowerCase() == 'edit') {
		  task_edit_el.innerText = 'Save';
		  task_input_el.removeAttribute('readonly');
		  task_input_el.focus();
		} else {
		  task_edit_el.innerText = 'Edit';
		  const temp = JSON.parse(localStorage.getItem(key));
		  temp.task = task_input_el.value;
		  localStorage.setItem(key, JSON.stringify(temp));
		  task_input_el.setAttribute('readonly', 'readonly');
		}
	  });
  
	  task_delete_el.addEventListener('click', (e) => {
		list_el.removeChild(task_el);
		localStorage.removeItem(key);
	  });
  
	  task_Complete_el.addEventListener('click', (e) => {
		task_input_el.style = 'text-decoration: line-through';
		const temp = { task: key, completed: true };
		localStorage.removeItem(key);
		localStorage.setItem(task_input_el.id, JSON.stringify(temp));
	  });
	}
  
	form.addEventListener('submit', (e) => {
	  e.preventDefault();
  
	  const task = input.value;
  
	  const task_el = document.createElement('div');
	  task_el.classList.add('task');
  
	  const task_content_el = document.createElement('div');
	  task_content_el.classList.add('content');
	  const obj = { task, completed: false };
	  localStorage.setItem(task, JSON.stringify(obj));
	  task_el.appendChild(task_content_el);
  
	  const task_input_el = document.createElement('input');
	  task_input_el.classList.add('text');
	  task_input_el.type = 'text';
	  task_input_el.value = obj.task;
	  task_input_el.setAttribute('readonly', 'readonly');
	  console.log(task_input_el.value);
  
	  task_content_el.appendChild(task_input_el);
	  const task_actions_el = document.createElement('string');
	  task_actions_el.classList.add('actions');
  
	  const task_edit_el = document.createElement('button');
	  task_edit_el.classList.add('edit');
	  task_edit_el.innerText = 'Edit';
  
	  const task_delete_el = document.createElement('button');
	  task_delete_el.classList.add('delete');
	  task_delete_el.innerText = 'Delete';
  
	  const task_Complete_el = document.createElement('button');
	  task_Complete_el.classList.add('Complete');
	  task_Complete_el.innerText = 'Complete';
  
	  task_actions_el.appendChild(task_edit_el);
	  task_actions_el.appendChild(task_delete_el);
	  task_actions_el.appendChild(task_Complete_el);
  
	  task_el.appendChild(task_actions_el);
  
	  list_el.appendChild(task_el);
  
	  input.value = '';
  
	  task_edit_el.addEventListener('click', (e) => {
		if (task_edit_el.innerText.toLowerCase() == 'edit') {
		  task_edit_el.innerText = 'Save';
		  task_input_el.removeAttribute('readonly');
		  task_input_el.focus();
		} else {
		  task_edit_el.innerText = 'Edit';
		  const temp = JSON.parse(localStorage.getItem(task));
		  temp.task = task_input_el.value;
		  localStorage.setItem(task, JSON.stringify(temp));
		  task_input_el.setAttribute('readonly', 'readonly');
		}
	  });
  
	  task_delete_el.addEventListener('click', (e) => {
		list_el.removeChild(task_el);
		localStorage.removeItem(task);
	  });
  
	  task_Complete_el.addEventListener('click', (e) => {
		task_input_el.style = 'text-decoration: line-through';
		const val = task_input_el.value;
		const temp = { task: val, completed: true };
		localStorage.removeItem(task);
		localStorage.setItem(task_input_el.id, JSON.stringify(temp));
	  });
	});
  });
  