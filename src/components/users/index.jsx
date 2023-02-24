

export function Users(props) {
    {import ("../accountBox/checkAuth").then(module => {
        (module.checkAuth());
    }).catch(error => {
        alert(error);
    });
    return (
        <div>
            <button onClick={(e) => {
                import ("../../assets/logout").then(module => {
                    (module.logoutSend(e));
                }).catch(error => {
                    alert(error);
                }
                );
            }
            
            }>Logout</button>
            <div>Users list </div>
            {/*TODO: get the users list from the server and their status online/offline */}
            
        </div>
    );
    }
}
