import { Form } from './Form';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import { fetchContacts } from 'redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getError, getIsLoading } from 'redux/selectors';

export function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <h1
        style={{
          fontSize: '35px',
          fontWeight: 800,
          marginTop: '0px',
          marginBottom: '30px',
        }}
      >
        Phonebook
      </h1>
      <Form />
      <h2
        style={{
          fontSize: '35px',
          fontWeight: 800,
          marginTop: '30px',
        }}
      >
        Contacts
      </h2>
      <Filter />
      {isLoading && !error && <b>Loading...</b>}
      <ContactList />
    </div>
  );
}
