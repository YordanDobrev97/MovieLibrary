import React from 'react';

const AppContext = React.createContext({
    setSearchField: (text: string) => { }
});

export default AppContext;