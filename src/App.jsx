import { usersApi } from './store';

function App() {
    const { data, isLoading } = usersApi.useGetUsersQuery('');
    const users = data ? data.users : [];
    console.log('users:', users);
    return (

        <div className="App">
            epta
        </div>
    );
}

export default App;
