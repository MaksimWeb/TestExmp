import { useEffect, useRef, useState } from 'react';
import BSForm from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, InputGroup, Row } from 'react-bootstrap';

interface Geo {
  lat: string;
  lng: string;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface UserInfo {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address | {};
  phone: string;
  website: string;
  company: Company | {};
}

const initState = {
  id: 0,
  name: '',
  username: '',
  email: '',
  address: {},
  phone: '',
  website: '',
  company: {},
};

export const Form = () => {
  const [state, setState] = useState<UserInfo>(initState);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then((res) => res.json())
      .then((r) => setState(r));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();

    alert(JSON.stringify(state));
    // alert(event.currentTarget);
  };

  const handleNameChange = (event) => {
    setState((state) => {
      return {
        ...state,
        name: event.target.value,
      };
    });
  };

  const handleUsernameChange = (event) => {
    setState((state) => {
      return {
        ...state,
        username: event.target.value,
      };
    });
  };

  const handleEmailChange = (event) => {
    setState((state) => {
      return {
        ...state,
        email: event.target.value,
      };
    });
  };

  const handleStreetChange = (event) => {
    setState((state) => {
      return {
        ...state,
        address: { ...state.address, street: event.target.value },
      };
    });
  };

  const handleSuiteChange = (event) => {
    setState((state) => {
      return {
        ...state,
        address: { ...state.address, suite: event.target.value },
      };
    });
  };

  const handleCityChange = (event) => {
    setState((state) => {
      return {
        ...state,
        address: { ...state.address, city: event.target.value },
      };
    });
  };

  const handleZipChange = (event) => {
    setState((state) => {
      return {
        ...state,
        address: { ...state.address, zipcode: event.target.value },
      };
    });
  };

  const handlePhoneChange = (event) => {
    setState((state) => {
      return {
        ...state,
        phone: event.target.value,
      };
    });
  };

  const handleWebSiteChange = (event) => {
    setState((state) => {
      return {
        ...state,
        website: event.target.value,
      };
    });
  };

  const handleCompanyName = (event) => {
    setState((state) => {
      return {
        ...state,
        company: { ...state.company, name: event.target.value },
      };
    });
  };

  const handlePhraseChange = (event) => {
    setState((state) => {
      return {
        ...state,
        company: { ...state.company, catchPhrase: event.target.value },
      };
    });
  };

  const handleBSChange = (event) => {
    setState((state) => {
      return {
        ...state,
        company: { ...state.company, bs: event.target.value },
      };
    });
  };

  return (
    <BSForm key={state.id} onSubmit={handleSubmit}>
      <BSForm.Group className='mb-3' controlId='formName'>
        <BSForm.Label>Name</BSForm.Label>
        <BSForm.Control
          type='text'
          placeholder='Enter name'
          defaultValue={state.name}
          onChange={handleNameChange}
        />
      </BSForm.Group>

      <BSForm.Group className='mb-3' controlId='formUsername'>
        <BSForm.Label>Username</BSForm.Label>
        <BSForm.Control
          type='text'
          placeholder='Enter username'
          defaultValue={state.username}
          onChange={handleUsernameChange}
        />
      </BSForm.Group>

      <BSForm.Group className='mb-3' controlId='formEmail'>
        <BSForm.Label>Email address</BSForm.Label>
        <BSForm.Control
          type='email'
          placeholder='Enter email'
          defaultValue={state.email}
          onChange={handleEmailChange}
        />
        <BSForm.Text className='text-muted'>
          We'll never share your email with anyone else.
        </BSForm.Text>
      </BSForm.Group>

      <Row className='mb-4'>
        <BSForm.Group as={Col} controlId='formGridStreet'>
          <BSForm.Label>Street</BSForm.Label>
          <BSForm.Control
            type='text'
            defaultValue={state?.address?.street}
            onChange={handleStreetChange}
          />
        </BSForm.Group>

        <BSForm.Group as={Col} controlId='formGridSuite'>
          <BSForm.Label>Suite</BSForm.Label>
          <BSForm.Control
            type='text'
            defaultValue={state?.address?.suite}
            onChange={handleSuiteChange}
          />
        </BSForm.Group>

        <BSForm.Group as={Col} controlId='formGridCity'>
          <BSForm.Label>City</BSForm.Label>
          <BSForm.Control
            type='text'
            defaultValue={state?.address?.city}
            onChange={handleCityChange}
          />
        </BSForm.Group>

        <BSForm.Group as={Col} controlId='formGridZip'>
          <BSForm.Label>Zip</BSForm.Label>
          <BSForm.Control
            type='text'
            defaultValue={state?.address?.zipcode}
            onChange={handleZipChange}
          />
        </BSForm.Group>
      </Row>

      <BSForm.Group className='mb-3' controlId='formPhone'>
        <BSForm.Label>Phone</BSForm.Label>
        <BSForm.Control
          type='tel'
          placeholder='Enter phone'
          defaultValue={state.phone}
          onChange={handlePhoneChange}
        />
      </BSForm.Group>

      <BSForm.Group className='mb-3' controlId='formPhone'>
        <BSForm.Label>Website</BSForm.Label>
        <BSForm.Control
          type='text'
          placeholder='Enter website'
          defaultValue={state.website}
          onChange={handleWebSiteChange}
        />
      </BSForm.Group>

      <BSForm.Label>Company</BSForm.Label>
      <Row className='mb-3'>
        <BSForm.Group as={Col} controlId='formCompanyName'>
          <BSForm.Label style={{ textAlign: 'left' }}>Name</BSForm.Label>
          <BSForm.Control
            type='text'
            defaultValue={state?.company?.name}
            onChange={handleCompanyName}
          />
        </BSForm.Group>

        <BSForm.Group as={Col} controlId='formCompanyCatchPhrase'>
          <BSForm.Label>Catch Phrase</BSForm.Label>
          <BSForm.Control
            type='text'
            defaultValue={state?.company?.catchPhrase}
            onChange={handlePhraseChange}
          />
        </BSForm.Group>

        <BSForm.Group as={Col} controlId='formCompanyBs'>
          <BSForm.Label>BS</BSForm.Label>
          <BSForm.Control
            type='text'
            defaultValue={state?.company?.bs}
            onChange={handleBSChange}
          />
        </BSForm.Group>
      </Row>

      <Button variant='primary' type='submit'>
        Submit
      </Button>
    </BSForm>
  );
};
