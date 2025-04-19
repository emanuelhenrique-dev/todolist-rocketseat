import { PlusCircle } from '@phosphor-icons/react';
import { TaskList } from './components/TaskList';

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.main_content}>
      <header className={styles.header}>
        <img src="/logo.svg" alt="logo da aplicação" />
      </header>
      <section className={styles.wrapper}>
        <div className={styles.addTaskInput}>
          <input type="text" placeholder="Adicione uma nova tarefa" />
          <button type="submit">
            Criar <PlusCircle size={16} color="#f2f2f2" weight="bold" />
          </button>
        </div>
        <TaskList />
      </section>
    </div>
  );
}
export default App;
