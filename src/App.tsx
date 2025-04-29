import { PlusCircle } from '@phosphor-icons/react';
import { TaskList } from './components/TaskList';

import styles from './App.module.css';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import { TaskType } from './components/Task';

function App() {
  const [tasks, setTasks] = useState<TaskType[]>([]);

  const [newTask, setNewTask] = useState('');

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();
    setTasks([
      ...tasks,
      { id: crypto.randomUUID(), checked: false, content: newTask }
    ]);
    setNewTask('');
  }

  function handleChangeNewTask(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('');
    setNewTask(event.target.value);
  }

  function handleInvalidNewTask(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Você deve adicionar uma tarefa!');
  }

  return (
    <div className={styles.main_content}>
      <header className={styles.header}>
        <img src="/logo.svg" alt="logo da aplicação" />
      </header>
      <section className={styles.wrapper}>
        <form className={styles.addTaskInput} onSubmit={handleCreateNewTask}>
          <input
            type="text"
            placeholder="Adicione uma nova tarefa"
            value={newTask}
            onChange={handleChangeNewTask}
            onInvalid={handleInvalidNewTask}
            required
          />
          <button type="submit">
            Criar <PlusCircle size={16} color="#f2f2f2" weight="bold" />
          </button>
        </form>
        <TaskList tasks={tasks} setTasks={setTasks} />
      </section>
    </div>
  );
}
export default App;
