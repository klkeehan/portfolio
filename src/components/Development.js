import '../App.css';

const Development = () => {
    return (
        <div id='development' className='container'>
            <h2>development</h2>
            <div className='proj-grid'>
                <div className='dev-proj'>
                    <h3>Exercise App</h3>
                    <p>A React app with counters and timers for repetition, duration, and lap-style exercises.</p>
                    <a href='https://klkeehan.github.io/exercises-app/' className='link'>github↗</a>
                </div>
                <div className='dev-proj'>
                    <h3>wrnbt (wren bot)</h3>
                    <p>A Twitch chat bot with automated, responsive commands made with JavaScript. Features a define command using dictionary API integration.</p>
                    <a href='https://github.com/klkeehan/wrnbt' className='link'>github↗</a>
                </div>
                <div className='dev-proj'>
                    <h3>reviewsbyU</h3>
                    <p>A PHP-built movie review site using MySQL tables to store login, review, and comment data.</p>
                    <a href='https://students.gaim.ucf.edu/~ka822136/dig3134/assignment06/login.php' className='link'>link↗</a>
                </div>
                <div className='dev-proj'>
                    <h3>To-Do App</h3>
                    <p>A React Native app for adding and removing tasks from a task list.</p>
                    <a href='https://github.com/klkeehan/todo-list' className='link'>github↗</a>
                </div>
            </div>
      </div>
    );
};

export default Development;